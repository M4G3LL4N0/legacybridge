# Venture Cursor Packet

## Copy-Paste Cursor Prompt

Cursor, you are working inside:

/Users/matador/startups/legacybridge

Read these files first:
- venture-os/venture-intelligence.md
- venture-os/venture-execution-packet.md
- venture-os/venture-verification-gates.md
- venture-os/venture-scorecard.json

Mission:
Fix local build so pnpm build passes.

Exact task:
Run pnpm install && pnpm build in legacybridge. Fix the first blocking error in app/page.tsx, imports, or tsconfig. Stop after build PASS or 2 failed attempts.

Files safe to edit:
- app/page.tsx
- src/app/page.tsx
- package.json
- tsconfig.json
- components/
- venture-os/

Files to avoid:
- .env
- .env.local
- pnpm-lock.yaml

Rules:
- Preserve useful existing content.
- Do not deploy.
- Do not push.
- Do not delete.
- Do not install packages unless the packet explicitly allows it.
- Use pnpm as default.
- Do not add fake traction, users, revenue, customers, partners, investors, or unsupported claims.
- Make one meaningful improvement only.
- Update required venture-os files after completion.

Verification:
- `pnpm install`
- `pnpm build`
- `pnpm lint`
- `pnpm typecheck`

Stop if:
- Requires undeclared secrets
- Two consecutive build failures without new hypothesis
- Scope creep beyond packet mission

Return:
- Files changed
- What improved
- Verification result
- Remaining risks
- Next suggested packet
