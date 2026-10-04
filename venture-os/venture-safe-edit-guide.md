# Safe Edit Guide — Legacybridge

**Safe edit level:** 2

## Safe to edit (level ≥2)
- venture-os/*.md
- README.md
- Marketing copy in src/app/page.tsx
- components/ui/* (if build PASS)

## Risky
- app/layout.tsx, middleware.ts
- package.json (deps)
- next.config.*

## Do not touch (level ≤1)
- .env, .env.local
- auth/payment webhooks without review

## Verify
```bash
pnpm build
```
