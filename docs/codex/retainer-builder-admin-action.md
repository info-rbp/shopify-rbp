# Retainer Builder Admin Action

Date: 2026-06-05

The repository scan found no tracked theme files containing `retainer-builder`, `Retainer Builder`, `Start the builder`, `step=1`, or equivalent builder copy. This means the blocker is likely Shopify Admin page/product content, not a repository theme string.

## Affected route

- Page URL: `/pages/retainer-builder`
- Issue: the page or CTA reportedly implies an interactive builder, but no interactive wizard exists in theme code.

## Required Admin action

Update the page, product, menu item, or rich text block that contains the builder CTA:

- Change CTA label from `Start the builder` to `Start retainer enquiry`.
- Change destination to `/pages/contact`.
- Remove or rewrite copy that implies an automated wizard, instant configuration, automatic approval, or confirmed pricing.

Recommended safe copy:

> This page helps you understand retainer support options. RBP reviews retainer enquiries before confirming scope, inclusions, timing and pricing.

## Alternative implementation

Build a real interactive wizard before using builder language. Minimum steps:

1. Choose support type.
2. Choose frequency or urgency.
3. Select support areas.
4. Provide business details.
5. Submit enquiry or route to contact.

The wizard must include progress state, required-field validation, a clear submission destination and no pricing promises unless confirmed.

## Verification after Admin action

1. Open `/pages/retainer-builder`.
2. Confirm no visible CTA says `Start the builder`.
3. Confirm the primary CTA says `Start retainer enquiry`.
4. Confirm the CTA destination is `/pages/contact`.
5. Confirm copy says RBP reviews scope, inclusions, timing and pricing before confirmation.

