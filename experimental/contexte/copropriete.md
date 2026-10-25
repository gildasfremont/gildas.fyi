# Comptes de copropriété : dossier complet

Projet expérimental de Gildas Frémont, directeur produit freelance (https://gildas.fyi), membre bénévole du conseil syndical d'une copropriété en Seine-Saint-Denis.
Page publique : https://gildas.fyi/experimental/copropriete
Statut : en usage depuis septembre 2026. Outil privé, protégé par mot de passe ; ni le site ni le dépôt ne sont publics.
Écrit avec Claude Code et Cowork.

Ce dossier décrit la méthode et le déroulé. Il ne contient volontairement aucun nom (immeuble, syndic, copropriétaires, fournisseurs), aucun montant réel et aucun numéro de lot.

## Le pari

Un conseil syndical bénévole peut reconstituer seul, à partir des pièces brutes du syndic, des comptes que n'importe quel copropriétaire peut vérifier, et suivre les actions à mener, à condition que chaque chiffre soit calculé depuis des sources citées, mis en cache et recontrôlé automatiquement, et que chaque action soit une issue GitHub.

## Contexte

Changement de syndic et réclamation à chiffrer contre l'ancien. Les sources disponibles : le grand livre tenu par l'ancien syndic, et l'espace documents du nouveau. Le grand livre sert d'étalon de comparaison, jamais de source.

## La méthode de calcul (fixée le 3 octobre 2026)

Pour tout chiffre reconstitué à partir de plusieurs sources :

1. Les données d'entrée vont dans un CSV, une ligne par valeur, avec une colonne `source` (document, page, compte, date).
2. La méthode reste dans le code, dans une fonction `calculer…()` commentée qui dit ce qu'on soustrait de quoi et quelle source prime (52 modules de ce type).
3. Le résultat est mis en cache dans un CSV par un script lancé à la main (8 scripts), avec les valeurs intermédiaires et leurs sources. Le site lit le cache et ne recalcule pas.
4. Un contrôle refait le calcul et signale un cache périmé, avec la commande à relancer.
5. Le site montre les composantes du chiffre et leurs sources en légende.
6. Le README décrit les fichiers et la commande de régénération.

Une valeur déduite par l'outil et non arrêtée par le syndic porte la mention « non arrêté par le syndic ». Quand des pièces manquent (avis d'appel de fonds par exemple), les valeurs sont reconstituées lot par lot, marquées « déduite », et chaque décision de reconstitution est tracée dans un registre.

## Les contrôles

59 règles numérotées, recalculées à chaque déploiement et toutes les heures, affichées sur une page dédiée avec un bandeau d'alerte sur l'accueil. Elles couvrent : doublons de pièces, pièces d'un autre immeuble, pointage, compte d'attente, paie, échéances, respect du protocole des issues, cohérence de la partie double, répartition des charges, fraîcheur des caches. La partie double est reconstituée pièce par pièce, sans reprendre le grand livre du syndic.

## Les actions comme issues GitHub

- Arbre objectifs → problèmes → solutions, adopté le 25 septembre 2026.
- Une solution porte une action, un canal, un critère « terminé quand » et un seul label de statut (à faire, attente syndic, attente conseil syndical, attente tiers, bloqué).
- Le site lit le corps des issues par leurs intitulés et un bloc caché.
- Le tableau de suivi GitHub se déduit des issues et ne se modifie jamais à la main.
- Au 24 octobre 2026 : 91 issues (80 ouvertes), 19 problèmes et 66 solutions. Objectifs : trésorerie 46, légalité 46, recouvrement 39, salubrité 30, valorisation 20 (une issue peut en servir plusieurs). Statuts : à faire 39, attente syndic 16, bloqué 7, attente conseil syndical 7, attente tiers 2.

## Partage avec les copropriétaires

Un script exporte une liste blanche de fichiers vers un dépôt partagé, et bloque l'export s'il trouve des termes, chemins, adresses mail ou numéros de téléphone interdits. Il sait aussi réimporter une contribution en gardant son auteur. Le site lui-même existe en une seule version, derrière un mot de passe, où seuls les numéros de sécurité sociale et les IBAN sont masqués dans les extraits de recherche.

## Chronologie

- 23 septembre 2026 : premier commit. 1 520 documents relevés (métadonnées, texte, OCR), rapprochement des dépenses avec les pièces de 2017 à 2026, pointage pièce par pièce de 2023 (91 lignes justifiées sur 92), 2024 (91 sur 95), 2025 et 2026.
- 24 septembre : dossier de réclamation chiffré (PDF de 14 pages généré par script). Protocole de travail écrit. Tableau de suivi mis à jour chaque heure par un agent local. File de commandes GitHub exécutées sur le Mac.
- 25 septembre : issues restructurées en arbre, file de commandes abandonnée, première version du site Next.js.
- 26 septembre : système graphique, export automatique des issues vers le site.
- 28-29 septembre : eau et compteurs par lot, fournisseurs, devis, assurance reliée aux sinistres, règlement de copropriété comparé aux clés de répartition.
- 1er octobre : les noms propres quittent le code et passent dans les données.
- 2 octobre : page des flux (ancienneté des impayés, factures à payer), suppression de la section « Caisse ». Début du travail en parallèle dans plusieurs worktrees fusionnés par pull request.
- 3 octobre : la méthode de calcul en six étapes.
- 4-6 octobre : refonte de la trésorerie (appelé, reçu, écart par enveloppe).
- 7 octobre : journée de 58 commits. Constat : l'eau répartie par l'ancien syndic égale les factures du distributeur sur 2017-2025.
- 19-20 octobre : dépôt partagé avec les copropriétaires, calendrier exporté en .ics, protocole nettoyé de ce qui ne se pratiquait pas.
- 21 octobre : dernier commit à date.

## Essais et erreurs

- File de commandes GitHub déposées par les conversations et jouées par un script sur le Mac : mise en place le 24 septembre, abandonnée le 25. Les conversations lancent git et gh directement.
- Issues à plat : restructurées en arbre le 25 septembre.
- Conversation « tour de contrôle » chargée de surveiller l'avancement, et miroir des fiches dans un projet Claude : retirés le 20 octobre ; la page des contrôles montre les retards.
- Version du site réservée au conseil syndical avec noms masqués : abandonnée pour une version unique.
- Section « Caisse » : supprimée le 2 octobre, ses pages réparties ailleurs.

## Ce que ça a donné

Un site en lecture seule, 15 fiches de connaissance, une centaine de fichiers comptables, 20 courriers, un dossier de réclamation, 8 fiches de chantier, un dossier d'assemblée générale, un calendrier et un dépôt partagé.

## Chiffres

- 433 commits du 23 septembre au 21 octobre 2026, sur 17 jours actifs, dont 129 signés par Claude.
- Environ 22 500 lignes de TypeScript.
- Stack : Next.js 16, React 19, TypeScript, scripts Python, tesseract, GitHub Actions, launchd, Vercel.

## Principes

- Un fait va dans une fiche, une action va dans une issue.
- Le grand livre de l'ancien syndic sert d'étalon, jamais de source.
- Une valeur déduite porte la mention « non arrêté par le syndic » ; chaque décision de reconstitution est tracée.
- Le site ne recalcule rien : il lit des caches qu'un contrôle vérifie.
- Le tableau de suivi se déduit des issues ; les jalons ne servent qu'aux échéances réelles.
- Le site est en lecture seule ; les actions vivent dans GitHub.

## Modèle de données (simplifié)

Pièce (type, date, rubrique) ; Dépense (enveloppe, fournisseur, exercice, montant, pièces, statut justifiée ou sans pièce) ; Enveloppe (type courant, travaux ou fonds, exercice, vote, décision, appelé, encaissé, dépensé) ; Appel de fonds (lot, enveloppe, clé de répartition, quote-part, source) ; Lot (numéro, tantièmes, compte, relevés d'eau, mutations) ; Mouvement bancaire (relevé, page, date, entrée, sortie, pièces, dépenses) ; Écriture en partie double (journal, lignes, pièces, lettrage) ; Décision d'AG (issue, état d'exécution, sujet) ; Problème et Solution lus depuis les issues GitHub (résolu quand, objectifs ; ce qu'on fait, canal, terminé quand, bloqué par, statut). Également : facture, paiement, fournisseur, contrat, devis, chantier, sinistre, partie commune, fil d'échanges.

## Lieux du site (breadboard)

Trésorerie, Enveloppes, Dépense (avec pièce en panneau), Charges par thème, Appels de fonds (avec simulateur de clés de répartition), À traiter (sujets, devis, factures à pointer, sinistres), AG, Calendrier (export .ics), Lots, Fournisseurs, Documents, Contrôles (dont la partie double), recherche globale.

## Anecdotes

- Le 7 octobre 2026, journée de 58 commits, l'outil a établi que l'eau répartie par l'ancien syndic égalait exactement les factures du distributeur sur 2017-2025.
