# Venture Safety Lock

## Current Lock Level
LOCK_4_QUARANTINED

## Why
pnpm build FAIL

## Allowed Actions
Inspect and document only

## Blocked Actions
Deploy, push, delete, broad refactors, package install without approval

## Approval Required For
pnpm install, deploy, public copy changes, rollback commands

## Verification Required For
Leaving recovery mode; lowering lock level

## Downgrade Lock When
Build PASS + verification updated + no new regressions

## Upgrade Lock When
Repeated recovery failure; unsafe claims; secrets risk detected
