# CallRecorder : dossier complet

Projet expérimental de Gildas Frémont, directeur produit freelance (https://gildas.fyi).
Page publique : https://gildas.fyi/experimental/callrecorder
Page de téléchargement : https://gildasfremont.github.io/callrecorder-site/
Statut : version 0.3.1 publiée le 24 octobre 2026. Code source privé, binaires et page publics.
Écrit avec Claude Code (commits co-signés par Claude).

## Le pari

Un enregistreur d'appels peut se lancer seul dès qu'une app prend le micro, sans agenda, sans pilote audio virtuel et sans bouton, garder le son et la transcription sur le Mac, et rendre ces conversations lisibles par Claude grâce à un serveur MCP. Le tout dans une app native qu'on installe sans être développeur.

## Ce que fait l'outil

- Détecte, par un événement CoreAudio, qu'une app d'appel autorisée prend le micro, et démarre l'enregistrement sans interrogation régulière.
- Enregistre deux pistes AAC à 32 kb/s : `me.m4a` (le micro) et `them.m4a` (le son de la seule app d'appel, capté par un « process tap »).
- Prend une capture de la fenêtre d'appel toutes les 30 secondes, lue en local par Apple Vision.
- Transcrit en local avec whisper.cpp (Metal), modèle large-v3-turbo q5 en mode rapide ou large-v3 en qualité maximale, avec une détection de voix Silero.
- Après l'appel, qualifie l'enregistrement avec Claude (`claude -p`, abonnement claude.ai) : titre, participants et vocabulaire à donner à Whisper, à partir de l'agenda Google et de Gmail en lecture seule et des captures. La consigne interdit de rattacher un rendez-vous sans preuve.
- Se pilote par une commande `calls` (list, show, transcribe, keep, delete, doctor, usage, update, mcp) et par un serveur MCP en stdio qui expose 8 outils : list_calls, get_call, get_call_context, transcribe_call, read_transcript, keep_call, delete_call, usage_report.
- Garde un journal d'usage local (appels captés, ratés, transcrits, relus) qui n'est envoyé nulle part.
- Se met à jour une fois par jour depuis un `latest.json` public, avec vérification SHA-256 et du certificat, et n'installe qu'avec l'accord de l'utilisateur.

Apps reconnues : Zoom, Microsoft Teams, Google Meet (Chrome, Safari, Edge…), FaceTime, WhatsApp, Slack, Webex, Loom. Mac Apple Silicon, macOS 15 minimum.

## Genèse : meet-recorder, la première tentative

Avant avril 2026, Gildas avait écrit meet-recorder en Python, une app de barre des menus (rumps). Comparaison :

| Sujet | meet-recorder (avant avril 2026) | CallRecorder (octobre 2026) |
|---|---|---|
| Déclenchement | Google Agenda interrogé toutes les 60 s, notification 5 min avant chaque visio, l'utilisateur clique pour enregistrer | événement CoreAudio quand une app prend le micro |
| Son des autres | BlackHole 2ch et un appareil multi-sorties créé à la main | process tap sur la seule app d'appel |
| Capture | 4 flux ffmpeg : micro, son système, écran entier à 15 i/s, webcam 720p | 2 pistes audio et une capture de fenêtre toutes les 30 s |
| Transcription | API OpenAI whisper-1, clé obligatoire | whisper.cpp en local |
| Qui parle | détection du contour bleu de Google Meet sur une image par seconde, écran découpé en 3 colonnes fixes ; seconde passe pyannote prévue mais jamais écrite | « moi » et « les autres », donnés par les deux pistes ; identification fine reportée en v2 |
| Installation | Homebrew, ffmpeg, venv Python, BlackHole, OAuth Google Cloud, clé OpenAI, LaunchAgent | .dmg ou une ligne `curl … install.sh | zsh`, puis un appel de test |

meet-recorder a été archivé sur GitHub le 8 avril 2026 (dépôt privé). La détection du contour bleu reste une piste pour séparer plusieurs interlocuteurs sur la piste des autres.

## Chronologie

- avant avril 2026 : meet-recorder.
- 8 avril 2026 : archivage de meet-recorder.
- 22 octobre 2026, vers 13 h 20 : premiers fichiers Swift et spécification.
- 22 octobre, 13 h 31 à 16 h 04 : premiers enregistrements de test.
- 22 octobre, 22 h 19 : premier commit, déjà étiqueté 0.2.0 (enregistrement, transcription, qualification Claude, MCP, paquet autonome, mises à jour, assistant). 28 fichiers, 3 145 lignes.
- 22 octobre, 22 h 44 à 23 h : assistant de configuration, installation en une ligne.
- 23 octobre, 0 h 39 : l'assistant est refait autour d'un appel de test.
- 23 octobre : 24 itérations de la fenêtre d'installation du .dmg.
- 23 octobre, 19 h 34 puis 19 h 41 : micro traité par macOS (anti-écho) ajouté puis retiré.
- 23 octobre, 22 h : vocabulaire unifié, code mort retiré.
- 23 octobre, 22 h 55 : journal d'usage local, commande `calls usage`, outil MCP `usage_report`.
- 24 octobre, 20 h : distribution publique, releases v0.3.0 puis v0.3.1.
- 24 octobre, 20 h 12 : Slack, Webex et Loom ajoutés.

## Essais et erreurs

- Micro traité par macOS pour retirer l'écho : retiré sept minutes après son ajout. Le traitement de la voix de macOS coupe la capture du son des apps, étouffe le micro brut et ne retire pas l'écho des autres apps (commits 964e0dc puis 8ef9423).
- Assistant d'installation : d'abord un pas-à-pas, puis un faux appel pendant lequel les autorisations sont demandées au moment où elles servent, enfin une page de réglages.

## Ce que ça a donné

- App publique depuis le 24 octobre 2026 : .dmg de 4,1 Mo, .zip de 2,9 Mo, app de 10 Mo.

## Chiffres

- 85 commits du 22 au 24 octobre 2026 (16, puis 64, puis 5 par jour).
- Environ 5 050 lignes de Swift dans 18 fichiers, dont 1 921 pour l'assistant d'installation.
- Stack : Swift 6, CoreAudio, AVFoundation, AppKit, ScreenCaptureKit, Vision, ServiceManagement, whisper.cpp, scripts shell.

## Principes

- « Usage personnel, tout reste sur la machine » (spécification). Exception : la qualification passe par Claude, avec l'abonnement claude.ai.
- Deux temps séparés : l'enregistrement, « automatique, bête, fiable », et le traitement, « à la demande, pipeline extensible ».
- Seules les apps d'une liste autorisée déclenchent l'enregistrement ; Siri et la dictée ne déclenchent rien.
- « On ne récupère jamais les flux vidéo internes de l'app, seulement ce qu'elle affiche. »
- Claude ne rattache un appel à un rendez-vous que sur une preuve.
- L'app rappelle de prévenir ses interlocuteurs que l'appel est enregistré.

## Structure d'un appel sur disque

Pas de base de données : un dossier par appel dans `~/CallRecordings/<date>_<app>/`, contenant `meta.json` (app, début, fin, statut, conservé, routes audio, casque), `me.m4a`, `them.m4a`, `context.jsonl` (texte de la fenêtre à chaque changement), `screens/*.jpg`, `context.json` et `context.md` (qualification par Claude : titre, sujet, rendez-vous avec preuve, participants, vocabulaire), `transcript.md`. Réglages dans `config.json`, journal dans `usage.jsonl`, modèles dans `models/`.

## Lieux de l'interface (breadboard)

- Barre des menus : arrêter ou supprimer l'appel en cours, ouvrir la fenêtre Appels, les réglages, les mises à jour.
- Fenêtre Appels : transcrire (rapide ou qualité max), lire, conserver, afficher dans le Finder, supprimer.
- Réglages et assistant : autorisations, accès de Claude, conservation, transcription automatique, appel de test, autorisation d'écran, connexion de Claude.
- Commande `calls` et serveur MCP, sans interface.

## Anecdotes

- L'appel de test demande le prénom et le temps qu'il fait ; la transcription de démonstration répond « Gildas, et il fait très beau. »
- Le premier commit est déjà numéroté 0.2.0 : la version 0.1 n'a existé que sur le disque pendant neuf heures.
