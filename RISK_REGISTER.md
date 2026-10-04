# Risk Register — Legacybridge

| ID | Risk | Severity | Mitigation |
|----|------|----------|------------|
| R1 | Build may fail on stale JSX from batch installers | High | Run `node ../tools/omega-heal-home-pages.mjs` from repo root |
| R2 | Env vars undocumented | Med | See `.env.example` |
| R3 | Auth/payment not verified in this pass | Med | Manual review before launch |
| R4 | Production deploy may lag local fixes | Med | `pnpm build && vercel --prod` when approved |
