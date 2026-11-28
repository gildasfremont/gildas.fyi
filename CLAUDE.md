<!-- Copie de gildasfremont/base-projets@46216ff67d0c. Ne pas modifier ici : une retouche se propose en PR à gildasfremont/base-projets, et maj.py ne l'écrase pas. -->
# Règles de travail

Ce fichier est commun aux projets de Gildas. Avec les skills `decouper` et `refondre` (`.claude/skills/`) et l'agent `historien` (`.claude/agents/`, ses outils dans `.claude/outils/`, ses périmètres dans `.claude/perimetres/`), il vient du dépôt `gildasfremont/base-projets`, leur seule source. **En début de session, et avant de livrer**, aller voir si la base a changé, depuis la racine du dépôt (ou du dossier du sujet) :

```bash
gh api repos/gildasfremont/base-projets/contents/maj.py -H 'Accept: application/vnd.github.raw' | python3 -
```

Il met à jour ce qui n'a pas été retouché ici ; les fichiers changés se commitent avec le reste du travail. Une retouche faite ici n'est jamais écrasée : la proposer en PR à `base-projets`, où le juge tranche (voir « Faire remonter »). Si `base-projets` est injoignable (depuis le cloud, par exemple), la base du dépôt reste valable.

Ce qui est propre au projet (le produit, ses modules, ses bancs, et les outils qui appliquent ici les règles ci-dessous) est dans [PROJET.md](PROJET.md), que la mise à jour ne touche jamais :

@PROJET.md

Une règle qui ne vaut que pour ce projet va dans PROJET.md. Une règle qui vaudrait partout va dans `base-projets`, sans nom d'outil ni de chemin propre au projet. Un nouveau projet reçoit la base par la même commande, lancée à sa racine. Quand PROJET.md ne nomme pas d'outil pour une règle, elle s'applique à la main.

## Les paliers

Un projet ne naît pas structuré : il commence vite, et la structure arrive quand le besoin arrive, jamais avant. Chaque palier ajoute des règles à celles d'avant, sans en contredire aucune. Le but du projet passe avant : un palier qui le ralentirait sans raison ne s'ajoute pas.

| Palier | Le projet | Ce qui s'ajoute | Le signal pour monter |
|---|---|---|---|
| **P0 · Idée** | Pas de dépôt : une conversation, une Discussion, des notes en vrac | Rien à saisir, rien à ranger : on balance les idées comme elles viennent | On veut garder ce qui a été fait, ou y revenir |
| **P1 · Essai** | Un dépôt, on travaille sur `main`, un README au présent | La machine, rendre compte, ce que Gildas a tranché, les specs, les repères, faire remonter. Pas de tests : on montre que ça marche (une commande, une image) | Deux sessions en même temps sur le dépôt, ou un travail qui ne tient pas dans une session |
| **P2 · Ça sert** | Gildas s'en sert vraiment | Plusieurs sessions (un sujet, une branche, un dossier), découper, refondre | Quelqu'un d'autre que Gildas s'en sert, ou une même casse revient deux fois |
| **P3 · D'autres s'en servent** | Public, ou des données à garder | Les étapes jusqu'à la release, les interrupteurs, prouver sans Gildas (tests, comparaisons), où écrire et où lire (page du produit, registre, historique, écarts), l'historien | Une tâche revient à rythme fixe, ou doit tourner sans personne |
| **P4 · Ça tourne seul** | Des tâches de nuit | L'orchestrateur et ses familles de droits | |

Le palier s'écrit en tête de PROJET.md, une ligne : `Palier : P1`. Un nouveau dépôt naît en P1. Chaque section ci-dessous dit, dans son titre, le palier d'où elle vaut ; une section d'un palier plus haut que celui du projet ne s'applique pas. `maj.py` ne copie que ce que le palier demande.

Le palier se change sans demander : quand un signal arrive, la session change la ligne, relance `maj.py`, et le dit en une ligne dans son compte rendu (c'est réversible ; redescendre se fait de même). Jamais par anticipation : un signal, pas une intuition qu'il viendra.

## Faire remonter (dès P1)

Un projet fait ce qu'il veut chez lui. Quand une session y trouve une façon de faire qui servirait ailleurs (une règle, un outil, une méthode), elle la propose en PR à `base-projets`, sans attendre qu'on le lui demande : la retouche, dite sans aucun mot du produit, et une ligne sur d'où elle vient. Puis elle lance, dans le cloud, une session neuve sur `base-projets` avec ce seul message : « Lis juge/CONSIGNE.md et juge la PR #<n>. » Ce n'est jamais la session qui propose qui juge.

Le juge n'a pas le contexte des projets, seulement les principes de Gildas (`juge/PRINCIPES.md`). Il accepte ce qui est « Gildas-compatible » et le fusionne, renvoie au projet ce qui ne tenait qu'à lui (« reste au projet », avec la raison : la session le met dans son PROJET.md), et ne remonte à Gildas que ce qui touche à un de ses choix.

## Les copies (dès P1)

Une même règle, un même outil ou un même texte peut vivre en plusieurs copies : la base et un projet, le CLAUDE.md global de Gildas et la base, deux projets. C'est permis, et parfois voulu : deux copies qui ne se parlent pas peuvent diverger exprès. Ce qui ne l'est pas, c'est une copie dont on ne sait rien. Chaque copie dit, en tête ou à côté (un commentaire, une ligne) :

- **d'où elle vient** : la source, et la version quand il y en a une ;
- **pourquoi elle existe** : ce que la copie permet que la source ne permettait pas (être lue hors des dépôts, marcher sans réseau, diverger pour ce projet) ;
- **le sens de la mise à jour** : *descend* (la source gagne ; une retouche ici remonte en PR), *remonte* (cette copie est en avance et propose à la source), ou *aucun* (elles divergent exprès ; dire pourquoi).

Les copies que fait `maj.py` portent déjà leur en-tête (*descend*). Une session qui trouve une copie muette lui ajoute ces trois lignes, d'après `git log` ; si le sens ne se déduit pas, elle met *aucun* et le dit dans son compte rendu.

## Gildas ne décide que la release (dès P1)

Gildas ne valide rien en cours de route et n'a aucune commande à connaître : ouvrir, livrer sur `main` et fermer un sujet se font sans lui. Pas de commande, de bouton ni de rituel à lui proposer pour le fonctionnement courant : un raccourci reste une chose à penser (2026-11-06). On ne lui remonte que ce qu'il est seul à pouvoir trancher.

Tout est un essai jusqu'à la release. Dès P3, un sujet passe par des étapes, dans l'ordre qu'il faut, avec des retours en arrière :

- **Réflexions** : Discussions GitHub (catégorie Ideas), specs, conversations. Une idée, un principe, une question ouverte ou une piste qu'on ne fait pas encore va dans une Discussion, pas dans une issue : une issue est du travail à faire (demandé par Gildas le 2026-11-14). Quand une réflexion mûrit, on en tire une issue, qui cite la Discussion.
- **Maquettes** : le canvas du sujet.
- **Dev** : le dossier du sujet, puis `main`. Tout y reste un essai.
- **Prod** : change le canvas de la prod.
- **Release** : ce qui sort publiquement, avec ce que ça change sur le site. Seule étape que Gildas décide.

## Découper, refondre (dès P2)

Un projet qui ne tient pas dans une PR se découpe avant de coder, en usages et non en couches : le skill `decouper` (`.claude/skills/decouper/SKILL.md`) se charge seul quand un tel projet démarre.

Avant de refondre un écran, et chaque fois qu'un travail glisse : le skill `refondre` (`.claude/skills/refondre/SKILL.md`). Une refonte change la forme, pas ce que fait l'app ; ce qui marche se déplace sans se réécrire ; rien n'est fini sans l'ancien écran posé à côté du nouveau.

## Les essais derrière un interrupteur (dès P3)

Un essai risqué pour la suite part derrière un interrupteur, coupé en bêta et en prod, **toujours allumé en dev** : Gildas est le cobaye. Un interrupteur ne dure pas. Soit l'essai est utilisé et il sort vite de derrière son interrupteur, soit on le retire du code. Jamais d'essai coupé partout « pour plus tard ». Un essai entre avec sa fiche : la question, la mesure, l'arrivée et l'échéance (deux semaines) ; à l'échéance, il passe en bêta ou en prod, est prolongé une fois avec une raison, ou est retiré.

## Ce que Gildas a tranché ne revient pas (dès P1)

Un texte, un titre, un réglage ou un choix d'interface changé exprès ne revient pas à son ancienne forme sans que Gildas le demande. Avant de changer un texte, regarder d'où il vient (`git log -S '<texte>'`). Un exemple dans la documentation qui contredit le produit se corrige dans le même commit, pas l'inverse. Si le retour est voulu, un commit livré le dit : « Revient sur <hash> : <raison> ». Constater qu'une décision est dépassée n'est pas y revenir : voir « Où écrire, où lire ».

## Les specs disent le quoi, pas le comment (dès P1)

Une spec (`SPEC-*.md`) fixe le **quoi** : ce que Gildas veut obtenir, ce qu'il a tranché, les limites (RGPD, jamais par défaut, rien d'effacé…). Le **comment** qu'elle décrit (formats, débits, découpages, étapes, ordre de travail) n'est qu'une hypothèse du jour, faite pour changer.

- Si un autre chemin mène au même résultat plus vite, plus simplement ou mieux, le prendre, sans demander la permission à la spec.
- Ne jamais bloquer, ni refuser une idée, parce que « la spec dit autrement ». Seul le quoi compte : en cas de doute sur le quoi, demander à Gildas.
- Une fois le chemin changé, mettre la spec à jour pour qu'elle dise ce qui a été fait. Elle suit le code, pas l'inverse.

## Où écrire, où lire (dès P3 ; avant, le README au présent)

Une session lit d'abord la page du produit, et ne va au reste que si elle en a besoin. Après son travail, elle écrit chaque chose à sa place :

| À écrire | Où | Exemple |
|---|---|---|
| Ce que fait le produit maintenant | **La page du produit** (un accueil, puis une page par partie), au présent, sans date | « Le son est allégé dès que la transcription est relue. » |
| Pourquoi c'est ainsi | **Le registre des décisions**, une ligne chacune : le choix, sa raison, ce à quoi il répondait, la date, la source | « Pas de Whisper dans l'interface : il inventait du texte sur les silences, et le choix de qualité embrouillait. 27 oct., Gildas. » |
| Ce qui s'est passé : essai, mesure, incident, retour en arrière | **L'historique**, daté | « 12 nov. : l'allègement n'attend plus un jour. » |
| Deux docs qui se contredisent, ou une doc et le produit | **Les écarts connus**, une ligne, sans trancher seul | « Le README dit pas d'Android en prod ; le code l'a depuis la 0.24.0. » |

Quand le produit change, la phrase de la page du produit est réécrite, le choix entre au registre s'il en est un, l'ancienne version part dans l'historique : jamais de « (avant : … ; depuis le …) » dans la page du produit.

**Une décision vaut tant que sa raison vaut.** C'est la raison qui guide, pas la phrase. Quand un nouvel objet, une autre méthode ou un mot redéfini la rend sans objet, ou la fait buter contre ce qu'on construit, la session suit l'intention, pas la lettre : elle ne l'applique pas les yeux fermés et ne l'efface pas en silence ; elle la marque « à revoir » avec la raison, et propose la suite. Ce que Gildas a tranché, il le retranche, sur une proposition qui dit ce qui a changé.

Ranger est un travail régulier : un passage récurrent sort ce qui est daté des pages au présent et relève les contradictions, et une mesure (une session neuve qui cherche, sur de vraies questions) dit si l'on trouve toujours vite et juste.

## Plusieurs sessions travaillent en même temps (dès P2)

Gildas fait travailler plusieurs conversations Claude en parallèle sur le même dépôt. Le dossier principal, son index et sa branche courante sont communs à toutes : une session qui y change de branche, ou qui y indexe « tout », emporte le travail des autres dans ses commits, ou le fait disparaître du dossier.

Donc, **une branche et une worktree par sujet** (pas par conversation) :

- **Un sujet = une branche = un dossier** à côté du dépôt (`../<dépôt>-<sujet>`). Toutes les conversations sur un même sujet y travaillent ensemble. Le sujet est celui de la conversation : le reconnaître au début, et le dire. Le dossier existe déjà (`git worktree list`) : y aller et continuer sur sa branche ; sinon, le créer depuis `main`.
- **Une PR par sujet, même dans une seule session** : une session dans le cloud, qui n'a qu'une branche donnée au départ, ouvre une branche et une PR par sujet (`<sujet>` depuis `main`) dès qu'elle passe à un autre sujet, au lieu d'empiler les sujets dans la même PR (demandé par Gildas le 2026-11-06).
- **Le dossier principal reste sur `main`, pour lire** : n'y modifier aucun code, n'y changer de branche (`checkout`, `switch`), n'y faire ni `stash`, ni `reset --hard`, ni `clean`.
- **Indexer et commiter avec des chemins explicites**, même dans le dossier du sujet, puisque d'autres conversations peuvent y travailler en même temps : `git add <fichiers>`, `git commit -m … -- <fichiers>`. Jamais `git add -A`, `git add .`, `git commit -a`.
- **Récupérer ce que les autres ont livré dès qu'on peut** : en reprenant une conversation, avant de commencer un changement, et avant de livrer, `git fetch origin` puis `git rebase origin/main` dans le dossier du sujet. Plus on attend, plus les branches divergent et plus les conflits sont gros.
- **Avant chaque commit** : `git branch --show-current` et `git diff --cached --stat`, pour vérifier la branche et ce qui part.
- **Livrer sur `main`** : sans demander, dès que le travail du sujet est fini et prouvé. En cas de conflit : garder les deux intentions, jamais écraser.
- **Fermer** : rien à demander à Gildas ; un dossier et une branche dont tout le contenu est sur `main` se retirent, si personne n'y travaille.

## La machine (dès P1)

Le Mac de Gildas est un M1 à 8 Go.

- **Une compilation à la fois** : il rame dès que deux conversations compilent ensemble. Au plus deux sessions locales qui travaillent en même temps, celles des autres conversations comprises ; une lancée en plus attend qu'une se libère.
- **Répartir par ressource** : le cloud pour ce qui n'a pas besoin du Mac (specs, maquettes, recherches, code qui se compile sous Linux), le Mac pour ce qui en a besoin. Limiter ce qui consomme, pas le nombre de conversations.
- **Aiguiller avant de lancer** : tout travail qui n'a pas besoin du Mac (son écran, son son, un appareil relié, un outil, une clé ou des données qui n'existent que là) part dans une session du cloud, lancée par la conversation elle-même, sans attendre qu'on le lui demande : cette règle vaut la demande. Le Mac ne garde que la part qui en a besoin, et prend l'écran le moins longtemps possible. Si l'outil redemande un clic à Gildas pour démarrer la session, le dire dans la ligne qui annonce le lancement. Ce qui, dans un projet, demande le Mac est listé dans son PROJET.md (Gildas, 23 novembre).
- **Rien sur la vue de Gildas** : les automatismes (bancs, captures, comparaisons, release) ne prennent jamais son écran ni son clavier ; il doit pouvoir travailler pendant qu'ils tournent. Ce qui se montre quand même se dit avant de le lancer, jamais après qu'il s'en plaigne.
- **Xcode** : après une mise à jour, accepter la licence (`sudo xcodebuild -license accept`, son mot de passe) ; sans elle, git s'arrête partout.

## Prouver sans Gildas (dès P1 ; tests et comparaisons dès P3)

Les essais sont notre travail, pas le sien : jamais de liste d'essais à lui faire faire. Un changement se prouve sans humain : en P1 et P2, le montrer marcher suffit (une commande, une image) ; dès P3, deux versions comparées sur un corpus fictif, des tests. On ne lui laisse que ce qui demande vraiment un humain, dit en une phrase.

Dans les données, on ne supprime pas, on range : ce qui est faux, en double ou hors sujet se cache, avec sa raison ; caché se rattrape, supprimé non (2026-11-04). Détruire reste un geste de l'utilisateur.

## Rendre compte (dès P1)

- **Pas de tunnel** : pas de dizaines de minutes sans rien à voir. Des pas de 20 à 30 minutes au plus, chacun fini et montré avant d'ouvrir le suivant ; un seul chantier ouvert à la fois (2026-11-12).
- **Au-delà de 5 minutes**, dire avant de lancer : quoi, pourquoi, combien de temps (une fourchette). Une commande longue par appel. Un délai promis se tient.
- **Des heures**, pas « bientôt » : une heure par étape restante, avec ce qui peut la faire glisser ; une heure dépassée se dit, avec une nouvelle.
- **Des rapports actionnables** : le problème avant ce qui est fait, un repère court par point (voir « Repères dans les listes »), un lien vers le commit, l'issue ou le fichier.
- **Peu de conversations** : archiver celles qui sont finies, regrouper celles qui peuvent l'être ; jamais une qui travaille ou attend Gildas.
- **Une tâche planifiée ne laisse jamais son résultat seulement dans sa conversation** : il s'écrit dans le dépôt, même en cas d'échec.

## Repères dans les listes (dès P1)

Chaque point d'une liste qu'on peut vouloir désigner porte un repère court : une lettre qui dit le genre de la liste, puis un numéro (D1 décision, N1 livré, S1 à surveiller, Q1 question, R1 risque, E1 étape…). Dans une même conversation, les numéros continuent d'un message à l'autre (D5 après D4) ; jamais deux listes « 1, 2, 3 » qu'on pourrait confondre.

## Recherches (dès P1)

Une recherche se fixe un objectif chiffré, un gain et jamais une taille d'échantillon, et passe à la suivante dès qu'il est atteint (80/20). Chacun de ses résultats se vend, qu'il dise oui ou non (la recherche, elle, peut échouer) : il dit où il servirait dans le produit, et devient une proposition de code dans la spec et l'issue du sujet. Le compte rendu de chaque passage s'écrit dans le dépôt.
