# Venture Regression Root Cause

## Regression Type
build

## What Got Worse
pnpm build FAIL

## When It Appeared
See venture-update-log.md and verification registry (2026-05-24)

## Suspected Trigger
Packet legacybridge-v2.2-build_repair-20260524-1200 or config/import change

## Evidence
- build_status: FAIL
- verification: VERIFICATION_FAILED
- route: src/app/page.tsx
- lockfiles: pnpm-lock.yaml

## Most Likely Cause
TypeScript/JSX, import, or config error — see verification harness

## Alternate Causes
Dependency drift; env missing; live deploy stale; scorecard stale

## Confidence
65/100

## Fix Direction
Fix build error in src/app/page.tsx — approval before pnpm install
