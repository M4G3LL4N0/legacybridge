# Venture Rollback Plan

## Rollback Review Required?
yes

## Why
Prior recovery attempt or multi-file change suspected

## Last Known Good State
Check venture-update-log.md and git log for last PASS build note

## Suspected Bad Change
BUILD_RECOVERY_PACKET / recent packet legacybridge-v2.2-build_repair-20260524-1200

## Files To Compare
src/app/page.tsx, package.json, venture-os/venture-verification-harness.md, venture-os/venture-recovery-plan.md

## Safe Restore Options
Patch forward (preferred); manual file restore with founder approval; do not run git reset --hard

## Dangerous Actions Not Allowed
git reset --hard; git clean -fd; rm -rf; vercel rollback; vercel --prod; git push --force

## Approval Required
yes for any revert or deploy

## Verification After Restore
pnpm build; route check; update recovery-verification.md

## Recommended Decision
Patch forward unless founder approves specific file revert
