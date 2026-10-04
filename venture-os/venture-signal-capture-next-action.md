# Venture Signal Capture Next Action

## Best Signal Action
Capture BUILD_SIGNAL in venture-telemetry.json — fix build before demand tests

## Signal Type
BUILD_SIGNAL

## Storage Mode
MARKDOWN_LOG

## Data Model Maturity
DATA_DOCS_ONLY

## Why It Matters
Structured evidence changes next build/validation/monetization decision — no invented data

## Worker
Cursor (build fix first)

## Approval Required
yes

## Verification Required
yes

## Files To Read
venture-data-model.md · venture-form-field-map.md · venture-customer-signal-capture.md · venture-scorecard.json

## Files Safe To Edit
venture-customer-signal-capture.md · venture-revenue-signal-capture.md · venture-markdown-json-data-plan.md · venture-update-log.md

## Files To Avoid
.env · supabase/migrations · payment config · analytics install

## Prompt
Log one real build signal with minimum fields in venture-customer-signal-capture.md. Do not create database tables or install analytics.
