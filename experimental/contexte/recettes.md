# Recettes : dossier complet

Projet expérimental de Gildas Frémont, directeur produit freelance (https://gildas.fyi).
Page publique : https://gildas.fyi/experimental/recettes
App en ligne : https://recettes-gilt.vercel.app
Statut : en ligne depuis le 30 juin 2026, inchangée depuis. Dépôt privé.
Écrit avec Claude Code.

## Le pari

Un livre de recettes rangé dans un Google Doc peut devenir en une journée une petite app utile en cuisine, qui calcule la part de chacun selon son profil, sans framework ni build : des fichiers statiques et des données en JSON suffisent.

## Ce que fait l'app

- Une quarantaine de plats du sud de l'Europe et du Levant, dosés pour un déficit calorique doux : 12 déjeuners, 14 dîners, 3 légumes, 3 currys, 4 mijotés, 4 extras.
- Liste filtrable par catégorie et par recherche (titre et ingrédients), fiche par recette avec ingrédients, macros, accords « ça va avec » et préparation.
- En bas de chaque plat, la quantité pour chacun des deux profils. Les besoins d'entretien sont calculés par l'équation de Mifflin-St Jeor à partir du sexe, de l'âge, du poids, de la taille et de l'activité, puis réduits selon l'objectif de perte en kilos par mois. Les protéines sont calculées aussi.
- On compose le repas (dessert, accompagnements, boissons du jour) : la part du plat baisse d'autant, et le reste part en doggybag.
- Pages des besoins et des principes. Réglages gardés sur l'appareil (localStorage), rien n'est envoyé.

## Architecture

HTML, CSS et JavaScript sans dépendance, avec un petit routeur par `#hash`. Les recettes vivent dans `recipes.json` et le reste du contenu dans `content.json`, chargés au lancement. Déploiement automatique sur Vercel à chaque push.

## Chronologie (30 juin 2026)

- 2 h 17 : premier commit, le site statique.
- 2 h 39 : accords « ça va avec ».
- 9 h 02 à 9 h 21 : profils réglables, doggybag, boissons ; les recettes passent en JSON éditable.
- 9 h 47 à 10 h 16 : les profils ne vivent plus que dans les recettes ; composeur du repas.
- 17 h 49 à 18 h 13 : profils par critères objectifs et équation de Mifflin-St Jeor, savoir-faire et courses fondus dans les recettes, interface épurée, barre flottante.

## Essais et erreurs

- Profils : préréglages, puis sexe et objectif en kilos par mois, enfin critères objectifs avec un calcul.
- Profils dans un onglet, puis uniquement en bas de chaque recette.
- Boissons sur la fiche, puis en case à cocher.
- Sections séparées pour le savoir-faire et les substituts de courses, puis fondues dans les ingrédients et les étapes (351 lignes en moins).
- Composeur réécrit en boutons radio et cases.
- Filtres en colonne, puis en colonne discrète, puis en menu déroulant.

## Chiffres

12 commits, tous le 30 juin 2026. Environ 29 Ko de JavaScript, 68 Ko de données de recettes. Aucune mesure d'usage.

## Principes (page « Principes » de l'app)

- Une seule recette, deux assiettes : quantités pour deux, répartition au service (au déjeuner la plus petite part autour de 40 % du plat, au dîner autour d'un tiers complété d'un yaourt).
- Quantités en poids cru et sec.
- Un déficit modéré tenu dans la durée ; un kilo de gras vaut environ 7 700 kcal.
- Huile dosée au gramme, placée en finition crue.
- Mettre les calories là où elles donnent le plus de plaisir, et s'appuyer sur les saveurs presque gratuites (sel, citron, ail, herbes, sumac, cuisson).

## Modèle de données

Recette (id, catégorie, titre, ingrédients nom→quantité, nutrition, étapes, accord) ; Accord (note, accompagnements, dont certains pointent vers d'autres recettes) ; Catégorie ; Contenu (principes, besoins) ; Profil (sexe, âge, poids visé, taille, activité, kilos par mois), stocké sur le téléphone.

## Lieux (breadboard)

Plats (recherche, filtres), Recette (profils réglables en place, boissons, dessert et accompagnements, accords), Besoins, Principes.

## Captures

Les captures de la page publique viennent de https://recettes-gilt.vercel.app avec les profils par défaut.
