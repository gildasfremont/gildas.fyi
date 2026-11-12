# Plateaux de Londres : dossier complet

Projet expérimental de Gildas Frémont, directeur produit freelance (https://gildas.fyi).
Page publique : https://gildas.fyi/experimental/plateaux-de-londres
Le site : https://plateaux-de-londres.vercel.app
Statut : en ligne depuis le 12 novembre 2026. Dépôt privé.
Écrit avec Claude Code (commits co-signés par Claude).
Version anglaise : https://gildas.fyi/en/experimental/context/plateaux-de-londres.md

## Le pari

Une carte peut réunir les lieux de tournage de toutes les séries qui se passent à Londres et dire, pour chaque lieu, où la scène se passe dans l'histoire, où elle a été tournée, et quelles autres séries ont utilisé le même endroit. À condition que chaque scène cite une source lue et que rien ne soit inventé, ni un épisode, ni des coordonnées.

## Ce que fait le site

- Accueil : recherche (insensible aux accents et à la ponctuation), liste des séries, les plus connues en tête, avec leur logo, leur diffuseur et leur nombre de lieux ; carte de tous les lieux, une couleur par série.
- Page série : ses lieux, classés par nombre de scènes et filtrables par saison ; sous chaque lieu, ses saisons et épisodes, et le logo des autres séries tournées au même endroit.
- Fiche lieu : nom et rôle du lieu dans chaque série, photo libre du lieu, Street View, saisons et épisodes, bouton « Regarder » vers la plateforme, anecdotes sourcées, sources en bas de fiche. Une ligne pointillée relie le lieu de tournage au lieu que l'histoire désigne.
- Lieux réels joués par d'autres : une fiche pour chacun (31), avec les lieux qui l'ont joué et leur distance.
- Sur téléphone : fiche plein écran, carte agrandissable en plein écran.
- Chaque vue a son adresse, qu'on peut partager : `#serie-<id>`, `#serie-<id>/lieu-<id>`, `#lieu-<id>`.

## Trois rôles

Un lieu tient un rôle par série où il apparaît :
- réel : le lieu est lui-même (Big Ben est Big Ben) ;
- inventé : un lieu de fiction placé dans la vraie géographie (Slough House, près du Barbican) ;
- doublure : un lieu réel en joue un autre (Lancaster House joue Buckingham Palace).

Sur le site : 205 rôles réels, 216 inventés, 74 doublures, soit 495 rôles pour 432 lieux.

## Chronologie (12 novembre 2026, heure de Paris)

- 10 h 01 : premier commit. Site statique (Leaflet, tuiles OpenStreetMap), 8 séries (Slow Horses, Ted Lasso, Bridgerton, The Crown, Sherlock, McMafia, MobLand, WAR), 138 lieux, 225 scènes, 17 lieux partagés entre séries. Données recueillies par quatre agents, deux séries chacun.
- 10 h 04 : prompt de reprise pour Claude Code sur le web : l'état du projet, ses règles, et sept chantiers par ordre de priorité (vérifier la production, fond de carte durable, repères de temps, liens vers l'épisode, qualité des données, photos manquantes, nouvelles séries).
- 10 h 07 à 10 h 31 : fond de carte configurable (MapTiler ou Stadia, clé dans les variables Vercel), liens « Où regarder » par plateforme et par épisode, regéocodage, épisodes complétés ; 140 lieux, 138 photos.
- 11 h 06 : 15 nouvelles séries, nom et rôle de chaque lieu dans chaque série, règle de fusion plus stricte, navigation par série ; 23 séries, 357 lieux, 659 scènes. Les lots avancent sur des branches parallèles (infrastructure, données, séries, navigation).
- 11 h 28 : épisodes Netflix de six nouvelles séries ; 324 photos sur 357 lieux.
- 12 h 19 : les quatre premières pull requests fusionnées.
- 14 h 28 : interface simplifiée en trois écrans (accueil, série, lieu vu depuis une série), fond blanc.
- 16 h 10 : titres en Outfit à la place de Bricolage Grotesque ; 16 h 13 : en Canal Bold Romain, police fournie par l'auteur.
- 16 h 26 à 16 h 40 : logos des séries à la place des initiales, cinq d'abord.
- 17 h 12 : page série en onglets, Lieux de tournage et Épisodes.
- 17 h 20 : retours du test « CEO pressé » : carte visible sur téléphone, introduction en une ligne, séries les plus connues en tête, grande photo et bouton principal pour regarder l'épisode, bouton Partager, position retrouvée au retour.
- 17 h 34 : corrections du rapport QA : recherche insensible aux accents, marqueurs limités à la zone visible, adresses corrigées, passe d'accessibilité (titres, focus, contrastes, cibles tactiles).
- 17 h 37 : page série sans onglets, une liste de lieux filtrable par saison ; police Canal+ limitée aux caractères qui s'affichent correctement.
- 17 h 41 : logos des 17 séries restantes.
- 17 h 53 : anecdotes « Le saviez-vous ? » sur la fiche lieu.
- 18 h 21 : 6 nouvelles séries (Black Mirror, You, Misfits, Luther, Peep Show, The Night Manager), lieux ajoutés à quatre séries, 24 anecdotes sourcées ; 29 séries, 425 lieux.
- 18 h 29 : sur téléphone, carte agrandissable en plein écran.
- 19 h 13 à 19 h 39 : fil d'Ariane, recherche classée et tolérante, puis cinq versions de la fiche lieu en seize minutes (rôle en accroche, fiche technique, sections).
- 19 h 57 : lieux réels joués par d'autres.
- 20 h 04 : MobLand, 7 lieux ajoutés ; Killing Eve, Syon House.
- 20 h 21 : MobLand, The Prince's Head en témoignage direct.
- 20 h 23 : dernier commit, la 39e pull request de la journée.

## Essais et erreurs

- Fusion des lieux : la première règle (moins de 60 m, ou moins de 400 m avec un mot distinctif commun) fusionnait des voisins, le V&A et le Natural History Museum, l'hôtel et la gare St Pancras, Richmond Green et son théâtre. La règle retenue : moins de 25 m (le même bâtiment), ou moins de 400 m avec le même nom une fois les mots génériques retirés (« Savoy » = « Savoy Hotel ») ; les lieux partagés ont été relus un par un. En fin de journée, deux lieux voisins d'une même série sous des noms différents ne fusionnent plus : le Prince's Head, Paved Court et The Cricketers, à 20 m les uns des autres, formaient un seul lieu.
- Photos : la recherche Wikipedia par adresse renvoyait des monuments voisins. Un article n'est retenu que si son titre correspond au nom du lieu ; sinon, une photo de Wikimedia Commons prise à moins de 60 m.
- Police des titres : Bricolage Grotesque, Outfit, puis Canal Bold Romain, en trois minutes. Dans la police Canal+, certains caractères sont des logos (le point médian affiche CANAL+ ; `*`, `<` et `>` aussi sont des logos) ou perdent leurs accents (É, À) ; un `unicode-range` ne garde que les caractères qui s'affichent correctement, le reste passe en Outfit.
- Page série : des onglets Lieux de tournage / Épisodes à 17 h 12, retirés à 17 h 37 pour une seule liste filtrable par saison.
- Fiche lieu : cinq versions entre 19 h 23 et 19 h 39, jusqu'à la structure actuelle (rôle en accroche, fiche technique, sections).
- Sources fermées : Londonist, IMDb et movie-locations ont souvent refusé l'accès ; Reddit est inaccessible depuis l'environnement de Claude (403, mur de connexion) ; certaines pages Netflix arrivent tronquées par le proxy (Top Boy, Black Mirror, You), et leurs liens renvoient à la page de la série.
- Séries maigres : I May Destroy You (2 lieux) et Criminal Record (7), les sources précises renvoyant 403 ou 404.
- Repères de temps : aucune source lue ne donne la minute d'une scène. Il faudra visionner les épisodes.

## Ce que ça a donné

Un site public, en ligne depuis le 12 novembre 2026, construit en une journée, de 10 h 01 à 20 h 23.

## Chiffres

29 séries, 432 lieux, 754 scènes, 495 rôles. 48 lieux partagés entre au moins deux séries, dont l'Old Royal Naval College dans cinq. 31 lieux réels joués par d'autres, dont Buckingham Palace, joué par cinq lieux. 383 photos libres, 21 lieux avec anecdote, 289 scènes avec numéro d'épisode, aucune avec repère de temps. Liens vers l'épisode pour 8 séries de Netflix. Sources les plus citées : findthatlocation (128 scènes), Atlas of Wonders (116), Time Out (96), Wikipedia (35). 80 commits et 39 pull requests en une journée. Stack : HTML, CSS et JavaScript sans build (app.js, 840 lignes), Leaflet 1.9.4, tuiles MapTiler, une fonction Vercel pour la configuration, scripts Python pour vérifier, fusionner et illustrer les données.

## Principes (règles du projet pour Claude)

- Ne pas inventer : chaque scène cite une source lue ; si l'épisode ou le repère de temps n'est pas sûr, il reste vide.
- Aucune image de série hébergée, car elles sont sous droits : le site donne le moment (saison, épisode) et un lien vers la plateforme.
- Coordonnées de Wikipedia ou d'OpenStreetMap, jamais d'une estimation, avec la méthode notée.
- Textes de l'interface et descriptions en français.
- Aucun secret dans le code : les clés vont dans les variables Vercel.
- Un témoignage direct peut remplacer une source pour une observation, jamais pour une déduction.

## Modèle de données

Une fiche JSON par série : la série (titre, diffuseur, années, saisons couvertes, plateforme) et ses lieux. Chaque lieu a un nom, une adresse, des coordonnées et leur source, une fiction (nom dans l'histoire, rôle en une phrase, type réel / inventé / doublure, lieu de l'histoire et ses coordonnées), des anecdotes sourcées et des scènes (saison, épisode, année de tournage, description, source). Un script vérifie les fiches, un autre les fusionne en un seul fichier de lieux et calcule les lieux réels joués par d'autres, un troisième ajoute les photos.

## Lieux (breadboard)

Accueil (recherche, séries, carte) ; Série (filtres de saison, lieux, carte) ; Lieu vu depuis une série ; Lieu, toutes séries ; Lieu réel joué par d'autres. Une barre du haut fixe avec le fil d'Ariane et la recherche.

## Anecdotes

- The Prince's Head, à Richmond, joue le Crown & Anchor dans Ted Lasso. Dans MobLand, sa façade, rebaptisée The Rose and Crown, a été reconnue à l'écran par l'auteur. Aucune source publique ne le dit ; la scène porte la mention « Vu à l'écran par l'auteur du site ».
- La Tate Modern tient les trois rôles : elle-même dans Killing Eve, une galerie inventée dans Fleabag, le siège de la Met (doublure de New Scotland Yard) dans Bodyguard.
- Lancaster House joue Buckingham Palace dans The Crown, la résidence de la reine Charlotte dans Bridgerton et le château de Versailles dans McMafia.
- Fabric, la boîte de nuit, est elle-même dans Gangs of London et une boîte berlinoise dans Killing Eve.
