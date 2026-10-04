# Expansion TrillionX Report: LegacyBridge

**Folder:** `legacybridge` · **Date:** 2026-05-19  
**Build:** PASS · **Demo:** yes · **Dashboard:** no

---

## 1. CURRENT PROJECT DIAGNOSIS

### Strong
- Core venture in Noaerth portfolio with working Next.js surface
- Public demo route exists
- Can add workspace when auth ready
- Prior passes: KISS hero, trust stubs, blindspot report, founder control patterns (where installed)

### Missing
- Persistent project memory (DB-backed)
- Live agent mission control with approval records
- Full launch kit generator UI
- Open-source scanner (internal research module)
- Real analytics + admin (internal only)

### Demo-only
- Expansion OS panel on homepage (preview labels)
- Sample scores and agent cards without backend
- Trust/docs stubs needing real policies

### Real infrastructure next
- users, workspaces, project_memory, approvals, generated_outputs, audit_logs
- Integration connection records with Requires approval state

### Simplify
- Duplicate hero sections; narrow to one primary story
- Generic AI taglines; use specific wedge language

### More powerful
- Repo map for this codebase
- Validation engine (customer interview scripts)
- Trend radar (category heat, not hype)

---

## 2. BEST EXTERNAL PATTERNS TO INTEGRATE


### Memory systems
- **Mem0 / Zep / LangMem** — persistent user/project memory with approval before write
- **Notion** — structured docs as memory surface

### Agent systems
- **LangGraph / CrewAI / AutoGen** — bounded agents with human-in-the-loop checkpoints
- **Cursor / Devin-style** — repo-aware tasks with explicit approve-to-apply

### Code / repo intelligence
- **Sourcegraph Cody / CodeGraph** — route and dependency maps (inspire Repo Map module)
- **Vercel / Railway** — honest deploy readiness checklists

### Launch intelligence
- **Product Hunt / Linear Changelog** — launch kit + post-launch learning loop
- **Stripe Atlas-style** — clear pricing and limitation pages

### Marketplace
- **GitHub Templates / Raycast Store** — versioned packs with preview + rollback

### Trust / support
- **Stripe Trust / Linear Security** — limitations increase credibility
- **Intercom-style** — contextual help, not walls of docs

*Adapt patterns only — do not claim integrations unless built.*


---

## 3. PRIORITIZED ROADMAP

### Ship now
- Expansion OS panel (preview) on homepage
- Demo vs live labels on all outputs
- Trust + docs links from expansion panel
- 10-second hero clarity
- Mobile polish on expansion tabs

### Build next
- Supabase/Postgres: project_memory, approvals
- Saved workspace state
- Launch kit markdown export
- Support search over knowledge base

### Big bet
- Agent mission control with task queue
- Repo intelligence map
- Build pack marketplace with governance

### Avoid for now
- Fake testimonials, revenue, user counts
- Autonomous deploy/outreach
- Marketplace before core workflow works
- Presenting integrations as live when stubbed

---

## 4. MODULE SPECS

### Project memory (preview → live)
- **Problem:** Users lose context between sessions
- **Solution:** Approved facts, assumptions, decisions timeline
- **UI:** Memory tab in ExpansionOSPanel; full Memory page later
- **Data:** project_memory, decision_log, assumptions
- **Approval:** Writes need review; reads are private
- **Metric:** % users who return and see saved context

### Agent mission control
- **Problem:** AI actions feel opaque
- **Solution:** Role cards with status, draft-only default
- **UI:** Agents tab; approve/reject on dashboard
- **Approval:** All external actions blocked until founder OK
- **Metric:** Time to first approved output

### Launch intelligence kit
- **Problem:** Founders underprepare launch
- **Solution:** Checklist + taglines + social drafts in report
- **UI:** Launch tab + EXPANSION report section
- **Metric:** Launch readiness score improvement week over week

### Scorecard
- **Problem:** No honest quality signal
- **Solution:** 0–100 scores with plain-English why
- **UI:** Overview tab scores
- **Data:** project_scores table (later)

---

## 5. CURSOR IMPLEMENTATION PLAN

### Files
- `components/ExpansionOSPanel.tsx` + `expansion-os.config.ts` (installed)
- `EXPANSION_TRILLIONX_REPORT.md` (this file)
- Improve: `app/page.tsx`, `/trust`, `/docs`, `/demo`

### Do not delete
- Existing homepage content, KISS hero, ExpertCouncil block, product flows

### Build
```bash
cd legacybridge && pnpm build
```

### Honesty
- Label Expansion OS as preview until DB connected
- No fake metrics in launch kit

---

## 6. FINAL BUILD INSTRUCTIONS

1. Keep ExpansionOSPanel below ExpertCouncil on homepage
2. Pass `pnpm build` before any public launch claim
3. Implement P0 from BLINDSPOT_TRILLIONX_REPORT.md in parallel
4. Connect memory DB only after approval schema exists
5. Export launch kit from dashboard (PLANNED)

---

## Launch kit (draft — edit before use)

**Tagline options:** (customize from POSITIONING.md)
1. AI for the code that still runs the world.
2. Start with one clear step.
3. Private drafts. You approve what ships.

**One-liner:** LegacyBridge helps Enterprise AI / Legacy Systems move from idea to action with honest labels and founder control.

**PH-style description:** (150 words max — no fake traction)

**Social (draft):** "Shipping LegacyBridge — AI for the code that still runs the world. Demo is sample data. Would love feedback from [ICP]."

---

*Universal TrillionX Expansion Engine · Patterns are inspiration, not live integrations.*
