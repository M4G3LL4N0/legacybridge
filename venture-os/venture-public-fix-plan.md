# Venture Public Fix Plan — Legacybridge

## Current Live Site Status
- **URL:** https://legacybridge.noaerth.com
- **Status:** loads
- **Local vs live:** LIVE_AHEAD_OF_LOCAL
- **Public score:** 72

## Biggest Public Issue
6 nav links likely 404 on production until redeploy.

## Fastest Public Win
Redeploy after local PASS build to clear stub-route 404s

## Best Homepage Fix
H1 should state: Legacybridge should be unmistakably about its core user job—not a generic AI SaaS template.

## Best CTA Fix
Keep: demo — ensure visible above fold on mobile.

## Best Mobile Fix
Verify hero and CTA at 390px; fix overflow if any

## Files To Inspect First
- `src/app/page.tsx`
- `venture-os/venture-direction.md`
- `app/layout.tsx` or `src/app/layout.tsx`

## Suggested Cursor Prompt
Fix the highest-priority public issue for legacybridge: 6 nav links likely 404 on production until redeploy.. Read venture-os live-site files first. Use pnpm. Do not deploy.

## Suggested Aider Prompt
In legacybridge, read venture-public-fix-plan.md and fix only the P0/P1 public issue. Update venture-live-site-review.md after edits.

## Verification
Open https://legacybridge.noaerth.com and confirm headline, CTA, and no 404 on primary nav.
