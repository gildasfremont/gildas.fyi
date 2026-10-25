# Commentaire : dossier complet

Projet expérimental de Gildas Frémont, directeur produit freelance (https://gildas.fyi).
Page publique : https://gildas.fyi/experimental/commentaire
Code source public : https://github.com/gildasfremont/commentaire
Statut : chaîne complète livrée en 21 heures, en pause depuis le 17 avril 2026 à cause de la latence.
Écrit avec Claude Code, coordonné par Cowork.

## Le pari

Le chat est inadapté à l'annotation pour trois raisons : il duplique le contexte (il faut recopier le passage), il impose un échange requête-réponse synchrone, et il est linéaire. Un co-lecteur IA silencieux, qui reçoit des commentaires vocaux ancrés dans le texte, peut le remplacer. Il tourne en local avec l'abonnement Claude de l'utilisateur, sans clé d'API ni serveur.

## Fonctionnement

On lit un document Markdown. On garde une touche enfoncée, on parle, on relâche. Whisper (whisper-rs, modèle small) transcrit en local, Claude Haiku classe le commentaire, Claude Opus rédige une réponse quand il le faut, et le commentaire comme la réponse s'accrochent au passage dans la marge. Claude est appelé en sous-processus (`claude -p`, sortie en flux JSON).

## La méthode de coordination entre agents

- Cowork rédige la spécification et l'architecture dans le dépôt, et les tickets dans Linear.
- Claude Code prend le premier ticket non bloqué, le passe en cours avec un commentaire, crée la branche qui porte le nom du ticket et ne travaille jamais sur la branche principale.
- Il commite et pousse à chaque étape, parce qu'un autre agent suit le dépôt en direct.
- À chaque commit, il relit un fichier de consignes qui sert de canal retour (correction de trajectoire, arrêt, périmètre).
- En fin de ticket, il laisse un commentaire structuré : fait, pas fait, problèmes, commande de test.
- Pour remonter un problème à l'humain, il écrit dans deux notes du dépôt.

## Chronologie

- 15 avril 2026, 19 h : dépôt et spécification v0.1, architecture en Next.js.
- 16 avril, 13 h 40 : architecture v2, passage à une app de bureau Tauri, cinq tickets de l'ancienne feuille de route annulés (raison : Mac de 8 Go, pas de clé d'API, pas de serveur).
- 16 avril, 14 h 46 : lecteur Markdown.
- 16 avril, 16 h 54 : capture audio et Whisper.
- 16 avril, 20 h 16 : classifieur Haiku.
- 16 avril, 20 h 40 : réponses d'Opus et accusé de réception.
- 17 avril, 6 h 17 à 6 h 48 : tests de bout en bout, journal de latence, rapport.
- 17 avril, 9 h 21 : note d'alignement sur le périmètre.
- 17 avril, 9 h 27 : touche pour parler.
- 17 avril, 9 h 34 : commentaires ancrés dans la marge.
- 17 avril, 10 h 20 : dernier commit.

## Résultats des tests (17 avril 2026)

| Mesure | Résultat | Cible |
|---|---|---|
| Classification juste | 6 sur 6 | |
| Mémoire | 454 Mo | moins de 1,2 Go |
| Haiku, appel seul | 5,4 à 11 s | moins de 1,5 s |
| Haiku, dans l'app | 17 s | moins de 1,5 s |
| Opus, premier mot | 11,7 s | moins de 5 s |

Conclusion de la note laissée par Claude Code : l'appel de Claude en sous-processus est le goulot d'étranglement du projet.

## Essais et erreurs

- Whisper : créer un état par segment coûtait environ 300 Mo ; l'état est désormais réutilisé.
- Prompt système passé par une variable d'environnement que la commande `claude` ne lit pas : une dizaine de minutes de réponses conversationnelles avant la correction par l'option dédiée. Note laissée : toujours lire l'aide de la commande avant de deviner.
- Détection de la voix par le volume : captait trop de bruit (un bruit de porte transcrit) ; remplacée par une touche pour parler.
- Dérive du périmètre : trois nouvelles idées le 17 avril (persistance, versionnement, modification du texte par l'IA), hors du premier périmètre ; relevée par Claude Code dans une note qui déclarait l'architecture périmée.
- Fichier de recette privé de Cowork, marqué comme interdit à Claude Code, commité par un `git add` trop large, lu puis retiré. Conclusion notée : la convention est fragile.

## Ce qui reste

Ticket de latence ouvert et marqué urgent, persistance, versionnement, modifications par l'IA. Pas de tests unitaires ni d'intégration continue, app jamais empaquetée.

## Chiffres

26 commits du 15 au 17 avril 2026, l'essentiel en 21 heures. Environ 1 500 lignes de Rust. Stack : Tauri v2, Rust (cpal, whisper-rs), JavaScript sans framework, marked.js, Claude Haiku et Opus en ligne de commande. Machine : MacBook Air M1, 8 Go.

## Principes

- Le chat ne convient pas à l'annotation : duplication de contexte, échange synchrone, linéarité.
- Le commentaire s'accroche au passage lu au moment où on le dit.
- Le co-lecteur se tait tant qu'on ne lui pose pas de question.
- Tout tourne en local avec l'abonnement Claude : ni clé d'API, ni serveur.

## Ce qui circule (pas de stockage)

Position de lecture (paragraphe) ; segment audio ; commentaire classé (type lecture, commentaire, question ou consigne, texte nettoyé, texte brut, confiance, paragraphe) ; accusé de réception et réponse d'Opus en flux, liés à une question ; journal de latence (le seul fichier écrit).

## Lieux (breadboard)

Une fenêtre : zone de lecture (défilement, marqueurs de densité), marge (une pile de commentaires par paragraphe), barre de contrôle (Espace pour parler, état, volume, simuler une question).

## Anecdote

Avant la touche pour parler, Whisper a transcrit `*Bruit de porte*`.
