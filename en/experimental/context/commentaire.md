# Commentaire: full write-up

An experimental project by Gildas Frémont, freelance product director (https://gildas.fyi).
Public page: https://gildas.fyi/en/experimental/commentaire
Public source code: https://github.com/gildasfremont/commentaire
Status: complete chain delivered in 21 hours, April 15–17, 2026. Public code.
Built with Claude Code, coordinated by Cowork.
French version of this write-up: https://gildas.fyi/experimental/contexte/commentaire.md

"Commentaire" is French for "comment."

## The bet

Chat is ill-suited to annotation for three reasons: it duplicates context (you have to copy the passage), it forces a synchronous request-and-response exchange, and it is linear. A silent AI co-reader, receiving voice comments anchored in the text, can replace it. It runs locally on the user's Claude subscription, with no API key and no server.

## How it works

You read a Markdown document. You hold down a key, speak, and let go. Whisper (whisper-rs, small model) transcribes locally, Claude Haiku classifies the comment, Claude Opus writes an answer when one is needed, and both the comment and the answer attach to the passage in the margin. Claude is called as a subprocess (`claude -p`, output as a JSON stream).

## How the agents were coordinated

- Cowork writes the spec and the architecture into the repository, and the tickets into Linear.
- Claude Code takes the first unblocked ticket, moves it to in progress with a comment, creates the branch named after the ticket, and never works on the main branch.
- It commits and pushes at every step, because another agent follows the repository live.
- At every commit, it rereads an instructions file that serves as the return channel (course correction, stop, scope).
- At the end of a ticket, it leaves a structured comment: done, not done, problems, test command.
- To escalate a problem to the human, it writes in two notes in the repository.

## Timeline

- April 15, 2026, 7 p.m.: repository and spec v0.1, Next.js architecture.
- April 16, 1:40 p.m.: architecture v2, switch to a Tauri desktop app, five tickets from the old roadmap canceled (reason: an 8 GB Mac, no API key, no server).
- April 16, 2:46 p.m.: Markdown reader.
- April 16, 4:54 p.m.: audio capture and Whisper.
- April 16, 8:16 p.m.: Haiku classifier.
- April 16, 8:40 p.m.: Opus answers and acknowledgment.
- April 17, 6:17 to 6:48 a.m.: end-to-end tests, latency log, report.
- April 17, 9:21 a.m.: scope alignment note.
- April 17, 9:27 a.m.: push-to-talk key.
- April 17, 9:34 a.m.: comments anchored in the margin.
- April 17, 10:20 a.m.: last commit.

## Test results (April 17, 2026)

| Measure | Result | Target |
|---|---|---|
| Correct classification | 6 of 6 | |
| Memory | 454 MB | under 1.2 GB |

The same measurements pointed to the next piece of work: the response time of Claude, called as a subprocess.

## Trial and error

- Whisper: creating a state per segment cost about 300 MB; the state is now reused.
- System prompt passed through an environment variable that the `claude` command does not read: about ten minutes of conversational answers before the fix through the dedicated option. Note left: always read the command's help before guessing.
- Voice detection by volume: picked up too much noise (a door noise got transcribed); replaced by a push-to-talk key.
- Scope drift: three new ideas on April 17 (persistence, versioning, the AI editing the text), outside the first scope; flagged by Claude Code in a note that declared the architecture out of date.

## Numbers

26 commits from April 15 to 17, 2026, most of them within 21 hours. About 1,500 lines of Rust. Stack: Tauri v2, Rust (cpal, whisper-rs), JavaScript with no framework, marked.js, Claude Haiku and Opus from the command line. Machine: MacBook Air M1, 8 GB.

## Principles

- Chat does not suit annotation: duplicated context, synchronous exchange, linearity.
- The comment attaches to the passage being read at the moment it is spoken.
- The co-reader stays silent until it is asked a question.
- Everything runs locally on the Claude subscription: no API key, no server.

## What flows through (no storage)

Reading position (paragraph); audio segment; classified comment (type reading, comment, question or instruction, cleaned text, raw text, confidence, paragraph); acknowledgment and streamed Opus answer, linked to a question; latency log (the only file written).

## Places (breadboard)

One window: reading area (scrolling, density markers), margin (a stack of comments per paragraph), control bar (Space to talk, state, volume, simulate a question).

## Anecdote

Before the push-to-talk key, Whisper transcribed `*Bruit de porte*` (door noise).
