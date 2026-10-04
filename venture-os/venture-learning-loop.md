# Venture Learning Loop

## What Happened
Recovery/production conflict detected across OS layers

## What Worked
- Local build passes


## What Failed
- Live site / verification blocked
- Evidence scorecard conflict


## What Repeated
- OS layer updates without signal

## What Should Be Reused
Always reconcile scorecard.build_status with production_status and live-site evidence before allocation

## What Should Be Avoided
Treating build PASS as release-ready without live-site and evidence chain verification

## Best Learning Loop Action
Extract recovery learning: Scorecard build PASS conflicts with production RECOVER/BLOCKED — verify before t
