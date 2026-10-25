# Futurun: full write-up

An experimental project by Gildas Frémont, freelance product director (https://gildas.fyi).
Public page: https://gildas.fyi/en/experimental/futurun
Status: in personal use since October 12, 2026. Private repository.
Built with Claude Code.
French version of this write-up: https://gildas.fyi/experimental/contexte/futurun.md

This write-up deliberately contains no balances, no named institutions and no banking data.

## The bet

A single app, installed at home, can aggregate heterogeneous financial sources (open banking, scraping, APIs, CSV exports, manual entry) behind a single connector contract. It then gives a reliable burn rate and runway, and the only friction left, re-authentication, fits on a single screen.

## The connector contract

Each source is a connector that returns accounts and transactions, and raises a `ReauthRequired` error when re-authentication is needed. Two authentication modes:

- `form`: API key, credentials, pasted file or manual entry, through `connect()`;
- `redirect`: OAuth or open banking, through `start()`, then `complete()` on return.

The connections screen lists every source, the ones to renew at the top, with their form already open.

| Connector | Method | Result |
|---|---|---|
| Enable Banking | PSD2 open banking | works, 5 connections. It took an HTTPS callback address on the local network (self-signed proxy), a fixed callback address for the provider's allowlist, and business-level access for one online bank. |
| woob | scraping of the customer portal, Python bridge, credentials passed through stdin | works, 2 connections. When an insurer's site changed one of its pages, the module was fixed the same day. |
| CSV | statement exported and pasted | 1 connection |
| Manual entry | credit lines, amortizing loans, property | 3 connections |

## Calculations

- Available cash: accounts marked liquid.
- Net burn: spending minus income, per month, over 30 and 90 days, excluding transfers between one's own accounts.
- Runway: available cash divided by burn.
- A timeline of the projected balance over twelve months.
- Budget: an expense is a name and an amount, with a frequency and a duration if needed.

## Timeline

- October 12, 2026: first commit (app installable on a phone, connector contract, Enable Banking, Binance, CSV, manual entry, burn and runway, secrets encrypted with AES-256-GCM). Then the woob connector, a Docker image, a one-command launch reachable from the phone on the same Wi-Fi, a per-source procedures screen, two fixes to the woob module, a double-click Mac launcher with updates, business-level open banking access, entering loans, six successive versions of the budget model.
- October 19: automatic start with the Mac, tab bar removed and the procedures screen merged into the connections screen, two interface review passes (16 px fields for iPhone, contrast, touch targets, confirmation before deletion), twelve-month timeline.
- October 20: an MCP server to view and edit Futurun from a conversation, generic labels and a settings panel so that someone else can install it.

## Trial and error

- Budget model: at least six redesigns on October 12 (categories, upcoming expenses, actual versus estimated) before the simplest version.
- Per-source procedures screen: created on the 12th, merged on the 19th.
- Server hosting: Docker image and Caddy ready, as an option; the app runs on the Mac and the phone reaches it on the local network.

## What came out of it

The app starts with the Mac, syncs every six hours and opens on the phone; it has 11 active connections, some fifty tests and an MCP server.

## Numbers

- 77 commits from October 12 to 20, 2026, over three active days.
- About 4,200 lines of code (logic, MCP, woob bridge and interface).
- Stack: Next.js 15, React 19, TypeScript, vitest, zod, MCP SDK, Python and woob, Docker and Caddy as options, launchd.

## Principles

- "One connector per source, each with its own method" (README), all with the same contract.
- Sources that need renewing go to the top, with their form open.
- Amounts in cents, as integers; encrypted secrets; a local app.
- Transfers between one's own accounts count neither as spending nor as income.

## Data model

One JSON file: Connection (connector, status, last sync, encrypted secret); Account (type, balance in cents, liquid, loan, computed level: available, reachable, locked, debt); Transaction (account, date, amount, label); Upcoming expense (amount, frequency, number of times, category, matching words); Category (direction, matching words, computed estimate and actual); Settings.

## Places (breadboard)

Overview (tiles, sync, categories, accounts, add an account, settings), Expenses, panels for Category, Expense and Account (sync, renew access, choose a method), Settings, open banking return, MCP server.
