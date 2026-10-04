# Venture Data Model

## Data Model Maturity
DATA_DOCS_ONLY

## What This Venture Needs To Know
- Who is the customer (Operations leaders and technical founders)
- What pain they have (Teams cannot verify identity, claims, or risk fast enough for high-stakes decisi)
- Whether they will pay (Demo: System intelligence for legacy software)
- Whether product flow works (**Start an automation run and review the output log**)

## Minimum Useful Data
- CTA click intent (manual log)
- Form submission: email, use case, urgency
- Quote/paid pilot interest if Stage 6+
- QA pass/fail evidence
- Build/live telemetry heartbeat

## Data Not Needed Yet
- Full analytics suite
- User accounts (unless product requires)
- Payment card data
- Sensitive PII beyond email + use case

## Entities
Customer: Operations leaders and technical founders
Lead: email + use case + source channel
User: defer until auth approved
Account: defer
Project: product output/session if applicable
Request: quote/demo/waitlist submission
Form submission: primary capture record
Feedback: interview/form response
Event: CTA, form, product action
Payment intent: quote with budget — not Stripe yet
Demo: demo request record
Quote: quote request record
Output: generated product output if applicable

## Records To Capture
Lead record · Customer signal record · QA record · Telemetry record · Feedback record

## Storage Mode
MARKDOWN_LOG

## Why This Storage Mode
Early-stage validation — structured capture without database until signal justifies tables.

## Database Needed?
Later — Supabase planned, do not migrate now

## Best Data Model Action
Capture BUILD_SIGNAL in venture-telemetry.json — fix build before demand tests
