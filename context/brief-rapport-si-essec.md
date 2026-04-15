# Brief : article "Rapport sur les SI de l'ESSEC"

## Résumé

Ajouter un nouvel article au site. C'est un rapport rédigé par Gildas en juillet 2010, pendant un stage à l'ESSEC, sur le processus d'innovation dans les systèmes d'information du groupe. Le texte est publié tel quel avec des corrections mineures et une courte introduction contextuelle.

## 1. Créer le fichier article

Créer `articles/rapport-si-essec.html` en suivant exactement le template des articles existants (voir `articles/paradoxe-solow-ia.html` pour le modèle).

### Head

```
<title>Rapport sur les SI de l'ESSEC — Gildas Frémont</title>
<meta name="description" content="Un rapport de stage sur les systèmes d'information de l'ESSEC, juillet 2010.">
<link rel="canonical" href="https://gildas.fyi/rapport-si-essec">
```

OG tags : adapter en suivant le pattern des autres articles. `og:type` = article.

### Header de l'article

```html
<header class="article-page-header">
  <h1>Rapport sur les SI de l'ESSEC</h1>
  <p class="article-page-subtitle">Un rapport de stage sur les systèmes d'information de l'ESSEC, juillet 2010.</p>
  <p class="article-meta">Juillet 2010, La Défense</p>
</header>
```

### Introduction (avant le corps du rapport)

Ajouter ce paragraphe d'intro dans `article-body`, avant le contenu du rapport, stylé comme un paragraphe normal :

> Juillet 2010, stage à l'ESSEC. On me demande un rapport sur le processus d'innovation dans les systèmes d'information du groupe. J'ai retrouvé ce texte dans mes mails en 2026, grâce à Claude et le connecteur Gmail. Il est publié tel quel, corrigé à la marge.

### Corps du rapport — texte corrigé

Voici le texte intégral corrigé. Conserver la structure en paragraphes. Les citations numérotées de Parkinson doivent utiliser `<blockquote>`. Les titres de section (quand il y en a) en `<h2>`.

---

J'essaierai de résumer dans ce texte mon point de vue sur le processus d'innovation dans les systèmes d'information à l'EEE.

Mon expérience avec l'EEE a commencé en novembre 2009 mais c'est à partir de mon intégration en tant que stagiaire en avril 2010 que j'ai réellement pu me faire une idée sur les processus, les acteurs et la nature du système d'information de l'établissement. C'est en effet à partir de cette date que j'ai pu converser avec de nombreuses personnes impliquées dans son fonctionnement, son utilisation et son administration. Cette vue bien que partielle (je n'étais pas stagiaire du pôle SI) et partiale (l'observation ne faisait pas partie de mes objectifs de stage) des enjeux des SI m'a tout de même permis de m'en faire une idée.

Une première remarque, la vision utilisateur du système d'information de l'ESSEC et de l'EEE en particulier : il n'existe pas d'intranet à proprement parler mais un amoncellement de solutions pas forcément complémentaires. Les sites institutionnels, les Google Sites, Myessec, les boîtes mails, les ordinateurs mis à disposition, le Wifi, le portail de la bibliothèque, Banner...

Il serait amusant de demander aux acteurs des systèmes d'information que sont les étudiants, les professeurs et les assistantes de dessiner un schéma du système informatique de l'ESSEC. On serait surpris... La confusion qui règne pour l'utilisateur est amplifiée par le manque de cohérence et de convivialité des interfaces : une règle plus qu'un principe élémentaire n'est pas respectée, les utilisateurs n'ont pas besoin de savoir comment les choses fonctionnent pour les faire fonctionner, et pour les utiliser il faut savoir pourquoi elles fonctionnent.

Ce qui nous conduit à une deuxième remarque : il n'y a aucune transparence sur l'efficience des systèmes mis en place. Taux d'utilisation, satisfaction des utilisateurs, gains de temps éventuels, économies d'énergie, de téléphonie, de papier, gains de CA, amélioration de la visibilité de l'école sont passés à la trappe... Il n'existe pas d'indicateurs de performance ni de visibilité sur le retour sur investissement.

Cette transparence n'existe pas non plus pour le fonctionnement même du pôle des systèmes d'information. La règle qui semble dominer est la dissimulation : comment un projet avance-t-il jours après jours ? Quels sont les barèmes qui font qu'un projet est plus important qu'un autre ? On pourrait comparer la situation à un entrepreneur qui ne laisserait pas les propriétaires et futurs habitants de leur maison suivre les progrès dans sa conception et sa fabrication.

À mes yeux le processus de mise en marche d'un projet est grossièrement le suivant : un acteur du système demande une amélioration, le pôle SI sans concertation véritable, estime si cette demande est louable, hiérarchise les besoins des utilisateurs selon un procédé opaque, définit seul un champ d'action, met en place une solution et advienne que pourra. Si l'acteur n'est pas satisfait, son seul recours est alors de ne pas utiliser la solution et de perdre tout crédit pour une future demande.

En effet le contact avec l'utilisateur final est inexistant. D'après ce que j'ai compris les ingénieurs pédagogiques sont censés faire le lien mais il n'existe pas de rapport, pas de méthode qualitative ou quantitative pour avoir une marque écrite de ce lien.

Je m'étonne également que le pôle SI n'ait pas d'expertise sur le management de projet. Son rôle se limite à de la maintenance, de la veille technologique, de l'étude de faisabilité. La création de solutions pratiques ou innovantes ne semble pas faire partie de ses attributions, ni même le développement.

Le seul cadre du pôle SI c'est-à-dire une personne capable de donner une orientation aux projets est Jean-Pierre Choulet et il me semble impossible qu'il puisse suivre tous les projets en même temps. C'est probablement la raison pour laquelle a été mis en place le dogme du "pas de développement" et la recherche de solutions clés en main. Comme si le groupe ESSEC n'avait pas de besoins spécifiques. On est donc obligé de bricoler des solutions bancales sans aucune pérennité.

Problème qui n'en serait pas un si les finances sont sans limites : pourtant tout le monde se plaint du manque de moyens. Ce qui nous mène à la remarque suivante, la mauvaise gestion dans l'allocation des ressources.

Il serait intéressant de savoir quelles sont les ressources humaines mobilisées uniquement pour le fonctionnement des systèmes d'information. Le nombre d'ingénieurs pédagogiques engagés pour pallier le manque d'implication des acteurs légitimes que sont les professeurs et les assistantes de programme me semble disproportionné et ajoute à la confusion.

En embauchant des gens pour faire un travail que les enseignants ne veulent pas fournir on légitime la situation dans laquelle la conception et la mise en ligne de contenu numérique n'est et ne sera jamais du ressort de ceux qui ont la légitimité pédagogique pour le faire. La solution de l'embauche est systématique et s'auto-entretient comme le décrit Parkinson pour les fonctionnaires :

<blockquote>
1. « Un fonctionnaire entend multiplier ses subordonnés, pas ses rivaux » : il y a une tendance naturelle à recruter quelqu'un de plus compétent que lui au moins dans un domaine, mais aussi à diviser le travail pour éviter d'être remis en cause par l'un de ses collaborateurs. Il crée ainsi des besoins de coordination interne, qui entraînent une charge de travail supplémentaire, puis l'embauche de collaborateurs supplémentaires. On construit ainsi un système « autarcique » qui va consommer, de manière endogène, une part croissante de l'énergie disponible, conduisant à la deuxième loi.

2. « Les fonctionnaires se créent mutuellement du travail ». Plus il y a de fonctionnaires, plus les demandes d'approbation qu'ils se communiquent mutuellement, ou tâches comparables, les occupent, de sorte que le travail accompli d'un point de vue extérieur par l'administration dans son ensemble n'augmente pas.
</blockquote>

Il me semble que cette situation kafkaïenne est due à l'absence de levier d'action par le métier sur les systèmes d'information : le SI détient le pouvoir technique, décisionnel et financier. Le pôle SI fait ce qu'il veut, comme il le veut avec les moyens qu'il veut. Paradoxalement, ses membres se plaignent constamment du manque d'implication des gens du métier, du manque de moyens et se satisfont de toutes leurs réflexions. L'autocritique n'existe pas.

Au-delà des questions touchant l'organisation et pour revenir à la première remarque sur la perception de l'utilisateur du système informatique se posent également des questions de principes et de définition du rôle des acteurs du système d'information de l'ESSEC et du pôle SI.

Dans le cadre des réflexions du CPI j'avais proposé quelques principes pour un bon système d'information : l'unicité, l'universalité, l'utilité, l'usabilité. Auxquels on ajoute l'humanité. L'unicité c'est à la fois la cohérence du système, l'interopérabilité de ses composantes et une conception mentale simple du système par l'utilisateur. L'universalité c'est le bon fonctionnement des ressources avec l'ensemble des périphériques des utilisateurs mais aussi la prise en compte de l'ensemble des besoins favorisant les objectifs des formations — savoir, savoir-faire technique et comportemental. L'utilité c'est à la fois le bénéfice que l'on retire de la mise en place d'une nouvelle fonctionnalité et son utilisation : il faut supprimer ce qui n'est pas utilisé suffisamment. L'usabilité c'est le principe qui dicte de ne pas proposer une fonction si on n'a pas pensé à une utilisation à la portée de l'utilisateur. On ajoute l'humanité, c'est-à-dire un système au service de l'utilisateur et pas au service de lui-même mais également pas de déshumanisation des ressources : quelqu'un fait quelque chose pour quelqu'un d'autre par l'intermédiaire du système, on ne doit rien faire *pour* le système.

Dans l'usabilité on trouve l'ergonomie. Il me paraît évident que personne ne s'occupe de la praticité des interfaces utilisateurs quand on voit l'autosatisfaction à la mise en place d'une solution aussi peu conviviale que Banner.

La seule ambition avouée du pôle SI est la dématérialisation, sans jamais définir sa portée ni le terme même. On assiste à une appropriation de contenu libre fourni par d'autres institutions mais qui très rarement mène à une dématérialisation des contenus de l'EEE. La vidéo est, semble-t-il, le seul moyen existant pour le faire sans qu'on s'interroge jamais sur son efficacité "les autres le font alors nous aussi".

Le pôle SI du groupe ESSEC est dans une logique de suiveurs et de mauvais suiveurs, pas de leader c'est-à-dire tout l'inverse de ce qu'il est censé incarner.

Un autre fait marquant : il n'y a pas d'informatique décisionnelle, ou alors elle n'est pas visible. Pas d'aide à la prise de rendez-vous, pas de réservation de salle... D'autre part il n'existe pas de lien entre les contenus. Par exemple entre le nom d'un professeur, sa biographie, ses publications, son adresse mail, son emploi du temps, son numéro de téléphone, le nom de son assistante, ses cours... Autant d'informations à aller chercher dans des endroits différents. Ou encore s'agissant de l'assistance informatique : le principe de fonctionnement est le suivant : si l'assistance a résolu un problème alors il n'y a pas de problème sans s'interroger sur les causes d'un problème afin qu'il ne se renouvelle pas...

À mon sens le vrai problème réside dans l'absence de levier d'action des utilisateurs sur le pôle SI et la confusion de plusieurs départements.

Les utilisateurs sont les clients et le pôle SI est en situation de monopole. Le rôle du pôle SI est de créer des liens naturels entre les acteurs, de favoriser la transmission d'information et de favoriser les processus grâce aux TIC, le pôle SI a oublié qu'il n'est pas au service de l'informatique comme le technicien PTT était responsable du bon fonctionnement des lignes téléphoniques, mais qu'il est au service du groupe ESSEC en créant du lien entre ce qui savent et ceux qui veulent savoir. L'argument toujours avancé est le manque d'implication des professeurs et des élèves dans l'utilisation de l'informatique. Ce n'est pas en proposant des formations qui coûtent en hommes en temps et en argent que le problème se réglera mais en proposant des solutions que ces utilisateurs récalcitrants seront à même d'utiliser naturellement par ce que c'est plus pratique que de faire comme d'habitude.

D'autre part, je n'ai toujours pas compris pourquoi on mélange contenu et flux. Selon moi le pôle SI devrait se charger des flux d'information, et d'autres départements des contenus. Les ingénieurs pédagogiques font partie de la deuxième catégorie. À les entendre et à les observer on croirait qu'ils travaillent pour le pôle SI. À mon sens les assistantes pédagogiques sont beaucoup plus utiles et efficaces que les ingénieurs pédagogiques pour favoriser la satisfaction et l'apprentissage des étudiants. Une priorité du pôle SI devrait être de favoriser les interfaces informatiques pour les assistantes au lieu de faire du show-off devant les étudiants. J'estime la question des évaluations à 20 % du temps des assistantes alors que ce pourcentage devrait tendre vers zéro. Si on ajoute la réservation des salles, la gestion des emplois du temps et le temps perdu à répondre à des questions dont la réponse pourrait être facilement accessible sur un intranet efficace on gagnerait beaucoup de ressources à allouer bien plus judicieusement.

Pour finir, j'ajouterai que le pôle SI devrait être beaucoup plus en contact avec les étudiants et avec le corps professoral. Il n'y a certainement aucun lien entre ce département au coeur du groupe ESSEC et les professeurs d'innovation, de management, de stratégie ni même de système d'information.

En résumé : des indicateurs de performance, des principes de fonctionnement, des liens entre les acteurs du système, une stratégie qui a du sens pour le groupe et une grosse autocritique constante manquent et devraient pourtant être à la base du processus d'innovation et d'amélioration dans les SI du groupe et de l'EEE en particulier.

---

Signature en fin d'article : **Gildas Frémont.**

## 2. Ajouter l'entrée dans index.html

Dans la section `#articles`, ajouter en **dernière position** (après UX Stack Exchange, avant la fermeture de `</section>`) :

```html
<div class="article-entry">
  <div class="article-header">
    <a href="/rapport-si-essec">Rapport sur les SI de l'ESSEC</a>
    <span class="article-date">juil. 10</span>
  </div>
  <p class="article-subtitle">Un rapport de stage sur les systèmes d'information de l'ESSEC, juillet 2010.</p>
</div>
```

## 3. Ajouter l'entrée dans en.html

Même position (dernière, après UX Stack Exchange) :

```html
<div class="article-entry">
  <div class="article-header">
    <a href="/rapport-si-essec">Rapport sur les SI de l'ESSEC</a>
    <span class="article-date">Jul 10</span>
  </div>
  <p class="article-subtitle">An internship report on ESSEC's information systems, July 2010. Originally written in French.</p>
</div>
```

## 4. Ajouter le rewrite dans vercel.json

Ajouter dans le tableau `rewrites` :

```json
{ "source": "/rapport-si-essec", "destination": "/articles/rapport-si-essec" }
```

## 5. Régénérer les PDF

```bash
node generate-pdf.mjs
```

Le serveur local doit tourner (`npx serve`).

## Liste des corrections apportées au texte original

- "magouiller des solutions branlantes" → "bricoler des solutions bancales"
- "les contacts avec l'utilisateur final est inexistant" → "le contact avec l'utilisateur final est inexistant"
- "Choulet" : orthographe conservée telle quelle (vérifier si c'est bien le nom)
- Ponctuation normalisée (virgules avant relatives, points en fin de phrases longues)
- Suppression des doubles espaces
- "se satisfont" conservé (correct, subjonctif de satisfaire à la 3e personne)
- Structure des citations Parkinson clarifiée avec numérotation

## Notes

- L'article est en français uniquement (comme tous les autres articles du site).
- Le footer contact est identique aux autres articles (copier depuis paradoxe-solow-ia.html).
- Les paths relatifs des assets (style.css, script.js, fonts, images) doivent être adaptés au fait que le fichier est dans `articles/` (donc `../style.css` etc., vérifier le pattern des autres articles dans ce dossier).
