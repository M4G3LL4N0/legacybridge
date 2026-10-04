# Venture Recovery Plan

## Recovery Goal
Restore Legacybridge to verified working state for build.

## Issue Type
build

## Current Impact
high

## Recovery Strategy
Patch forward

## Step 1: Inspect
src/app/page.tsx, package.json, venture-os/venture-verification-harness.md, venture-os/venture-recovery-plan.md

## Step 2: Minimal Fix
Fix build error in src/app/page.tsx — approval before pnpm install

## Step 3: Verify
pnpm build (if script exists); local homepage check

## Step 4: Update Logs
venture-update-log.md, venture-recovery-verification.md, venture-scorecard.json

## Step 5: Prevent Repeat
Lock scoped edits; no broad refactors during recovery

## Approval Required
yes

## Stop Conditions
No deploy; no push; no destructive rollback; stop on new failures

## Prior Plan Notes
See venture-post-recovery-lessons.md for archived plan.
