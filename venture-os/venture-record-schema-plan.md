# Venture Record Schema Plan

## Records To Create Eventually
Lead · Customer signal · Revenue signal · Feedback · Product usage · QA · Telemetry · Investor proof

## Lead Record
email, name, company, role, use_case, pain, urgency, source_channel, created_at, status

## Customer Signal Record
segment, pain, use_case, urgency, workaround, desired_outcome, budget, objection, next_step, strength, evidence_type

## Revenue Signal Record
offer, price, budget, timeline, buyer, use_case, payment_intent, objection, next_step, strength

## Growth Signal Record
channel, source, audience, cta, action, intent, quality, next_step

## Feedback Record
person, segment, role, problem, use_case, desired_outcome, objection, feature_request, willingness_to_pay, urgency, quote

## Product Usage Record
session_id, action, input_type, output_type, completion, duration, error, feedback

## QA Record
check, status, reviewer, evidence, failure, fix_needed, retest_needed, date

## Telemetry Record
signal, status, severity, evidence, recommended_action, worker

## Investor Proof Record
proof_type, evidence, source, confidence, claim_supported, risk, next_milestone

## Minimal Record For Now
date, signal_type, email (if any), use_case, strength, evidence_type, next_step, logged_by

## Best Schema Action
Use minimal record in markdown/JSON — plan full schema when first 5 signals captured
