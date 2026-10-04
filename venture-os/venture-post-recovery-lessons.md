# Venture Post-Recovery Lessons

## Archived 2026-05-24 (prior recovery plan)
# Venture Recovery Plan — Legacybridge

## Current status
**broken** — safe edit level **2**. Matrix: **FAIL**.

## Most likely failure points
1. DUAL_APP_ROOT: Duplicate Next.js app roots
1. RISKY_NODE_MODULES: node_modules present in tree

## Recovery steps
1. Read `venture-build-status.md` and matrix error in `.noaerth_full_build_status.tsv`.
2. `cd /Users/matador/startups/legacybridge`
3. `pnpm install` (only when explicitly approved)
4. Fix risks listed above (JSX, imports, layout).
5. `pnpm build`
6. `pnpm dev` — verify homepage + primary CTA.

## Safe commands
```bash
cd /Users/matador/startups/legacybridge
pnpm install
pnpm build
pnpm dev
```

## Do not do
- `rm -rf`, `git reset --hard`, `vercel --prod`, force push
- Destructive DB migrations
- Commit secrets to `.env`

## Files to inspect first
- src/app/page.tsx
- package.json
- src/app/layout.tsx
- tsconfig.json

## Suggested Cursor prompt
Fix build for `legacybridge` per venture-os/venture-recovery-plan.md. Use pnpm. Do not deploy. Update venture-update-log.md after `pnpm build` PASS.

## Suggested Aider prompt
In /Users/matador/startups/legacybridge, fix highest-priority risk: DUAL_APP_ROOT. Minimal diff. pnpm only.

