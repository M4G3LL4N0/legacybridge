# Agent Product Brief — Legacybridge

**Last reviewed:** 2026-05-22

## Venture summary
System intelligence for legacy software

## Current product stage
STAGE_3_WORKING_MVP_FLOW | Build: FAIL | Depth: 59 | Demo: 65

## Core user action
Start an automation run and review the output log

## MVP workflow
See venture-mvp-workflow.md

## Demo path
See venture-demo-path.md — open https://legacybridge.noaerth.com

## Feature backlog priority
P0 core handler → P1 persistence → P2 demo data

## Onboarding
No-auth intake first (venture-onboarding-flow.md)

## Dashboard
Extend /dashboard with real rows

## Data flow
venture-data-flow.md — API + mock first

## Output
Automation run log + recommended actions

## Files to inspect first
`app/page.tsx`, `app/api/`, `components/`, `lib/`, `package.json`

## Safe product edits
- Add API route + form handler
- Add demo-data.ts (labeled)
- Do not break existing routes

## Do-not-break rules
No fake users/revenue; no deploy; no auth unless required; preserve marketing copy structure

## Suggested Cursor prompt
Read venture-os product files for legacybridge. Implement P0: Start an automation run and review the output log via intake API + confirmation page. pnpm build. No deploy.

## Suggested Aider prompt
Fix highest P0 product issue only: wire CTA to working submit flow. Update venture-product-depth.md after.
