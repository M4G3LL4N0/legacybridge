# Venture Broken Build Recovery

## Build Broken?
yes

## Build Evidence
build_status: FAIL; verification: VERIFICATION_FAILED; route: src/app/page.tsx; lockfiles: pnpm-lock.yaml

## Package Manager
pnpm

## Build Script
next build

## Error Category
See verification harness — likely TypeScript/import/config

## Likely Fix
Fix build error in src/app/page.tsx — approval before pnpm install

## Files To Inspect
src/app/page.tsx, package.json, venture-os/venture-verification-harness.md, venture-os/venture-recovery-plan.md

## Files Safe To Edit
Source files, tsconfig, next config — not lockfiles without approval

## Commands To Recommend
pnpm build (after fix); pnpm install only with approval

## Commands Not Allowed
git reset --hard, git clean -fd, rm -rf, vercel rollback, vercel --prod, git push --force

## Verification
pnpm build exits 0
