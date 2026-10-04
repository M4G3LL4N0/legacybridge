# Venture Founder Agent Handoff

## Founder Intent
Stop the bleeding — fix build

## Current Best Action
Fix build: cd /Users/matador/startups/legacybridge && pnpm install && pnpm build

## Recommended Agent
BUILD_REPAIR_WORKER

## Safe Automation Level
LEVEL_1_DOCS_ONLY

## Approval Needed
no

## Verification Needed
yes

## Files To Read First
- venture-founder-review.md
- venture-autonomous-brief.md
- venture-control-plane.md
- package.json

## Files Safe To Edit
- venture-os/, app/, src/app/, components/

## Files To Avoid
- .env, .env.local

## Success Condition
pnpm build PASS

## Stop Condition
2 failed builds or needs undeclared secrets

## Ready-To-Use Prompt
```
Read venture-founder-agent-handoff.md. FIX_FIRST: Fix build: cd /Users/matador/startups/legacybridge && pnpm install && pnpm build. LEVEL_1_DOCS_ONLY. Verify pnpm build. No deploy. No push.
```
