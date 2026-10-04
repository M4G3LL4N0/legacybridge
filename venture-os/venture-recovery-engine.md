# Venture Recovery Engine

## Venture
- Name: Legacybridge
- Folder: legacybridge
- Live URL: https://legacybridge.noaerth.com
- Current stage: STAGE_3_BUILDABLE
- Current kernel decision: Fix build: cd /Users/matador/startups/legacybridge && pnpm install && pnpm build
- Heartbeat status: BROKEN
- Alert severity: P1

## Recovery Status
RECOVERY_BLOCKED

## Safety Lock Level
LOCK_4_QUARANTINED

## What Broke Or Regressed
pnpm build FAIL

## Evidence
- build_status: FAIL
- verification: VERIFICATION_FAILED
- route: src/app/page.tsx
- lockfiles: pnpm-lock.yaml

## Likely Root Cause
TypeScript/JSX, import, or config error — see verification harness

## Recovery Decision
Quarantine

## Best Recovery Action
Fix build error in src/app/page.tsx — approval before pnpm install

## Recommended Worker
Aider

## Files To Inspect First
- src/app/page.tsx
- package.json
- venture-os/venture-verification-harness.md
- venture-os/venture-recovery-plan.md

## Files Safe To Edit
- venture-os/*.md
- src/app/page.tsx
- package.json
- tsconfig.json

## Files To Avoid
- .env
- .env.local
- node_modules/
- pnpm-lock.yaml (unless approved)

## Commands Allowed
- pnpm install (approval required)
- pnpm build (after fix)
- pnpm dev (verify locally)

## Commands Forbidden
- git reset --hard
- git clean -fd
- rm -rf
- vercel rollback
- vercel --prod
- git push --force

## Verification Required
- pnpm build exits 0 (if build script exists)
- Homepage route renders locally
- venture-recovery-verification.md updated

## Stop Conditions
Deploy blocked; push blocked; install blocked without approval; stop if fix introduces new errors
