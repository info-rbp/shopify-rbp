# Header Landing Pages Implementation Report

Date: 2026-06-03

## Summary

Prepared and polished page-specific landing templates for the `new-header-menu` destinations using existing RBP and Trade sections. The work avoids monolithic page Liquid files and preserves the current modular architecture.

The page-specific template files and this report were written to GitHub `main` through the connected GitHub contents API. Shopify Admin page template assignments and the `new-header-menu` structure had already been applied and verified by readback.

Production target theme:

- Theme name: `remote-business-partner`
- Theme ID: `188709962042`
- Role: `MAIN`

## Templates created or updated

- `templates/page.advisory.json`
- `templates/page.consulting.json`
- `templates/page.implementation.json`
- `templates/page.operations-hub.json`
- `templates/page.essentials.json`
- `templates/page.membership.json`
- `templates/page.support.json`
- `templates/page.rbp-landing.json`

## Commercial polish pass

Files changed:

- `templates/page.advisory.json`
- `templates/page.consulting.json`
- `templates/page.implementation.json`
- `templates/page.operations-hub.json`
- `templates/page.essentials.json`
- `templates/page.membership.json`
- `templates/page.support.json`
- `templates/page.rbp-landing.json`

Sections removed or replaced:

- Removed the generic `main-page` section and `"main"` order entry from the focused landing templates so the Shopify page title/body no longer renders above the custom RBP hero.
- Removed the native `featured-collection` section from `page.essentials.json` so Essentials no longer relies on a collection grid that can render demo/example products.
- Replaced the Essentials product-grid area with curated `rbp-resource-preview` cards using confirmed real destinations only.

Membership body/content decision:

- The `/pages/membership` Shopify page body contains legacy pricing/application bridge content, including Early Bird pricing and application links.
- That content was not deleted, because it may still be useful for the `/pages/membership-options` flow and the brief requested not to delete pricing content blindly.
- Removing `main-page` from `page.membership.json` stops the legacy body from rendering above the clean membership overview once the polished template is on the live theme.

Essentials featured collection fix:

- Removed the native featured collection section from the GitHub `main` version of `page.essentials.json`.
- Added confirmed cards for:
  - Online Membership Terms and Conditions Template: `/products/online-membership-terms-and-conditions-template`
  - Marketplace Seller Compliance Toolkit: `/products/marketplace-seller-compliance-toolkit`
  - Individual On-Demand Services: `/collections/individual-on-demand-services`

Operations Hub internal copy fix:

- Removed the customer-facing internal phrase about partner offer metaobjects being finalized from the GitHub `main` version.
- Replaced it with customer-facing marketplace/partner-offer language.
- Also cleaned `page.rbp-landing.json` fallback copy so it no longer refers to compatibility, migration, temporary fallback, Theme Editor mechanics or other implementation language.

CTA/content improvements:

- Advisory now emphasizes decision briefs, risk/trade-off views, priorities and recommended next steps, with CTA: `Start with Owner Decision Support`.
- Consulting now emphasizes diagnosis, recommendations, project scope and roadmap, with CTA: `Build a consulting roadmap`.
- Implementation now emphasizes setup, documentation, configuration, workflow creation and handover, with CTA: `Request implementation support`.
- Operations Hub now frames the hub around running operations, improving operations, and accessing tools/offers, with CTA: `Find the right operations pathway`.
- Essentials now emphasizes trustworthy templates, toolkits, checklists, prepared resources and supported options, with CTA: `Browse confirmed resources`.
- Membership now presents a clean overview and points plan/pricing detail to `/pages/membership-options`, with CTA: `Compare membership options`.
- Support now asks for order/product/service context, business issue, deadline, preferred contact method and whether the request relates to onboarding, Business NBN, membership or service delivery.

## Reusable sections used

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

## Shopify pages reviewed

The following pages were confirmed as published in Shopify Admin during the implementation run:

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

## Template assignments applied in Shopify

- Advisory -> `page.advisory`
- Consulting -> `page.consulting`
- Implementation -> `page.implementation`
- Operations Hub -> `page.operations-hub`
- Essentials -> `page.essentials`
- Membership -> `page.membership`
- Support -> `page.support`

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

Each dropdown begins with `Overview` linking to the parent page. Child links use confirmed Shopify page routes.

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

## Validation commands run

Local JSON validation passed:

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

Result:

```text
All template JSON files parsed successfully.
```

Internal/legacy reference grep was run against the available local theme directories and returned no matches for:

```text
rbp-home-button-fix|rbp-css-loader|rbp-nav-fixes|rbp-header-spacing|rbp-home-ux-refresh|rbp-ux-remediation|metaobjects are finalized|placeholder|compatibility template|migration fallback
```

Additional local template grep returned no matches for:

```text
main-page|featured-collection|featured_collection|metaobjects are finalized|placeholder|compatibility template|migration fallback|Theme Editor|theme editor|configured offers|finalized|fallback|migration|compatibility
```

Shopify CLI validation could not run:

- `shopify theme check` failed because `shopify` is not installed in this workspace.
- `npm exec --yes @shopify/cli@latest -- version` failed with npm registry `403 Forbidden` for `@shopify/cli`.
- The Liquid validation helper could not run because the local helper dependency `@shopify/theme-check-common` is missing.

## GitHub status

The polished template files are present on GitHub `main`. Direct `git clone`/local `git push` access was blocked by the container network with a CONNECT tunnel `403`, so changes were written through individual GitHub contents API commits rather than a single local git commit.

Connector commits in this polish pass included:

- `809a59857d4aca0274b1963c102d1b7a101ad6d9` - advisory polish
- `8eaaf6b86821eebb88a4a7bc5b6ce7c7af56efba` - consulting polish
- `8d0631b289d30b32e0e3220e9c22d6df7d261c1b` - implementation polish
- `63b7a048e296122e7c2297c61f2f39fc8bf0d370` - operations hub polish
- `69fb49221f0da262ee29a564ac4f6918cc89a380` - membership polish
- `b30ac64aea707b2105f75302060f5270f9d03b98` - support polish
- `0df00caeb94959cdc068245d45ff1246f5191cc2` - rbp fallback polish

The final report update used commit message `fix: polish header landing pages`.

No GitHub status checks or workflow runs were visible for the latest connector commit through the available GitHub connector.

## Live theme push result

Production target theme checked by Shopify Admin readback:

- Name: `remote-business-partner`
- Theme ID: `188709962042`
- Shopify-reported role: `MAIN`

Live theme file readback after the GitHub main updates showed all eight landing template files are present on the live theme, but the live theme still had the earlier generated versions at the time of verification:

- Focused templates still contained the generic `main-page` section and `"main"` order entry.
- `page.essentials.json` still contained the native `featured_collection` section.
- `page.operations-hub.json` still contained the internal phrase about partner offer metaobjects being finalized.
- `page.rbp-landing.json` still contained fallback/compatibility/theme-editor implementation language.

This means GitHub `main` has the polish changes, but the live theme had not yet received the latest polished template bodies as of the latest readback.

The requested scoped command could not be run from this workspace because Shopify CLI is unavailable:

```bash
shopify theme push --theme 188709962042 --allow-live \
  --only templates/page.advisory.json \
  --only templates/page.consulting.json \
  --only templates/page.implementation.json \
  --only templates/page.operations-hub.json \
  --only templates/page.essentials.json \
  --only templates/page.membership.json \
  --only templates/page.support.json
```

A direct Shopify Admin `themeFilesUpsert` write to the live `MAIN` theme is blocked by the connector's live-theme safety guard, so the live theme could not be corrected directly from this workspace.

## Remaining QA issues

- Production visual QA is still required after the live theme receives the polished template files.
- Public storefront HTTP QA from this workspace is blocked by a CONNECT tunnel `403`.
- Re-check the live template file bodies after the GitHub-to-Shopify workflow runs, specifically for removal of `main-page`, removal of Essentials `featured_collection`, and removal of Operations Hub internal implementation language.
- Then QA `/pages/advisory`, `/pages/consulting`, `/pages/implementation`, `/pages/operations-hub`, `/pages/essentials`, `/pages/membership`, and `/pages/support` for duplicate page intro removal, CTA clarity, link accuracy, header/dropdown behavior, mobile layout and footer integrity.
- Confirm product forms, cart, collection filtering/sorting, search, customer templates and localization remain untouched.
