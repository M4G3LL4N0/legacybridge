# Venture Route Verification

## Framework
Next.js (16.2.3) (app-router)

## Expected Homepage Route
src/app/page.tsx

## Route Files Found
- /src/app/about
- /src/app/app/artifacts
- /src/app/app/command-center
- /src/app/app/connectors
- /src/app/app/ingest
- /src/app/app/notifications
- /src/app/app/onboarding
- /src/app/app
- /src/app/app/reports/executive-summary
- /src/app/app/settings
- /src/app/app/sources
- /src/app/app/workflows/[slug]
- /src/app/app/workflows
- /src/app/architecture
- /src/app/buyers
- /src/app/compare
- /src/app/contact
- /src/app/demo
- /src/app/docs
- /src/app/enterprise
- /src/app/faq
- /src/app/industries
- /src/app/login
- /src/app
- /src/app/pilot
- /src/app/platform
- /src/app/pricing
- /src/app/resources
- /src/app/roi
- /src/app/security

## Missing Route Risks



## Known Routes
- /src/app/about
- /src/app/app/artifacts
- /src/app/app/command-center
- /src/app/app/connectors
- /src/app/app/ingest
- /src/app/app/notifications
- /src/app/app/onboarding
- /src/app/app
- /src/app/app/reports/executive-summary
- /src/app/app/settings
- /src/app/app/sources
- /src/app/app/workflows/[slug]
- /src/app/app/workflows
- /src/app/architecture
- /src/app/buyers

## CTA Target Routes
- Manual audit required — check nav links in homepage source

## Broken Route Risks
- Live site audit: 6 nav links likely 404

## 404 Risk
high

## Verification Needed
- Confirm src/app/page.tsx renders locally
- Click primary nav links on https://legacybridge.noaerth.com
