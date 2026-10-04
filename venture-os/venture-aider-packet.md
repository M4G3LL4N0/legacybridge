# Venture Aider Packet

## Copy-Paste Aider Prompt

You are working inside:

/Users/matador/startups/legacybridge

Read:
venture-os/venture-intelligence.md
venture-os/venture-execution-packet.md
venture-os/venture-verification-gates.md
venture-os/venture-scorecard.json

Perform only this task:
Run pnpm install && pnpm build in legacybridge. Fix the first blocking error in app/page.tsx, imports, or tsconfig. Stop after build PASS or 2 failed attempts.

Files you may edit:
app/page.tsx
src/app/page.tsx
package.json
tsconfig.json
components/
venture-os/

Files to avoid:
.env
.env.local
pnpm-lock.yaml

Do not:
vercel --prod
git push
rm -rf
delete routes
add auth unless packet allows
add Stripe checkout unless approved
fake traction or metrics

Success means:
pnpm build exits 0

After editing, update:
venture-os/venture-update-log.md
venture-os/venture-execution-history.md
venture-os/venture-scorecard.json
venture-os/venture-intelligence.md
venture-os/venture-execution-packet.md

Do not deploy.
Do not push.
Do not delete.
Use pnpm if commands are needed.
Provide verification steps.
