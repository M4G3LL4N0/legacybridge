# Claim Register: Legacybridge

## Public Claim Rules
- Query simulation is DEMO only, not live legacy system access.
- Do not claim production data bridge without integration proof.

## Claims

| Claim | Reality Label | Evidence | Risk | Safe Public Version | Proof Needed |
|-------|---------------|----------|------|---------------------|--------------|
| Interactive legacy query simulation on /demo | DEMO | `LegacyBridgeQuerySim` | low | "Demo simulates query flow with sample data." | local test |
| Local `pnpm build` passes | VERIFIED | portfolio matrix + spot build | low | Build verified. | none |
| Connects to customer COBOL/mainframe live | PLANNED | not proven in demo | high | "Integration is roadmap; demo is simulated." | integration proof |
| Live subdomain | ASSUMPTION | pattern only | medium | Verify DNS/HTTP before sharing URL. | curl |

## Launch readiness
- See `LAUNCH_READINESS.md` — LOCAL REVIEW READY
- PUBLIC READY: **no**
