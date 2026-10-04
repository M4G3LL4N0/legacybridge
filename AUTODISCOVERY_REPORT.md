# Autodiscovery Report — Legacybridge

**Scan date:** 2026-05-22  
**Ironframe:** STARTUP FOUNDATION OS v2.1 — Autodiscovery Ironframe 100  
**Project root:** `/Users/matador/startups/legacybridge`

## 1. Project name
**Legacybridge** (`legacybridge`)

## 2. Project root
`/Users/matador/startups/legacybridge`

## 3. Product summary
System intelligence for legacy software  
**Live URL (inferred):** https://legacybridge.noaerth.com

## 4. Confirmed facts
- package.json present; framework: **Next.js 16.2.3**
- Package manager: **pnpm** (pnpm-lock.yaml)
- Build matrix: **FAIL**
- Routes detected: 40
- README: yes
- .env.example: no

## 5. Inferred facts
- Deploy: Vercel (Next.js default)
- Product stage: needs build recovery
- Business model: Marketing / early-access (inferred)

## 6. Missing information
- .env.example incomplete or missing
- Automated test coverage unclear
- Production env on host (not in repo)
- Real user/revenue metrics (correctly absent)

## 7. Risky assumptions
- Live URL https://legacybridge.noaerth.com maps to latest deploy
- venture-os/strategy docs match production copy

## 8. Tech stack
Next.js 16.2.3, pnpm, TypeScript (inferred), Tailwind (typical)

## 9. Framework
Next.js 16.2.3

## 10. Routes/pages
- `/dashboard`
- `/docs`
- `/how-it-works`
- `/intake`
- `/investor`
- `/privacy`
- `/product`
- `/support`
- `/terms`
- `/trust`
- `/about`
- `/api/checkout/[api]`
- `/app/artifacts`
- `/app/command-center`
- `/app/connectors`
- `/app/ingest`
- `/app/notifications`
- `/app/onboarding`
- `/app`
- `/app/reports/executive-summary`
- `/app/settings`
- `/app/sources`
- `/app/workflows/[slug]`
- `/app/workflows`
- `/architecture`
- `/buyers`
- `/compare`
- `/contact`
- `/demo`
- `/enterprise`
- `/faq`
- `/industries`
- `/login`
- `//`
- `/pilot`
- `/platform`
- `/pricing`
- `/resources`
- `/roi`
- `/security`

## 11. API/server functionality
- `src/app/api/checkout/route.ts`
- `src/app/api/og/route.tsx`

## 12. Database/auth/payment/AI
- None detected in dependencies

## 13. Deployment assumptions
Vercel; manual deploy by founder

## 14. Real functionality
- Public marketing site
- Build failing — fix before deploy

## 15. Placeholder/demo functionality
- marketing copy flags

## 16. Immediate risks
- **P0:** Build does not pass
- Stale production vs local routes (common in portfolio)

## 17. Recommended current version
**v0.2**

## 18. Recommended next version
**v0.2**

## Foundation scores
| Area | Score | Biggest issue | Fastest improvement |
|------|------:|---------------|---------------------|
| CS correctness | 17 | Foundation/build gaps | Fix build + autodiscovery P0 |
| Computer engineering | 27 | Foundation/build gaps | Fix build + autodiscovery P0 |
| Architecture | 72 | Polish and scale | Observability + payments |
| Data model | 28 | Foundation/build gaps | Fix build + autodiscovery P0 |
| Security | 38 | Foundation/build gaps | Fix build + autodiscovery P0 |
| Backend | 55 | Needs real workflow + ops | Ship MVP proof path |
| Frontend | 29 | Foundation/build gaps | Fix build + autodiscovery P0 |
| AI system | 15 | Foundation/build gaps | Fix build + autodiscovery P0 |
| Testing | 22 | Foundation/build gaps | Fix build + autodiscovery P0 |
| Deployment | 30 | Foundation/build gaps | Fix build + autodiscovery P0 |
| Observability | 28 | Foundation/build gaps | Fix build + autodiscovery P0 |
| Performance | 52 | Needs real workflow + ops | Ship MVP proof path |
| Maintainability | 58 | Needs real workflow + ops | Ship MVP proof path |
| Product execution | 58 | Needs real workflow + ops | Ship MVP proof path |
| Business model support | 35 | Foundation/build gaps | Fix build + autodiscovery P0 |
| User trust | 42 | Foundation/build gaps | Fix build + autodiscovery P0 |
| Investor readiness | 35 | Foundation/build gaps | Fix build + autodiscovery P0 |
| Production readiness | 25 | Foundation/build gaps | Fix build + autodiscovery P0 |

**Overall foundation:** 37/100

