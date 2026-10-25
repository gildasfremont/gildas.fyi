# Job search run by Claude: full write-up

An experimental project by Gildas Frémont, freelance product director (https://gildas.fyi).
Public page: https://gildas.fyi/en/experimental/recherche-emploi
Status: in daily use since October 21, 2026. Private knowledge base and tool; the tool is restricted to a single account.
Built with Claude Code and Cowork.
French version of this write-up: https://gildas.fyi/experimental/contexte/recherche-emploi.md

This write-up describes the mechanism. It deliberately contains no names of target companies, recruitment agencies or recruiters, no compensation and no application outcomes.

## The bet

An agent (Claude) can do the legwork of a job search (spotting openings, assessing them, keeping track of the exchanges and preparing applications) if it has two things: a sourced knowledge base it consults before writing, and a register designed for it to fill in and for the human to read. The tool's principle: Claude fills it in, Gildas reads it, the tool computes nothing.

## First building block: the knowledge base (since September 17, 2026)

A repository of text files read by the agent as much as by the human: profile, experience notes, notes on the companies where Gildas has worked (public figures, acquisitions), recommendations, a writing method, deliverables. An index gives one line per file with its keywords, and a guide tells the agent how to search and write.

Every fact carries a status:

- Established: said by Gildas or sourced. Usable as is.
- To confirm: a plausible extrapolation, never validated. Usable only if flagged as such.
- Gap: missing information. The agent asks instead of filling it in.

When Gildas asks for a resume, a message or interview prep, Claude searches the base first, cites its files and makes up no facts.

## What came before the tool

Application tracking lived in a Google Doc that had grown to 300 KB of text, with 1,500-character lines per opening, and that nobody could read anymore.

## October 20, 2026: JobSync tried, then the tool built

- 11:15 a.m.: installation of JobSync, an open-source (MIT-licensed) application tracker developed by a third party, in Docker under colima.
- Batch import through its MCP server fails on all six batches; Claude imports 89 openings one by one, then adds 29 more.
- 5:13 p.m.: full export from JobSync (119 records) and abandonment. Reasons written into the spec: its built-in AI assesses how well the openings fit, which is the work entrusted to Claude; it has no thread of exchanges per application; it does not represent the hiring process the company announces; it runs locally on a Mac with 8 GB of memory.
- 5:17 p.m.: spec and seed data written.
- 6:42 p.m.: complete first version delivered by Claude Code (91 files): API, MCP server, job feed reader, history import, tests.
- 11 p.m.: first pull request merged.

## The tool

- Three doors onto the same service layer: a web interface for Gildas, a REST API documented in OpenAPI, and an MCP server for the agent (some sixty operations).
- Writes can be replayed without creating duplicates, with a log by author (Gildas, the agent, scheduled jobs). The tool sends no message and no application.
- Daily reading of 82 public job feeds across 8 kinds of ATS: Ashby, Greenhouse, Lever, Teamtailor, SmartRecruiters, Workable, Recruitee, Personio. Google Calendar, read-only, with personal appointments filtered out.
- Interface: a day view, a pipeline with a load per column, a selection, five navigation entries.
- The agent connects through OAuth 2.1 from claude.ai.

## Timeline

- September 17, 2026: knowledge base created.
- September 23: sourcing software companies outside job sites, and thirteen search directions.
- October 20: JobSync tried and dropped, spec, first version of the tool.
- October 21: Gildas's answers integrated, interface tightened to five entries, "ready to send" status, three design reviews, production data filled in automatically on deployment, first production feed run, OAuth connection, compacted MCP responses.
- October 22: calendar filtered.
- Since then: an automatic feed run every morning, then sorting by Claude.

## Trial and error

- MCP responses too heavy for an agent: compacted and measured. Pipeline from 142 to 43 KB, companies from 133 to 25 KB, day view from 57 to 13 KB.
- Priority level C: added on October 20, removed on the 21st.
- "Ready to send": first a flag, then a status.
- Tasks and automations: first tabs, then folded into other views.
- History import and the first feed run: first manual, then automatic on deployment.
- A token passed in the MCP URL: replaced by OAuth.
- A feed alert that went off too often: red only after a total failure or two failures in a row.

## What came out of it

Each run reads about 3,900 positions, keeps about 110 that look like a product role, and brings up only the new ones: 83 on the first production run, then 1, 0 and 11.

## Numbers

- 33 commits from September 17 to October 22, 2026, 23 of them by Claude; the tool phase took three days and six pull requests.
- About 8,600 lines of TypeScript as of October 21.
- Stack: Next.js 16, React 19, TypeScript, Drizzle, Postgres (Neon), Auth.js (Google), MCP SDK, zod, Vercel Blob, Vercel Cron, Vitest and PGlite.

## Principles (from the tool's spec)

- "The tool does not assess openings; it files the assessment Claude produces."
- "A human must be able to do everything an agent does, and the other way around."
- It never sends anything: "It prepares, Gildas sends."
- Two users with opposite needs: Claude reads and writes everything; Gildas wants to see in ten seconds what is waiting, and enters almost nothing.
- Every opening keeps the link to the original posting, never to the job site that relays it.
- It works when, on opening an opening, you know in under thirty seconds the current stage, the people met, what was sent with which resume, and what is pending.

## Data model

Opening (central entity: status, company, agency, feed, original URL, assessment written by Claude as list, tier S/A/B, way in and fit note, whose move it is, signal that it disappeared from its feed); Thread event (type, contact, channel, summary, idempotency key); Process step (position, state, announced or discovered); Company (employer or agency, tier, careers page, ATS); Feed (ATS, URL, state); Contact (role, type of relationship); Document (resume, case study, letter); Task; Calendar event; Flag; Automation runs; Log of who wrote what.

## Places (breadboard)

Interface: Today, Selection (keep as S, A or B, ready to send, drop), Pipeline, Opening (status, process, thread, assessment, contacts, duplicates), Company, Contacts, Tasks, Calendar, Documents, Automations, Settings. Agent (MCP), by use: getting oriented (get_conventions, get_today, search, list_changes), sorting (list_triage_queue, qualify_job, set_evaluation, set_ready), keeping track (add_event, set_process, contacts, documents, tasks, calendar), watching the market (run_feeds, set_feed_filter, find_duplicates, merge_jobs).

## Anecdotes

- JobSync lasted six hours; its built-in AI that assessed the openings was what the project wanted to avoid.
- The pipeline's first MCP response weighed 142 KB.
