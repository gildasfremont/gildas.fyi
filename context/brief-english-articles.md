# Brief : articles en anglais + rapatriement LinkedIn

## Résumé

Créer une version anglaise de chaque article du site. Rapatrier les 2 articles LinkedIn Pulse sur le site avec une référence à l'original. Ajouter une icône "mail" pour l'article ESSEC. Mettre à jour index.html, en.html et vercel.json.

## Architecture cible

Chaque article FR existant (`articles/xxx.html`) a un équivalent EN (`articles/xxx-en.html`).
Les articles LinkedIn deviennent des pages locales FR + EN.
Les listings dans en.html pointent vers les versions EN. Les listings dans index.html restent sur les versions FR.

### Nouveaux fichiers à créer

| Fichier | Source |
|---------|--------|
| `articles/parti-pris-logiciel-en.html` | Traduire `articles/parti-pris-logiciel.html` |
| `articles/unsolicited-redesign-luko-en.html` | Traduire `articles/unsolicited-redesign-luko.html` |
| `articles/etude-de-cas-luko-en.html` | Traduire `articles/etude-de-cas-luko.html` |
| `articles/audit-ubaq-methode-en.html` | Traduire `articles/audit-ubaq-methode.html` |
| `articles/paradoxe-solow-ia-en.html` | Traduire `articles/paradoxe-solow-ia.html` |
| `articles/impersonation-pattern-en.html` | Traduire `articles/impersonation-pattern.html` |
| `articles/gmail-etats-binaires-en.html` | Traduire `articles/gmail-etats-binaires.html` |
| `articles/think-different-write-smarter-en.html` | Traduire `articles/think-different-write-smarter.html` |
| `articles/vous-navez-pas-besoin-dun-pm-en.html` | Traduire `articles/vous-navez-pas-besoin-dun-pm.html` |
| `articles/rapport-si-essec-en.html` | Traduire `articles/rapport-si-essec.html` |
| `articles/vitesse-vision.html` | Nouveau FR — texte LinkedIn ci-dessous |
| `articles/vitesse-vision-en.html` | Traduction EN du FR |
| `articles/conformite-fonctionnalite.html` | Nouveau FR — texte LinkedIn ci-dessous |
| `articles/conformite-fonctionnalite-en.html` | Traduction EN du FR |

## Template HTML

Suivre exactement le template de `articles/paradoxe-solow-ia.html` pour les articles EN et les nouveaux FR :
- Même structure head (title, meta, OG tags, canonical)
- Même header (article-page-header, h1, subtitle, meta)
- Même footer contact
- Paths relatifs : `../style.css`, `../script.js`, etc.

Pour les versions EN :
- `<html lang="en">` au lieu de `<html lang="fr">`
- Traduire le footer contact : "Book a call" au lieu de "Prendre rendez-vous", "Download CV" au lieu de "Télécharger CV"
- Le canonical pointe vers `/slug-en` (ex: `/parti-pris-logiciel-en`)

## Consignes de traduction

- Traduire le corps de l'article, le titre, le sous-titre, la meta description
- Conserver les noms propres (Lucca, Luko, ESSEC, Parkinson, Ryan Singer, Shape Up, Don Norman)
- Conserver les termes techniques anglais déjà en anglais dans le FR (kanban, drag and drop, red flag, gulf of evaluation, feature factory, etc.)
- Style : prose analytique, pas de bullet points, pas de listes. Ton sobre, technique.
- Pour le rapport ESSEC EN, ajouter en intro : "July 2010, internship at ESSEC. I was asked to write a report on the innovation process in the group's information systems. I found this text in my emails in 2026, thanks to Claude and the Gmail connector. It is published as is, with minor corrections. Originally written in French."

## Articles LinkedIn à rapatrier — contenu original FR

### "La conformité n'est pas une fonctionnalité" (nov. 2024)

Source : https://www.linkedin.com/pulse/la-conformit%25C3%25A9-nest-pas-une-fonctionnalit%25C3%25A9-gildas-fr%25C3%25A9mont-xlgne/

Slug FR : `/conformite-fonctionnalite`
Slug EN : `/conformite-fonctionnalite-en`

Header :
```
<h1>La conformité n'est pas une fonctionnalité</h1>
<p class="article-page-subtitle">Pourquoi traiter la conformité comme un sujet à part mène à des produits plus lourds et moins fiables.</p>
<p class="article-meta">Novembre 2024 · publié sur <a href="https://www.linkedin.com/pulse/la-conformit%25C3%25A9-nest-pas-une-fonctionnalit%25C3%25A9-gildas-fr%25C3%25A9mont-xlgne/" target="_blank" rel="noopener"><img src="../img/linkedin.ico" alt="" class="entry-logo"> LinkedIn</a></p>
```

Texte intégral FR :

Avant de concevoir des logiciels, je les installais et parfois je les vendais.

Mon ami Romain Pichou m'avait expliqué quelque chose d'important pour présenter la solution de gestion de congés qu'on distribuait : on va parler de l'interface, de la flexibilité, du modèle singulier, des fonctionnalités mais le client n'aura au fond qu'une question qui fera la vente : "Est-ce que ça s'intègre à ma paie ?"

Sur le marché B2B français la conformité n'est pas une feature, c'est le ticket d'entrée.

Chaque nouvelle réglementation crée un marché. RGPD, facturation électronique, compte formation. Les entreprises doivent s'y conformer et les éditeurs créent les outils pour combler ce besoin.

Dès lors qu'on parle paie, RH, finance, santé, formation, facturation mais aussi des chaînes opérationnelles régulées dans l'environnement, la traçabilité des matières, transport, commerce extérieur, agroalimentaire, énergie et construction : la direction impose l'outil d'abord pour respecter la loi.

C'est très différent du modèle américain fantasmé par les équipes produit du monde entier : les utilisateurs adoptent puis l'entreprise achète. Un bon produit se vend tout seul.

Alors on ajoute du freemium, de l'onboarding self-service et ça ne fonctionne pas.

Chez nous l'achat est guidé par l'obligation légale, pas par les besoins des opérateurs. Le DAF achète un outil de facturation électronique parce qu'il doit, pas parce que ses collaborateurs le réclament.

L'acquisition passe par les RH, la direction et les achats.

Le risque de créer une nouvelle corvée administrative est grand.

Les moins bons éditeurs digitalisent le formulaire exigé. Les meilleurs transforment la contrainte en opportunité.

Ils construisent bien pour la conformité mais innovent sur l'usage : ils "build something people would hate to lose". L'obligation peut devenir invisible et indolore avec une interface entre la nécessité légale et le métier des collaborateurs.

On achète pour la conformité mais on garde parce qu'on en retire quelque chose.

Les données à exporter pour le législateur sont souvent un simple attribut d'un objet métier, une case à compléter utile à l'étape d'un workflow. Ces objets qui modélisent une réalité opérationnelle sont ce qui fait la singularité de chaque solution, permet un outil utile et un positionnement différenciant.

Pour l'acheteur ce qui compte est ce qui a été saisi, pour l'utilisateur ce qui compte c'est le contexte de cette saisie. La rétention se joue sur l'expérience opérateur.

L'interface entre réglementation et opérations, c'est le terrain de jeu des équipes produit du SaaS français.

Signature : **Gildas Frémont.**

---

### "Vitesse et vision sont deux choses qui vont très bien ensemble" (nov. 2024)

Source : https://www.linkedin.com/pulse/vitesse-et-vision-sont-deux-choses-qui-vont-tr%25C3%25A8s-bien-gildas-fr%25C3%25A9mont-kavve/

Slug FR : `/vitesse-vision`
Slug EN : `/vitesse-vision-en`

Header :
```
<h1>Vitesse et vision sont deux choses qui vont très bien ensemble</h1>
<p class="article-page-subtitle">Pourquoi vélocité d'exécution et vision stratégique ne s'opposent pas mais forment un système dynamique complémentaire.</p>
<p class="article-meta">Novembre 2024 · publié sur <a href="https://www.linkedin.com/pulse/vitesse-et-vision-sont-deux-choses-qui-vont-tr%25C3%25A8s-bien-gildas-fr%25C3%25A9mont-kavve/" target="_blank" rel="noopener"><img src="../img/linkedin.ico" alt="" class="entry-logo"> LinkedIn</a></p>
```

Texte intégral FR :

La quête de l'excellence produit s'articule autour d'une tension récurrente dans le discours de ceux qui le font : la dualité entre vélocité d'exécution et recherche de qualité. En réalité cette dialectique fait de la conception produit en un système dynamique où deux forces complémentaires s'enrichissent mutuellement.

Feature vs Dette technique : un discours entendu

Vitesse sans vision = Chaos
Vision sans vitesse = Stérilité

Dépasser le constat avec la matrice d'excellence

Cette dynamique peut être conceptualisée comme une matrice bidimensionnelle où l'axe horizontal représente la vélocité d'exécution et l'axe vertical incarne l'aspiration à la perfection. La trajectoire optimale suit une diagonale qui maximise simultanément ces deux dimensions.

Cette dualité révèle un principe psychologique que l'on connait : c'est en forgeant qu'on devient forgeron, l'apprentissage émerge de l'interaction entre action et réflexion. La vitesse agit comme un mécanisme d'exploration, tandis que la vision fournit le cadre d'évaluation nécessaire à l'interprétation des résultats.

Les Quatre Vecteurs d'Excellence

Le momentum par l'existence

La vélocité d'exécution crée une réalité observable plutôt qu'une promesse abstraite. Un produit qui évolue rapidement démontre sa trajectoire d'amélioration à travers des changements concrets, non des intentions théoriques. Cette manifestation tangible génère deux effets systémiques :

1. Effet Interne : L'équipe et les partenaires s'engagent dans une dynamique d'amélioration visible. La progression régulière devient une preuve vivante du potentiel, alimentant l'engagement collectif. Ce n'est plus une vision abstraite mais une réalité en mouvement.
2. Effet Externe : Les utilisateurs investissent dans une trajectoire plutôt qu'un état statique. Ils achètent non seulement le produit actuel mais aussi sa capacité démontrée d'évolution. La vitesse d'itération devient une preuve tangible de la capacité d'amélioration.

Cette dynamique transforme le concept abstrait de "potentiel" en une réalité observable. La vitesse n'est plus simplement un attribut de développement, mais un mécanisme de preuve qui convertit les promesses en actions visibles.

La mémoire musculaire collective

Une équipe qui itère rapidement développe une forme d'intelligence collective qui transcende la simple coordination. Cette dynamique cognitive émerge naturellement du rythme soutenu des itérations, comme une chorégraphie qui s'affine avec la pratique.

La cadence transforme progressivement les processus conscients en automatismes collectifs. Ce qui commence comme un effort de communication explicite évolue en un système de coordination intuitive où chaque membre anticipe naturellement les besoins des autres. Les frictions initiales se dissolvent dans un flux de travail fluide où les ajustements deviennent imperceptibles mais omniprésents.

Le rythme agit ainsi comme un langage silencieux qui optimise continuellement l'efficacité collective. Il forge des patterns de collaboration invisibles mais robustes, similaires à ceux d'un ensemble de musiciens qui trouvent naturellement leur groove. Cette intelligence distribuée émerge non pas de processus imposés, mais d'une chorégraphie cognitive naturelle où le tempo commun transforme l'effort en élégance opérationnelle.

L'apprentissage par confrontation au Marché

La rapidité d'itération transforme la théorie en connaissance pratique. À chaque cycle, nos hypothèses rencontrent la réalité du marché, créant un flux continu d'apprentissage tangible.

La rapidité d'itération transforme notre compréhension du marché en temps réel. Chaque cycle de feedback crée un flux d'apprentissage qui affine notre perception des besoins utilisateurs. Cette dynamique génère une forme de sagesse opérationnelle unique, où théorie et pratique se nourrissent mutuellement.

Mais cette richesse de données comporte un risque inhérent. Les retours utilisateurs peuvent devenir un mirage qui masque les enjeux stratégiques plus profonds. Le danger réside dans une réactivité excessive qui transformerait le produit en une collection de réponses immédiates sans cohérence d'ensemble.

La véritable maîtrise émerge d'une conversation subtile entre écoute et vision. Les retours du marché doivent être interprétés à travers le prisme d'une intention stratégique claire. Cette approche transforme le feedback en un outil d'affinage plutôt qu'en une directive absolue. La vitesse d'itération devient alors un moyen d'explorer l'espace des possibles tout en maintenant une trajectoire cohérente.

L'art consiste à maintenir ce dialogue productif où les retours enrichissent la vision sans la diluer. Cette tension créative entre réactivité et direction stratégique forge des produits qui répondent aux besoins immédiats tout en construisant une valeur durable.

Pour autant le rythme soutenu de validation produit un effet d'accumulation cognitive unique. Les retours du marché ne sont plus des données abstraites mais deviennent une source directe de compréhension. Cette dynamique transforme notre perception du problème : ce qui était flou devient net, ce qui était hypothétique devient concret.

L'apprentissage émerge ainsi non pas de l'analyse théorique mais de l'expérience répétée. La vitesse d'itération crée une forme de sagesse opérationnelle où chaque cycle affine notre vision du possible. Cette confrontation continue avec le réel forge une compréhension profonde qui dépasse les modèles mentaux initiaux pour atteindre une vérité pratique, ancrée dans l'expérience concrète des utilisateurs.

La focalisation par nécessité

La contrainte de temps agit comme un prisme qui révèle l'essence même de ce que nous construisons. Elle force une clairvoyance rare : chaque fonctionnalité doit justifier son existence non par sa désirabilité abstraite, mais par sa nécessité concrète dans le temps imparti.

Cette pression temporelle crée un cadre décisionnel où l'essentiel émerge naturellement. Les éléments critiques se distinguent des améliorations souhaitables mais non essentielles. Cette clarté transforme la contrainte en avantage : en nous forçant à nous concentrer sur ce qui compte vraiment, elle élimine la dilution de l'effort qui accompagne souvent la recherche de complétude.

La qualité naît paradoxalement de cette limitation. En concentrant nos ressources sur un périmètre précis et bien défini, nous pouvons atteindre l'excellence sur ce qui importe. Cette approche produit des solutions plus élégantes, où chaque élément porte une intention claire et où l'absence de superflu renforce l'expérience centrale. Le temps devient ainsi non pas un obstacle mais un catalyseur de focus qui transforme la contrainte en clarté conceptuelle.

"Moins de temps ne veut pas dire moins de qualité. Au contraire." — Gildas Frémont

Un système auto-renforçant

Ces quatre vecteurs créent une boucle de feedback positive :

1. La vision oriente l'exploration
2. La vitesse génère des données
3. Les données enrichissent la vision
4. La vision raffinée guide l'itération suivante

L'excellence émerge ainsi non pas d'une perfection théorique ou d'une agitation désordonnée, mais d'une synthèse délibérée entre vélocité et vision. Cette approche transforme le développement produit en un système d'apprentissage où chaque itération rapide contribue à l'affinement progressif de l'idéal poursuivi.

La vitesse devient ainsi non pas une fin en soi, mais un outil d'exploration guidé par une vision claire. C'est dans cette tension productive entre mouvement et direction que naît l'excellence véritable.

Signature : **Gildas Frémont.**

---

## Notes spécifiques par article

### rapport-si-essec-en.html
- Ajouter en intro EN : "July 2010, internship at ESSEC. I was asked to write a report on the innovation process in the group's information systems. I found this text in my emails in 2026, thanks to Claude and the Gmail connector. It is published as is, with minor corrections. Originally written in French."
- Les citations de Parkinson restent en `<blockquote>`, traduites en anglais
- Le meta : "July 2010, La Défense"

### unsolicited-redesign-luko-en.html
- Le lien "Voir le redesign →" devient "See the redesign →"
- Le lien "Lire l'étude de cas complète" devient "Read the full case study"
- Les liens pointent vers les versions EN : `/etude-de-cas-luko-en`

### etude-de-cas-luko-en.html
- Les légendes des figures doivent être traduites
- Le lien "Voir le redesign →" garde l'URL du prototype (dist-neon-delta-32.vercel.app/)

### think-different-write-smarter-en.html
- Le tweet de Mike Kobach est déjà en anglais, le conserver tel quel
- "Write Smarter" et "Think Different" restent en anglais (ce sont les slogans Apple)

### paradoxe-solow-ia-en.html
- Le tweet de shaurya est déjà en anglais, le conserver tel quel
- Robert Solow : garder le contexte (1987, prix Nobel)

### gmail-etats-binaires-en.html
- La figure Gmail avec les annotations FR doit avoir ses annotations traduites en EN
- Si la figure est une image statique, conserver l'image et traduire la légende

### conformite-fonctionnalite.html (nouveau FR)
- Article originellement sur LinkedIn, rapatrié sur le site
- Le header inclut une référence LinkedIn (voir template header ci-dessus)
- Texte FR complet fourni ci-dessus

### vitesse-vision.html (nouveau FR)
- Article originellement sur LinkedIn, rapatrié sur le site
- ⚠️ Le texte original n'a pas pu être récupéré intégralement depuis LinkedIn
- Reconstituer l'article en prose (pas de listes) à partir des thèmes et de la structure ci-dessus
- Style Gildas : sobre, analytique, phrases longues reliées par des virgules et relatives
- ~500-700 mots

## Icône mail pour l'article ESSEC

Créer `img/mail.ico` (16x16, style cohérent avec linkedin.ico et uxse.ico) OU utiliser un SVG simple d'enveloppe.
L'icône sera utilisée dans le listing de l'article ESSEC pour indiquer que la source est un email retrouvé.

Dans index.html et en.html, le listing de l'article ESSEC doit ressembler à :
```html
<div class="article-entry">
  <div class="article-header">
    <img src="img/mail.ico" alt="" class="entry-logo">
    <a href="/rapport-si-essec">Rapport sur les SI de l'ESSEC</a>
    <span class="article-date">juil. 10</span>
  </div>
  <p class="article-subtitle">Un rapport de stage sur les systèmes d'information de l'ESSEC, juillet 2010.</p>
</div>
```

## Mises à jour de en.html

Dans la section `#articles` de en.html, TOUS les liens internes doivent pointer vers les versions EN.
Chaque article interne existant passe de `href="/slug"` à `href="/slug-en"`.
Les titres restent en français (c'est un choix de Gildas — les titres FR sont conservés dans les deux versions du site).

Ajouter les deux articles LinkedIn rapatriés (ils remplacent les entrées avec `target="_blank"`) :
- "Vitesse et vision..." → `href="/vitesse-vision-en"` (enlever l'icône LinkedIn, target_blank, rel noopener)
- "La conformité..." → `href="/conformite-fonctionnalite-en"` (idem)

Ajouter le rapport ESSEC en dernière position (avant fermeture de `</section>`) :
```html
<div class="article-entry">
  <div class="article-header">
    <img src="img/mail.ico" alt="" class="entry-logo">
    <a href="/rapport-si-essec-en">Rapport sur les SI de l'ESSEC</a>
    <span class="article-date">Jul 10</span>
  </div>
  <p class="article-subtitle">An internship report on ESSEC's information systems, July 2010. Originally written in French.</p>
</div>
```

L'entrée UX Stack Exchange reste en lien externe avec son icône uxse.ico (45 réponses, pas rapatriable).

## Mises à jour de index.html

Dans index.html, les liens internes restent sur les versions FR (pas de changement pour les articles existants).

Les deux articles LinkedIn rapatriés remplacent les entrées externes :
- "Vitesse et vision..." → `href="/vitesse-vision"` (enlever l'icône LinkedIn, target_blank, rel noopener)
- "La conformité..." → `href="/conformite-fonctionnalite"` (idem)

Ajouter le rapport ESSEC en dernière position (avant fermeture de `</section>`, après UX Stack Exchange) :
```html
<div class="article-entry">
  <div class="article-header">
    <img src="img/mail.ico" alt="" class="entry-logo">
    <a href="/rapport-si-essec">Rapport sur les SI de l'ESSEC</a>
    <span class="article-date">juil. 10</span>
  </div>
  <p class="article-subtitle">Un rapport de stage sur les systèmes d'information de l'ESSEC, juillet 2010.</p>
</div>
```

## Mises à jour de vercel.json

Ajouter dans le tableau `rewrites` :
```json
{ "source": "/conformite-fonctionnalite", "destination": "/articles/conformite-fonctionnalite" },
{ "source": "/conformite-fonctionnalite-en", "destination": "/articles/conformite-fonctionnalite-en" },
{ "source": "/vitesse-vision", "destination": "/articles/vitesse-vision" },
{ "source": "/vitesse-vision-en", "destination": "/articles/vitesse-vision-en" },
{ "source": "/parti-pris-logiciel-en", "destination": "/articles/parti-pris-logiciel-en" },
{ "source": "/unsolicited-redesign-luko-en", "destination": "/articles/unsolicited-redesign-luko-en" },
{ "source": "/etude-de-cas-luko-en", "destination": "/articles/etude-de-cas-luko-en" },
{ "source": "/audit-ubaq-methode-en", "destination": "/articles/audit-ubaq-methode-en" },
{ "source": "/paradoxe-solow-ia-en", "destination": "/articles/paradoxe-solow-ia-en" },
{ "source": "/impersonation-pattern-en", "destination": "/articles/impersonation-pattern-en" },
{ "source": "/gmail-etats-binaires-en", "destination": "/articles/gmail-etats-binaires-en" },
{ "source": "/think-different-write-smarter-en", "destination": "/articles/think-different-write-smarter-en" },
{ "source": "/vous-navez-pas-besoin-dun-pm-en", "destination": "/articles/vous-navez-pas-besoin-dun-pm-en" },
{ "source": "/rapport-si-essec-en", "destination": "/articles/rapport-si-essec-en" }
```

Note : le rewrite pour `/rapport-si-essec` existe peut-être déjà (ajouté par le brief précédent). Vérifier avant d'ajouter un doublon.

## Ordre de travail recommandé

1. Créer `img/mail.ico` (icône enveloppe 16x16)
2. Créer les 2 articles LinkedIn FR (`conformite-fonctionnalite.html`, `vitesse-vision.html`)
3. Créer les 12 articles EN (10 traductions + 2 LinkedIn EN)
4. Mettre à jour `en.html` (liens → versions EN, ajout ESSEC + remplacement LinkedIn)
5. Mettre à jour `index.html` (remplacement LinkedIn + ajout ESSEC)
6. Mettre à jour `vercel.json` (tous les nouveaux rewrites)
7. Régénérer les PDF : `node generate-pdf.mjs` (serveur local doit tourner)

## Articles existants qui ont déjà une version sur le site (à traduire seulement, pas à créer en FR)

- parti-pris-logiciel
- unsolicited-redesign-luko
- etude-de-cas-luko (page support, pas listée dans index/en mais liée depuis unsolicited-redesign)
- audit-ubaq-methode
- paradoxe-solow-ia
- impersonation-pattern
- gmail-etats-binaires
- think-different-write-smarter
- vous-navez-pas-besoin-dun-pm
- rapport-si-essec

## Références aux articles LinkedIn originaux

Pour les deux articles rapatriés (conformite-fonctionnalite et vitesse-vision), le header de l'article inclut un lien vers l'original LinkedIn avec l'icône linkedin.ico. Voir les templates header fournis ci-dessus.

Les entrées dans index.html et en.html ne gardent PAS l'icône LinkedIn (elles deviennent des articles internes standard). L'icône LinkedIn apparaît uniquement dans le header de la page article elle-même.

## Note sur l'article "Vitesse et vision"

Le texte original FR intégral est fourni ci-dessus. L'article contient des sous-titres (h2) et des listes numérotées qu'il faut conserver dans le HTML. L'image de la matrice d'excellence (axes Vitesse/Vision) est dans l'article LinkedIn original mais n'est pas récupérable — ne pas inclure d'image dans la version site.
