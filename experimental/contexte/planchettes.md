# Planchettes : dossier complet

Projet expérimental de Gildas Frémont, directeur produit freelance (https://gildas.fyi).
Page publique : https://gildas.fyi/experimental/planchettes
Statut : prototype fait le 25 novembre 2026, en une journée. Code source privé.
Écrit avec Claude Code (commits co-signés par Claude).
Version anglaise : https://gildas.fyi/en/experimental/context/planchettes.md

## Le pari

On donne n'importe quelle image (un monument, une maison, un objet) et le nombre de planchettes de bois qu'on a (format 1 × 3 × 15). Claude reconnaît le sujet et invente une construction qui lui ressemble ; un programme déterministe vérifie qu'elle tient debout et qu'un enfant peut la monter, puis dessine une notice sans texte, en A4 noir et blanc, qu'un enfant de quatre ou cinq ans suit seul.

## Le partage des rôles

- **Claude regarde et écrit le modèle**, en texte : reconnaître le sujet, mesurer sa silhouette et ses proportions, le découper en parties (pieds, plateformes, flèche), choisir la plus petite échelle où il ressemble encore, traduire en planchettes (une courbe devient un escalier, un porte-à-faux un encorbellement), inventer ce qu'on ne voit pas, souvent par symétrie.
- **Le programme juge et dessine** : chevauchements, gravité, repères (chaque planchette doit pouvoir être placée juste), nombre de planchettes, puis la notice.

## Le modèle

Un fichier texte. Unité : l'épaisseur d'une planchette (7,8 mm) ; une planchette fait 1 × 3 × 15.

```
nom: Le pont

etape        # le trottoir, au sol : il donne l'écart des deux piles
plat-x 0 -3 0

etape        # les deux piles
plat-y 0 0 0
plat-y 12 0 0
repeter 6 0 0 1   # 6 fois, en montant d'une épaisseur
```

- Orientations : à plat, sur la tranche, debout, selon l'axe de la grande dimension.
- `repeter`, `progression` (une répétition de plus à chaque fois, avec virages), `bloc` et `poser` (une partie réutilisée, comme un pied de la tour Eiffel), `miroir`.
- `retirer` : une planchette provisoire (une cale, un étai) qu'on enlève dès qu'elle ne sert plus.
- `tourner A` : une planchette en biais, à n'importe quel angle autour de la verticale.
- `pencher` : la planchette se couche jusqu'à son appui. `etape ensemble` : des planchettes posées en même temps, comme les deux jambes d'un A.
- En tête : `planchettes: N` (un maximum, 195 par défaut, une boîte de 200 moins celles qui se perdent), `age: N`, `niveau:`.

## La notice

- En-tête : le modèle fini en perspective, ses vues à plat (face, côtés, arrière, dessus, sans celles qui répètent), le total de planchettes.
- Chaque étape en isométrique : la planchette à prendre dans la bonne orientation et leur nombre, le résultat, ce que l'étape ajoute en gris.
- Un geste répété est montré une fois en gris, la suivante en pointillés, « ×N », puis le résultat.
- Les planchettes qui cachent ce qu'on pose deviennent transparentes ; rien n'est enlevé du dessin. Le zoom est réservé aux étapes minutieuses (un linteau, une planchette debout) qui seraient illisibles en vue d'ensemble. La dernière case montre toujours le modèle fini, opaque.
- Plusieurs pages quand une planchette dessinée ferait moins d'environ 1,7 mm d'épaisseur : le moins de pages possible, chacune remplie au mieux.
- Une flèche montre dans quel sens faire glisser une planchette provisoire.

## Les outils pour Claude (serveur MCP)

- `verifier` : ça tient ? Sinon, tous les problèmes d'un coup, avec la ligne du modèle en cause. Donne aussi les proportions, le volume et des conseils selon l'âge.
- `voir` : une image du modèle fini.
- `notice` : le PDF.
- `exemple` : les modèles qui marchent, pour apprendre la syntaxe.
- Quand l'âge ou le nombre de planchettes manquent, le serveur les demande à l'utilisateur dans un formulaire, une fois.

## Principes

- **Le plus simple d'abord** : une seule réponse, la construction la plus simple qui ressemble. Moins de planchettes, des gestes plus faciles (à plat plutôt que sur la tranche, sur la tranche plutôt que debout, droit plutôt qu'en biais).
- **Ressemblance d'abord, volume ensuite** : on tend vers la 3D, qu'on reconnaît en tournant autour, mais une version en volume aux proportions fausses ressemble moins qu'une façade juste.
- **« Ça tient » n'est pas « c'est faisable »** : le programme ne refuse pas, il conseille (séances, gestes difficiles, effet domino).

## Chronologie (25 novembre 2026, heure de Paris)

- 10 h 40 : premier commit, déjà un moteur de rendu, les vérifications de gravité et de repères, huit modèles. Quatre minutes plus tard, les mentions de la marque de jouets sont retirées du code.
- 11 h 31 : notices sur plusieurs pages, progressions, blocs réutilisables, gestes répétés. 11 h 34 : une forteresse de 245 planchettes.
- 11 h 36 à 12 h 02 : budget de planchettes, zoom sur les étapes minutieuses, transparence au lieu d'enlever, même point de vue sur toute une page.
- 13 h 03 : feuille de route, principe « le plus simple d'abord ». 13 h 07 : le serveur MCP.
- 13 h 29 à 13 h 37 : planchettes provisoires, conseils d'âge et de volume, formulaire « pour qui ? ».
- 13 h 40 : la tour Eiffel en volume, 103 planchettes, premier vrai essai. 13 h 47 : principe « ressemblance d'abord, volume ensuite ».
- 13 h 53 à 14 h 35 : la Bibliothèque nationale de France (152 planchettes), l'Arc de triomphe, les leçons de la BnF (séances, miroir, volume à même largeur), le Sacré-Cœur en 200 et 400 planchettes (173 et 291 utilisées).
- 14 h 47 à 14 h 53 : les pyramides de Gizeh, puis Khéops seule.
- 15 h 19 : planchettes en biais. Exemple : la tour torsadée.
- 17 h 38 à 18 h 51 : conseils pour une planchette adossée, effet domino ; planchettes penchées, gravité en 3D avec frottement ; maison bretonne et église.
- 19 h 28 : « poser ensemble », deux planchettes en A ; la flèche de l'église en deux paires.

## Essais et erreurs

- **La tour Eiffel** : la façade (50 planchettes) a les proportions du monument (hauteur 2,7 fois la largeur, 2,6 en vrai) ; la version 3D (103) retrouve les pieds et les arches mais devient trapue (1,2) et ressemble moins. D'où le principe « ressemblance d'abord ». Leçon aussi : une planchette couchée fait toujours 15 dans son sens long ; pour effiler un sujet dans les deux sens, il faut des planchettes debout ou des bouts qui dépassent de moins en moins.
- **Les repères acceptaient des poses impossibles à deviner** : « touche une planchette » ne dit pas où le long de l'autre. Un contrôle « position devinable » est à écrire.
- **La BnF** : 152 planchettes sur 195, le budget n'était pas la limite, la patience si. D'où les séances. En planchettes debout, les tours en L ressemblaient plus (64 planchettes) mais c'était difficile avant six ans : la version à plat est retenue. Un quart de tour tombait entre deux unités et était arrondi en silence.
- **Le formulaire « pour qui ? »**, dans une session lancée par une autre session, revenait sans réponse sans qu'on le voie. Le message distingue désormais « refusé » et « resté sans réponse ».
- **Le colimaçon rond** (planchettes en éventail autour d'un bout) tombe, à raison : il lui faut un noyau central.
- **La flèche de l'église** : la première version posait une barre en équilibre sur un poteau, centrée à l'œil. Le programme l'acceptait ; Gildas l'a repérée sur la notice. La version finale : deux paires en A, sans poteau ni barre.
- **La physique** : une planchette penchée contre un mur tient à partir d'environ 60° (la théorie dit 59° pour un frottement de 0,3) ; un A seul tient à 64°, une jambe seule tombe.

## Chiffres

- 38 commits le 25 novembre 2026, entre 10 h 40 et 19 h 28.
- 31 modèles, du portique (quelques planchettes) à la forteresse (245).
- Environ 2 400 lignes de Python : moteur et vérifications (1 682), notice (502), serveur MCP (215).
- Dépendances : Pillow, NumPy, SciPy, le SDK MCP.

## À faire

- Des motifs à taille variable (mur, pile, arche, toit, tour), pour que Claude assemble des motifs plutôt que des coordonnées.
- Une mesure de ressemblance : détourer le sujet sur la photo et comparer ce contour à celui du modèle rendu sous le même angle, second juge chiffré à côté de « ça tient ».
- Une note de difficulté par geste, pour choisir la représentation la plus simple à construire.
- Un banc d'essai : une dizaine d'images à plusieurs budgets.
- Une vérification plus rapide : 600 planchettes prennent environ 40 secondes, l'église et ses planchettes penchées 83.
- Une page dans le navigateur, avec une visionneuse 3D, utilisable sans Claude.
