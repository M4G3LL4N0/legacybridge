# Venture Event Taxonomy

## Events That Matter
- CTA clicked (primary conversion)
- Form submitted (demand signal)
- Quote/paid pilot requested (revenue signal)
- Product action completed: **Start an automation run and review the output log**
- Demo opened
- QA pass on conversion path

## Events That Do Not Matter Yet
- Page views without CTA
- Social likes
- Impressions
- Bot traffic

## Core Events
Page viewed: P1 — only with CTA context
CTA clicked: P0
Form started: P1
Form submitted: P0
Demo opened: P1
Product action completed: P0 if product exists
Output generated: P0 for generator ventures
Quote requested: P0 at Stage 6
Waitlist joined: P0 at Stage 4-5
Payment intent: P0 — manual log only
Feedback submitted: P1
Return visit: P2
Error occurred: P0 for ops

## High-Intent Events
Quote request with budget · Paid pilot interest · Demo with use case · Repeat product usage

## Vanity Events
Page views without CTA · Social likes · Impressions · Bot traffic

## Event Capture Priority
P0: CTA clicked, Form submitted
P1: Page viewed, Demo opened, Quote requested
P2: Return visit, referral
P3: Page views, impressions

## Best Event Action
Define P0 events in venture-os markdown/JSON — do not install analytics yet
