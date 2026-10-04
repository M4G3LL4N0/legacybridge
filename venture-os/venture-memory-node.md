# Venture Memory Node

## Venture
- Name: Legacybridge · Folder: legacybridge
- Production: PARKED · Allocation: ALLOCATE_PARK

## Memory Status
MEMORY_CONFLICTED

## Learning Decision
EXTRACT_FAILURE_PATTERN

## Primary Learning Type
RECOVERY_LEARNING

## Strongest Lesson
Scorecard build PASS conflicts with production RECOVER/BLOCKED — verify before trusting build status

## Biggest Repeated Mistake
Treating build PASS as release-ready without live-site and evidence chain verification

## Best Reusable Pattern
Always reconcile scorecard.build_status with production_status and live-site evidence before allocation

## Best Guardrail To Add
Do not allocate build cycles when evidence_status is CONFLICTED

## Best Checklist To Add
Evidence reconciliation: scorecard vs build log vs live HTTP vs QA artifact

## Prompt Worth Reusing
yes

## Future Run Rule Needed
yes

## Best Learning Action
Extract recovery learning: Scorecard build PASS conflicts with production RECOVER/BLOCKED — verify before t
