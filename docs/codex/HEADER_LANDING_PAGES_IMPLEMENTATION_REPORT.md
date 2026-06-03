# Header Landing Pages Implementation Report

Date: 2026-06-03

## Summary

Prepared a page-specific landing template system for the `new-header-menu` destinations using existing RBP and Trade sections. The work avoids monolithic page Liquid files and keeps `page.rbp-landing.json` as a transition fallback.

No live Shopify theme, page, or menu changes were made during this workspace pass because Shopify reported the requested target theme ID `188709962042` as the `MAIN` theme, not an unpublished theme. The brief described this same theme ID as unpublished, so pushing theme files or assigning page templates would risk modifying the live storefront before the target is confirmed.

## Templates created or updated

- Created `templates/page.advisory.json`
- Created `templates/page.consulting.json`
- Created `templates/page.implementation.json`
- Created `templates/page.operations-hub.json`
- Created `templates/page.essentials.json`
- Created `templates/page.support.json`
- Created `templates/page.rbp-landing.json`
- Updated `templates/page.membership.json`

## Reusable sections used

- `main-page`
- `rbp-page-hero`
- `rbp-service-router`
- `rbp-problem-cards`
- `rbp-feature-grid`
- `rbp-service-pathways`
- `rbp-split-content`
- `rbp-how-it-works`
- `rbp-resource-preview`
- `rbp-faq`
- `rbp-contact-panel`
- `rbp-cta-band`
- `rbp-membership-benefits`
- `rbp-marketplace-offers`
- `featured-collection`

## Shopify pages reviewed

The following pages were confirmed as published in Shopify Admin:

- Advisory: `/pages/advisory`
- Consulting: `/pages/consulting`
- Implementation: `/pages/implementation`
- Operations Hub: `/pages/operations-hub`
- Essentials: `/pages/essentials`
- Membership: `/pages/membership`
- Membership Options: `/pages/membership-options`
- Support: `/pages/support`
- Business NBN: `/pages/business-nbn`
- Marketplace: `/pages/marketplace`

## Shopify pages created

No pages needed to be created. Operations Hub already existed but was using the default `page` template and had an empty body.

## Canonical membership decision

Use `/pages/membership` as the top-level menu destination. The page is published, already assigned to the membership template, and acts as the cleaner canonical membership overview. `/pages/membership-options` remains a child destination for plan/options detail.

## Template assignments prepared for Shopify

- Advisory -> `page.advisory`
- Consulting -> `page.consulting`
- Implementation -> `page.implementation`
- Operations Hub -> `page.operations-hub`
- Essentials -> `page.essentials`
- Membership -> `page.membership`
- Support -> `page.support`

## Product and collection links used

Real store destinations used in template sections:

- `/products/owner-decision-support`
- `/products/monthly-business-review-setup`
- `/products/operating-model-and-systems-alignment-review`
- `/products/compliance-calendar-and-obligations-register`
- `/products/marketplace-seller-compliance-toolkit`
- `/products/online-membership-terms-and-conditions-template`
- `/collections/management-on-demand-services`
- `/collections/operations-on-demand-services`
- `/collections/individual-on-demand-services`
- `/collections/bundled-on-demand-services`
- `/collections/managed-services-outsourced-solutions`
- `/pages/business-nbn`
- `/pages/marketplace`
- `/pages/membership`
- `/pages/membership-options`
- `/pages/support`
- `/pages/contact`

## Placeholder or fallback links

No links point to knowingly missing pages, products or collections. Where the brief suggested a destination that could not be confirmed, the template links to a real parent page, collection, or support route instead.

## Header menu update target

Menu handle: `new-header-menu`

Target top-level destinations:

- Advisory -> `/pages/advisory`
- Consulting -> `/pages/consulting`
- Implementation -> `/pages/implementation`
- Operations Hub -> `/pages/operations-hub`
- Essentials -> `/pages/essentials`
- Membership -> `/pages/membership`
- Support -> `/pages/support`

Each dropdown should begin with `Overview` linking to the parent page. Child links should use real page, collection, and product routes only.

## Theme push status

Requested target theme:

- Name: `remote-business-partner`
- Theme ID: `188709962042`
- Shopify-reported role: `MAIN`

Candidate unpublished theme seen in Shopify:

- Name: `shopify-rbp/main`
- Theme ID: `188709110074`
- Shopify-reported role: `UNPUBLISHED`

Do not publish any theme as part of this work. Confirm the correct unpublished target before pushing these template files or assigning page templates.

## GitHub status

The template and report files were created locally in the workspace and written to GitHub using the connected GitHub contents API. Direct `git clone`/push access to GitHub was blocked by the container network with a CONNECT tunnel `403`, so the files were written through individual repository content commits rather than a single local git commit.

## Validation commands

Run after changes are available in a local checkout or Shopify CLI environment:

```bash
shopify theme check
```

```bash
python3 - <<'PY'
import json, pathlib

failed = False
for path in pathlib.Path("templates").glob("*.json"):
    try:
        json.loads(path.read_text())
    except Exception as e:
        failed = True
        print(f"FAILED {path}: {e}")
if not failed:
    print("All template JSON files parsed successfully.")
PY
```

```bash
grep -R "rbp-home-button-fix\|rbp-css-loader\|rbp-nav-fixes\|rbp-header-spacing\|rbp-home-ux-refresh\|rbp-ux-remediation" \
  templates sections snippets assets layout config \
  --exclude-dir=.git
```

## Known issues and follow-up QA

- Shopify CLI was not available in this workspace, and direct git clone was blocked by the container network. Full `shopify theme check` must be run in a Shopify CLI-capable environment or CI.
- Theme Editor visual QA is still required after pushing the templates to the confirmed unpublished theme.
- Page template assignments and the `new-header-menu` dropdown update remain pending until the correct unpublished target theme is confirmed.
- Confirm product forms, cart, collection filtering/sorting, search, customer templates and live theme remain unchanged.
