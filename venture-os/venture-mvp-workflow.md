# Venture MVP Workflow

## MVP Goal
Prove: *User completes demo path and submits request or saves an artifact*

## User Entry Point
https://legacybridge.noaerth.com → primary CTA

## Step 1
Land on homepage; understand wedge in 5 seconds.

## Step 2
Click **Demo** → /demo.

## Step 3
User provides minimum input (email + use case + demo interaction).

## Step 4
System returns **Automation run log + recommended actions** (real or clearly labeled sample).

## Success State
User sees confirmation + optional copy-to-clipboard / download; founder notified.

## Empty State
Explain what to enter; show example output card (labeled sample).

## Error State
Inline validation; retry; support contact link.

## Save State
POST to API route + optional localStorage draft until DB.

## Data State
`requests(id, email, use_case, output_json, created_at)` or equivalent.

## Demo State
Static sample JSON in `lib/demo-data.ts` — banner: "Sample output".

## Payment State
After proof event, offer paid pilot on /pricing

## MVP Completion Definition
Build PASS + user completes core action end-to-end in <3 minutes on desktop and mobile.
