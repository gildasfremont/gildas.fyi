# Site personnel — Gildas Frémont

## Structure

- `index.html` — version française
- `en.html` — version anglaise
- `style.css` — styles partagés
- `generate-pdf.mjs` — script de génération des PDF via Puppeteer

## Règles de mise à jour du contenu

Quand le contenu textuel change (expériences, paragraphes, sections) :

1. **Traduction** : toujours reporter le changement dans les deux fichiers (`index.html` et `en.html`). Le contenu doit rester synchronisé.
2. **PDF** : regénérer les deux PDF après chaque modification de contenu visible. Le script `generate-pdf.mjs` s'en charge :
   ```
   node generate-pdf.mjs
   ```
   Le serveur local doit tourner (`npx serve`) pour que le script fonctionne. Il clique le toggle contact pour révéler les infos avant impression.
3. **Anti-spam** : les contacts (email, téléphone) sont obfusqués dans le HTML via `data-*` et révélés par JS au clic. Ne jamais mettre l'email ou le téléphone en clair dans le HTML.
