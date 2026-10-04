# Venture QA Browser Engine

## Venture
- Name: Legacybridge
- Folder: legacybridge
- Live URL: https://legacybridge.noaerth.com
- Current stage: STAGE_3_BUILDABLE
- Kernel decision: QUARANTINE
- QA status: QA_NOT_READY
- QA scope: QA_SCOPE_INTERNAL

## QA Goal
Prove a real visitor can understand, trust, and complete the primary action without broken routes, unsafe claims, or mobile failure.

## Public Surface
Homepage https://legacybridge.noaerth.com

## Product Surface
**Start an automation run and review the output log**

## Conversion Surface
Primary CTA: "Get started"

## Required QA Checks
Homepage first impression, mobile 390px/430px, desktop 1440px, CTA click path, route walkthrough, demo, trust/claims, conversion path

## Manual Browser Checks Needed
Yes — full standard public site test (see PROJECT_UPDATE_OS_QA_MANUAL_TEST_SCRIPTS.md)

## Automated Checks Possible
HTTP probe (telemetry), route file scan, verification registry — not a substitute for browser QA

## QA Risk
high

## QA Decision
blocked

## Best QA Action
Fix build before browser QA — see venture-recovery-packet.md
