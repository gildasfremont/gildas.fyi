# CallRecorder : dossier complet

Projet expérimental de Gildas Frémont, directeur produit freelance (https://gildas.fyi).
Page publique : https://gildas.fyi/experimental/callrecorder
Page de téléchargement : https://gildasfremont.github.io/callrecorder-site/
Statut : version 0.3.5 publiée le 25 octobre 2026, app publique depuis le 24 octobre. Code source privé, binaires et page publics.
Écrit avec Claude Code (commits co-signés par Claude).
Version anglaise : https://gildas.fyi/en/experimental/context/callrecorder.md

## Le pari

Un enregistreur d'appels peut se lancer seul dès qu'une app prend le micro, sans agenda, sans pilote audio virtuel et sans bouton, garder le son et la transcription sur le Mac, et rendre ces conversations lisibles par Claude grâce à un serveur MCP. Le tout dans une app native qu'on installe sans être développeur.

## Ce que fait l'outil

- Détecte, par un événement CoreAudio, qu'une app d'appel autorisée prend le micro, et démarre l'enregistrement sans interrogation régulière.
- Enregistre deux pistes AAC à 32 kb/s : `me.m4a` (le micro) et `them.m4a` (le son de la seule app d'appel, capté par un « process tap »).
- Prend une capture de la fenêtre d'appel toutes les 30 secondes (dans un navigateur, l'onglet de l'appel seulement, sans la barre d'onglets), lue en local par Apple Vision.
- Relance le micro s'il ne renvoie que des zéros pendant dix secondes.
- Transcrit en local avec whisper.cpp (Metal), modèle large-v3-turbo q5 en mode rapide ou large-v3 en qualité maximale, avec une détection de voix Silero. Whisper sort un segment par mot, regroupés en répliques aux pauses ; le vocabulaire donné par la qualification vaut pour tout l'appel. Un seul Whisper tourne à la fois, en priorité basse, et se suspend quand le Mac chauffe. Chaque transcription est gardée dans `versions/`, pour comparer le mode rapide et la qualité maximale.
- Après l'appel, si l'option est activée, qualifie l'enregistrement avec Claude (`claude -p`, abonnement claude.ai) : titre, participants et vocabulaire à donner à Whisper (dix à quinze termes prononcés, une phrase d'amorce tirée du sujet, un lexique personnel réglable), à partir de l'agenda Google et de Gmail en lecture seule et des captures. La consigne interdit de rattacher un rendez-vous sans preuve.
- Se pilote par une commande `calls` (list, show, transcribe, keep, delete, doctor, usage, update, mcp) et par un serveur MCP en stdio qui expose 8 outils : list_calls, get_call, get_call_context, transcribe_call, read_transcript, keep_call, delete_call, usage_report.
- Garde un journal d'usage local (appels captés, ratés, transcrits, relus) qui n'est envoyé nulle part.
- Pendant l'installation, envoie à Gildas un journal de fonctionnement où le nom et les dossiers sont masqués, sans audio ni transcription. L'envoi se décoche dans la configuration et s'arrête de lui-même après le premier appel transcrit.
- Se met à jour une fois par jour depuis un `latest.json` public, avec vérification SHA-256 et du certificat, et n'installe qu'avec l'accord de l'utilisateur. Se relance ensuite par un relais détaché, en trois essais dont le résultat est noté dans le journal.

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
| Installation | Homebrew, ffmpeg, venv Python, BlackHole, OAuth Google Cloud, clé OpenAI, LaunchAgent | .dmg ou une ligne `curl … install.sh \| zsh`, puis un appel de test |

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
- 24 octobre, 20 h 56 à 21 h 24 : relance après « Quitter et rouvrir » et après une mise à jour par un même relais détaché, en trois essais. Releases v0.3.2 (relance fiable après l'autorisation de l'écran) et v0.3.3 (relance fiable après une mise à jour).
- 25 octobre : premier test d'installation par une autre personne, sur son Mac, en visio.
- 25 octobre, 12 h 16 : panneau d'aide accroché sous Réglages Système.
- 25 octobre, 12 h 40 : corrections issues du test. L'assistant demande de quitter et rouvrir Claude, qui ne relit sa configuration qu'au démarrage, revient au premier plan tant qu'il n'est pas terminé, et le journal d'installation est envoyé. Sur l'image du .dmg, l'encadré « Ouvrir quand même » est redessiné comme une capture, et l'icône Confidentialité est signalée comme cliquable.
- 25 octobre, 13 h 04 : répliques recomposées aux pauses, vocabulaire valable pour tout l'appel, un seul Whisper à la fois, captures limitées à l'onglet de l'appel.
- 25 octobre, 13 h 07 puis 13 h 38 : releases v0.3.4 et v0.3.5.

## Essais et erreurs

- Micro traité par macOS pour retirer l'écho : retiré sept minutes après son ajout. Le traitement de la voix de macOS coupe la capture du son des apps, étouffe le micro brut et ne retire pas l'écho des autres apps (commits 964e0dc puis 8ef9423).
- Assistant d'installation : d'abord un pas-à-pas, puis un faux appel pendant lequel les autorisations sont demandées au moment où elles servent, enfin une page de réglages, complétée le 25 octobre par un panneau d'aide accroché sous Réglages Système.
- Un long prompt de vocabulaire faisait produire à Whisper des segments de quatre minutes, qui cassaient l'ordre des répliques et la suppression de l'écho. Depuis le 25 octobre, Whisper sort un segment par mot, regroupés aux pauses en finissant la phrase.

## Ce que ça a donné

- App publique depuis le 24 octobre 2026. Version 0.3.5 : .dmg de 4,1 Mo, .zip de 3,1 Mo, app d'environ 11 Mo.
- Premier test d'installation par une autre personne le 25 octobre ; ses retours ont donné la version 0.3.4 le jour même.

## Chiffres

- 93 commits jusqu'à la version 0.3.5 : 16 le 22 octobre 2026, 64 le 23, 8 le 24, 5 le 25.
- Environ 5 450 lignes de Swift dans 20 fichiers à la version 0.3.5, dont 1 961 pour l'assistant d'installation.
- Stack : Swift 6, CoreAudio, AVFoundation, AppKit, ScreenCaptureKit, Vision, ServiceManagement, whisper.cpp, scripts shell.

## Principes

- « Usage personnel, tout reste sur la machine » (spécification). Deux exceptions, toutes deux facultatives : la qualification passe par Claude, avec l'abonnement claude.ai ; pendant l'installation, un journal de fonctionnement masqué est envoyé à Gildas.
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
- Réglages et assistant : autorisations, accès de Claude, conservation, transcription automatique, appel de test, autorisation d'écran, connexion de Claude, envoi du journal d'installation.
- Panneau d'aide sous Réglages Système : ce qu'il faut y faire et l'icône de l'app à glisser dans la liste ; il suit la fenêtre de Réglages et se ferme avec elle.
- Commande `calls` et serveur MCP, sans interface.

## Anecdotes

- L'appel de test demande le prénom et le temps qu'il fait ; la transcription de démonstration répond « Gildas, et il fait très beau. »
- Le premier commit est déjà numéroté 0.2.0 : la version 0.1 n'a existé que sur le disque pendant neuf heures.
