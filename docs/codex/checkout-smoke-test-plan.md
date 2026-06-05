# Checkout Smoke Test Plan

Date: 2026-06-05

Do not process a real paid transaction without explicit authorisation. Use Shopify Bogus Gateway, Shopify test payment mode, a draft order, or stop before final payment if no authorised test method is available.

## Products to test

Test at least:

1. One Core Service product.
2. One Template product.
3. One Toolkit or Documentation Suite product.

Record the exact product handles used during the test.

## Test steps

For each product:

1. Open the product page.
2. Confirm product image/title/price.
3. Select variant if applicable.
4. Add to cart.
5. Open cart.
6. Confirm item, price and quantity.
7. Proceed to checkout.
8. Confirm checkout loads.
9. Stop before payment unless Bogus Gateway/test mode is active and explicitly authorised.

## Data to record

| Field | Notes |
| --- | --- |
| Product type | Core Service, Template, Toolkit, or Documentation Suite |
| Product handle | Exact Shopify handle |
| Add-to-cart result | Pass/fail and notes |
| Cart result | Pass/fail and displayed item/price/quantity |
| Checkout load result | Pass/fail and checkout URL/state |
| Stop point | Payment step, test payment completion, or blocker |
| Issues | Exact error text, screenshot reference or reproduction notes |

## No-real-payment rule

If test mode is unavailable, stop at the payment step. Do not submit a real card payment and do not create a paid order without explicit written authorisation.

