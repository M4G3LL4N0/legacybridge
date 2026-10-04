# Architecture Decisions — LegacyBridge

**Date:** 2026-05-20

## ADR-001: Next.js App Router
- **Context:** Next.js
- **Decision:** Keep App Router; additive portfolio components
- **Tradeoff:** Typed routes require `<a>` or route casts for dynamic hrefs
- **Rollback:** Revert homepage imports only
