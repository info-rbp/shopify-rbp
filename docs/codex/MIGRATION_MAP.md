# RBP Trade Theme Migration Map

This map records how the old `shopify-design-main` repository is used during the Trade theme refactor. The old repository is a migration source only; the new repository keeps the Shopify Trade export as its baseline.

## Baseline

- New baseline: `theme_export__remote-business-partner-myshopify-com-trade__03JUN2026-0247am.zip`
- Migration source: `shopify-design-main (1).zip`
- Trade baseline status: repository file tree matches the Trade export.
- Temporary source workspace: `_migration/` and ignored by git.

## Migrate Directly

These files carry reusable RBP assets or durable project context and can move with cleanup:

- `assets/rbp-theme.css` -> `assets/rbp-theme.css`
- `assets/rbp-components.css` -> `assets/rbp-components.css`
- `assets/rbp-onboarding-form.css` -> `assets/rbp-onboarding-form.css`
- `assets/rbp-onboarding-form.js` -> `assets/rbp-onboarding-form.js`
- `assets/rbp-business-nbn-checker.js` -> `assets/rbp-business-nbn-checker.js`
- `snippets/rbp-offer-card.liquid` -> `snippets/rbp-offer-card.liquid`
- `snippets/rbp-onboarding-field.liquid` -> `snippets/rbp-onboarding-field.liquid`
- `snippets/rbp-nbn-faq-support.liquid` -> `snippets/rbp-nbn-faq-support.liquid`
- `snippets/rbp-marketplace-offers-compat.liquid` -> `snippets/rbp-marketplace-offers-compat.liquid`
- prioritized `docs/jules/` files listed in the implementation plan -> `docs/jules/`

## Refactor Before Migration

These files contain useful content, logic, or UX patterns, but should be converted into modular Trade-compatible sections and JSON templates:

- `sections/rbp-home-ux-refresh.liquid`: content and UX reference for modular homepage only.
- `sections/rbp-home.liquid`: reference only; do not preserve as page owner.
- `sections/rbp-landing-page.liquid`: refactor into `rbp-page-hero`, `rbp-feature-grid`, `rbp-cta-band`.
- `sections/rbp-core-services-landing.liquid`: refactor into service landing template sections.
- `sections/rbp-core-service-product.liquid`: refactor into product support sections without replacing `main-product`.
- `sections/rbp-marketplace.liquid`, `rbp-marketplace-page.liquid`, `rbp-marketplace-offers.liquid`: refactor into marketplace template and reusable offer sections.
- `sections/rbp-offers-page.liquid`, `rbp-offer-detail.liquid`, `rbp-offer-listing.liquid`, `rbp-offer-categories.liquid`, `rbp-offer-category-detail.liquid`: refactor around offer cards/metaobjects.
- `sections/rbp-membership-page.liquid`, `rbp-membership-model.liquid`: refactor into feature, steps, FAQ, and CTA sections.
- `sections/rbp-document-hub.liquid`, `rbp-resource-library.liquid`, `rbp-help-center.liquid`: refactor into resource hub and support sections.
- `sections/rbp-business-nbn.liquid`: migrate as a focused Business NBN module with configurable app proxy endpoint.
- `sections/rbp-contact-page.liquid`: refactor into `rbp-contact-panel`; preserve Trade contact form.
- `sections/rbp-product-state.liquid`, `rbp-product-state-guard.liquid`, `rbp-product-information.liquid`, `rbp-product-offerings.liquid`, `rbp-product-faq.liquid`, `rbp-product-help.liquid`: migrate as product support sections.
- `templates/product.on-demand-service.json`, `product.core-service.json`, `product.booking-service.json`, `product.business-nbn.json`: rebuild around Trade `main-product` plus RBP support sections.
- `templates/page.core-services.json`, `page.membership.json`, `page.marketplace.json`, `page.business-nbn.json`, `page.document-hub.json`, `page.help-center.json`: map into reusable template families.

## Use As Reference Only

These are useful for copy, information architecture, or behaviour notes, but should not be copied wholesale:

- `DESIGN.md`
- `AGENTS.md`
- `content/`
- old `templates/page.advisory.json`, `page.consulting.json`, `page.implementation.json`, `page.operations.json`: map to `page.service-detail.json` or `page.service-landing.json`.
- old `templates/page.resources.json`, `page.knowledge-base.json`, `page.faq.json`, `page.support.json`: map to `page.resource-hub.json` or standard pages.
- old Trade/Dawn native files in `assets/`, `sections/`, `snippets/`, `templates/`, `layout/`, `config/`, and `locales/`: already represented by the new Trade export unless explicitly listed above.

## Retire / Do Not Migrate

These files are patches, loaders, or old architecture that should not survive:

- `sections/rbp-home-button-fix.liquid`
- `sections/rbp-css-loader.liquid`
- `sections/rbp-css-loader-v2.liquid`
- `sections/rbp-card-fallback-styles.liquid`
- `sections/rbp-nav-fixes.liquid`
- `sections/rbp-header-controller.liquid`
- `sections/rbp-header-spacing.liquid`
- `sections/rbp-header.liquid`
- `sections/rbp-footer.liquid`
- `assets/rbp-landing.css`
- `assets/rbp-product.css`
- `assets/rbp-service-product.css`
- `assets/rbp-ux-remediation.css`

CSS from retired asset files is consolidated into `rbp-theme.css`, `rbp-components.css`, `rbp-sections.css`, and `rbp-commerce.css`.

## Needs Manual Shopify Admin Configuration

These dependencies cannot be completed from the theme files alone:

- Template assignment for service landing, service detail, resource hub, membership, marketplace, Business NBN, and onboarding pages.
- Product template assignment for on-demand service, core service, booking service, and Business NBN products.
- Collections for services, resources, and marketplace if those template families are used.
- Metafields/metaobjects for partner offers, offer categories, fulfilment state, onboarding requirements, and resource metadata.
- App proxy endpoints for onboarding forms and Business NBN checks.
- Navigation/menu strategy for Trade header and footer.
- Theme editor QA for section presets, blocks, and page assembly.

## Product Fulfilment Language

Service products should avoid promising instant fulfilment. Use labels such as:

- Prepared digital delivery
- Intake required
- Booking required
- Availability check required
- Manual review required
- Next-step guidance provided after purchase
