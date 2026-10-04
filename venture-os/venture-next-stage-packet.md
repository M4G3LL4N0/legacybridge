# Venture Next Stage Packet

## Target Stage
STAGE_7_CUSTOMER_READY

## Packet Type Needed
BUILD_REPAIR_PACKET

## Packet Mission
Fix local build so pnpm build passes.

## Why This Packet Moves Stage
Unblocks Build FAIL — blocks stage advancement toward STAGE_7_CUSTOMER_READY

## Files To Read
- venture-stage-engine.md
- venture-stage-blockers.md
- venture-verification-harness.md
- venture-execution-packet.md

## Files Safe To Edit
app/, src/app/, package.json, tsconfig.json, venture-os/

## Verification Required
- pnpm build (if app)
- Re-run verification harness
- Re-run stage promotion engine

## Approval Required
no
