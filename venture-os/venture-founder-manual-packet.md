# Venture Founder Manual Packet

## What Needs To Happen
Fix local build so pnpm build passes.

## Why It Matters
FIX_FIRST at STAGE_6_MONETIZABLE

## Who Should Do It
Aider

## Decision Needed
no

## Approval Needed
no

## Risk
medium

## Upside
Becomes valuable after build passes

## Best Action
Run pnpm install && pnpm build in legacybridge. Fix the first blocking error in app/page.tsx, imports, or tsconfig. Stop after build PASS or 2 failed attempts.

## Copy-Paste Prompt
Use venture-aider-packet.md

## How To Verify
pnpm install; pnpm build; pnpm lint; pnpm typecheck
