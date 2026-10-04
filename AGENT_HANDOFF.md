# Agent Handoff — Legacybridge

## Project
- Folder: `legacybridge`
- Updated: 2026-05-20

## Stack
- Next.js App Router (verify `package.json`)
- pnpm preferred

## Safe to edit
- `components/`, `app/` or `src/app/`, `lib/`, styles
- Marketing copy, layout, routes (additive)

## Risky (document + test)
- Auth, payments, webhooks, DB, middleware, env, deploy config

## Do not
- Deploy/push without explicit approval
- Destructive DB migrations
- Expose secrets in client bundles

## First commands
```bash
cd legacybridge
pnpm install
pnpm build
```

## Docs
- `ROUTE_INVENTORY.md` — 38 routes
- `RISK_REGISTER.md`, `TECH_DEBT_LEDGER.md`, `LAUNCH_READINESS_CHECKLIST.md`
