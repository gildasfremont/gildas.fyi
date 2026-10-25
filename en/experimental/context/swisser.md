# Swisser: full write-up

An experimental project by Gildas Frémont, freelance product director (https://gildas.fyi).
Public page, with a working demo of the green line: https://gildas.fyi/en/experimental/swisser
Status: local prototype, made on June 1, 2026.
Built with Claude Code, in one afternoon.
French version of this write-up: https://gildas.fyi/experimental/contexte/swisser.md

## The bet, in two stages

First version: a strict typographic layout can come out of two things only, a semantic Markdown document and a font, with a baseline grid computed from the font's metrics (OS/2: units per em, x-height, cap height, ascenders, descenders) and compared, as an overlay, with the grid the browser renders.

After the pivot: you adjust the typography of an existing site by dragging a green line, the average of the visual line endings of a block of text, and the CSS resolves underneath.

## Timeline (June 1, 2026)

- 2:06 p.m.: project created (Vite and TypeScript, no framework, to measure the actual rendering and line things up to the pixel without a reconciliation layer).
- 2:09 p.m.: demo font added.
- 2:22 to 2:27 p.m.: step 1 delivered. Composition engine, declared rhythm in red and measured rhythm in green, breakpoints at 390, 768 and 1,280 px, editing panel.
- 3:42 to 3:52 p.m.: pivot. A real web page, saved, becomes the test ground.
- 3:46 p.m.: the pivot is written into the project's memory.
- 4:47 to 6:26 p.m.: the editor, on a local frame (iframe srcdoc).

## Trial and error

- Misreading the brief: it called for a "horizontal green line," while the object it described, the average of the line endings, is vertical. Claude invented a compromise (a horizontal segment whose right end carried the average) instead of asking, and it was wrong. Rule recorded: when the word and the function contradict each other, follow the function.
- Composition engine dropped at the pivot, after Gildas ruled that it was not what the project needed. Six files deleted: grid calculation, Markdown rendering, font reading (fontkit), overlay, types, demo document.
- Loading a remote site into a frame is blocked by its security headers (X-Frame-Options, CSP), so the editor takes saved or pasted HTML.

## What came out of it

The first increment after the pivot, checked on a sample page: ten text blocks detected, selection, panel, a line you can drag.

## Numbers

About 4 hours 20 minutes of work. About 1,100 lines after the pivot. Stack: Vite 6, TypeScript, SVG for the overlay.

## Principles

- When the word and the function contradict each other in a spec, follow the function.
- No framework, so as to measure after the actual rendering and line things up to the pixel.
- A single source for the font: the browser decodes it to paint, the library reads it to compute.
- You adjust what you see (the average of the line endings); the CSS follows.
