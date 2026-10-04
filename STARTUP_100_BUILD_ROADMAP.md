# Startup 100 Build Roadmap — Legacybridge

**Ironframe 100** · **Assigned current:** v0.2 · **Next:** v0.2  
**Live:** https://legacybridge.noaerth.com

| # | Ver | Name | Cat | Goal | Success | Pri | Dep |
|---|-----|------|-----|------|---------|-----|-----|
| 001 | v0.1 | Ground Truth Scan | Foundation | Inventory structure, stack, routes, build, docs, risks | AUTODISCOVERY_REPORT.md complete | P0 | — |
| 002 | v0.2 | Build Resurrection | Foundation | Clean install, typecheck, lint, build | pnpm build exits 0 | P0 | 001 |
| 003 | v0.3 | Route Reality | Foundation | Verify routes, nav, 404, API paths | Route inventory + smoke | P0 | 002 |
| 004 | v0.4 | Dependency Discipline | Foundation | Fix missing/unused packages | No missing critical deps | P1 | 002 |
| 005 | v0.5 | Environment Lock | Foundation | Document env vars + .env.example | .env.example matches code | P1 | 001 |
| 006 | v0.6 | File System Order | Foundation | Clarify structure without breaking | ARCHITECTURE.md matches tree | P2 | 001 |
| 007 | v0.7 | Type Safety Base | Foundation | Shared types + strict TS | typecheck passes | P1 | 002 |
| 008 | v0.8 | Placeholder Purge | Foundation | Remove fake metrics/claims | Audit list in TECHNICAL_DEBT | P1 | 001 |
| 009 | v0.9 | Foundation Audit Complete | Foundation | Foundation scorecard | FOUNDATION_AUDIT.md | P0 | 001-008 |
| 010 | v1.0 | Real MVP Cut | Product | One real user workflow | Workflow documented | P0 | 009 |
| 011 | v1.1 | First User Journey | Product | Landing→CTA→value | Journey in PRODUCT_ENGINEERING | P0 | 010 |
| 012 | v1.2 | Core Action | Product | Main action functional | Core action demo works | P0 | 010 |
| 013 | v1.3 | State Coverage | Product | Loading/empty/error/success | States on core flows | P1 | 011 |
| 014 | v1.4 | Component System | Product | Dedupe UI components | Component map | P2 | 010 |
| 015 | v1.5 | Mobile First Pass | Product | Mobile layout + CTA | 390px QA pass | P1 | 010 |
| 016 | v1.6 | Accessibility Pass | Product | a11y basics | Keyboard + labels audit | P2 | 015 |
| 017 | v1.7 | Trust Layer | Product | Honest copy + demo labels | No unsupported claims live | P1 | 008 |
| 018 | v1.8 | Activation Moment | Product | Fast first value | <60s proof path | P1 | 011 |
| 019 | v1.9 | MVP Scorecard | Product | Stranger-usable MVP | Product score ≥70 | P1 | 018 |
| 020 | v2.0 | User Identity | Identity | Auth model + sessions | Auth decision doc | P1 | 019 |
| 021 | v2.1 | Account Shell | Identity | Account/dashboard area | Private routes exist | P2 | 020 |
| 022 | v2.2 | Onboarding System | Identity | Validated onboarding | Onboarding completes | P1 | 020 |
| 023 | v2.3 | Settings Layer | Identity | User settings | Settings page | P3 | 021 |
| 024 | v2.4 | Workspace Model | Identity | Org/project model if needed | Ownership model in DATA_MODEL | P1 | 020 |
| 025 | v2.5 | Permissions Map | Identity | RBAC documented | PERMISSIONS in SECURITY | P1 | 024 |
| 026 | v2.6 | Admin Boundary | Identity | Admin routes gated | Admin separate | P2 | 025 |
| 027 | v2.7 | Support Path | Identity | Contact/support flow | /contact works | P1 | 011 |
| 028 | v2.8 | Account Safety | Identity | Privacy/export/delete | Policy + plan | P2 | 021 |
| 029 | v2.9 | User System Scorecard | Identity | User readiness score | Score in FOUNDATION_AUDIT | P2 | 028 |
| 030 | v3.0 | Data Model Truth | Security | Entities + relationships | DATA_MODEL.md | P1 | 024 |
| 031 | v3.1 | Schema Discipline | Security | Migrations/constraints | Schema versioned | P1 | 030 |
| 032 | v3.2 | Ownership Enforcement | Security | RLS/ownership checks | Tests for isolation | P0 | 031 |
| 033 | v3.3 | Server-Side Auth | Security | Server auth checks | APIs gated server-side | P0 | 020 |
| 034 | v3.4 | Input Validation | Security | Zod/validation on APIs | Invalid→400 | P1 | 031 |
| 035 | v3.5 | Secrets Safety | Security | Env + secret audit | No secrets in git | P0 | 005 |
| 036 | v3.6 | Rate Limit Plan | Security | Rate limits documented | Limits on sensitive APIs | P1 | 033 |
| 037 | v3.7 | Audit Events | Security | Audit log plan | Critical events logged | P2 | 031 |
| 038 | v3.8 | Backup Recovery | Security | Backup/restore plan | DR doc | P2 | 031 |
| 039 | v3.9 | Security Scorecard | Security | Security score ≥70 | SECURITY_REVIEW.md | P1 | 035-038 |
| 040 | v4.0 | Workflow Map | Workflow | End-to-end workflow | Workflow in PRODUCT_ENGINEERING | P1 | 010 |
| 041 | v4.1 | Workflow Screens | Workflow | Step UX complete | All steps navigable | P2 | 040 |
| 042 | v4.2 | Progress System | Workflow | Status/history | Progress UI | P2 | 024 |
| 043 | v4.3 | Action Feedback | Workflow | Toasts/errors | Feedback on actions | P1 | 013 |
| 044 | v4.4 | Notifications Layer | Workflow | Email/in-app plan | Notification spec | P3 | 022 |
| 045 | v4.5 | Search Filter | Workflow | Search/filter if needed | Search works | P2 | 010 |
| 046 | v4.6 | Saved Outputs | Workflow | Persist results | DB writes | P1 | 024 |
| 047 | v4.7 | Export Share | Workflow | Export/share | Export path | P3 | 046 |
| 048 | v4.8 | Admin Operations | Workflow | Internal ops | Admin queue | P2 | 026 |
| 049 | v4.9 | Workflow Scorecard | Workflow | Workflow complete | Score ≥70 | P2 | 048 |
| 050 | v5.0 | AI Inventory | AI | Document AI usage | AI_SYSTEM.md | P2 | — |
| 051 | v5.1 | Prompt Architecture | AI | Versioned prompts | prompts/ structure | P3 | 050 |
| 052 | v5.2 | Structured Outputs | AI | Schema-validated outputs | Zod on outputs | P2 | 050 |
| 053 | v5.3 | Retrieval Layer | AI | RAG if needed | Retrieval doc | P3 | 050 |
| 054 | v5.4 | Memory Boundaries | AI | Scoped memory | Memory rules | P2 | 050 |
| 055 | v5.5 | Agent Tool Safety | AI | Gate risky tools | Tool allowlist | P1 | 050 |
| 056 | v5.6 | AI Cost Controls | AI | Token budgets | Cost logs | P1 | 050 |
| 057 | v5.7 | AI Eval Set | AI | Eval cases | Eval suite | P2 | 050 |
| 058 | v5.8 | Fallback Behavior | AI | Model failure handling | Graceful fallback | P2 | 050 |
| 059 | v5.9 | AI Scorecard | AI | AI readiness | Score in audit | P2 | 058 |
| 060 | v6.0 | Business Model Map | Revenue | Pricing path | Monetization in strategy | P1 | 019 |
| 061 | v6.1 | Pricing Surface | Revenue | Pricing page | /pricing honest | P2 | 060 |
| 062 | v6.2 | Payment Architecture | Revenue | Stripe plan | Payment doc | P2 | 060 |
| 063 | v6.3 | Payment Protection | Revenue | Server-side paid gates | Paid routes gated | P1 | 062 |
| 064 | v6.4 | Usage Metering | Revenue | Usage/credits | Metering spec | P2 | 062 |
| 065 | v6.5 | Billing UX | Revenue | Billing states | Success/fail UX | P2 | 062 |
| 066 | v6.6 | Upgrade Loop | Revenue | Upgrade prompts | Upgrade CTA rules | P3 | 060 |
| 067 | v6.7 | Retention Loop | Revenue | Habit/history | Retention feature | P2 | 046 |
| 068 | v6.8 | Revenue Analytics | Revenue | Conversion metrics | Revenue events | P3 | 060 |
| 069 | v6.9 | Monetization Scorecard | Revenue | Can charge honestly | Score ≥60 | P2 | 068 |
| 070 | v7.0 | Analytics Foundation | Growth | Event taxonomy | Analytics plan | P2 | 011 |
| 071 | v7.1 | SEO Base | Growth | Metadata/sitemap/OG | SEO checklist pass | P1 | 002 |
| 072 | v7.2 | Landing Clarity | Growth | 5-second test | Headline clarity | P1 | 011 |
| 073 | v7.3 | Conversion Path | Growth | CTA + proof | CTA tracked | P1 | 072 |
| 074 | v7.4 | Content Engine | Growth | Use-case pages | 3 use-case pages | P3 | 071 |
| 075 | v7.5 | Social Proof Rules | Growth | Real proof only | No fake logos | P1 | 008 |
| 076 | v7.6 | Referral Share | Growth | Share loop | Share spec | P4 | 073 |
| 077 | v7.7 | Email Capture | Growth | Waitlist w/ consent | Capture stored | P2 | 073 |
| 078 | v7.8 | Growth Experiments | Growth | 10 growth tests | Experiment backlog | P3 | 070 |
| 079 | v7.9 | Growth Scorecard | Growth | Acquisition ready | Score ≥65 | P3 | 078 |
| 080 | v8.0 | Performance Pass | Reliability | Bundle/query perf | Lighthouse sample | P2 | 002 |
| 081 | v8.1 | Caching Strategy | Reliability | Cache plan | Cache doc | P3 | 080 |
| 082 | v8.2 | Error Boundaries | Reliability | Graceful errors | Error UI | P1 | 013 |
| 083 | v8.3 | Retry Idempotency | Reliability | Safe retries | Idempotency keys | P2 | 062 |
| 084 | v8.4 | Background Jobs | Reliability | Async jobs | Job runner plan | P3 | 040 |
| 085 | v8.5 | Observability Wiring | Reliability | Logs/metrics | OBSERVABILITY.md live | P1 | 002 |
| 086 | v8.6 | Incident Playbook | Reliability | Incident runbook | Playbook in DEPLOYMENT | P2 | 085 |
| 087 | v8.7 | Rollback System | Reliability | Rollback steps | Rollback doc | P1 | 002 |
| 088 | v8.8 | Load Scale Plan | Reliability | Scale bottlenecks | Scale doc | P3 | 080 |
| 089 | v8.9 | Reliability Scorecard | Reliability | Ops readiness | Score ≥70 | P2 | 087 |
| 090 | v9.0 | Customer Demo Mode | Market | Real demo path | Demo script | P1 | 012 |
| 091 | v9.1 | Investor Narrative | Market | Honest investor story | Investor brief aligned | P2 | 019 |
| 092 | v9.2 | Founder Dashboard | Market | Internal metrics | Ops dashboard plan | P3 | 085 |
| 093 | v9.3 | Admin Review Queue | Market | Moderation if needed | Queue spec | P4 | 026 |
| 094 | v9.4 | Legal Privacy Basics | Market | Privacy/terms | Legal pages draft | P2 | 028 |
| 095 | v9.5 | Customer Feedback | Market | Feedback capture | Feedback path | P3 | 027 |
| 096 | v9.6 | Documentation Pack | Market | Full doc pack | All foundation docs | P1 | 009 |
| 097 | v9.7 | QA Launch Checklist | Market | Launch checklist | TEST_PLAN checklist | P1 | 096 |
| 098 | v9.8 | Roadmap Compression | Market | 7/30/90 plan | VERSION_PLAN.md | P1 | 096 |
| 099 | v9.9 | Launch Readiness Review | Market | Final scorecard | Production readiness ≥75 | P0 | 097 |
| 100 | v10.0 | Launch Titan | Market | Production candidate | Launch sign-off | P0 | 099 |

## Do-not-break
Preserve working routes, honest copy, and venture-specific worldId/design lane.
