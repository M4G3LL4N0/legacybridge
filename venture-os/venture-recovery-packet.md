# Venture Recovery Packet

## Packet Type
BUILD_RECOVERY_PACKET

## Mission
Fix build error in src/app/page.tsx — approval before pnpm install

## Scope
quarantine-only

## Files To Read
venture-recovery-engine.md, venture-verification-harness.md, src/app/page.tsx

## Files Safe To Edit
venture-os/*.md, src/app/page.tsx, package.json, tsconfig.json

## Files To Avoid
.env, .env.local, node_modules/, pnpm-lock.yaml (unless approved)

## Commands Allowed
pnpm install (approval required), pnpm build (after fix), pnpm dev (verify locally)

## Commands Forbidden
git reset --hard, git clean -fd, rm -rf, vercel rollback, vercel --prod, git push --force

## Exact Fix
Fix build error in src/app/page.tsx — approval before pnpm install

## Success Criteria
Build PASS; lock downgrade eligible; verification updated

## Verification Steps
1. pnpm build
2. Local homepage check
3. Update venture-recovery-verification.md

## Stop Conditions
New errors; secrets exposure; approval missing for install/deploy

## Ready-To-Use Cursor Prompt
You are in /Users/matador/startups/legacybridge/. Read venture-os/venture-recovery-packet.md and venture-safety-lock.md. Perform ONLY: Fix build error in src/app/page.tsx — approval before pnpm install. Do not deploy. Do not push. Do not delete. Use pnpm if approved. Update venture-recovery-verification.md after.

## Ready-To-Use Aider Prompt
Read venture-os/venture-recovery-engine.md and venture-broken-build-recovery.md. Fix build only: Fix build error in src/app/page.tsx — approval before pnpm install. pnpm build must pass. No deploy/push/delete.

## Ready-To-Use AutoBuilder Prompt
Do not run — recovery requires manual approval for legacybridge
