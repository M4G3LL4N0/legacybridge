# Security Review — Legacybridge

**Updated:** 2026-05-22

## Summary
Fix build before security hardening.

## Authentication
**None detected** — public marketing only (confirmed for scan).

## Secrets & environment
- Referenced env: none scanned
- .env.example: **missing — add in v0.5**

## Input validation
Validate all API routes and forms when added (v3.4).

## Rate limits
Plan limits before public AI or write APIs (v3.6).

## P0 items
- Restore build
- No secrets in git (verify)
