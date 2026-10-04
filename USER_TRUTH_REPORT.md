# User Truth Report: Legacybridge

**Edition:** Cursor User Truth Engine  
**Date:** 2026-05-19  
**Folder:** `/Users/matador/startups/legacybridge`  
**Proof ladder:** 4  
**Build:** UNKNOWN (not run this pass)

---

## 1. Product Read

| Field | Assessment |
|-------|------------|
| Appears to be | Legacybridge — B2B workflow SaaS |
| Currently does | Next.js venture: /, /about, /app, /app/artifacts, /app/command-center, /app/connectors, /app/ingest, /app/notifications, /app/onboarding, /app/reports/executive-summary, /app/settings, /app/sources |
| Appears to promise | The intelligence layer |
| Current proof level | 4 |
| Risk level | MEDIUM — Generic ChatGPT wrapper with no workflow lock-in |

**Inspected:** `package.json`, `src/app/page.tsx`, layout, `startupjourney.md`, VentureSignature / ProductHonestyNote pattern.

---

## 2. Primary User

- **Who:** Team lead with recurring workflow pain (HYPOTHESIS)
- **Situation:** Responsible for outcomes when the process fails
- **Main pain:** Manual handoffs and no audit trail (HYPOTHESIS)
- **Workaround today:** Spreadsheets, email threads, shared codes, generic tools (HYPOTHESIS)
- **Desired outcome:** One exportable outcome per session (labeled DEMO)
- **Buying trigger:** One painful incident or audit question they cannot answer (HYPOTHESIS)
- **Trust requirement:** Labeled demo data; no fake metrics; clear limits

---

## 3. Secondary Users

| Segment | Pain | Use case | Priority |
|---------|------|----------|----------|
| Buyer / budget owner | Prove ROI | Pilot approval | P1 |
| End operator | Speed | Daily workflow | P1 |
| IT / security reviewer | Risk | Access and data handling | P2 |

---

## 4. Wrong Users

- **Everyone on the internet**
- Why distraction: they need different proof, pricing, and support than this MVP can offer

---

## 5. Pain Ranking

| Pain | Severity | Frequency | Urgency | WTP | Retention | Priority |
|------|----------|-----------|---------|-----|-----------|----------|
| Functional: manual steps | 85 | 80 | 75 | 70 | 72 |
| Time: slow handoffs | 78 | 75 | 70 | 65 | 68 |
| Trust: fear of wrong access/data | 70 | 65 | 80 | 75 | 80 |
| Financial: rework cost | 65 | 60 | 55 | 70 | 60 |
| Emotional: stress from ambiguity | 72 | 70 | 68 | 50 | 65 |

---

## 6. Current Workarounds

| Workaround | Why users use it | Weakness | Opportunity |
|------------|------------------|----------|-------------|
| Email + PDF | Familiar | No live verification | Exportable audit trail |
| Shared codes | Fast | Insecure, no revoke | Time-bounded credentials |
| Generic AI chat | Feels modern | No workflow | Structured demo with steps |

---

## 7. MVP Fit

| Feature | User need | Quality (0-10) | Decision | Reason |
|---------|-----------|------------------|----------|--------|
| Homepage | Explain who/pain/CTA | 7 | improve | Clarity for first visit |
| Demo route | First value | 6 | improve | Optimize time-to-value |
| Honesty labels | Honest expectations | 5 | build | ProductHonestyNote (`demo`) |
| Core wedge flow | First value | 5 | improve | Reduce time-to-first labeled export on main flow |
| Pricing | Buyer conversion | 3 | delay | After pilot pricing test |

**Gap:** Reduce time-to-first labeled export on main flow

---

## 8. Messaging Strategy

| Item | Copy |
|------|------|
| Main promise | Audit-grade workflow shell for a vertical budget line |
| Homepage headline (target) | The intelligence layer |
| Subheadline (target) | For Team lead with recurring workflow pain (HYPOTHESIS) — One exportable outcome per session (labeled DEMO) |
| Primary CTA | Try the demo |
| Secondary CTA | How it works |
| One-sentence pitch | Legacybridge helps Team lead with recurring workflow pain (HYPOTHESIS) with Manual handoffs and no audit trail (HYPOTHESIS). |
| Words to use | specific, demo, audit, export, next step, minutes |
| Words to avoid | revolutionary, seamless, AI-powered platform, transform |

**Current hero (KNOWN from repo):** The intelligence layer

---

## 9. Trust Gaps

| Gap | Risk | Fix | Public-safe copy |
|-----|------|-----|------------------|
| No paying users in repo | Fake traction | Remove metrics | "Early MVP — validating with pilots" |
| Mock data unlabeled | High | ProductHonestyNote | "Sample data in this demo" |
| No demo | Product theater | Ship /demo | "Walkthrough uses labeled sample data" |

---

## 10. Claim Register

| Claim | Evidence | Risk | Public-safe wording | Proof needed |
|-------|----------|------|---------------------|--------------|
| Product works locally | UNKNOWN | low | "Try the MVP locally" | User session |
| Production-ready | build only | high | DO NOT CLAIM | Pilot + uptime |
| Paying customers | none in repo | critical | DO NOT CLAIM | Revenue |
| Proven outcomes | none in repo | high | DO NOT CLAIM | 5 user outcomes |
| Legacybridge automates everything | mostly DEMO | high | "Demo mode" / labeled steps | Live integration |

---

## 11. User Research Questions

1. Tell me about the last time this problem wasted your afternoon.
2. What did you do instead of using a tool like this?
3. Who else got involved when things went wrong?
4. What did that workaround cost in time or money?
5. What almost made you give up on fixing it?
6. Have you paid for software to solve this before? What happened?
7. What would make you trust a demo enough to share it with your boss?
8. What proof would you need before you paid?
9. What is the smallest outcome that would make this worth it this week?
10. Where does your current process break first?
11. What report or artifact do you need at the end?
12. What would make you stop using this after day 3?
13. What words do you use internally to describe this pain?
14. What mistake are you most afraid of making?
15. If this disappeared tomorrow, what would you miss?
16. Who signs the check, and what do they care about?
17. What compliance or policy constraint blocks you today?
18. How often does this happen per week?
19. What triggers you to search for a new solution?
20. What would a successful pilot look like in 14 days?

---

## 12. Metrics

| Metric | Definition |
|--------|------------|
| North Star | **first_value_reached** (user completes core demo workflow) |
| Activation | primary_cta_clicked → demo_started |
| First value | core_action_completed with export or save |
| Retention | return_visit within 7 days |
| Revenue signal | payment_started or pilot_agreed (manual) |
| Churn signal | demo_started without core_action_completed |

**Events (documentation only unless analytics exists):** page_viewed, primary_cta_clicked, demo_started, core_action_completed, feedback_submitted.

---

## 13. Build Priorities

| P | Action | User pain | Effort | Impact |
|---|--------|-----------|--------|--------|
| P0 | Reduce time-to-first labeled export on main flow | First value | M | High |
| P1 | Rewrite hero + CTA from section 8 | Confusion | S | High |
| P1 | ProductHonestyNote on homepage | Trust | S | High |
| P2 | FAQ: who pays, data handling, demo limits | Trust | S | Med |
| P3 | Pricing page | Revenue | M | After pilot |

---

## 14. 7-Day User Validation Plan

| Day | Action |
|-----|--------|
| 1 | Local walkthrough: time to first value |
| 2 | Rewrite hero + CTA from section 8 |
| 3 | 5 user interviews (questions in §11) |
| 4 | Fix top 3 confusion points |
| 5 | Record 2-min demo video (labeled DEMO) |
| 6 | 10 outbound messages to Team lead with recurring workflow pain (HYPOTHESIS) |
| 7 | Update claim register from findings |

---

## 15. 30-Day Product Improvement Plan

| Week | Focus |
|------|--------|
| 1 | Clarity + demo path |
| 2 | Trust + FAQ + claim safety |
| 3 | Pilot offer + pricing hypothesis |
| 4 | Retention hook (export, save, follow-up) |

---

## 16. Final Strategy

**Legacybridge** is for **Team lead with recurring workflow pain (HYPOTHESIS)** who need **One exportable outcome per session (labeled DEMO)** without hype. Proof is at level **4**; do not sound like level 8. Next: **Reduce time-to-first labeled export on main flow**. All public copy must pass the claim register in §10.

**First action:** `cd /Users/matador/startups/legacybridge && pnpm dev` → open primary route.

**Cross-read:** `AROUND_THE_CORNER_REPORT.md`, `VENTURE_COUNCIL_360.md` (if present).

---

## 17. Branding

**VentureSignature:** AutoBuilder / Noaerth footer (portfolio standard). Do not remove without replacement.
