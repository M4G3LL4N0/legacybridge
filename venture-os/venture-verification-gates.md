# Venture Verification Gates

## Required Verification
- BUILD_VERIFICATION
- LIVE_SITE_VERIFICATION (read-only URL check)

## Suggested Commands
```bash
cd /Users/matador/startups/legacybridge
pnpm install
pnpm build
```

## Suggested URL Checks
- https://legacybridge.noaerth.com

## User Flow Checks
- Primary CTA starts journey
- Core user action produces visible output (if product cycle)

## Mobile Checks
- Hero readable; no horizontal overflow

## Risk Checks
- No fake metrics; demo data labeled

## Pass Criteria
pnpm build exits 0

## Fail Criteria
Build fails twice; secrets required; live 404 unrecoverable without deploy approval
