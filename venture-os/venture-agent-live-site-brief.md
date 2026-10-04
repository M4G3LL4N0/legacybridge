# Agent Live Site Brief — Legacybridge

- **Live URL:** https://legacybridge.noaerth.com
- **HTTP:** 200 | **Status:** loads
- **Local vs live:** LIVE_AHEAD_OF_LOCAL
- **Public priority:** P1

## Main mismatch
6 nav links likely 404 on production until redeploy.

## Problems
- Homepage clarity: 60/100
- CTA: 90/100
- Mobile: 69/100
- Design: 72/100

## Inspect first
src/app/page.tsx

## Safest first fix
Redeploy after local PASS build to clear stub-route 404s

## Do-not-break
- No fake traction; no unsupported compliance claims
- No deploy/push from agent
- Preserve DistinctVentureHero / world shell if present

## Verify
https://legacybridge.noaerth.com (desktop + 390px mobile)
