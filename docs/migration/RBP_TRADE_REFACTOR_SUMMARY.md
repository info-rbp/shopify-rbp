# RBP Trade Refactor Summary

## Migrated

- Shopify Trade export is retained as the baseline.
- RBP documentation was imported into `docs/jules/` for product templates, data model, testing, copy rules, Business NBN, marketplace, membership, services onboarding, customer accounts and UI/UX context.
- RBP design tokens and component styles were consolidated into:
  - `assets/rbp-theme.css`
  - `assets/rbp-components.css`
  - `assets/rbp-sections.css`
  - `assets/rbp-commerce.css`
- Onboarding and Business NBN frontend assets were migrated:
  - `assets/rbp-onboarding-form.css`
  - `assets/rbp-onboarding-form.js`
  - `assets/rbp-business-nbn-checker.js`
- Useful old snippets were migrated or refactored:
  - `snippets/rbp-offer-card.liquid`
  - `snippets/rbp-onboarding-field.liquid`
  - `snippets/rbp-nbn-faq-support.liquid`
  - `snippets/rbp-marketplace-offers-compat.liquid`

## Refactored

- The homepage now uses modular sections in `templates/index.json`.
- Shared snippets now own buttons, headings, cards, service cards, resource cards, CTA links and breadcrumbs.
- Old homepage/service/resource patterns were converted into reusable sections:
  - `rbp-hero`
  - `rbp-page-hero`
  - `rbp-service-router`
  - `rbp-problem-cards`
  - `rbp-feature-grid`
  - `rbp-how-it-works`
  - `rbp-service-pathways`
  - `rbp-split-content`
  - `rbp-resource-preview`
  - `rbp-faq`
  - `rbp-cta-band`
  - `rbp-contact-panel`
- Product/service logic was refactored into product support sections that sit after Trade `main-product`.
- Collection context was added without replacing Trade collection grid behaviour.
- Business NBN, onboarding, marketplace and membership modules were rebuilt as focused sections.

## Skipped

- Old monolithic homepage sections were not migrated.
- Old button-fix, CSS-loader, card fallback, header fix and navigation patch files were not migrated.
- Old custom header/footer files were not migrated; the Trade header/navigation block was preserved for review.
- Old one-off page templates were not copied. They map to the new template families.
- Old broad CSS files were not copied as standalone files. Useful patterns were consolidated into scoped RBP CSS.

## Why

The target architecture is a Shopify Online Store 2.0 component system on top of the Trade baseline. Reusing snippets, section blocks and template families keeps the storefront editable and avoids carrying forward old patch sections or page-specific Liquid.

## Manual Dependencies

- Shopify Admin template assignments.
- App proxy availability for onboarding and Business NBN.
- Metaobject definitions for partner offers and categories.
- Header/navigation strategy review.
- Storefront and theme editor QA against live shop data.
