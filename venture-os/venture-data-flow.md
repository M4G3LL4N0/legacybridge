# Venture Data Flow

## Inputs
User email, use-case text, optional demo parameters, UTM source.

## Processing
Validate → API handler → generate or queue **Automation run log + recommended actions**

## Outputs
Confirmation UI, **Automation run log + recommended actions**, optional email to user (later).

## Saved Data
Request record + output JSON + timestamps.

## Generated Data
Automation run log + recommended actions payload (report, score, plan, log).

## External Data
None required for MVP


## Internal Portfolio Data
Optional: link to venture-os scores; Noaerth card status (read-only).

## Privacy Risks
PII in forms — minimize fields; no public exposure of submissions.

## Data Model Candidates
- requests (id, email, use_case, status, output_json, created_at)
- demo_runs (id, session_id, input, output, created_at)


## Fastest Data Implementation
API route + JSON file or Vercel KV; upgrade to Supabase when ready
