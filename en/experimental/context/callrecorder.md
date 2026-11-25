# CallRecorder: full write-up

An experimental project by Gildas Frémont, freelance product director (https://gildas.fyi).
Public page: https://gildas.fyi/en/experimental/callrecorder
Download page (in French): https://gildasfremont.github.io/callrecorder/
Status: version 0.30.0 released November 21, 2026; the app has been public since October 24; the Android app is in beta. Private source code, public binaries and page. This write-up first covers the first four days (up to 0.3.5), then the month that followed (section "Since 0.3.5").
Built with Claude Code (commits co-signed by Claude).
French version of this write-up: https://gildas.fyi/experimental/contexte/callrecorder.md

## The bet

A call recorder can start on its own as soon as an app takes the microphone, with no calendar, no virtual audio driver and no button; keep the audio and the transcript on the Mac; and make those conversations readable by Claude through an MCP server. All of it in a native app that someone who is not a developer can install.

## What the tool does (as of version 0.3.5)

- Detects, through a CoreAudio event, that an allowed calling app has taken the microphone, and starts recording without polling.
- Records two AAC tracks at 32 kb/s: `me.m4a` (the microphone) and `them.m4a` (the calling app's audio alone, captured with a "process tap").
- Takes a screenshot of the call window every 30 seconds (in a browser, only the call's tab, without the tab bar), read locally by Apple Vision.
- Restarts the microphone if it returns nothing but zeros for ten seconds.
- Transcribes locally with whisper.cpp (Metal), using the large-v3-turbo q5 model in fast mode or large-v3 at maximum quality, with Silero voice activity detection. Whisper outputs one segment per word, grouped into lines at pauses; the vocabulary provided by the identification step applies to the whole call. Only one Whisper runs at a time, at low priority, and it pauses when the Mac heats up. Every transcript is also kept in `versions/`, to compare fast mode and maximum quality.
- After the call, if the option is on, identifies the recording with Claude (`claude -p`, claude.ai subscription): title, participants and vocabulary for Whisper (ten to fifteen spoken terms, an opening sentence drawn from the subject, a personal lexicon that can be set), from Google Calendar and Gmail, read-only, and from the screenshots. The prompt forbids matching a call to a meeting without evidence.
- Is driven by a `calls` command (list, show, transcribe, keep, delete, doctor, usage, update, mcp) and by a stdio MCP server exposing 8 tools: list_calls, get_call, get_call_context, transcribe_call, read_transcript, keep_call, delete_call, usage_report.
- Keeps a local usage log (calls captured, missed, transcribed, read back) that is sent nowhere.
- During setup, sends Gildas an operating log in which names and folders are masked, with no audio and no transcripts. Sending can be unchecked in the settings and stops on its own after the first transcribed call.
- Checks for updates once a day from a public `latest.json`, verifying the SHA-256 and the certificate, and installs only with the user's consent. It then relaunches through a detached relay, with three attempts whose outcome is written to the log.

Recognized apps: Zoom, Microsoft Teams, Google Meet (Chrome, Safari, Edge…), FaceTime, WhatsApp, Slack, Webex, Loom. Apple silicon Macs, macOS 15 or later.

## Origins: meet-recorder, the first attempt

Before April 2026, Gildas had written meet-recorder in Python, a menu bar app (rumps). Comparison:

| Topic | meet-recorder (before April 2026) | CallRecorder (October 2026) |
|---|---|---|
| Trigger | Google Calendar polled every 60 s, a notification 5 min before each video call, the user clicks to record | a CoreAudio event when an app takes the microphone |
| Other people's audio | BlackHole 2ch and a multi-output device created by hand | a process tap on the calling app alone |
| Capture | 4 ffmpeg streams: microphone, system audio, whole screen at 15 fps, 720p webcam | 2 audio tracks and a window screenshot every 30 s |
| Transcription | OpenAI whisper-1 API, key required | whisper.cpp, locally |
| Who is speaking | detection of Google Meet's blue outline on one frame per second, screen split into 3 fixed columns; a second pyannote pass planned but never written | "me" and "the others," given by the two tracks; finer identification deferred to v2 |
| Installation | Homebrew, ffmpeg, Python venv, BlackHole, Google Cloud OAuth, OpenAI key, LaunchAgent | a .dmg or a single `curl … install.sh \| zsh` line, then a test call |

meet-recorder was archived on GitHub on April 8, 2026 (private repository). Detecting the blue outline remains an idea for telling several speakers apart on the other side's track.

## Timeline

- Before April 2026: meet-recorder.
- April 8, 2026: meet-recorder archived.
- October 22, 2026, around 1:20 p.m.: first Swift files and the spec.
- October 22, 1:31 to 4:04 p.m.: first test recordings.
- October 22, 10:19 p.m.: first commit, already labeled 0.2.0 (recording, transcription, identification by Claude, MCP, standalone package, updates, setup assistant). 28 files, 3,145 lines.
- October 22, 10:44 to 11 p.m.: setup assistant, one-line installation.
- October 23, 12:39 a.m.: the assistant is rebuilt around a test call.
- October 23: 24 iterations of the .dmg installer window.
- October 23, 7:34 then 7:41 p.m.: microphone processed by macOS (echo cancellation) added, then removed.
- October 23, 10 p.m.: vocabulary made consistent, dead code removed.
- October 23, 10:55 p.m.: local usage log, `calls usage` command, `usage_report` MCP tool.
- October 24, 8 p.m.: public distribution, releases v0.3.0 then v0.3.1.
- October 24, 8:12 p.m.: Slack, Webex and Loom added.
- October 24, 8:56 to 9:24 p.m.: relaunch after "Quit and reopen" and after an update through the same detached relay, with three attempts. Releases v0.3.2 (reliable relaunch after granting the screen permission) and v0.3.3 (reliable relaunch after an update).
- October 25: first installation test by someone else, on their own Mac, over a video call.
- October 25, 12:16 p.m.: help panel docked under System Settings.
- October 25, 12:40 p.m.: fixes from the test. The assistant asks you to quit and reopen Claude, which only rereads its configuration at launch, comes back to the front until it is finished, and the setup log is sent. On the .dmg image, the "Open Anyway" box is redrawn as a screenshot, and the Privacy & Security icon is marked as clickable.
- October 25, 1:04 p.m.: lines regrouped at pauses, vocabulary valid for the whole call, one Whisper at a time, screenshots limited to the call's tab.
- October 25, 1:07 then 1:38 p.m.: releases v0.3.4 and v0.3.5.

## Trial and error

- Microphone processed by macOS to remove echo: removed seven minutes after it was added. macOS voice processing cuts off the capture of app audio, muffles the raw microphone and does not remove echo coming from other apps (commits 964e0dc then 8ef9423).
- Setup assistant: first a step-by-step, then a fake call during which each permission is requested when it is needed, finally a settings page, completed on October 25 by a help panel docked under System Settings.
- A long vocabulary prompt made Whisper produce four-minute segments, which broke the order of the lines and echo removal. Since October 25, Whisper outputs one segment per word, grouped at pauses so that each sentence is finished.

## What came out of it

- App public since October 24, 2026. Version 0.3.5: 4.1 MB .dmg, 3.1 MB .zip, an app of about 11 MB.
- First installation test by someone else on October 25; their feedback produced version 0.3.4 the same day.

## Numbers

At version 0.3.5 (October 25):

- 93 commits up to version 0.3.5: 16 on October 22, 2026, 64 on the 23rd, 8 on the 24th, 5 on the 25th.
- About 5,450 lines of Swift in 20 files at version 0.3.5, 1,961 of them for the setup assistant.
- Stack: Swift 6, CoreAudio, AVFoundation, AppKit, ScreenCaptureKit, Vision, ServiceManagement, whisper.cpp, shell scripts.

As of November 25: more than 2,400 commits in 35 days, nearly all co-signed by Claude; about 72,000 lines of Swift, 12,000 of Kotlin and 41,000 of Python in the repository (counted November 24); more than 800 Swift tests and 170 Kotlin tests.

## Since 0.3.5: a memory rather than a recorder

From October 26 to November 25, 2026, the project kept going every day. As of November 25: more than 2,400 commits on the main branch, more than forty public releases, the latest being 0.30.0 (November 21).

### The course

- October 27: Whisper leaves the interface. Apple's transcription (macOS 26), proofread by Claude, does just as well; whisper.cpp stays for older Macs.
- November 1: "I don't want it to turn into an AI assistant. It's just a memory." The manifesto is written within a quarter of an hour. CallRecorder remembers and lets you find things again; it doesn't summarize, doesn't remind you of anything, doesn't act on the user's behalf. The agents the user picks (Claude, Codex…) draw from it over MCP.
- Principles from the manifesto: every piece of information keeps its source (the call, the time of the line, the person, the screenshot); what is inferred stays separate from what was said; an inference never becomes a source, even when repeated; nothing is overwritten; the memory stays on the Mac, in open files.

### What gets recorded

The scope widened four times: calls, any conversation, the whole day, the day as the only view.

- Calls, on their own, as in October (Zoom, Teams, Meet and video calls in a browser, FaceTime, WhatsApp, Slack, Webex, Loom, the iPhone via Continuity).
- Meetings around a table, started by hand.
- Dictated notes: fn + D in any app.
- An Android app (Kotlin), born on November 1 after a faulty release fixed in 80 minutes, now in beta: it records at the press of a button, on calendar events or continuously, and sends to the Mac as soon as it reaches it.
- The Listening Journal: what the phone heard around the user while listening, cut into moments; a moment can become a recording.
- During a call or meeting: what happens on the Mac (apps, pages, downloads, never keystrokes), read only on request.

### Finding things again

- Each recording has a class: meeting, memo, or hidden (nothing to read). Nothing is deleted; what is empty is hidden, with its reason.
- Voices are separated and recognized; the user's voice becomes "Me". People are tracked from one call to the next (rename, merge).
- The `calls` MCP server grew: search by words and by meaning (`search_calls`), people, groups, excerpts, activity log, reservations.
- Since 0.30.0, the app installs from your AI (Claude, Claude Code or Codex), or entirely locally, with nothing leaving the Mac.

### The people who aren't there

- Reservations voiced during a call ("don't record me", "between us") are detected and noted, without cutting anything: an agent sees them before quoting, summarizing or passing on. The user decides.
- Groups of calls can be closed to agents: neither the proofreading nor any agent sees them.
- GDPR is an acknowledged, tracked gap with its own issue; what's missing before selling is listed (price, license, Apple signing, consent).

### The way of working

- November 1 and 2: two accidents where one Claude Code conversation swept away another's work in the shared folder. Since then: one topic, one branch, one folder.
- November 4: GitHub Actions dropped (quota used up in four days); everything compiles on the Mac, one build at a time. A PR written in the cloud goes through a "bridge" that builds it on the Mac.
- Night of November 4 to 5: the first night without Gildas, with sessions launched by a session; the first automated tests.
- November 6: shipping to the main branch without asking. Gildas's "Yes, commit" becomes rare.
- Most of the project's rules carry a date and the incident that gave rise to them. A rule and a script stop a release when a piece of text Gildas removed comes back.
- Gildas's requests are ten words long at the median; the rest is in the files the sessions reread.
- What goes public (site, release notes) says nothing of what is said in the recordings, nor the settings and measurements.

## Principles

- "Personal use, everything stays on the machine" (spec). Two exceptions, both optional: identification goes through Claude, on the claude.ai subscription; during setup, a masked operating log is sent to Gildas.
- Two separate phases: recording, "automatic, dumb, reliable," and processing, "on demand, extensible pipeline."
- Only apps on an allowlist trigger recording; Siri and dictation trigger nothing.
- "We never grab the app's internal video streams, only what it displays."
- Claude matches a call to a meeting only on evidence.
- The app reminds you to tell the other people on the call that it is being recorded.

## How a call is stored on disk (October)

No database: one folder per call in `~/CallRecordings/<date>_<app>/`, containing `meta.json` (app, start, end, status, kept, audio routes, headset), `me.m4a`, `them.m4a`, `context.jsonl` (the window's text at each change), `screens/*.jpg`, `context.json` and `context.md` (identification by Claude: title, subject, meeting with evidence, participants, vocabulary), `transcript.md`. Settings in `config.json`, log in `usage.jsonl`, models in `models/`.

## Places in the interface (breadboard, October)

- Menu bar: stop or delete the current call, open the Calls window, settings, updates.
- Calls window: transcribe (fast or maximum quality), read, keep, show in Finder, delete.
- Settings and assistant: permissions, Claude's access, retention, automatic transcription, test call, screen permission, connecting Claude, sending the setup log.
- Help panel under System Settings: what to do there and the app icon to drag into the list; it follows the Settings window and closes with it.
- The `calls` command and the MCP server, with no interface.

## Anecdotes

- The test call asks for a first name and what the weather is like; the demo transcript answers "Gildas, et il fait très beau" (Gildas, and it's lovely out).
- The first commit is already numbered 0.2.0: version 0.1 only existed on disk, for nine hours.
