# Venture v3.0 Next Action

## Action
Fix build error in src/app/page.tsx — approval before pnpm install

## Action Category
parking

## Worker
manual

## Packet Type
BUILD_RECOVERY_PACKET

## Scope
manual-only

## Files To Touch
Per venture-v3-state.json controls

## Files To Avoid
.env, lockfiles without approval

## Success Criteria
Verification pass; scorecard updated; log updated

## Verification
pnpm build if applicable; harness checklist

## Stop Condition
New errors; missing approval; quarantine breach

## Prompt
Read venture-os/venture-v3-kernel.md and venture-v3-next-action.md. Perform ONLY: Fix build error in src/app/page.tsx — approval before pnpm install. Do not deploy/push/delete. Use pnpm if needed. Update venture-update-log.md and venture-v3-state.json after.
