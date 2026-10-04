# Risk Register — Legacybridge

| Risk | Severity | Mitigation |
|------|----------|------------|
| Build FAIL | High | Heal JSX/imports; matrix rebuild |
| Stale deploy / nav 404s | Medium | Redeploy after PASS |
| Generic template feel | Medium | Keep world-specific design lane |


# Risk Register — Legacybridge

| Code | File | Why | Fix |
|------|------|-----|-----|
| DUAL_APP_ROOT | app/ + src/app/ | Duplicate Next.js app roots | Merge into src/app or app only |
| RISKY_NODE_MODULES | node_modules/ | node_modules present in tree | Ensure gitignored; do not commit |

*Updated 2026-05-22 by Build Pulse v1.2*
