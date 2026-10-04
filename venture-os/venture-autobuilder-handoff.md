# Venture AutoBuilder Handoff

## Venture Summary
Legacybridge: System intelligence for legacy software

## Current Stage
STAGE_6_MONETIZABLE

## Current Priority
P0_CRITICAL

## Best Worker Type
build_repair_worker

## Worker Instructions
Fix build: cd /Users/matador/startups/legacybridge && pnpm install && pnpm build. Manual deploy required. Use pnpm. Do not invent traction.

## Files To Read First
- venture-os/venture-control-plane.md
- venture-os/venture-agent-product-brief.md
- venture-os/venture-product-depth.md
- package.json

## Files Safe To Edit
- `app/page.tsx`
- `src/app/page.tsx`
- `components/`
- `app/api/`
- `venture-os/`

## Files To Avoid
- `.env`
- `.env.local`
- `pnpm-lock.yaml`

## Success Condition
pnpm build PASS

## Failure Condition
Stop if build cannot be fixed in 2 iterations or requires secret keys.

## Suggested Prompt
```
Worker type: build_repair_worker. Folder: legacybridge. Fix build: cd /Users/matador/startups/legacybridge && pnpm install && pnpm build. Read venture-autobuilder-handoff.md. No deploy.
```
