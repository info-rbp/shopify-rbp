# UX, IA, Content and Storefront Implementation Report

Date: 2026-06-03

## Summary

Implemented the approved UX, content, information architecture, navigation, homepage, support, product, collection, header and footer recommendations in GitHub `main` for `info-rbp/shopify-rbp` using the connected GitHub contents API.

Direct local `git clone`, `git push`, Shopify CLI sync, and live-theme file writes are blocked in this workspace. GitHub `main` is updated. Direct deployment to the published Shopify theme could not be completed from this workspace because the Shopify connector blocks live `MAIN` theme file writes and the Shopify connector subsequently returned Admin API `404` for store readback/menu operations.

Production target checked earlier in the run:

- Store: `remote-business-partner.myshopify.com`
- Theme name: `remote-business-partner`
- Theme ID: `188709962042`
- Role: `MAIN`

## Changes completed in GitHub main

### Homepage

Updated `templates/index.json` from an internal theme-description page into a customer-facing pathway router.

Completed changes:

- Replaced internal Shopify/theme language with customer-facing pathway copy.
- Added six homepage route cards: Advisory, Consulting, Implementation, Operations Hub, Essentials, Support.
- Added business blocker cards mapped to clear next-step pathways.
- Rewrote process steps as choose pathway, share context, receive output/route, move work forward.
- Added stage pathways: Clarify, Plan, Build, Run, Resource, Resolve.
- Added useful resource cards for Essentials, Membership and Business NBN.
- Replaced generic final CTA with support-intake CTA.

### Advisory

Updated `templates/page.advisory.json`.

Completed changes:

- Added explicit `What you get from Advisory` section.
- Added deliverable cards for Decision brief, Risk and trade-off review, Recommended next step, and Escalation pathway.
- Preserved Advisory positioning as a practical second view before spend, change, hiring or implementation.
- Kept CTA focused on Owner Decision Support.

### Consulting

Updated `templates/page.consulting.json`.

Completed changes:

- Added the approved comparison model: Advisory = decision, Consulting = plan, Implementation = delivery.
- Kept consulting positioned around diagnosis, recommendations, scope and roadmap before implementation.
- Preserved existing consulting service destinations.

### Implementation

Updated `templates/page.implementation.json`.

Completed changes:

- Added `Common implementation requests` section.
- Included obligations register setup, compliance calendar, workflow documentation, handover pack, Business NBN readiness and onboarding setup.
- Preserved implementation positioning around setup, documentation, configuration, workflow creation and handover.

### Operations Hub

Updated `templates/page.operations-hub.json`.

Completed changes:

- Reframed routing around three user intents: Run the business, Improve the business, Access tools and support.
- Removed internal customer-facing wording about nonexistent destinations.
- Preserved existing Operations On-Demand Services, Essentials, Marketplace, Business NBN and support pathways.

### Essentials

Updated `templates/page.essentials.json`.

Completed changes:

- Added `Choose the right resource type` section.
- Distinguished Templates, Toolkits, Checklists and Supported services.
- Preserved resource cards for Online Membership Terms and Conditions Template, Marketplace Seller Compliance Toolkit and Individual On-Demand Services.
- Clarified self-serve, prepared and deployed/support expectations.

### Membership

Updated `templates/page.membership.json` and added `templates/page.membership-options.json`.

Completed changes:

- Kept `/pages/membership` as overview and value proposition.
- Added member pathway links across Essentials, services, Marketplace and support.
- Replaced `where configured` partner-offer language with `where available`.
- Added a dedicated membership-options template for pricing, inclusions, eligibility/application context and support before signup.

### Support and Contact

Updated `templates/page.support.json`, `templates/page.contact.json` and `sections/contact-form.liquid`.

Completed changes:

- Replaced promotional/internal Support headline with operational support copy.
- Added Support expectations: what support can help with, what to include, and what happens next.
- Removed circular onboarding link back to Support; onboarding help now routes to Contact.
- Rebuilt Contact page as a structured support intake flow.
- Added contact form fields for request type, order/product/service, deadline/timing pressure and preferred contact method.
- Added privacy/sensitive-information warning.

### Product Pages

Updated `templates/product.json` and added `sections/rbp-product-guidance.liquid`.

Completed changes:

- Replaced default retail-style accordion labels with: What is included, Delivery and fulfilment, Best for, Important notes.
- Removed the product quick-order bulk table from the default product page.
- Added variant picker, quantity selector and buy buttons in the main product form.
- Added product guidance section with dynamic product-type badge, package-option cards, delivery expectations and boundary copy.
- Added boundary copy for templates, toolkits, documentation, supported options and deployed options.
- Renamed related products heading to `Related services and resources`.

### Collection Pages

Updated `templates/collection.json` and added `sections/rbp-collection-guidance.liquid`.

Completed changes:

- Added collection comparison guidance before the product grid.
- Clarified resource/service type, delivery model and support level.
- Kept filtering and sorting enabled.
- Changed quick add from bulk to standard to avoid retail-style bulk ordering on service/resource collections.

### Header and Footer Theme Configuration

Updated `sections/header-group.json` and `sections/footer-group.json`.

Completed changes:

- Header group now points to `new-header-menu` in GitHub `main`.
- Replaced `Welcome to our store` announcement with RBP customer-facing copy.
- Footer heading changed from generic `Quick links` to `Explore RBP`.
- Newsletter heading changed to `RBP updates and practical business resources`.

### Reusable RBP Sections

Updated reusable defaults so future section additions do not reintroduce implementation language.

Files updated:

- `sections/rbp-hero.liquid`
- `sections/rbp-service-router.liquid`
- `sections/rbp-problem-cards.liquid`
- `sections/rbp-how-it-works.liquid`
- `sections/rbp-cta-band.liquid`
- `sections/rbp-feature-grid.liquid`
- `sections/rbp-service-pathways.liquid`
- `sections/rbp-split-content.liquid`

Completed changes:

- Removed editor/admin/theme-builder wording from defaults.
- Replaced with customer-facing RBP service, resource and support language.

## Live Shopify actions attempted

### Store and theme inspection

Earlier in the run, Shopify connection was confirmed for `Remote Business Partner` at `remote-business-partner.myshopify.com` and the live theme was identified as `remote-business-partner`, theme ID `188709962042`, role `MAIN`.

Live readback showed the published theme still had older generated template bodies before this pass, meaning GitHub and the live theme were not fully synchronized.

### Live theme sync

Attempted a no-change `themeFilesUpsert` write probe against theme ID `188709962042` to confirm whether direct live sync was possible without risking a partial deploy.

Result:

- Blocked by the Shopify connector live-theme safety guard.
- Error: `This mutation is blocked: Unable to verify the target theme is not the live storefront theme. Please try again.`
- No theme file content was sent or changed by that probe.

Shopify CLI deployment could not run because `shopify` is not installed in the workspace and npm access to `@shopify/cli` is blocked by registry/network restrictions.

### Live menus

The live header and footer menus were inspected earlier and confirmed to contain unfinished/overloaded links. A `menuUpdate` mutation was attempted for the live `header-menu`, but the Shopify connector returned `Admin API returned 404`.

After that failure, basic Shopify readback also returned Admin API `404`, so live menu cleanup could not be completed in this workspace.

Repo-side header/footer configuration has been corrected, but live menu mutation remains blocked.

## Validation performed

- GitHub readback confirmed the updated homepage, product template, contact template and new product guidance section are present on `main`.
- GitHub compare from `97564b7753635085a61c903c5bf3880946ccd7af` to `main` showed the branch is 36 commits ahead and includes today’s changed files plus the earlier landing-page pass.
- Shopify schema was inspected for Page, Menu, MenuItem, Mutation and theme-file inputs before attempting menu/theme write operations.
- Official Shopify Admin GraphQL documentation was checked for the menu update workflow when troubleshooting live menu mutation shape.

Validation not completed:

- `shopify theme check` could not run because Shopify CLI is unavailable.
- Local clone-based JSON validation could not run because direct GitHub clone is blocked by CONNECT tunnel `403` and no GitHub token/CLI is available in the container.
- Desktop/mobile visual QA against the public storefront could not be completed because live theme sync was blocked and public storefront access from the workspace is unreliable.
- Live post-deploy readback could not be completed after the connector began returning Admin API `404`.

## Items deferred or blocked

- Deploy/sync to the published Shopify theme is blocked from this workspace.
- Live header/footer menu cleanup is blocked by Shopify connector Admin API `404` on menu mutation.
- Product media/image cleanup is deferred because no new product imagery was provided and product-image claims should not be invented.
- Individual live product copy rewrites are deferred unless product-specific commercial facts are supplied or live product data can be edited safely.
- Visual desktop/mobile storefront QA is deferred until the updated GitHub theme files are deployed to the live theme.

## Risks identified

- GitHub `main` and the published Shopify theme may remain out of sync until an external deployment path runs.
- The live `header-menu` and `footer-menu` may still expose unfinished or overloaded links until the menu update is applied in Shopify Admin or through a working CLI/API path.
- Product guidance is intentionally generic to avoid inventing product facts; product-specific descriptions and media still need a merchandising pass.
- The new membership-options template exists in GitHub, but live page template assignment and theme sync must be verified after deployment.

## Recommended next phase

1. Run Shopify CLI from an authenticated environment and push the changed theme files to theme ID `188709962042` with `--allow-live` only after reviewing the diff.
2. Apply the simplified header/footer menu structure in Shopify Admin if API mutation access remains blocked.
3. Reassign `/pages/membership-options` to `page.membership-options` after the template is present on the live theme.
4. Run desktop and mobile QA across Homepage, Advisory, Consulting, Implementation, Operations Hub, Essentials, Membership, Membership Options, Support, Contact, Product and Collection pages.
5. Perform product-specific merchandising review for images, descriptions, package names and recommendations once live product facts are available.
