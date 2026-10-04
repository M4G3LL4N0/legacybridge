# Venture Autonomous Brief

## Venture Summary
Legacybridge — RECOVERY_REQUIRED

## Current Stage
STAGE_6_MONETIZABLE

## Current Priority
P0_CRITICAL

## Current Cycle State
READY_FOR_CYCLE

## Recommended Next Cycle
BUILD_REPAIR_CYCLE

## Recommended Worker
BUILD_REPAIR_WORKER

## Safe Automation Level
LEVEL_1_DOCS_ONLY

## Founder Approval Required
no

## Verification Required
yes

## Files To Read First
- venture-os/venture-autonomous-brief.md
- venture-os/venture-control-plane.md
- venture-os/venture-cycle-state.md
- venture-os/venture-product-depth.md
- package.json

## Files Safe To Edit
- venture-os/
- app/, src/app/, components/

## Files To Avoid
- .env, .env.local

## Success Condition
pnpm build PASS

## Failure Condition
Two failed builds; undeclared secrets; repeated cycle with no progress

## Anti-Loop Notes
Overwork 5/100; loop 15/100. Do not polish P7 ventures while P0 broken.

## Ready-To-Use Worker Prompt
```
Worker: BUILD_REPAIR_WORKER. Venture: legacybridge. Cycle: BUILD_REPAIR_CYCLE. Task: Fix build: cd /Users/matador/startups/legacybridge && pnpm install && pnpm build. Read venture-autonomous-brief.md first. LEVEL_1_DOCS_ONLY. Verify with pnpm build. No deploy. No push.
```
