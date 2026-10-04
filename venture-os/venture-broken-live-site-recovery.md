# Venture Broken Live Site Recovery

## Live Site Broken?
partial/manual check required

## Live URL
https://legacybridge.noaerth.com

## Failure Type
Stale deploy or live/local drift

## Evidence
Verification registry live_site_status; local build status

## Likely Cause
Build failed locally; deploy not updated; route missing on deployed version

## Recovery Action
Fix local build first — deploy only with founder approval

## Manual Checks Required
Browser: homepage loads, CTA clickable, mobile width

## Verification
Local build PASS before any deploy discussion
