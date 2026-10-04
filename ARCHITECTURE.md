# Architecture — Legacybridge

**Updated:** 2026-05-22

## Overview
Next.js 16.2.3 application at `/Users/matador/startups/legacybridge`.

## Structure
- Router: App/Pages under `app/` or `src/app/`
- UI: `components/`, `src/components/`
- Styles: `globals.css`, Tailwind
- Config: `package.json`, `tsconfig.json`, `next.config.*`

## Boundaries
| Layer | Location |
|-------|----------|
| UI | components, app pages |
| API | app/api routes (if any) |
| Data | None yet |
| Auth | Not detected |

## Coupling notes
Portfolio-shared patterns (DistinctVentureHero, venture-shell) — keep venture-specific config isolated in page + data files.
