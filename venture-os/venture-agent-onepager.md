# Agent One-Pager

## Mission
Execute compiled next action only.

## Venture Context
System intelligence for legacy software

## Current State
Build FAIL; Live loads; LIVE_AHEAD_OF_LOCAL; Product STAGE_3_WORKING_MVP_FLOW; Build broken — not demoable until fixed

## Next Action
Fix build: cd /Users/matador/startups/legacybridge && pnpm install && pnpm build

## Files To Read First
- venture-intelligence.json
- venture-compiled-next-action.md
- venture-verification-gates.md

## Files Safe To Edit
- app/, components/, venture-os/

## Files To Avoid
- .env

## Do Not Do
- deploy, push, delete, fake traction

## Success Condition
pnpm build PASS

## Verification
pnpm build

## Prompt
```
Read venture-intelligence.md + venture-compiled-next-action.md. Fix build: cd /Users/matador/startups/legacybridge && pnpm install && pnpm build. pnpm build to verify. No deploy.
```
