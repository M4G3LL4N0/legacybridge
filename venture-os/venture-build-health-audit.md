# Venture Build Health Audit

## Build Health Score
30

## Package Manager
pnpm preferred

## Framework
Next.js

## Build Scripts Found
dev, build, start, lint, typecheck

## Config Risks
next.config.ts, tsconfig.json

## Likely Build Blockers
- build script missing or build_status FAIL

## Safe Build Check
cd /Users/matador/startups/legacybridge && pnpm install && pnpm build (run only when approved)

## Best Build Health Fix
Fix build script/deps until pnpm build passes
