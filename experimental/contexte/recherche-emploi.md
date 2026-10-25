# Recherche d'emploi tenue par Claude : dossier complet

Projet expérimental de Gildas Frémont, directeur produit freelance (https://gildas.fyi).
Page publique : https://gildas.fyi/experimental/recherche-emploi
Statut : en usage quotidien depuis le 21 octobre 2026. Base de connaissances et outil privés ; l'outil est réservé à un seul compte.
Écrit avec Claude Code et Cowork.
Version anglaise : https://gildas.fyi/en/experimental/context/recherche-emploi.md

Ce dossier décrit le mécanisme. Il ne contient volontairement aucun nom d'entreprise visée, de cabinet ou de recruteur, aucune rémunération et aucun résultat de candidature.

## Le pari

Un agent (Claude) peut faire le travail de fond d'une recherche d'emploi, repérer les offres, les évaluer, tenir le fil des échanges et préparer les candidatures, s'il dispose de deux choses : une base de connaissances sourcée qu'il consulte avant d'écrire, et un registre conçu pour qu'il le remplisse et que l'humain le lise. Principe de l'outil : Claude remplit, Gildas lit, l'outil ne calcule rien.

## Première brique : la base de connaissances (depuis le 17 septembre 2026)

Un dépôt de fichiers texte lu par l'agent autant que par l'humain : profil, fiches d'expérience, fiches sur les entreprises où Gildas a travaillé (chiffres publics, rachats), recommandations, méthode d'écriture, livrables. Un index donne une ligne par fichier avec ses mots-clés, et un mode d'emploi dit à l'agent comment chercher et écrire.

Chaque fait porte un statut :

- Établi : dit par Gildas ou sourcé. Utilisable tel quel.
- À confirmer : extrapolation plausible, jamais validée. Utilisable seulement en le signalant.
- Trou : information manquante. L'agent pose la question au lieu de combler.

Quand Gildas demande un CV, un message ou une préparation d'entretien, Claude cherche d'abord dans la base, cite ses fichiers et n'invente aucun fait.

## Ce qui précédait l'outil

Le suivi des candidatures vivait dans un Google Doc qui atteignait 300 Ko de texte, avec des lignes d'offre de 1 500 caractères, et que plus personne ne pouvait lire.

## Le 20 octobre 2026 : JobSync essayé, puis l'outil construit

- 11 h 15 : installation de JobSync, outil libre (licence MIT) de suivi de candidatures développé par un tiers, dans Docker sous colima.
- L'import par lots de son serveur MCP échoue sur les six lots ; Claude importe 89 offres une par une, puis en ajoute 29.
- 17 h 13 : export complet de JobSync (119 fiches) et abandon. Motifs écrits dans la spécification : son IA intégrée évalue elle-même l'adéquation des offres, alors que c'est le travail confié à Claude ; il n'a pas de fil d'échanges par candidature ; il ne représente pas le processus de recrutement annoncé par l'entreprise ; il tourne en local sur un Mac de 8 Go.
- 17 h 17 : spécification et données de départ rédigées.
- 18 h 42 : première version complète livrée par Claude Code (91 fichiers) : API, serveur MCP, lecture des flux d'offres, import de l'historique, tests.
- 23 h : fusion de la première pull request.

## L'outil

- Trois portes sur la même couche de services : une interface web pour Gildas, une API REST documentée en OpenAPI et un serveur MCP pour l'agent (une soixantaine d'opérations).
- Écritures rejouables sans doublon, journal par auteur (Gildas, l'agent, les tâches planifiées). L'outil n'envoie aucun message ni candidature.
- Lecture quotidienne de 82 flux publics d'offres sur 8 types d'ATS : Ashby, Greenhouse, Lever, Teamtailor, SmartRecruiters, Workable, Recruitee, Personio. Agenda Google en lecture seule, filtré des rendez-vous personnels.
- Interface : une vue du jour, un pipeline avec une charge par colonne, une sélection, cinq entrées de navigation.
- Connexion de l'agent par OAuth 2.1 depuis claude.ai.

## Chronologie

- 17 septembre 2026 : création de la base de connaissances.
- 23 septembre : sourcing d'éditeurs hors des sites d'emploi et treize axes de recherche.
- 20 octobre : JobSync essayé et abandonné, spécification, première version de l'outil.
- 21 octobre : réponses de Gildas intégrées, interface resserrée à cinq entrées, statut « prête à envoyer », trois revues de design, remplissage automatique de la production au déploiement, premier passage des flux en production, connexion OAuth, réponses MCP compactées.
- 22 octobre : agenda filtré.
- depuis : passage quotidien automatique des flux le matin, puis tri par Claude.

## Essais et erreurs

- Réponses MCP trop lourdes pour un agent : compactées et mesurées. Pipeline de 142 à 43 Ko, entreprises de 133 à 25 Ko, vue du jour de 57 à 13 Ko.
- Niveau de priorité C : ajouté le 20 octobre, retiré le 21.
- « Prête à envoyer » : d'abord un drapeau, puis un statut.
- Tâches et automatisations : d'abord des onglets, puis fondues dans d'autres vues.
- Import de l'historique et premier passage des flux : d'abord manuels, puis automatiques au déploiement.
- Jeton passé dans l'URL du MCP : remplacé par OAuth.
- Alerte des flux trop bruyante : rouge seulement après un échec total ou deux échecs de suite.

## Ce que ça a donné

Chaque passage lit environ 3 900 postes, en retient environ 110 qui ressemblent à un poste produit, et ne remonte que les nouveaux : 83 au premier passage en production, puis 1, 0 et 11.

## Chiffres

- 33 commits du 17 septembre au 22 octobre 2026, dont 23 de Claude ; la phase outil tient en trois jours et six pull requests.
- Environ 8 600 lignes de TypeScript au 21 octobre.
- Stack : Next.js 16, React 19, TypeScript, Drizzle, Postgres (Neon), Auth.js (Google), SDK MCP, zod, Vercel Blob, Vercel Cron, Vitest et PGlite.

## Principes (spécification de l'outil)

- « L'outil n'évalue pas les offres, il range l'évaluation que Claude produit. »
- « Un humain doit pouvoir faire tout ce qu'un agent fait, et inversement. »
- Il n'envoie jamais rien : « Il prépare, Gildas envoie. »
- Deux utilisateurs aux besoins opposés : Claude lit et écrit tout ; Gildas veut voir en dix secondes ce qui l'attend et ne saisit presque rien.
- Chaque offre garde le lien de l'annonce d'origine, jamais celui du site d'emploi qui la relaie.
- Réussi quand, en ouvrant une offre, on sait en moins de trente secondes l'étape, les personnes vues, ce qui a été envoyé avec quel CV et ce qui attend.

## Modèle de données

Offre (entité centrale : statut, entreprise, cabinet, flux, url d'origine, évaluation écrite par Claude en liste, tier S/A/B, voie d'entrée et note d'adéquation, qui a la balle, signal de disparition du flux) ; Événement du fil (type, contact, canal, résumé, clé d'idempotence) ; Étape du process (position, état, annoncée ou découverte) ; Entreprise (employeur ou cabinet, tier, page carrières, ATS) ; Flux (ATS, url, état) ; Contact (rôle, type de lien) ; Document (CV, cas, lettre) ; Tâche ; Événement d'agenda ; Drapeau ; Passages d'automatisation ; Journal de qui a écrit quoi.

## Lieux (breadboard)

Interface : Aujourd'hui, Sélection (retenir en S, A ou B, prête à envoyer, écarter), Pipeline, Offre (statut, process, fil, évaluation, contacts, doublons), Entreprise, Contacts, Tâches, Agenda, Documents, Automatisations, Réglages. Agent (MCP), par usage : s'orienter (get_conventions, get_today, search, list_changes), trier (list_triage_queue, qualify_job, set_evaluation, set_ready), suivre (add_event, set_process, contacts, documents, tâches, agenda), veille (run_feeds, set_feed_filter, find_duplicates, merge_jobs).

## Anecdotes

- JobSync a vécu six heures ; son IA intégrée qui évalue les offres était ce que le projet voulait éviter.
- La première réponse MCP du pipeline pesait 142 Ko.
