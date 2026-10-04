# Venture Recovery Verification

## Recovery Status
not started — awaiting fix

## What Must Be Verified
Build, route, claims (if applicable)

## Commands
pnpm build

## Manual Checks
Homepage renders; no unsafe claims; CTA resolves

## Files To Inspect
src/app/page.tsx, package.json, venture-os/venture-verification-harness.md, venture-os/venture-recovery-plan.md

## Pass Criteria
pnpm build exit 0; recovery_status → RECOVERY_COMPLETE

## Fail Criteria
Build still fails; new TypeScript errors

## Can Leave Quarantine?
no until exit criteria met

## Can Resume Normal Work?
no until verification pass
