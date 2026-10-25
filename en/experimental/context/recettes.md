# Recettes: full write-up

An experimental project by Gildas Frémont, freelance product director (https://gildas.fyi).
Public page: https://gildas.fyi/en/experimental/recettes
Live app (in French): https://recettes-gilt.vercel.app
Status: online since June 30, 2026. Private repository.
Built with Claude Code.
French version of this write-up: https://gildas.fyi/experimental/contexte/recettes.md

"Recettes" is French for "recipes."

## The bet

A recipe book kept in a Google Doc can become, in a single day, a small app that is useful in the kitchen and works out each person's share from their profile, with no framework and no build step: static files and JSON data are enough.

## What the app does

- Some forty dishes from southern Europe and the Levant, portioned for a gentle calorie deficit: 12 lunches, 14 dinners, 3 vegetable dishes, 3 curries, 4 stews, 4 extras.
- A list filterable by category and by search (title and ingredients), and a card per recipe with ingredients, macros, "goes well with" pairings and method.
- At the bottom of each dish, the amount for each of the two profiles. Maintenance needs are computed with the Mifflin-St Jeor equation from sex, age, weight, height and activity, then reduced according to the weight-loss goal in kilos per month. Protein is computed too.
- You build the meal (dessert, sides, the day's drinks): the share of the dish goes down by as much, and the rest goes in a doggy bag.
- Pages for needs and principles. Settings kept on the device (localStorage); nothing is sent anywhere.

## Architecture

HTML, CSS and JavaScript with no dependencies, with a small `#hash` router. Recipes live in `recipes.json` and the rest of the content in `content.json`, loaded at startup. Automatic deployment to Vercel on every push.

## Timeline (June 30, 2026)

- 2:17 a.m.: first commit, the static site.
- 2:39 a.m.: "goes well with" pairings.
- 9:02 to 9:21 a.m.: adjustable profiles, doggy bag, drinks; recipes move into editable JSON.
- 9:47 to 10:16 a.m.: profiles now live only in the recipes; meal builder.
- 5:49 to 6:13 p.m.: profiles set by objective criteria and the Mifflin-St Jeor equation, know-how and shopping folded into the recipes, a cleaner interface, a floating bar.

## Trial and error

- Profiles: presets, then sex and a goal in kilos per month, finally objective criteria with a calculation.
- Profiles in a tab, then only at the bottom of each recipe.
- Drinks on the recipe card, then as a checkbox.
- Separate sections for know-how and shopping substitutes, then folded into the ingredients and steps (351 fewer lines).
- Meal builder rewritten with radio buttons and checkboxes.
- Filters in a column, then a discreet column, then a drop-down menu.

## Numbers

12 commits, all on June 30, 2026. About 29 KB of JavaScript, 68 KB of recipe data.

## Principles (the app's "Principes" page)

- One recipe, two plates: quantities for two, split at serving time (at lunch the smaller share is around 40% of the dish, at dinner around a third, rounded out with a yogurt).
- Quantities by raw, dry weight.
- A moderate deficit held over time; a kilo of fat is worth about 7,700 kcal.
- Oil measured to the gram, added raw as a finish.
- Put the calories where they give the most pleasure, and lean on nearly free flavors (salt, lemon, garlic, herbs, sumac, cooking).

## Data model

Recipe (id, category, title, ingredients name→quantity, nutrition, steps, pairing); Pairing (note, sides, some of which point to other recipes); Category; Content (principles, needs); Profile (sex, age, target weight, height, activity, kilos per month), stored on the phone.

## Places (breadboard)

Dishes (search, filters), Recipe (profiles adjustable in place, drinks, dessert and sides, pairings), Needs, Principles.

## Screenshots

The screenshots on the public page come from https://recettes-gilt.vercel.app with the default profiles.
