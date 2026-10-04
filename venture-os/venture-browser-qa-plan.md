# Venture Browser QA Plan

## QA Scope
QA_SCOPE_INTERNAL

## Test URLs
- https://legacybridge.noaerth.com


## Viewports
Mobile: 390px, 430px
Tablet: 768px
Desktop: 1440px

## User Persona
Target buyer or operator for Legacybridge

## Test Goal
Understand value in 5 seconds and complete primary CTA without confusion

## Required Click Path
Step 1: Open https://legacybridge.noaerth.com
Step 2: Read hero — what is this?
Step 3: Click "Get started"
Step 4: Confirm destination loads (no 404)
Step 5: Complete demo step 1

## Expected Result
Clear positioning, working CTA, acceptable mobile layout, honest claims

## Pass Criteria
No 404; hero understandable; CTA works; mobile usable; no unsafe claims

## Fail Criteria
404; blank page; broken CTA; unusable mobile; fake metrics/testimonials

## Manual Notes
Do not mark QA_PASSED until this script is executed in a real browser.
