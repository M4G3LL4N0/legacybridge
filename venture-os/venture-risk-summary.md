# Venture Risk Summary

## Top Risks
1. **Build** (high): pnpm build fails
2. **Live site** (medium): 6 nav 404s
3. **Design** (medium): Template sameness

## Critical Risk
pnpm build fails

## Build Risk
FAIL — blocks all demos

## Live Site Risk
loads / LIVE_AHEAD_OF_LOCAL

## Product Risk
Depth 59; fake dashboard risk if no persistence.

## Strategy Risk
Score 87

## Design Risk
Uniqueness 15

## Monetization Risk
Charging before proof — moderate

## Privacy/Security Risk
Review env and PII on intake forms before production scale.

## Risk Reduction Plan
1. Fix build: cd /Users/matador/startups/legacybridge && pnpm install && pnpm build
2. Add labeled demo data only
3. Re-run control plane after changes
