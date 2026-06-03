# RBP Trade Theme Cleanup Report

## Files reviewed

- Repository hygiene: `.gitignore`, `.github-index-refresh`, repository search results for local archives, migration folders, local-only files, secrets, and risky strings.
- Theme layout: `layout/theme.liquid`.
- RBP assets: `assets/rbp-theme.css`, `assets/rbp-components.css`, `assets/rbp-sections.css`, `assets/rbp-commerce.css`, `assets/rbp-onboarding-form.css`, `assets/rbp-onboarding-form.js`, `assets/rbp-business-nbn-checker.js`.
- RBP snippets: `snippets/rbp-button.liquid`, `snippets/rbp-section-heading.liquid`, `snippets/rbp-card.liquid`, `snippets/rbp-service-card.liquid`, `snippets/rbp-resource-card.liquid`, `snippets/rbp-cta-link.liquid`, `snippets/rbp-breadcrumbs.liquid`, `snippets/rbp-offer-card.liquid`, `snippets/rbp-onboarding-field.liquid`, `snippets/rbp-nbn-faq-support.liquid`, `snippets/rbp-marketplace-offers-compat.liquid`.
- RBP sections found through repository search: `sections/rbp-business-nbn.liquid`, `sections/rbp-cart-support.liquid`, `sections/rbp-collection-empty-state.liquid`, `sections/rbp-collection-help.liquid`, `sections/rbp-collection-intro.liquid`, `sections/rbp-contact-panel.liquid`, `sections/rbp-cta-band.liquid`, `sections/rbp-faq.liquid`, `sections/rbp-feature-grid.liquid`, `sections/rbp-hero.liquid`, `sections/rbp-how-it-works.liquid`, `sections/rbp-marketplace-offers.liquid`, `sections/rbp-membership-benefits.liquid`, `sections/rbp-onboarding-form.liquid`, `sections/rbp-page-hero.liquid`, `sections/rbp-problem-cards.liquid`, `sections/rbp-product-benefits.liquid`, `sections/rbp-product-faq.liquid`, `sections/rbp-product-help.liquid`, `sections/rbp-product-information.liquid`, `sections/rbp-product-state-guard.liquid`, `sections/rbp-product-state.liquid`, `sections/rbp-product-use-cases.liquid`, `sections/rbp-resource-preview.liquid`, `sections/rbp-service-pathways.liquid`, `sections/rbp-service-router.liquid`, `sections/rbp-split-content.liquid`.
- Templates: `templates/index.json`, `templates/page.json`, `templates/page.service-landing.json`, `templates/page.service-detail.json`, `templates/page.resource-hub.json`, `templates/page.membership.json`, `templates/page.marketplace.json`, `templates/page.business-nbn.json`, `templates/page.onboarding.json`, `templates/product.json`, `templates/product.on-demand-service.json`, `templates/product.core-service.json`, `templates/product.booking-service.json`, `templates/product.business-nbn.json`, `templates/collection.json`, `templates/collection.services.json`, `templates/collection.resources.json`, `templates/collection.marketplace.json`, `templates/cart.json`, `templates/search.json`, `templates/404.json`.
- Preserved documentation: `README.md`, `docs/codex/MIGRATION_MAP.md`, `docs/codex/QA_CHECKLIST.md`, `docs/migration/RBP_TRADE_REFACTOR_SUMMARY.md`.

## Files changed

- `.gitignore`: expanded hygiene coverage for migration folders, local theme archives, OS/editor files, environment files, generated caches, dependency folders, and temporary workspace files.
- `templates/index.json`: removed the generated `_blocks` homepage entry that resembled a header/nav block, leaving the homepage composed from modular RBP sections.
- `snippets/rbp-offer-card.liquid`: added a safe no-offer fallback and safer defaults for offer title, partner, category, detail URL, image alt text, and offer code output.
- `assets/rbp-onboarding-form.css`: removed a stale onboarding-specific button override and tied onboarding colors back to central RBP variables.
- `assets/rbp-onboarding-form.js`: hardened error-field lookup with escaped selector values and guarded wrapper lookup.
- `docs/codex/QA_CHECKLIST.md`: updated QA wording to match the cleaned homepage/header state.
- `docs/codex/CLEANUP_REPORT.md`: added this cleanup report.

## Files removed

- `.github-index-refresh`: removed the temporary index refresh marker.

## Validation commands and checks run

- Attempted direct repository clone for local validation. The environment blocked the GitHub CONNECT tunnel, so local clone-based checks could not run.
- Checked Shopify CLI availability with `shopify version`; Shopify CLI is not installed in this environment, so `shopify theme check` could not run here.
- Directly fetched and reviewed the requested template JSON files through GitHub. The edited `templates/index.json` was re-fetched after update and is valid JSON by inspection.
- Directly fetched and reviewed `layout/theme.liquid`; RBP CSS assets are loaded once each after `base.css`.
- Searched for risky strings: `token`, `secret`, `password`, `PRIVATE`, `localhost`, `ngrok`, `.zip`; no risky code search results were returned.
- Searched for forbidden legacy references: `rbp-home-button-fix`, `rbp-css-loader`, `rbp-nav-fixes`, `rbp-header-spacing`, `rbp-home-ux-refresh`, `rbp-ux-remediation`.

## Warnings remaining

- Forbidden legacy reference searches still surface migration/planning documentation such as `docs/codex/MIGRATION_MAP.md`, `docs/codex/IMPLEMENTATION_PLAN.md`, and `docs/jules/shopify-ui-ux-project-overview.md`. These are documentation references, not live theme sections or template references, and the cleanup brief explicitly said to keep the migration/QA documentation.
- Full local theme validation was not possible because the repository could not be cloned from this environment and Shopify CLI is unavailable.
- Section schema validation was performed by targeted review of key RBP sections and their schema blocks, not by running an automated parser over every section file.

## Manual Shopify Admin tasks still required

- Run `shopify theme check` locally or in CI with Shopify CLI installed.
- Preview the theme in Shopify Admin and verify product forms, cart, collection filtering/sorting, search, customer templates, localization, and checkout-adjacent flows remain Trade-native.
- Configure the Business NBN app proxy endpoint and disable temporary accept-all mode when live validation is ready.
- Configure Google Places browser API key only if Google Places address autocomplete is enabled.
- Create or confirm `partner_offer` metaobjects if the marketplace offers section should render metaobject-backed offers.
- Assign the intended page, product, and collection templates in Shopify Admin.

## Skipped work and why

- No native Trade sections, product forms, collection grid/filter/sort behavior, cart sections, search sections, localization, customer templates, or checkout-adjacent UI were altered. The brief asked to preserve these behaviors.
- No useful RBP modular sections were removed. The cleanup only removed a generated homepage `_blocks` reference and the temporary repository index marker.
