# Venture Stripe Readiness

## Should Stripe Be Added Now?
no

## Why
Use quote/pilot interest first; Stripe only after founder approval + fulfillment proof

## Stripe Flow Type
none yet — future: payment link or invoice

## Products Needed
One pilot SKU or subscription plan — define after first manual sale

## Prices Needed
$49/mo interest

## Webhooks Needed?
yes when checkout added

## Database Needed?
yes for entitlements when paid tiers launch

## Auth Needed?
yes before gating paid features

## Env Vars Needed
STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

## Risks
Charging before delivery ready; webhook failures; refund complexity

## Safer Alternative
Quote request form + manual invoice
