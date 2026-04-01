# L'impersonation : anatomie d'un pattern qui structure un logiciel entier

## L'impersonation

Le terme vient de l'anglais to impersonate : se faire passer pour quelqu'un d'autre, endosser son identité. En informatique, le mot a pris un sens technique précis dans les années 90, d'abord chez Microsoft avec Windows NT. Quand un processus système avait besoin d'exécuter une opération avec les droits d'un utilisateur donné, il « impersonnait » cet utilisateur, c'est-à-dire qu'il empruntait temporairement son contexte de sécurité sans pour autant devenir cet utilisateur. Le mécanisme servait au debug, à l'administration, aux tests de permissions. L'idée fondamentale est celle d'une délégation temporaire et traçable : on agit dans le contexte de quelqu'un d'autre, mais l'action reste attribuée à celui qui l'a initiée.

Chez Lucca, éditeur de logiciels RH en SaaS, le concept a été transposé de l'infrastructure système vers l'interface utilisateur. Quand un administrateur ou un manager doit intervenir dans la vue d'un collaborateur (saisir ses congés, vérifier ses compteurs, ajuster un paramètre), il « impersonne » ce collaborateur. Il voit son écran, avec ses données, dans son contexte, mais chaque action qu'il effectue reste tracée sous sa propre identité. C'est cette transposition, de mécanisme système à pattern d'interface, qui fait tout l'intérêt du concept pour la conception logicielle.

## Ce que l'impersonation résout

Dans les logiciels B2E (ceux qu'on déploie pour les collaborateurs d'une entreprise, pas pour des clients externes), il existe une catégorie de fonctionnalités qu'on pourrait qualifier de structurantes. Ce ne sont pas des features au sens habituel du terme, avec un périmètre fonctionnel net et un ticket Jira associé. Ce sont des mécanismes transversaux qui, une fois posés, contraignent la forme de tout ce qui vient après : la navigation, le nommage des vues, le modèle de permissions, la traçabilité des actions. L'impersonation en fait partie.

### Le problème qu'on ne voit pas tout de suite

Un logiciel RH comme ceux de Lucca présente à chaque collaborateur une vue qui lui est propre : ses congés, ses notes de frais, ses entretiens. C'est sa vue, avec ses données. Sauf que dans la réalité d'une entreprise, cette vue personnelle doit régulièrement être consultée ou modifiée par quelqu'un d'autre, un manager qui valide, une secrétaire qui saisit les congés d'un responsable absent, un administrateur qui diagnostique un problème de paramétrage.

La question naïve serait : on crée une vue d'administration séparée, non ? C'est ce que font la plupart des logiciels. Et c'est là que les ennuis commencent. Parce qu'une vue d'administration séparée, c'est une vue qui doit dupliquer une partie de l'information de la vue collaborateur, avec ses propres règles d'affichage, ses propres formulaires, ses propres cas limites. On se retrouve à maintenir deux représentations du même modèle de données, qui divergent mécaniquement avec le temps. L'admin voit quelque chose, le collaborateur en voit une autre, et personne ne comprend pourquoi « ça ne correspond pas ».

### La réponse par l'impersonation

Concrètement, dans l'interface, ça prend la forme d'un sélecteur de collaborateur intégré à la vue principale. Quand un manager sélectionne un membre de son équipe, l'interface se reformate pour afficher ce que ce collaborateur voit, avec ses données, son contexte. Les actions effectuées dans ce mode sont attribuées à l'imitateur, pas à l'imité, ce qui préserve l'audit trail. Il n'y a qu'une seule vue à maintenir, et l'application en tant que pattern UI a des conséquences qui dépassent la commodité technique.

### La contrainte créatrice

Ce qui rend l'impersonation intéressante d'un point de vue conception, ce n'est pas le mécanisme en lui-même (un dropdown et un changement de contexte, techniquement c'est banal). C'est l'ensemble des contraintes qu'elle impose au reste du logiciel, et qui finissent par en améliorer la cohérence.

Prenons le nommage des vues. Si la vue principale d'un collaborateur peut être consultée par quelqu'un d'autre via impersonation, on ne peut plus nommer cette vue « Mes congés » ou « Mon planning ». Le pronom possessif ne fonctionne plus dès qu'un manager y accède pour le compte d'un membre de son équipe. On est forcé de trouver des noms neutres, qui décrivent la ressource ou l'opération plutôt que la relation de propriété : « Demandes », « Planning », « Compte ». C'est une contrainte, mais elle produit une nomenclature plus claire et plus cohérente, y compris pour l'utilisateur principal.

Même logique pour la navigation. Si l'impersonation existe, la navigation doit refléter le workflow du logiciel plutôt que les rôles des utilisateurs. On ne peut pas organiser le menu en « vue collaborateur / vue manager / vue admin » parce que l'impersonation fait précisément sauter cette frontière. Le menu doit représenter les étapes du processus métier, la demande, l'approbation, le traitement, le paramétrage, et les permissions déterminent ce qui est visible ou non, pas la structure du menu elle-même. Là encore, la contrainte produit un résultat meilleur que ce qu'on aurait obtenu sans elle.

La distinction entre l'auteur d'une action et le propriétaire d'une ressource devient explicite. Quand une secrétaire saisit les congés d'un responsable, l'absence appartient au responsable mais l'action de saisie est attribuée à la secrétaire. Cette séparation, qui semble évidente une fois formulée, est rarement modélisée proprement dans les logiciels qui n'ont pas d'impersonation. On finit par retrouver des congés posés sans qu'on sache qui les a créés, des modifications sans trace, des conflits d'audit impossibles à résoudre.

## Un pattern qui se perd

Le paradoxe de ce type de pattern, c'est qu'il est difficile à transmettre. Il ne s'enseigne pas dans un composant de design system, il ne se documente pas dans une spec fonctionnelle classique. C'est un principe d'architecture qui doit être compris par les product managers au moment de la conception, bien avant qu'un designer ouvre Figma. Si personne ne le porte activement, il se dilue. Les nouveaux PM conçoivent des vues d'administration séparées parce que c'est le réflexe par défaut, les pronoms possessifs reviennent dans les interfaces, la navigation se réorganise par rôle plutôt que par workflow, et la cohérence qui faisait la force du logiciel s'effrite module par module.

Ce qui m'a conduit à formaliser ce pattern sous la forme contexte-problème-forces-solution-conséquences, c'est ce constat : chez Lucca, l'impersonation avait structuré la première génération de produits mais le savoir s'était perdu. Les équipes utilisaient le mot sans en comprendre les implications architecturales. La formalisation n'a pas pour but de figer un mécanisme (les implémentations peuvent varier) mais de rendre explicites les forces en jeu pour que les décisions de conception restent cohérentes quand les équipes grandissent et que la mémoire institutionnelle se dissout.

## Ce qu'on peut en tirer au-delà de Lucca

L'impersonation n'est pas spécifique aux logiciels RH. Tout logiciel B2B ou B2E dans lequel plusieurs niveaux de rôles interagissent avec les mêmes données se pose la même question : est-ce qu'on duplique les vues par rôle, ou est-ce qu'on construit un mécanisme de changement de contexte ? La réponse dépend de la complexité du modèle de permissions et du nombre de vues concernées, mais la pente naturelle, dupliquer, est presque toujours la mauvaise. Elle crée de la dette de conception avant même qu'une ligne de code soit écrite.

Le point plus général, c'est qu'il existe dans chaque logiciel des choix de conception qui ne ressemblent pas à des features mais qui déterminent la forme de toutes les features à venir. Les identifier, les nommer, les formaliser comme des patterns au sens de Christopher Alexander (contexte, forces, solution), c'est probablement le travail de conception le plus rentable qu'on puisse faire sur un produit mature. Et c'est aussi celui qu'on fait le moins, parce qu'il ne produit pas de livrable visible et qu'il exige de comprendre le logiciel dans sa totalité plutôt que feature par feature.
