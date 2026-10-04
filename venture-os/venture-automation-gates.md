# Venture Automation Gates

## Safe Automation Level
LEVEL_1_DOCS_ONLY

## Allowed Actions
- Read files
- Update venture-os docs
- Update scorecards
- Generate prompts

## Requires Founder Approval
- Deploy (vercel --prod)
- git push
- Payments / auth / DB migrations
- Major public claim changes
- Domain changes


## Forbidden Actions
- vercel --prod without approval
- git push
- rm -rf / destructive git
- Exposing secrets
- Fake traction claims

## Files Safe To Edit
- venture-os/*.md
- app/page.tsx, src/app/page.tsx
- components/
- app/api/ (if LEVEL_4+)

## Files To Avoid
- .env, .env.local
- pnpm-lock.yaml (unless LEVEL_5 build repair)

## Commands Safe To Recommend
- pnpm install, pnpm build, pnpm lint
- node tools/*-v*.mjs (scanners)

## Commands Not To Run
- vercel --prod, git push, rm -rf

## Current Risk Reason
Build FAIL; risk 56; quarantine no.
