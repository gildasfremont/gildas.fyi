# Campagne: full write-up

An experimental project by Gildas Frémont, freelance product director (https://gildas.fyi).
Public page: https://gildas.fyi/en/experimental/campagne
Status: delivered in April 2026. Family use.
Built with Claude Code.
French version of this write-up: https://gildas.fyi/experimental/contexte/campagne.md

This write-up deliberately contains no family names, first names or places. "Campagne" is French for "countryside."

## The bet

A family Google Sheet that no longer does its job (duplicates, rows with no dates, no view of occupancy) can be replaced by a calendar on the phone, with no account and no password, where everyone enters their dates and sees the number of beds taken each night, with color thresholds. The negotiation stays within the family, outside the app.

## Context

A family house that sleeps 32, some sixty members across 8 branches of the family, about 30 expected users. Occupancy thresholds at 17, 27 and 32 beds.

## What the delivered version does

Month and week views, entering stays, identity remembered on the phone, number of beds per night with colored thresholds, member management (add, edit, hide).

## Timeline

- April 10, 2026, 4:40 p.m.: spec.
- April 10, 4:57 p.m.: complete first version (32 files).
- April 10, 5:53 p.m.: fix that removes the made-up first names from the seed data, merged at 9:22 p.m.
- April 10, 9:44 p.m.: instructions file for Claude (CLAUDE.md), with the git workflow and a principles section.
- April 10, evening: all members shown, threshold legend, working instructions for Claude, selecting a period.
- April 11: member management, fixes on the phone, seed data completed.
- May 8: 24 commits by Claude on a working branch: a day view, pages per stay and per member, counters per family branch, a date picker like the ones for booking flights, room assignment.

## Trial and error

- Made-up data: the first prefilled version contained family members who don't exist, added by Claude to fill out the list. The fix dates from 5:53 p.m.; the instructions file, added at 9:44 p.m. the same evening, opens with "Never make up data: stick to the spec." The repository does not say whether one caused the other.
- Room assignment: planned by the spec for a second phase, with a page where an administrator assigns stays to rooms and an alert when a room is overbooked; explored on the May branch.
- Mobile interface: about ten commits on May 8 move controls around.

## What came out of it

The version described in the spec was delivered in two days.

## Numbers

48 commits from April 10 to May 8, 2026, 24 of them on the main branch. Stack: Next.js 16, React 19, TypeScript, Tailwind 4, Vercel Postgres, date-fns, zod.

## Principles

The project's instructions for Claude: never make up data; ask rather than improvise; don't contradict what the user sees; don't add features nobody asked for. The spec: the app shows, the negotiation stays within the family.

## Data model

Family (name, branch, color); Member (family, first name, permanent, hidden); Stay (member, arrival, departure, note); Room (beds, house) and Assignment (room, stay, night), planned for later. No accounts: identity is a local preference.

## Places (breadboard)

One Calendar page (identity, month or week, date selection, stays, member management) and three panels: Stay, Members, and an undo window of five seconds after a deletion.

## Anecdote

Seventeen minutes between the spec and the complete first version (32 files).
