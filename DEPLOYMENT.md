# Deployment — Legacybridge

**Updated:** 2026-05-22

## Target
Vercel (inferred)

## Commands
```bash
cd /Users/matador/startups/legacybridge
pnpm install
pnpm build
pnpm dev
```

## Pre-deploy checklist
- [ ] Build PASS
- [ ] Env vars set on host
- [ ] https://legacybridge.noaerth.com smoke test
- [ ] OG image / metadata

## Rollback (v8.7)
Redeploy previous Vercel promotion; revert git tag.

**Do not auto-deploy from agents.**
