# Data Model — Legacybridge

**Updated:** 2026-05-22

## Status
**Marketing-only:** No database client detected in package.json.

## Recommended entities (when product needs persistence)
- User
- Workspace / Project (if B2B)
- Core domain object (venture-specific)
- AuditEvent
- Subscription (if Stripe)

## Ownership
All private rows must include `user_id` or `workspace_id` with server-side enforcement.

## Next step
Defer until v2.0+ requires accounts.
