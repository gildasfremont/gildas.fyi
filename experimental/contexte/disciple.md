# Disciple : dossier complet

Projet expérimental de Gildas Frémont, directeur produit freelance (https://gildas.fyi).
Page publique : https://gildas.fyi/experimental/disciple
Statut : prototype fonctionnel, construit du 22 au 31 mars 2026. Dépôt privé.
Écrit avec Claude Code.

## Le pari

« Personne ne veut un agent, les gens veulent résoudre quelque chose » (notes de réflexion du projet). Si l'unité de base est le travail à faire, un architecte peut en tirer un plan, un orchestrateur peut le répartir et juger les résultats, et des agents d'exécution peuvent travailler et s'améliorer par la mémoire, sans que l'utilisateur ait à parler d'outils.

## Le modèle

- L'architecte : pose les questions utiles et produit le plan.
- L'orchestrateur : distribue les tâches, en parallèle quand c'est possible, relance, juge les livrables.
- Les agents d'exécution : définis par l'utilisateur, ils exécutent et gardent la mémoire de ce qui a marché.
- Séparation entre obligations de moyens (les agents suivent une méthode) et obligations de résultat (l'orchestrateur juge le livrable contre l'objectif).

## Chronologie

- 22 mars 2026 : premier commit, tâches en parallèle, passage de YAML à SQLite (7 tâches dont 3 en parallèle validées).
- 23 mars : interface refaite (niveaux de gris, sans emoji), passage par la ligne de commande Claude Code pour utiliser l'abonnement, accueil, sessions de test 1 à 7.
- 24 mars : budget maximum par exécution, backlog de 47 idées en 11 thèmes, une trentaine implémentées, validation sur 5 personas.
- 28 mars : suites de recette et de bout en bout (sessions 8, 9 et 10), boucle de retour, journaux structurés, intégration continue.
- 30-31 mars : le fichier principal est découpé en six modules. Dernier commit.

## Méthode de test

Les tests ont été joués par des personas : cinq profils de métier et un testeur de recette.

## Essais et erreurs

- L'architecte interrogeait au lieu d'agir : à la première session, les trois personas restent bloqués dans un questionnaire, parce qu'en ligne de commande l'architecte n'avait pas accès aux outils natifs. Les appels d'outils ont été simulés en JSON dans le texte ; à la session suivante, chaque persona obtenait son plan en un seul échange.
- Premier run complet en environ 3 minutes (session 7).
- Débordement de contexte : 3 tâches sur 5 et 3 sur 6 réussies, puis 6 sur 6, 7 sur 7 et 6 sur 6 avec une fenêtre glissante sur l'historique.
- Coût : 5 exécutions pour 1,53 $ au total.
- Recette : session 9 à 56 vérifications sur 56, session 10 à 207 sur 216 sur 13 scénarios, avec des évaluations en trois couches qui notent les résultats plutôt que le chemin.

## Ce que ça a donné

Un prototype de bout en bout : conversation avec l'architecte, plan, orchestration, livrables, flux en direct, mémoire, intégration continue. Backlog de 47 idées, dont une trentaine implémentées le 24 mars.

## Chiffres

84 commits du 22 au 31 mars 2026. Stack : Python, FastAPI, uvicorn, SQLite, SDK Anthropic, Claude Code en ligne de commande, événements serveur (SSE), GitHub Actions.

## Principes

- « Personne ne veut un agent, les gens veulent résoudre quelque chose » : l'unité de base est le travail.
- Séparer celui qui planifie, celui qui juge et celui qui exécute.
- Obligation de moyens pour les agents, obligation de résultat pour l'orchestrateur.
- Noter les résultats, pas le chemin.
- Un budget maximum par exécution, en jetons et en temps.

## Modèle de données

Travail (job : entrées, sorties, contrat de validation, agents, conversation avec l'architecte, coût visé) ; Tâche (ordre, agent, modèle, budget, format) ; Agent (prompt système, modèle, outils, droits) ; Exécution (plan, statut, coût, jetons, retour) ; Exécution de tâche (tentatives, durée, remplissage du contexte, replan) ; Mémoire d'agent (forces, faiblesses, note) ; Règle apprise (déclencheur, action, confiance).

## Lieux (breadboard)

Travaux, Travail (discuter avec l'architecte, entrées et sorties, lancer, tâches, agent), Exécution (plan, arrêter, reprendre, valider, évaluer), Agents.
