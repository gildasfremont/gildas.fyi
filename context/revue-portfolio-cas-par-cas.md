# Portfolio : revue cas par cas avant refonte

Relevé du 3 novembre 2026. Pour chaque cas : ce que dit le portfolio en ligne, ce que dit la fiche de cas de `job-hunting/use-cases/`, la matière brute disponible dans `job-hunting/illustrations/`, et ce que j'en ferais sur une page sur mesure. « Brut » veut dire exporté tel quel de Figma. « Fabriqué » veut dire dessiné en 2026 pour combler l'absence de document d'époque.

Ordre proposé pour la refonte : par richesse de la matière, les cas les mieux documentés d'abord.

## 1. Lucca, impersonation
- Portfolio : 8 100 caractères sur l'histoire du mot et la dette conceptuelle. Aucune image hors le logo.
- Fiche : `lucca-roles-et-droits.md`. Le board de mars 2025, sept jours facturés.
- Brut : `lucca-impersonation-pattern.png`, 4096 par 2393. À gauche, une quinzaine de captures des écrans de la suite ; à droite, le cadrage en trois lignes, les dix principes d'interface, « voir en tant que → UI, modifier pour → Roles », le don't, la règle de nommage. Diffusion : entretien, à cause des captures et des noms d'utilisateurs.
- Page : partir du board. La partie droite se publie telle quelle, c'est le contenu. La partie gauche en vignette réduite et floutée, pour montrer l'inventaire sans rien laisser lire. Le texte suit l'ordre du board : inventaire, cadrage, séparation UI / rôles, les dix principes, les bénéfices visés. L'article reste en lien.
- Trou : pas d'effet mesuré.

## 2. Lucca, rôles et droits (admin)
- Portfolio : 10 500 caractères, le cas le plus long, sur une « vision 2025 pour un usage 2026 » avec task force, guide des rôles, wireframes. Aucune image.
- Fiche : la même que l'impersonation. La refonte d'avril, le roadshow de juin et le design de juillet 2025 (vingt jours facturés) ne sont dans aucun fichier Figma de Gildas.
- Brut : `lucca-roles-principal-secondaire.png`, une note FigJam d'une page, antérieure à la mission, avec un nom d'utilisateur sur une capture de champ (à flouter).
- Page : garder le cas, mais le réduire à ce qui se prouve. La note rôle principal / rôle secondaire illustre le modèle à deux niveaux. Le reste du texte actuel (task force, guide, wireframes, stratégie de migration) est raconté sans pièce.
- Question à Gildas : où sont les livrables de la refonte (team Lucca quittée, Notion, Slides, Loom) ? Avec eux, ce cas devient le plus fort du portfolio. Sans eux, il reste court.

## 3. Lucca, navigation de la suite (absent du portfolio)
- Fiche : `lucca-navigation-suite.md`. Menu et sitemap en 2023, app switcher en juin 2025.
- Brut : `lucca-navigation-de-la-suite.png`, 1404 par 2672. Le menu annoté zone par zone (contrôle, recherche, notifs, solutions, paramètres, profil), les états replié et déplié, le tooltip. Un nom d'utilisateur en bas du menu (à flouter). Très lisible.
- Page : courte, autour de la planche. Dix-huit solutions dans une colonne ; laquelle mérite d'être visible sans clic quand un client n'en utilise que trois.
- Trou : effet mesuré.

## 4. Lucca, demandes de formation hors catalogue (absent du portfolio)
- Fiche : `lucca-formation-hors-catalogue.md`. Accompagnement 2023, redesign de flow en février 2025.
- Brut : `lucca-formation-demandes-hors-catalogue.png`, 3000 par 1920. Les écrans réels, les arbres d'options écrits à côté, le modèle d'états souhait / demande / formation / inscription, et l'annotation « Il n'y a pas besoin de cette modale ». Données de démonstration, prénoms fictifs ; un nom réel possible dans la liste (à vérifier et flouter).
- Page : le meilleur cas pour montrer « retirer » en cours de route. Détails à recadrer : la modale annotée, le modèle d'états, un écran avec son arbre.

## 5. Lucca, revue de salaires
- Portfolio : 6 700 caractères, vingt vues ramenées à trois, sorti en septembre 2024, témoignage client. Aucune image.
- Fiche : aucune. Planche : aucune. Le travail est dans la team Lucca, pas dans les Drafts de Gildas.
- Page : garder le texte, resserré. Sans pièce, une figure explicative maison (les trois moments de la campagne et la vue de chacun) reste possible, annoncée comme telle. Ou rien.
- Question à Gildas : une capture du module en démo est-elle montrable ? Il sert de démonstration commerciale, donc des écrans publics existent peut-être sur le site de Lucca.

## 6. Chunk (Mineral Expertise)
- Portfolio : 13 300 caractères, déjà retravaillé en octobre avec six images (POC et scan).
- Fiche : `chunk-marche-de-la-pierre.md`.
- Brut : `chunk-these-du-marche.png`, la thèse en équations, la carte des deux versants, les frictions, le plan en trois étapes. Public. Les quatre écrans du POC sont déjà sur le site.
- Page : ajouter la planche de la thèse, qui manque au cas actuel, et le resserrer. La chaîne d'équivalences « scan = dalle en ligne… » doit ouvrir la page.

## 7. Rungle (absent du portfolio)
- Fiche : `rungle-regle-en-francais.md`. Produit propre, fin 2025 et début 2026, critère d'arrêt fixé.
- Brut : `rungle-modele-et-regles.png` (éditeurs de ressources, de paramètre et de règle, la phrase en anglais au-dessus du MiniZinc, les quatre définitions, le schéma SQL) et `rungle-application-locale.png` (l'app qui tourne). Public.
- Page : sur mesure autour de la règle écrite en langage courant et de sa traduction. Nota : la planche est en anglais (« An harbour cannot be more than 110 % full »), la fiche la cite en français.
- Trou : nombre d'entretiens et de démos. L'issue (client pilote signé ou arrêt fin janvier 2026) est à écrire.

## 8. BMI System (absent du portfolio)
- Fiche : `bmi-system-audit-conformite.md`. Sept jours, six workflows réglementaires, diagnostic d'équipe.
- Brut : `bmi-system-audit-conformite.png`. Diffusion : interne. Le board juge l'équipe du client (« Le PO ne connaît pas son produit », « Feature factory ») et nomme des obligations légales précises.
- Page : possible sans montrer le board entier. Le tableau des six workflows (qui, quoi, quand, comment, quel texte) est la partie montrable et la plus parlante ; le diagnostic d'équipe reste hors ligne.
- Question à Gildas : nommer le client ou non. Le cas vaut même anonymisé (« un éditeur de conformité pharma »).

## 9. Synaxe (Dune)
- Portfolio : 5 900 caractères, repositionnement capteurs vers conformité. Aucune image.
- Fiche : `synaxe-dune-devis-carrieres.md`. Quarante écrans de devis, quatre-vingts fils de commentaires, le sixième essieu.
- Brut : bloqué, fichier en lecture seule. Captures manuelles possibles depuis Figma dans le navigateur.
- Page : à faire après captures. Deux ou trois écrans de la chaîne devis → commande, et le commentaire du sixième essieu s'il se retrouve.
- Action : capturer à la main dans Figma, ou demander un accès éditeur à Synaxe.

## 10. Ornikar
- Portfolio : 7 600 caractères, 96 préfectures, 15 000 utilisateurs payants. Logo seul.
- Fiche : `ornikar-candidat-libre.md`.
- Fabriqué : `ornikar-inscription-candidat-libre.svg`, les trois temps et la grille des 96 services. À valider par Gildas ; le pied de page dit que c'est une reconstitution.
- Page : le texte actuel est proche de la fiche. Le schéma n'est pas une pièce d'époque ; il illustre bien les trois temps. À garder si Gildas le valide, sinon rien.

## 11. Guinet-Derriaz 1912
- Portfolio : 6 000 caractères. Logo seul.
- Fiche : `guinet-derriaz-catalogue.md`. Un point de marge = 100 k€ = le budget de la mission.
- Fabriqué : `guinet-derriaz-reference-produit.svg`, la même pièce vue du commerce et de la carrière, puis la référence normalisée. Les cinq attributs (pierre, sélection, épaisseur, finition, format) sont une extrapolation à valider.
- Page : le schéma vaut la peine si les attributs sont justes. Sinon, la page tient sur l'équation de marge et l'ordre du travail (catalogue, Excel et Airtable, puis éditeurs), sans image.

## 12. monbanquet.fr
- Portfolio : 5 300 caractères. Logo seul.
- Fiche : `monbanquet-tunnel-de-devis.md`.
- Fabriqué : `monbanquet-tunnel-de-devis.svg`, avant / après. Les étapes du tunnel ne sont pas nommées, faute de source.
- Page : le schéma reste abstrait tant que les étapes n'ont pas de nom. À valider ou à laisser de côté.
- Question à Gildas : les cinq étapes du tunnel, de mémoire.

## 13. UBAQ
- Portfolio : 7 900 caractères, audit à deux niveaux. Logo seul.
- Fiche : aucune. Planche : aucune. L'article « Anatomie d'un audit produit » existe.
- Page : garder, resserrer. Pas de brut : les maquettes de correction appartiennent au client. Rien à montrer, et c'est acceptable pour un audit.

## 14. Luko
- Portfolio : 9 400 caractères, cinq écrans du prototype. Le seul cas dont les écrans appartiennent à Gildas.
- Fiche : aucune, c'est un projet non sollicité d'août 2026.
- Page : déjà illustré par du brut. À passer au format sur mesure, sans changer la matière.

## 15. GetPro (absent du portfolio)
- Fiche : `getpro-repositionnement.md`. Mars et avril 2026, marque et site.
- Brut : deux pages du site en ligne (public) et la planche de contenus de marque (entretien ; photos et prénoms de consultants).
- Page : courte, sur le repositionnement, avec les deux pages du site. La planche de marque reste hors ligne.
- Réserve : facture impayée au 16 septembre. Ne change rien au cas, mais à savoir avant de le mettre en avant.

## Hors liste
- Cross-sell PLG chez Lucca (février 2025) : trois fichiers Figma, non rendus en image. Un cas possible de plus (« Insight » → « Focus solution » → produit). À exporter si Gildas le veut.
- Exploration staffing : interne, aucune facture. Non.

## Décisions attendues
1. La liste : les dix cas actuels plus Rungle, navigation Lucca, formation Lucca, BMI et GetPro, soit quinze. Le cross-sell en seizième ?
2. Les trois schémas fabriqués (Ornikar, Guinet, Monbanquet) : à valider, à corriger, ou à écarter.
3. Les livrables manquants : refonte des rôles Lucca, étapes du tunnel Monbanquet, captures Dune, écrans de la revue de salaires.
4. L'ordre de passage. Je propose : impersonation, formation, navigation, Rungle, Chunk, BMI, puis les autres.
