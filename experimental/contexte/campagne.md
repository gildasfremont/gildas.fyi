# Campagne : dossier complet

Projet expérimental de Gildas Frémont, directeur produit freelance (https://gildas.fyi).
Page publique : https://gildas.fyi/experimental/campagne
Statut : première version livrée en avril 2026 ; suite restée sur une branche non fusionnée. Usage familial.
Écrit avec Claude Code.

Ce dossier ne contient volontairement aucun nom de famille, prénom ou lieu.

## Le pari

Un Google Sheet familial qui ne remplit plus sa fonction (doublons, lignes sans dates, aucune vue de l'occupation) peut être remplacé par un calendrier sur téléphone, sans compte ni mot de passe, où chacun pose ses dates et voit le nombre de couchages occupés chaque nuit avec des seuils de couleur. La négociation reste en famille, hors de l'app.

## Le contexte

Une maison de famille de 32 couchages, une soixantaine de membres répartis en 8 branches familiales, environ 30 utilisateurs prévus. Seuils d'occupation à 17, 27 et 32 couchages.

## Ce que fait la version livrée

Vue par mois et par semaine, saisie des séjours, identité retenue sur le téléphone, nombre de couchages par nuit avec seuils colorés, gestion des membres (ajouter, modifier, masquer).

## Chronologie

- 10 avril 2026, 16 h 40 : spécification.
- 10 avril, 16 h 57 : première version complète (32 fichiers).
- 10 avril, 17 h 53 : correctif qui retire les prénoms inventés des données de départ, fusionné à 21 h 22.
- 10 avril, 21 h 44 : fichier de consignes pour Claude (CLAUDE.md), avec le workflow git et une section de principes.
- 10 avril, soir : tous les membres affichés, légende des seuils, consignes de travail pour Claude, sélection de période.
- 11 avril : gestion des membres, corrections sur téléphone, données de départ complétées.
- 8 mai : 24 commits de Claude sur une branche jamais fusionnée (stockage local, vue par jour, pages par séjour et par membre, compteurs par branche familiale, sélecteur de dates façon réservation de vol, affectation des chambres).

## Essais et erreurs

- Données inventées : la première version préremplie contenait des membres de la famille qui n'existent pas, ajoutés par Claude pour compléter la liste. Le correctif date de 17 h 53 ; le fichier de consignes, ajouté à 21 h 44 le même soir, s'ouvre sur « Ne jamais inventer de données : s'en tenir au spec ». Le dépôt ne dit pas si l'un a causé l'autre.
- Persistance : Postgres sur la version principale, remplacé par le stockage local du navigateur sur la branche de mai. Le commit notait lui-même la conséquence : plus de partage entre appareils ni entre personnes, ce qui va contre l'objet du calendrier. La branche n'a pas été fusionnée (le lien de cause n'est pas établi).
- Affectation des chambres : la spécification la prévoyait pour un second temps, avec une page où un administrateur affecte les séjours aux chambres et une alerte de surcharge. Elle a été ajoutée sur la branche de mai, qui n'a pas été fusionnée. La négociation des dates, elle, reste en famille.
- Interface mobile : une dizaine de commits le 8 mai déplacent des contrôles.
- Un agent conversationnel a été installé localement en juin à partir d'un gabarit, sans suite.

## Ce que ça a donné

La version de la spécification a été livrée en deux jours. Au 24 octobre 2026, l'état de la version en ligne était à revérifier (son API répondait en erreur). Aucune donnée d'usage.

## Chiffres

48 commits du 10 avril au 8 mai 2026, dont 24 sur la branche principale. Stack : Next.js 16, React 19, TypeScript, Tailwind 4, Vercel Postgres, date-fns, zod.

## Principes

Consignes du projet pour Claude : ne jamais inventer de données ; demander plutôt qu'improviser ; ne pas contredire ce que l'utilisateur voit ; ne pas ajouter de fonctionnalités non demandées. Spécification : l'app montre, la négociation reste en famille.

## Modèle de données

Famille (nom, branche, couleur) ; Membre (famille, prénom, permanent, caché) ; Séjour (membre, arrivée, départ, remarque) ; Chambre (couchages, maison) et Affectation (chambre, séjour, nuit), prévues pour la suite. Pas de compte : l'identité est une préférence locale.

## Lieux (breadboard)

Une page Calendrier (identité, mois ou semaine, sélection de dates, séjours, gestion des membres) et trois panneaux : Séjour, Membres, annulation pendant cinq secondes après suppression.

## Anecdote

Dix-sept minutes entre la spécification et la première version complète (32 fichiers).
