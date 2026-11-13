# Plateaux de Londres: full write-up

An experimental project by Gildas Frémont, freelance product director (https://gildas.fyi).
Public page: https://gildas.fyi/en/experimental/plateaux-de-londres
The site (in French): https://plateaux-de-londres.vercel.app
Status: live since November 12, 2026. Private repository.
Built with Claude Code (commits co-signed by Claude).
French version of this write-up: https://gildas.fyi/experimental/contexte/plateaux-de-londres.md

"Plateaux de Londres" is French for "London sets."

## The bet

A single map can bring together the filming locations of every show set in London and tell you, for each scene, where it's set in the story, where it was actually shot, and which other shows used the same spot. Provided every scene cites a source that was actually read, and nothing is made up: not an episode, not a set of coordinates.

## What the site does

- Home: search (ignores accents and punctuation), the list of shows, best known first, with their logo, network and number of locations; a map of every location, one colour per show.
- Show page: its locations, ranked by number of scenes and filterable by season; under each location, its seasons and episodes, and the logos of other shows filmed there.
- Location page: the place's name and part in each show, a free-licence photo, Street View, seasons and episodes, a "Watch" button to the streaming service, sourced trivia, and sources at the bottom. A dotted line links the filming spot to the place the story names.
- Real places played by others: a page for each (31), listing the places that played it and how far away they are.
- On phones: full-screen location page, map that expands to full screen.
- Every view has a shareable address: `#serie-<id>`, `#serie-<id>/lieu-<id>`, `#lieu-<id>`.

## Three parts

A place plays one part in each show it appears in:
- real: the place is itself (Big Ben is Big Ben);
- made up: a fictional place set in real geography (Slough House, near the Barbican);
- stand-in: one real place plays another (Lancaster House plays Buckingham Palace).

Across the site: 205 real, 216 made up, 74 stand-ins, so 495 parts for 432 places.

## Timeline (November 12, 2026, Paris time)

- 10:01: first commit. Static site (Leaflet, OpenStreetMap tiles), 8 shows (Slow Horses, Ted Lasso, Bridgerton, The Crown, Sherlock, McMafia, MobLand, WAR), 138 locations, 225 scenes, 17 locations shared between shows. Data gathered by four agents, two shows each.
- 10:04: handover prompt for Claude Code on the web: the state of the project, its rules, and seven workstreams in order of priority (check production, a durable base map, timestamps, links to the episode, data quality, missing photos, new shows).
- 10:07 to 10:31: configurable base map (MapTiler or Stadia, key in Vercel environment variables), "Where to watch" links per service and per episode, re-geocoding, episodes filled in; 140 locations, 138 photos.
- 11:06: 15 new shows, the name and part of each place in each show, a stricter merge rule, navigation by show; 23 shows, 357 locations, 659 scenes. The batches run on parallel branches (infrastructure, data, shows, navigation).
- 11:28: Netflix episodes for six of the new shows; 324 photos for 357 locations.
- 12:19: the first four pull requests merged.
- 14:28: interface cut down to three screens (home, show, location seen from a show), white background.
- 16:10: headings in Outfit instead of Bricolage Grotesque; 16:13: in Canal Bold Romain, a typeface supplied by the author.
- 16:26 to 16:40: show logos instead of initials, five to begin with.
- 17:12: show page with tabs, Filming locations and Episodes.
- 17:20: feedback from the "busy CEO" test: map visible on phones, a one-line intro, best-known shows first, a large photo and a main button to watch the episode, a Share button, scroll position kept when going back.
- 17:34: fixes from the QA report: accent-insensitive search, markers limited to the visible area, corrected addresses, an accessibility pass (headings, focus, contrast, touch targets).
- 17:37: show page without tabs, a single list of locations filterable by season; the Canal+ font limited to the characters that render properly.
- 17:41: logos for the remaining 17 shows.
- 17:53: "Did you know?" trivia on the location page.
- 18:21: 6 new shows (Black Mirror, You, Misfits, Luther, Peep Show, The Night Manager), locations added to four shows, 24 sourced trivia items; 29 shows, 425 locations.
- 18:29: on phones, map expandable to full screen.
- 19:13 to 19:39: breadcrumb, ranked and forgiving search, then five versions of the location page in sixteen minutes (part as the lead, a facts panel, sections).
- 19:57: real places played by others.
- 20:04: MobLand, 7 locations added; Killing Eve, Syon House.
- 20:21: MobLand, the Prince's Head as a first-hand sighting.
- 20:23: last commit, merging the day's 39th pull request.

## Trial and error

- Merging places: the first rule (under 60 m, or under 400 m with a distinctive word in common) merged neighbours: the V&A and the Natural History Museum, the St Pancras hotel and station, Richmond Green and its theatre. The rule kept: under 25 m (the same building), or under 400 m with the same name once generic words are removed ("Savoy" = "Savoy Hotel"); shared places were reread one by one. Late in the day, two neighbouring places from the same show under different names stopped merging: the Prince's Head, Paved Court and The Cricketers, 20 m apart, had become a single place.
- Photos: searching Wikipedia by address returned nearby landmarks. An article is kept only if its title matches the place's name; failing that, a Wikimedia Commons photo taken within 60 m.
- Heading typeface: Bricolage Grotesque, Outfit, then Canal Bold Romain, within three minutes. In the Canal+ font, some characters are logos (the middle dot prints CANAL+; `*`, `<` and `>` are logos too) or lose their accents (É, À); a `unicode-range` keeps only the characters that render properly, and the rest falls back to Outfit.
- Show page: tabs for Filming locations / Episodes at 17:12, removed at 17:37 in favour of one list filterable by season.
- Location page: five versions between 19:23 and 19:39, ending in the current structure (part as the lead, a facts panel, sections).
- Closed sources: Londonist, IMDb and movie-locations often refused access; Reddit can't be reached from Claude's environment (403, login wall); some Netflix pages arrive truncated by the proxy (Top Boy, Black Mirror, You), so their links go to the show page.
- Thin shows: I May Destroy You (2 locations) and Criminal Record (7), the detailed sources returning 403 or 404.
- Timestamps: no source read gives the minute of a scene. The episodes will have to be watched.

## Outcome

A public site, live since November 12, 2026, built in one day, from 10:01 to 20:23.

## Numbers

29 shows, 432 locations, 754 scenes, 495 parts. 48 locations shared by at least two shows, the Old Royal Naval College by five. 31 real places played by others, including Buckingham Palace, played by five places. 383 free-licence photos, 21 places with trivia, 289 scenes with an episode number, none with a timestamp. Episode links for 8 Netflix shows. Most cited sources: findthatlocation (128 scenes), Atlas of Wonders (116), Time Out (96), Wikipedia (35). 80 commits and 39 pull requests in one day. Stack: HTML, CSS and JavaScript with no build step (app.js, 840 lines), Leaflet 1.9.4, MapTiler tiles, a Vercel function for configuration, Python scripts to check, merge and illustrate the data.

## Principles (the project's rules for Claude)

- Don't make anything up: every scene cites a source that was read; if the episode or timestamp isn't certain, it stays blank.
- No stills from the shows, which are under copyright: the site gives the moment (season, episode) and a link to the streaming service.
- Coordinates from Wikipedia or OpenStreetMap, never estimated, with the method recorded.
- Interface text and descriptions in French.
- No secrets in the code: keys go in Vercel environment variables.
- A first-hand sighting can stand in for a source for an observation, never for a deduction.

## Data model

One JSON file per show: the show (title, network, years, seasons covered, streaming service) and its locations. Each location has a name, an address, coordinates and their source, a fiction (name in the story, its part in one sentence, type real / made up / stand-in, the place in the story and its coordinates), sourced trivia and scenes (season, episode, year filmed, description, source). One script checks the files, another merges them into a single locations file and works out the real places played by others, a third adds the photos.

## Places (breadboard)

Home (search, shows, map); Show (season filters, locations, map); Location seen from a show; Location, all shows; Real place played by others. A fixed top bar with the breadcrumb and search.

## Anecdotes

- The Prince's Head in Richmond plays the Crown & Anchor in Ted Lasso. In MobLand, its frontage, renamed The Rose and Crown, was recognised on screen by the author. No public source says so; the scene is marked "Seen on screen by the site's author".
- Tate Modern plays all three parts: itself in Killing Eve, a made-up gallery in Fleabag, Met headquarters (standing in for New Scotland Yard) in Bodyguard.
- Lancaster House plays Buckingham Palace in The Crown, Queen Charlotte's residence in Bridgerton and the Palace of Versailles in McMafia.
- Fabric, the nightclub, is itself in Gangs of London and a Berlin club in Killing Eve.
