# Planchettes: full write-up

Experimental project by Gildas Frémont, freelance product director (https://gildas.fyi).
Public page: https://gildas.fyi/en/experimental/planchettes
Status: prototype built on November 25, 2026, in one day. Private source code.
Built with Claude Code (commits co-signed by Claude).
French version: https://gildas.fyi/experimental/contexte/planchettes.md

## The bet

You hand over any picture (a monument, a house, an object) and the number of wooden planks you have (1 × 3 × 15 format). Claude recognizes the subject and invents a construction that looks like it; a deterministic program checks that it stands up and that a child can build it, then draws wordless, black-and-white A4 instructions that a four- or five-year-old can follow alone.

## Who does what

- **Claude looks and writes the model**, as text: recognize the subject, measure its silhouette and proportions, split it into parts (legs, platforms, spire), pick the smallest scale at which it still looks right, translate into planks (a curve becomes a staircase, an overhang a corbel), invent what can't be seen, often by symmetry.
- **The program judges and draws**: overlaps, gravity, references (each plank must be placeable exactly), plank count, then the instructions.

## The model

A text file (keywords in French). Unit: the thickness of a plank (7.8 mm); a plank is 1 × 3 × 15.

```
nom: Le pont

etape        # the walkway, on the floor: it sets the gap between the piers
plat-x 0 -3 0

etape        # the two piers
plat-y 0 0 0
plat-y 12 0 0
repeter 6 0 0 1   # 6 times, one thickness higher each time
```

- Orientations: flat (`plat`), on edge (`chant`), upright (`debout`), along the axis of the long dimension.
- `repeter` (repeat), `progression` (one more repetition each time, with turns), `bloc` and `poser` (a reusable part, such as an Eiffel Tower leg), `miroir` (mirror).
- `retirer` (remove): a temporary plank (a spacer, a prop) taken out once it has served.
- `tourner A`: a plank at an angle, any angle around the vertical axis.
- `pencher` (lean): the plank tips until it rests on something. `etape ensemble`: planks placed at the same time, like the two legs of an A.
- At the top: `planchettes: N` (a ceiling, 195 by default: a box of 200 minus the ones that get lost), `age: N`, `niveau:` (level).

## The instructions

- Header: the finished model in perspective, its flat views (front, sides, back, top, minus those that repeat), the total plank count.
- Each step in isometric view: the plank to take, in the right orientation, and how many; the result; what the step adds, in gray.
- A repeated gesture is shown once in gray, the next one dashed, "×N", then the result.
- Planks hiding what you're placing turn transparent; nothing is removed from the drawing. Zoom is reserved for fiddly steps (a lintel, an upright plank) that would be unreadable in the overall view. The last panel always shows the finished model, opaque.
- Several pages when a drawn plank would be thinner than about 1.7 mm: as few pages as possible, each filled as well as it can be.
- An arrow shows which way to slide out a temporary plank.

## Tools for Claude (MCP server)

- `verifier` (check): does it stand? If not, every problem at once, with the model line at fault. Also reports proportions, volume and age-based advice.
- `voir` (see): an image of the finished model.
- `notice`: the PDF.
- `exemple`: working models, to learn the syntax.
- When the age or the number of planks is missing, the server asks the user in a form, once.

## Principles

- **Simplest first**: a single answer, the simplest construction that looks like the subject. Fewer planks, easier gestures (flat rather than on edge, on edge rather than upright, straight rather than angled).
- **Resemblance first, volume second**: aim for 3D, which you recognize by walking around it, but a 3D version with the wrong proportions looks less like the subject than an accurate facade.
- **"It stands" is not "it's buildable"**: the program doesn't refuse, it advises (sessions, hard gestures, domino effect).

## Timeline (November 25, 2026, Paris time)

- 10:40: first commit, already a rendering engine, gravity and reference checks, eight models. Four minutes later, mentions of the toy brand are removed from the code.
- 11:31: multi-page instructions, progressions, reusable blocks, repeated gestures. 11:34: a 245-plank fortress.
- 11:36 to 12:02: plank budget, zoom on fiddly steps, transparency instead of removal, same viewpoint across a page.
- 13:03: roadmap, "simplest first" principle. 13:07: the MCP server.
- 13:29 to 13:37: temporary planks, age and volume advice, the "who is it for?" form.
- 13:40: the Eiffel Tower in 3D, 103 planks, the first real test. 13:47: "resemblance first, volume second" principle.
- 13:53 to 14:35: the Bibliothèque nationale de France (152 planks), the Arc de Triomphe, lessons from the BnF (sessions, mirror, volume at equal width), the Sacré-Cœur at 200 and 400 planks (173 and 291 used).
- 14:47 to 14:53: the pyramids of Giza, then Khufu alone.
- 15:19: angled planks. Example: the twisted tower.
- 17:38 to 18:51: advice for a plank leaning against another, domino effect; leaning planks, 3D gravity with friction; a Breton house and a church.
- 19:28: "place together", two planks as an A; the church spire in two pairs.

## Trial and error

- **The Eiffel Tower**: the facade (50 planks) has the monument's proportions (height 2.7 times the width, 2.6 for the real one); the 3D version (103) gets the legs and arches back but turns squat (1.2) and looks less like it. Hence "resemblance first". Another lesson: a lying plank is always 15 long along its length; to taper a subject in both directions you need upright planks, or plank ends sticking out less and less.
- **References accepted placements no one could guess**: "touches a plank" doesn't say where along the other one. A "guessable position" check is still to write.
- **The BnF**: 152 planks out of 195; the budget wasn't the limit, patience was. Hence sessions. With upright planks, the L-shaped towers looked more like the real thing (64 planks) but were hard before age six: the flat version was kept. A quarter turn fell between two units and was silently rounded.
- **The "who is it for?" form**, in a session launched by another session, came back unanswered without anyone noticing. The message now distinguishes "declined" from "left unanswered".
- **The round spiral staircase** (planks fanned around one end) falls, rightly: it needs a central core.
- **The church spire**: the first version balanced a bar on a post, centered by eye. The program accepted it; Gildas caught it on the instructions. The final version: two A-shaped pairs, no post or bar.
- **The physics**: a plank leaning against a wall holds from about 60° (theory says 59° for a friction coefficient of 0.3); an A on its own holds at 64°, a single leg falls.

## Numbers

- 38 commits on November 25, 2026, between 10:40 and 19:28.
- 31 models, from a small portal to the fortress (245 planks).
- About 2,400 lines of Python: engine and checks (1,682), instructions (502), MCP server (215).
- Dependencies: Pillow, NumPy, SciPy, the MCP SDK.

## To do

- Variable-size motifs (wall, pier, arch, roof, tower), so Claude assembles motifs rather than coordinates.
- A resemblance measure: cut out the subject in the photo and compare its outline with the model's, rendered from the same angle, as a second numeric judge next to "it stands".
- A difficulty score per gesture, to pick the representation that's simplest to build.
- A test bench: a dozen pictures at several budgets.
- Faster checking: 600 planks take about 40 seconds, the church with its leaning planks 83.
- A browser page, with a 3D viewer, usable without Claude.
