# Swisser : dossier complet

Projet expérimental de Gildas Frémont, directeur produit freelance (https://gildas.fyi).
Page publique, avec une démonstration manipulable de la ligne verte : https://gildas.fyi/experimental/swisser
Statut : prototype local, réalisé le 1er juin 2026.
Écrit avec Claude Code, en un après-midi.
Version anglaise : https://gildas.fyi/en/experimental/context/swisser.md

## Le pari, en deux temps

Première version : une mise en page typographique stricte peut sortir de deux choses seulement, un document Markdown sémantique et une fonte, avec une grille de baseline calculée depuis les métriques de la fonte (OS/2 : unités par em, hauteur d'x, hauteur des capitales, ascendantes, descendantes) et comparée en recouvrement à la grille réellement rendue.

Après le pivot : on règle la typographie d'un site existant en tirant une ligne verte, la moyenne des fins de ligne visuelles d'un bloc de texte, et le CSS se résout en dessous.

## Chronologie (1er juin 2026)

- 14 h 06 : projet créé (Vite et TypeScript, sans framework, pour mesurer le rendu réel et recaler au pixel sans couche de réconciliation).
- 14 h 09 : fonte de démonstration ajoutée.
- 14 h 22 à 14 h 27 : étape 1 livrée. Moteur de composition, régime déclaré en rouge et régime mesuré en vert, paliers à 390, 768 et 1 280 px, panneau d'édition.
- 15 h 42 à 15 h 52 : pivot. Une page web réelle enregistrée sert de terrain d'essai.
- 15 h 46 : le pivot est consigné dans la mémoire du projet.
- 16 h 47 à 18 h 26 : l'éditeur sur cadre local (iframe srcdoc).

## Essais et erreurs

- Erreur de lecture du cahier des charges : il parlait d'une « ligne verte horizontale », alors que l'objet décrit, la moyenne des fins de ligne, est vertical. Claude a inventé un compromis (un segment horizontal dont l'extrémité droite portait la moyenne) au lieu de demander, et c'était faux. Règle consignée : quand le mot et la fonction se contredisent, suivre la fonction.
- Moteur de composition abandonné au pivot, Gildas ayant tranché que ce n'était pas ce qu'il voulait. Six fichiers supprimés : calcul de la grille, rendu Markdown, lecture de la fonte (fontkit), overlay, types, document de démonstration.
- Charger un site distant dans un cadre est bloqué par ses en-têtes de sécurité (X-Frame-Options, CSP). L'éditeur prend donc un HTML enregistré ou collé.

## Ce que ça a donné

Premier incrément du pivot vérifié sur une page d'exemple : dix zones détectées, sélection, panneau, ligne qu'on tire.

## Chiffres

Environ 4 h 20 de travail. Environ 1 100 lignes après le pivot. Stack : Vite 6, TypeScript, SVG pour le recouvrement.

## Principes

- Quand le mot et la fonction se contredisent dans une spécification, suivre la fonction.
- Pas de framework, pour mesurer après le rendu réel et recaler au pixel.
- Une seule source pour la fonte : le navigateur la décode pour peindre, la bibliothèque la lit pour calculer.
- On règle ce qu'on voit (la moyenne des fins de ligne), le CSS suit.
