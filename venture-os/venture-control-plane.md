# Venture Control Plane

## Venture
- Name: Legacybridge
- Folder: legacybridge
- Live URL: https://legacybridge.noaerth.com
- Last reviewed: 2026-05-22

## Operating Status
RECOVERY_REQUIRED

## Current Stage
STAGE_6_MONETIZABLE

## Next Stage
STAGE_7_CUSTOMER_READY

## Stage Blocker
fix pnpm build

## Priority
P0_CRITICAL

## Score Summary
| Dimension | Score |
|-----------|------:|
| Technical | 59 |
| Live site | 72 |
| Strategy | 87 |
| Design | 66 |
| Product | 59 |
| Monetization | 62 |
| Demo | 65 |
| Customer | 63 |
| Investor | 80 |
| **Overall** | **57** |
| Risk | 56 |
| Opportunity | 69 |
| Execution confidence | 60 |

## Next Best Action
Fix build: cd /Users/matador/startups/legacybridge && pnpm install && pnpm build

## Why This Action
Highest leverage for RECOVERY_REQUIRED at STAGE_6_MONETIZABLE; blocker: fix pnpm build.

## Files To Inspect First
- `venture-os/venture-control-plane.md`
- `venture-os/venture-product-depth.md`
- `venture-os/venture-build-status.md`
- `venture-os/venture-live-site-review.md`
- `app/page.tsx` or `src/app/page.tsx`
- `package.json`

## Suggested Cursor Prompt
```
In /Users/matador/startups/legacybridge, read venture-os control-plane + product files. Fix build: cd /Users/matador/startups/legacybridge && pnpm install && pnpm build. Update venture-control-plane.md and venture-update-log.md. No deploy.
```

## Suggested Aider Prompt
```
Fix highest-priority issue in legacybridge: fix pnpm build. Read venture-control-plane.md first. pnpm only. No deploy.
```
