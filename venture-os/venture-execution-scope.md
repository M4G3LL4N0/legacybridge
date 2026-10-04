# Venture Execution Scope

## In Scope
- Fix local build so pnpm build passes.
- Packet size S only

## Out Of Scope
- Full redesign, auth, payments, deploy, unrelated ventures

## Files To Read
- venture-os/venture-intelligence.md
- venture-os/venture-intelligence.json
- venture-os/venture-execution-packet.md
- venture-os/venture-verification-gates.md
- venture-os/venture-scorecard.json

## Files Safe To Edit
- app/page.tsx
- src/app/page.tsx
- package.json
- tsconfig.json
- components/
- venture-os/

## Files To Avoid
- .env
- .env.local
- pnpm-lock.yaml

## Commands Allowed To Recommend
pnpm install, pnpm build, pnpm lint, pnpm typecheck

## Commands Not Allowed
vercel --prod, git push, rm -rf

## Requires Approval
None for this packet
