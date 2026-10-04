# Venture Build Verification

## Package Manager
pnpm

## Package Scripts Found
- dev: next dev
- build: next build
- start: next start
- lint: eslint
- typecheck: tsc --noEmit --incremental false

## Recommended Build Command
pnpm build

## Recommended Typecheck Command
pnpm typecheck

## Recommended Lint Command
pnpm lint

## Build Status
fail

## Build Blockers
-   [90m    |[0m     [31m[1m^[0m   [90m313 |[0m   );   [90m314 |[0m }   [90m315 |[0m Next.js build worker exite

## Missing Dependencies
- none detected

## Lockfile Issues
- none flagged

## Framework Risks
- none

## Env Risks
- none flagged

## Verification Commands
```bash
cd /Users/matador/startups/legacybridge
pnpm install
pnpm build
pnpm lint
```

## Pass Criteria
pnpm build exits 0; no undeclared missing packages

## Fail Criteria
Build matrix FAIL; missing build script; unresolved import errors
