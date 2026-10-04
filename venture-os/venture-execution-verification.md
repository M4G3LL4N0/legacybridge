# Venture Execution Verification

## Commands To Run
- `pnpm install`
- `pnpm build`
- `pnpm lint`
- `pnpm typecheck`

## URLs To Check
- https://legacybridge.noaerth.com

## User Flows To Test
- Homepage loads
- Primary CTA starts intended journey

## Pass Criteria
- pnpm build exits 0

## Fail Criteria
- Requires undeclared secrets
- Two consecutive build failures without new hypothesis
- Scope creep beyond packet mission
