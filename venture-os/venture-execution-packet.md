# Venture Execution Packet

## Packet ID
legacybridge-v2.2-build_repair-20260524-1200

## Venture
- Name: Legacybridge
- Folder: legacybridge
- Live URL: https://legacybridge.noaerth.com
- Stage: STAGE_6_MONETIZABLE
- Priority: P0_CRITICAL
- Cycle state: READY_FOR_CYCLE
- Safe automation level: LEVEL_1_DOCS_ONLY
- Recommended worker: BUILD_REPAIR_WORKER

## Packet Type
BUILD_REPAIR_PACKET

## Packet Size
S

## Mission
Fix local build so pnpm build passes.

## Current Context
Build FAIL; Live loads; LIVE_AHEAD_OF_LOCAL; Product STAGE_3_WORKING_MVP_FLOW; Build broken — not demoable until fixed

## Why This Packet Matters
FIX_FIRST at STAGE_6_MONETIZABLE

## Exact Task
Run pnpm install && pnpm build in legacybridge. Fix the first blocking error in app/page.tsx, imports, or tsconfig. Stop after build PASS or 2 failed attempts.

## Files To Read First
- `venture-os/venture-intelligence.md`
- `venture-os/venture-intelligence.json`
- `venture-os/venture-execution-packet.md`
- `venture-os/venture-verification-gates.md`
- `venture-os/venture-scorecard.json`

## Files Safe To Edit
- `app/page.tsx`
- `src/app/page.tsx`
- `package.json`
- `tsconfig.json`
- `components/`
- `venture-os/`

## Files To Avoid
- `.env`
- `.env.local`
- `pnpm-lock.yaml`

## Do Not Do
- vercel --prod
- git push
- rm -rf
- delete routes
- add auth unless packet allows
- add Stripe checkout unless approved
- fake traction or metrics

## Approval Required
no

## Approval Reason
n/a

## Success Criteria
- pnpm build exits 0

## Failure Conditions
- Requires undeclared secrets
- Two consecutive build failures without new hypothesis
- Scope creep beyond packet mission

## Verification Steps
Commands: pnpm install, pnpm build, pnpm lint, pnpm typecheck
URLs: https://legacybridge.noaerth.com

## Post-Execution Updates Required
- `venture-update-log.md`
- `venture-execution-history.md`
- `venture-scorecard.json`
- `venture-intelligence.md`
- `venture-intelligence.json`
- `venture-compiled-next-action.md`

## Ready-To-Use Cursor Prompt
```
Cursor, work in /Users/matador/startups/legacybridge. Read venture-os/venture-intelligence.md and venture-execution-packet.md. Mission: Fix local build so pnpm build passes.. Task: Run pnpm install && pnpm build in legacybridge. Fix the first blocking error in app/page.tsx, imports, or tsconfig. Stop after build PASS or 2 failed attempts.. Safe edit: app/page.tsx, src/app/page.tsx, package.json, tsconfig.json, components/. Avoid: .env, .env.local, pnpm-lock.yaml. Do not: vercel --prod; git push; rm -rf; delete routes. Verify: pnpm install; pnpm build; pnpm lint; pnpm typecheck. Success: pnpm build exits 0. Stop if: Requires undeclared secrets. Update venture-update-log.md and venture-execution-history.md. No deploy. No push.
```

## Ready-To-Use Aider Prompt
```
In /Users/matador/startups/legacybridge, read venture-execution-packet.md and venture-intelligence.json. Task only: Run pnpm install && pnpm build in legacybridge. Fix the first blocking error in app/page.tsx, imports, or tsconfig. Stop after build PASS or 2 failed attempts.. Edit: app/page.tsx, src/app/page.tsx, package.json, tsconfig.json, components/, venture-os/. Avoid .env, .env.local, pnpm-lock.yaml. Do not vercel --prod, git push, rm -rf. Success: pnpm build exits 0. pnpm build. Update venture-execution-history.md. No deploy.
```

## Ready-To-Use AutoBuilder Worker Prompt
```
Worker: BUILD_REPAIR_WORKER. legacybridge. Run pnpm install && pnpm build in legacybridge. Fix the first blocking error in app/page.tsx, imports, or tsconfig. Stop after build PASS or 2 failed attempts.. Read venture-autobuilder-packet.json. LEVEL_1_DOCS_ONLY. Verify pnpm build. No deploy.
```
