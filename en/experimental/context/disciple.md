# Disciple: full write-up

An experimental project by Gildas Frémont, freelance product director (https://gildas.fyi).
Public page: https://gildas.fyi/en/experimental/disciple
Status: working prototype, built March 22–31, 2026. Private repository.
Built with Claude Code.
French version of this write-up: https://gildas.fyi/experimental/contexte/disciple.md

## The bet

"Nobody wants an agent. People want to get something solved" (the project's working notes). If the basic unit is the work to be done, an architect can turn it into a plan, an orchestrator can hand it out and judge the results, and execution agents can do the work and improve through memory, without the user having to talk about tools.

## The model

- The architect: asks the useful questions and produces the plan.
- The orchestrator: hands out the tasks, in parallel when possible, retries, judges the deliverables.
- The execution agents: defined by the user, they carry out the work and keep a memory of what worked.
- A split between being held to the method (the agents follow a method) and being held to the result (the orchestrator judges each deliverable against the goal).

## Timeline

- March 22, 2026: first commit, parallel tasks, move from YAML to SQLite (7 tasks, 3 of them in parallel, validated).
- March 23: interface redone (grayscale, no emoji), switch to the Claude Code command line to use the subscription, home screen, test sessions 1 to 7.
- March 24: a maximum budget per run, a backlog of 47 ideas in 11 themes, about thirty implemented, validation on 5 personas.
- March 28: acceptance and end-to-end suites (sessions 8, 9 and 10), feedback loop, structured logs, continuous integration.
- March 30–31: the main file is split into six modules. Last commit.

## Test method

The tests were played by personas: five job profiles and an acceptance tester.

## Trial and error

- The architect asked questions instead of acting: in the first session, all three personas got stuck in a questionnaire, because from the command line the architect had no access to native tools. Tool calls were simulated as JSON in the text; in the next session, each persona got its plan in a single exchange.
- First complete run in about 3 minutes (session 7).
- Context overflow: 3 tasks out of 5 and 3 out of 6 succeeded, then 6 of 6, 7 of 7 and 6 of 6 with a sliding window over the history.
- Cost: 5 runs for $1.53 in total.
- Acceptance: session 9 at 56 checks out of 56, session 10 at 207 out of 216 across 13 scenarios, with three-layer evaluations that grade results rather than the path taken.

## What came out of it

An end-to-end prototype: conversation with the architect, plan, orchestration, deliverables, live streaming, memory, continuous integration. A backlog of 47 ideas, about thirty of them implemented on March 24.

## Numbers

84 commits from March 22 to 31, 2026. Stack: Python, FastAPI, uvicorn, SQLite, Anthropic SDK, Claude Code from the command line, server-sent events (SSE), GitHub Actions.

## Principles

- "Nobody wants an agent. People want to get something solved": the basic unit is the work.
- Keep apart the one who plans, the one who judges and the one who executes.
- The agents are held to the method, the orchestrator to the result.
- Grade the results, not the path.
- A maximum budget per run, in tokens and in time.

## Data model

Job (inputs, outputs, acceptance contract, agents, conversation with the architect, target cost); Task (order, agent, model, budget, format); Agent (system prompt, model, tools, permissions); Run (plan, status, cost, tokens, feedback); Task run (attempts, duration, context fill, replan); Agent memory (strengths, weaknesses, rating); Learned rule (trigger, action, confidence).

## Places (breadboard)

Jobs, Job (talk with the architect, inputs and outputs, launch, tasks, agent), Run (plan, stop, resume, approve, rate), Agents.
