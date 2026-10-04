# QA Checklist — Legacybridge

Date: 2026-05-20

## Commands
- [ ] `pnpm install`
- [ ] `pnpm build`
- [ ] `pnpm lint` (if present)

## Routes (smoke)
- [ ] `/` loads
- [ ] Nav links (no 404)
- [ ] Primary CTA destination
- [ ] `/demo` or product entry if linked
- [ ] `/trust`, `/privacy`, `/terms` if linked

## Mobile
- [ ] 375px — no horizontal scroll
- [ ] Menu open/close
- [ ] Tap targets ≥ 44px

## Trust
- [ ] Demo/sample labels visible where applicable
- [ ] No fake metrics or unsupported claims
