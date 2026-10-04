# Venture Build Status

**Project Update OS:** v1.2 "Build Pulse"  
**Last reviewed:** 2026-05-22

## Project
- **Venture:** Legacybridge
- **Folder:** `legacybridge`
- **Live URL:** https://legacybridge.noaerth.com

## Framework
- **Detected:** Next.js (16.2.3)
- **Confidence:** 95%
- **Router:** app-router
- **Main app directory:** src/app
- **Homepage:** src/app/page.tsx

## Package Manager
- **Detected:** pnpm
- **Lockfiles:** pnpm-lock.yaml
- **Install:** `pnpm install`
- **Build:** `pnpm build`
- **Dev:** `pnpm dev`

## Scripts
| Script | Command |
|--------|---------|
| dev | next dev |
| build | next build |
| lint | eslint |
| test | — |
| typecheck | tsc --noEmit --incremental false |
| start | next start |

## Build risk
- **Status:** broken
- **Matrix:** FAIL
- **Safe edit level:** 2 (0=none … 5=full build work)
- **Recovery priority:** P1

## Known risks
- **DUAL_APP_ROOT** (`app/ + src/app/`): Duplicate Next.js app roots → Merge into src/app or app only
- **RISKY_NODE_MODULES** (`node_modules/`): node_modules present in tree → Ensure gitignored; do not commit

## Missing dependencies (likely)
- None flagged

## Environment variables
- None scanned

## Safe next build action
cd /Users/matador/startups/legacybridge && fix risks in venture-recovery-plan.md then pnpm build

## Recovery plan
See [venture-recovery-plan.md](./venture-recovery-plan.md).

---
*Merged with Venture Compass v1.0/v1.1 data where present.*
