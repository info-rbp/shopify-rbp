# Partner Offer Metaobject Audit

Date: 2026-06-05

The theme gates offer cards and offer detail pages, but Shopify Admin data must be audited before exposing Partner Offers publicly. This repository change does not create, approve or activate partner offers.

## Definitions to inspect

- `partner`
- `offer_category`
- `partner_offer`

## Public-offer requirements

For every `partner_offer` record before it is shown publicly:

- `active/public` or equivalent status must be true.
- `title` must exist.
- `handle` must exist.
- `partner` reference must exist.
- Referenced partner must also be active/public.
- `cta_url` must exist and point to the real partner or approved destination.
- `eligibility` notes must exist.
- `terms`, `disclaimer`, or partner disclosure must exist.
- Category reference should exist where category browsing is public.

Do not activate draft, internal-review, demo or test offers.

## Theme gating currently present

Relevant files:

- `snippets/rbp-offer-card.liquid`
- `sections/rbp-offer-categories.liquid`
- `sections/rbp-offer-category-detail.liquid`
- `sections/rbp-offer-detail.liquid`

The Liquid checks for active/public offer status, active/public partner status and CTA URL before rendering offer cards or detail content. Public Marketplace hub CTAs route to `/pages/contact` until approved offer data is ready.

## Manual Admin audit steps

1. In Shopify Admin, open Content > Metaobjects.
2. Review each `partner` record. Leave inactive/internal partners hidden.
3. Review each `offer_category` record. Do not expose categories with no approved offers.
4. Review each `partner_offer` record against the public-offer requirements above.
5. Confirm CTA URLs are real and approved.
6. Confirm terms/disclaimers and eligibility notes are visible.
7. Only then expose Partner Offers links in navigation or Marketplace hub content.

## Final verification after approval

After Admin approval and publication:

- `/pages/marketplace` should not contain broken offer/category links.
- Offer cards should render only active/public records.
- Empty categories should not expose dead-end browsing.
- No offer should imply guaranteed funding, quote, approval, insurance coverage, legal result or commercial outcome.

