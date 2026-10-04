# Venture Worker Queue

## Queued Task
- **Worker:** BUILD_REPAIR_WORKER
- **Cycle:** BUILD_REPAIR_CYCLE
- **Priority:** P0_CRITICAL
- **Status:** queued

## Task Summary
Fix build: cd /Users/matador/startups/legacybridge && pnpm install && pnpm build

## Success Condition
pnpm build exits 0

## Failure Condition
Stop after 2 failed build iterations or missing secrets
