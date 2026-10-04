<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- agent-fabric -->
<!-- TRILLIONX:AGENTS:BEGIN -->
## Purpose

js project bootstrapped with create-next-app . <!-- confidence:HIGH src:readme-description -->

## Commands & verification (cheapest first)
setup: `pnpm install` · `pnpm run dev`
| # | Check | Command |
|---|-------|---------|
| 0 | inspect-diff | `git diff` |
| 1 | format-check | `pnpm run lint` |
| 2 | typecheck | `pnpm run typecheck` |
| 4 | build | `pnpm run build` |
Use the cheapest level covering the blast radius. Never claim done unverified; if a level cannot run, say so.

## Agent roles
Delegate, don't role-play: `worker` implements, `reviewer` is read-only review, `escalator` is read-only root-cause diagnosis. Definitions and model routing: `.cursor/agents/`.

## Context discipline
Search before reading; read the smallest useful range. Inspect changes with `git diff`, never re-reading unchanged files.
Skip `node_modules`, `dist`, `.next`, `build`, `coverage`, `vendor`. Filter logs (`rg`, `grep`, `tail`, a scoped test reporter) instead of dumping them.
Prefer a deterministic script over having a model rediscover a command. Delegate to the cheapest capable role. Stop when acceptance criteria pass.
<!-- TRILLIONX:AGENTS:END -->
