# Futurun : dossier complet

Projet expérimental de Gildas Frémont, directeur produit freelance (https://gildas.fyi).
Page publique : https://gildas.fyi/experimental/futurun
Statut : en usage personnel depuis le 12 octobre 2026. Dépôt privé.
Écrit avec Claude Code.
Version anglaise : https://gildas.fyi/en/experimental/context/futurun.md

Ce dossier ne contient volontairement aucun solde, aucun établissement nommé et aucune donnée bancaire.

## Le pari

Une seule app, installée chez soi, peut agréger des sources financières hétérogènes (open banking, scraping, API, export CSV, saisie) derrière un contrat de connecteur unique. Elle donne alors un burn rate et un runway fiables, et la seule friction restante, la réauthentification, tient dans un seul écran.

## Le contrat de connecteur

Chaque source est un connecteur qui renvoie des comptes et des transactions, et lève une erreur `ReauthRequired` quand il faut se réauthentifier. Deux modes d'authentification :

- `form` : clé d'API, identifiants, fichier collé ou saisie, via `connect()` ;
- `redirect` : OAuth ou open banking, via `start()` puis `complete()` au retour.

L'écran des connexions liste toutes les sources, celles à renouveler en haut, avec leur formulaire déjà ouvert.

| Connecteur | Méthode | Résultat |
|---|---|---|
| Enable Banking | open banking DSP2 | fonctionne, 5 connexions. Il a fallu une adresse de retour HTTPS sur le réseau local (proxy auto-signé), une adresse de retour fixe pour la liste blanche du prestataire, et un accès professionnel pour une néobanque. |
| woob | scraping de l'espace client, pont Python, identifiants passés par stdin | fonctionne, 2 connexions. Quand le site d'un assureur a changé de page, le module a été corrigé le jour même. |
| CSV | relevé exporté et collé | 1 connexion |
| Saisie manuelle | crédits, prêts amortissables, immobilier | 3 connexions |

## Calculs

- Trésorerie disponible : comptes marqués liquides.
- Burn net : dépenses moins revenus, mensualisés sur 30 et 90 jours, hors virements entre ses propres comptes.
- Runway : trésorerie disponible divisée par le burn.
- Frise du solde projeté sur douze mois.
- Budget : une dépense est un nom et un montant, avec une fréquence et une durée si besoin.

## Chronologie

- 12 octobre 2026 : premier commit (app installable sur téléphone, contrat de connecteur, Enable Banking, Binance, CSV, saisie, burn et runway, secrets chiffrés en AES-256-GCM). Puis connecteur woob, image Docker, lancement en une commande accessible depuis le téléphone sur le même Wi-Fi, écran de procédures par source, deux correctifs du module woob, lanceur Mac en double-clic avec mises à jour, accès professionnel open banking, saisie des crédits, six versions successives du modèle de budget.
- 19 octobre : démarrage automatique avec le Mac, suppression de la barre d'onglets et fusion de l'écran de procédures dans celui des connexions, deux passes de revue d'interface (champs en 16 px pour iPhone, contraste, cibles tactiles, confirmation avant suppression), frise sur douze mois.
- 20 octobre : serveur MCP pour consulter et modifier Futurun depuis une conversation, libellés génériques et panneau de réglages pour qu'une autre personne puisse l'installer.

## Essais et erreurs

- Modèle de budget : au moins six refontes le 12 octobre (postes, dépenses à venir, observé contre estimé) avant la version la plus simple.
- Écran de procédures par source : créé le 12, fusionné le 19.
- Hébergement sur serveur : image Docker et Caddy prêts, en option ; l'app tourne sur le Mac et le téléphone la consulte sur le réseau local.

## Ce que ça a donné

L'app démarre avec le Mac, se synchronise toutes les six heures, s'ouvre sur le téléphone, compte 11 connexions actives, une cinquantaine de tests et un serveur MCP.

## Chiffres

- 77 commits du 12 au 20 octobre 2026, sur trois jours actifs.
- Environ 4 200 lignes de code (logique, MCP, pont woob et interface).
- Stack : Next.js 15, React 19, TypeScript, vitest, zod, SDK MCP, Python et woob, Docker et Caddy en option, launchd.

## Principes

- « Un connecteur par source, chacun avec sa méthode » (README), tous avec le même contrat.
- Les sources à renouveler passent en haut, formulaire ouvert.
- Montants en centimes, en entiers ; secrets chiffrés ; app locale.
- Les virements entre ses propres comptes ne comptent ni comme dépense ni comme revenu.

## Modèle de données

Un fichier JSON : Connexion (connecteur, statut, dernière synchro, secret chiffré) ; Compte (type, solde en centimes, liquide, prêt, niveau calculé disponible, atteignable, bloqué, dette) ; Transaction (compte, date, montant, libellé) ; Dépense à venir (montant, fréquence, nombre de fois, poste, mots de correspondance) ; Poste (sens, mots de correspondance, estimé et observé calculés) ; Réglages.

## Lieux (breadboard)

Synthèse (tuiles, synchroniser, postes, comptes, ajouter un compte, réglages), Dépenses, panneaux Poste, Dépense, Compte (synchroniser, renouveler l'accès, choisir une méthode), Réglages, retour open banking, serveur MCP.
