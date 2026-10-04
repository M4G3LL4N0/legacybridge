# Agent Build Brief — Legacybridge

## What this is
Next.js (16.2.3) venture at https://legacybridge.noaerth.com

## Install / build / dev
```bash
cd /Users/matador/startups/legacybridge
pnpm install
pnpm build
pnpm dev
```

## Package manager
**pnpm** only unless lockfiles dictate otherwise.

## Key files
- Homepage: `src/app/page.tsx`
- App root: `src/app`

## Blockers
- DUAL_APP_ROOT
- RISKY_NODE_MODULES

## First fix
Merge into src/app or app only

## Rules
- No deploy, no push, no delete
- No fake metrics
- Preserve DistinctVentureHero / world identity
