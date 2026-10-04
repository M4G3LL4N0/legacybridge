# Venture Manual Deploy Approval

## Manual Deploy Approval Required?
yes

## Recommended Answer
defer — RELEASE_DO_NOT_DEPLOY

## What Would Be Deployed
Node app at https://legacybridge.noaerth.com

## Evidence Supporting Deploy
Release notes file (v4.3); Rollback notes file (v4.3)

## Evidence Missing
Env file present — founder env review required

## Manual Deploy Command
Do not run automatically. Founder manual step only after approval: review Vercel project settings, then deploy from Vercel dashboard or approved CLI — never vercel --prod without explicit approval.

## Post-Deploy QA Required
yes
