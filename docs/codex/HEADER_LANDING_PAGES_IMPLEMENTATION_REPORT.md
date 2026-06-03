# Header Landing Pages Implementation Report

Date: 2026-06-03

## Summary

Prepared a page-specific landing template system for the `new-header-menu` destinations using existing RBP and Trade sections. The work avoids monolithic page Liquid files and keeps `page.rbp-landing.json` as a transition fallback.

The template files were committed to GitHub `main`. The store's automation is expected to push theme-file changes from `main` to Shopify. Shopify Admin page template assignments and the `new-header-menu` structure were also updated directly and verified by readback.

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

## Template assignments applied in Shopify

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

## Header menu update

Menu handle: `new-header-menu`

Applied top-level destinations:

- Advisory -> `/pages/advisory`
- Consulting -> `/pages/consulting`
- Implementation -> `/pages/implementation`
- Operations Hub -> `/pages/operations-hub`
- Essentials -> `/pages/essentials`
- Membership -> `/pages/membership`
- Support -> `/pages/support`

Each dropdown now begins with `Overview` linking to the parent page. Child links use confirmed Shopify page routes.

## Theme push status

Requested target theme:

- Name: `remote-business-partner`
- Theme ID: `188709962042`
- Shopify-reported role: `MAIN`

Candidate unpublished theme seen in Shopify:

- Name: `shopify-rbp/main`
- Theme ID: `188709110074`
- Shopify-reported role: `UNPUBLISHED`

No theme was manually published. Template files were committed to GitHub `main`; the store's main-branch automation is expected to handle the Shopify theme-file sync.

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
- GitHub status checks/workflow runs were not visible through the connector for the latest report commit, so automated Shopify theme sync should be confirmed in the deployment system or by storefront visual QA.
- Theme Editor visual QA is still required after the main-branch theme sync completes.
- Page template assignments and the `new-header-menu` dropdown update were applied and verified through Shopify Admin readback.
- Confirm product forms, cart, collection filtering/sorting, search, customer templates and live theme remain unchanged.
