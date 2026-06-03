# RBP Shopify Trade Theme Refactor and Migration Implementation Plan

**Repository:** `https://github.com/info-rbp/shopify-rbp`  
**Working environment:** VS Code + Codex  
**New base theme:** `theme_export__remote-business-partner-myshopify-com-trade__03JUN2026-0247am.zip`  
**Migration source:** `shopify-design-main (1).zip`

---

## 1. Objective

Build the new `shopify-rbp` repository around the **Shopify Trade theme** as the clean technical baseline, while transferring the useful RBP work from the old `shopify-design-main` repository.

The target is not to copy the old theme into the new one. The target is to create a reusable Shopify Online Store 2.0 theme system made from:

- shared RBP design tokens and CSS assets;
- reusable snippets for buttons, cards, headings, CTAs, and common content patterns;
- reusable Shopify sections with settings and blocks;
- clean JSON templates assembled from modular sections;
- preserved Shopify-native commerce behaviour from the Trade theme;
- migrated RBP product, service, marketplace, membership, onboarding, Business NBN, help centre, and resource logic where it is still relevant.

In plain human terms: use the new Trade theme as the house, then move the useful furniture across. Do not drag the old plumbing through the front door just because it technically worked once.

---

## 2. Source inventory

### 2.1 Old repository: `shopify-design-main (1).zip`

The old repository contains the earlier RBP Shopify implementation. It includes:

- `layout/`
- `templates/`
- `sections/`
- `snippets/`
- `assets/`
- `config/`
- `locales/`
- `docs/`
- `content/`
- `AGENTS.md`
- `DESIGN.md`

Approximate inventory from the uploaded zip:

| Area | Count / notes |
|---|---:|
| Total files/directories | 566 |
| Templates-related entries | 96 |
| Sections-related entries | 118 |
| Assets-related entries | 197 |
| Snippets-related entries | 42 |
| Blocks directory | None |

Important old RBP files include:

```txt
assets/rbp-theme.css
assets/rbp-components.css
assets/rbp-landing.css
assets/rbp-product.css
assets/rbp-service-product.css
assets/rbp-ux-remediation.css
assets/rbp-onboarding-form.css
assets/rbp-onboarding-form.js
assets/rbp-business-nbn-checker.js

sections/rbp-home-ux-refresh.liquid
sections/rbp-home-button-fix.liquid
sections/rbp-home.liquid
sections/rbp-landing-page.liquid
sections/rbp-core-services-landing.liquid
sections/rbp-core-service-product.liquid
sections/rbp-product-state.liquid
sections/rbp-product-state-guard.liquid
sections/rbp-product-information.liquid
sections/rbp-product-offerings.liquid
sections/rbp-product-faq.liquid
sections/rbp-product-help.liquid
sections/rbp-marketplace.liquid
sections/rbp-marketplace-page.liquid
sections/rbp-marketplace-offers.liquid
sections/rbp-marketplace-enquiry-form.liquid
sections/rbp-offers-page.liquid
sections/rbp-offer-detail.liquid
sections/rbp-offer-listing.liquid
sections/rbp-offer-categories.liquid
sections/rbp-offer-category-detail.liquid
sections/rbp-membership-page.liquid
sections/rbp-membership-model.liquid
sections/rbp-member-portal-page.liquid
sections/rbp-document-hub.liquid
sections/rbp-resource-library.liquid
sections/rbp-help-center.liquid
sections/rbp-business-nbn.liquid
sections/rbp-onboarding-form.liquid
sections/rbp-core-intake-form.liquid
sections/rbp-contact-page.liquid
sections/rbp-cart-guidance.liquid
sections/rbp-cart-drawer-guidance.liquid
sections/rbp-cart-onboarding-notice.liquid
sections/rbp-account-dashboard-guidance.liquid
sections/rbp-order-account-guidance.liquid
sections/rbp-footer.liquid
sections/rbp-header.liquid

snippets/rbp-offer-card.liquid
snippets/rbp-onboarding-field.liquid
snippets/rbp-nbn-faq-support.liquid
snippets/rbp-marketplace-offers-compat.liquid
```

Important old product templates include:

```txt
templates/product.json
templates/product.on-demand-service.json
templates/product.core-service.json
templates/product.booking-service.json
templates/product.business-nbn.json
templates/product.business-in-a-box.json
templates/product.asset-sale.json
```

Important old page templates include:

```txt
templates/page.rbp-landing.json
templates/page.core-services.json
templates/page.membership.json
templates/page.marketplace.json
templates/page.offers.json
templates/page.document-hub.json
templates/page.help-center.json
templates/page.business-nbn.json
templates/page.onboarding.json
templates/page.contact.json
templates/page.advisory.json
templates/page.consulting.json
templates/page.implementation.json
templates/page.operations.json
```

Important old documentation includes:

```txt
docs/jules/00-jules-implementation-index.md
docs/jules/07-content-management.md
docs/jules/08-content-library-and-affiliate-links.md
docs/jules/08-onboarding-app-proxy-integration.md
docs/jules/09-content-page-generation.md
docs/jules/10-custom-app-backend-contract.md
docs/jules/11-shopify-store-configuration-checklist.md
docs/jules/12-data-model-registry.md
docs/jules/13-testing-and-deployment-checklist.md
docs/jules/14-copy-and-conversion-rules.md
docs/jules/15-bridge-to-google-cloud-integration.md
docs/jules/16-onboarding-system-v1-follow-up-review.md
docs/jules/business-finance-insurance-project-context.md
docs/jules/business-nbn-shopify-context.md
docs/jules/customer-account-portal-context.md
docs/jules/marketplace-project-overview.md
docs/jules/membership-section-project-context.md
docs/jules/nucleus-onboarding-forms-context.md
docs/jules/project-context.md
docs/jules/project-overview.md
docs/jules/real-estate-booking-project-context.md
docs/jules/services-onboarding-forms-context.md
docs/jules/shopify-product-template-context.md
docs/jules/shopify-seo-implementation-plan.md
docs/jules/shopify-ui-ux-project-overview.md
```

### 2.2 New Trade theme export

The new Trade theme export contains the clean Shopify theme baseline.

Approximate inventory from the uploaded zip:

| Area | Count / notes |
|---|---:|
| Total files/directories | 354 |
| Templates | 22 |
| Sections | 54 |
| Assets | 185 |
| Snippets | 37 |
| Blocks | 1 |
| Theme | Shopify Trade `15.4.1` |

Important new theme templates include:

```txt
templates/index.json
templates/page.json
templates/page.contact.json
templates/product.json
templates/product.template-product-page.json
templates/collection.json
templates/collection.collection.json
templates/cart.json
templates/blog.json
templates/article.json
templates/search.json
templates/404.json
templates/list-collections.json
templates/customers/account.json
templates/customers/activate_account.json
templates/customers/addresses.json
templates/customers/login.json
templates/customers/order.json
templates/customers/register.json
templates/customers/reset_password.json
```

The new theme also includes:

```txt
blocks/ai_gen_block_8fd98c7.liquid
```

This block appears to be related to an AI-generated header/navigation element in the exported theme. Treat it carefully. Do not delete or replace it until the new repository has a clear header strategy.

---

## 3. Core architectural decision

The new repo must use this architecture:

```txt
Trade theme native foundation
  + RBP design-system assets
  + RBP reusable snippets
  + RBP reusable sections and blocks
  + RBP JSON template families
  + migrated product/service/business logic
```

The new repo must **not** use this architecture:

```txt
One giant homepage section
  + button-fix section
  + copied old page-specific Liquid files
  + duplicated CSS
  + mystery patches
```

The old `rbp-home-ux-refresh.liquid` should be treated as a **prototype and content reference**, not as the final implementation.

The old `rbp-home-button-fix.liquid` should not be migrated. Button colour belongs in the shared button component, not in a patch section hiding at the bottom of the homepage like a raccoon in the ceiling.

---

## 4. Repository setup in VS Code

### 4.1 Clone or open the new repo

```bash
git clone https://github.com/info-rbp/shopify-rbp.git
cd shopify-rbp
code .
```

### 4.2 Create working branches

Use a clean branch strategy.

```bash
git checkout -b chore/trade-theme-baseline
```

After the Trade theme baseline is committed, create the implementation branch:

```bash
git checkout -b refactor/rbp-trade-component-system
```

Suggested branch roles:

| Branch | Purpose |
|---|---|
| `main` | Stable deployable repo state |
| `chore/trade-theme-baseline` | First clean import of the Trade theme export |
| `refactor/rbp-trade-component-system` | RBP migration and modular refactor work |

### 4.3 Unzip source files outside committed theme root

Create a temporary migration workspace that is not committed.

```bash
mkdir -p _migration/old-shopify-design
mkdir -p _migration/trade-theme
```

Unzip the old repository:

```bash
unzip "../shopify-design-main (1).zip" -d _migration/old-shopify-design
```

Unzip the new Trade theme:

```bash
unzip "../theme_export__remote-business-partner-myshopify-com-trade__03JUN2026-0247am.zip" -d _migration/trade-theme
```

Add this to `.gitignore`:

```gitignore
_migration/
*.zip
.DS_Store
```

### 4.4 Commit the clean Trade baseline

Copy the contents of `_migration/trade-theme/` into the repository root.

```bash
rsync -a _migration/trade-theme/ ./
```

Then commit.

```bash
git add .
git commit -m "chore: add Shopify Trade theme baseline"
```

This baseline commit matters. It gives us a clean rollback point before the RBP migration begins. Apparently version control was invented for exactly this sort of avoidable human drama.

---

## 5. Non-negotiable implementation rules

Codex must follow these rules during the refactor.

### 5.1 Preserve Shopify-native commerce functionality

Do not break or replace Trade’s native behaviour for:

```txt
product forms
variant selectors
quantity inputs
cart drawer
cart page
checkout buttons
collection filters
collection sorting
pagination
search
predictive search
customer account templates
localisation
pickup availability
selling plans
```

RBP sections should enhance product and collection pages. They should not casually replace the parts of Shopify that make money happen. Capitalism is fragile enough.

### 5.2 Do not blindly copy old RBP layout files

Old files should be classified before migration:

| Classification | Action |
|---|---|
| Foundation asset | migrate and clean |
| Reusable component | migrate into snippets/assets |
| Reusable section | refactor and migrate |
| Page-specific section | convert into section + template family |
| Monolithic prototype | use as reference only |
| Patch/fix section | remove or replace at source |
| Header/footer override | avoid unless explicitly required |

### 5.3 Use blocks for repeatable content

Use Shopify section blocks for:

```txt
cards
feature lists
steps
FAQs
service pathways
resource tiles
benefit lists
comparison rows
support links
```

Do not hardcode repeatable content into section markup unless it is genuinely structural.

### 5.4 Keep all RBP-specific classes scoped

Use `.rbp-` prefixes for all new RBP classes.

Good:

```css
.rbp-section {}
.rbp-button {}
.rbp-card {}
.rbp-service-router {}
```

Bad:

```css
.section {}
.card {}
.button {}
.grid {}
```

Broad selectors are how one innocent homepage change turns into a cart page crime scene.

### 5.5 Do not commit secrets or private data

Never commit:

```txt
Shopify Admin API tokens
Google Cloud credentials
private customer data
submitted form responses
signed URLs
private partner URLs
.env files
local cache/build output
```

---

## 6. Migration map from old repo to new Trade repo

### 6.1 Directly migrate after review

These old files are useful and should be migrated into the new Trade repo after review and cleanup.

```txt
assets/rbp-theme.css
assets/rbp-components.css
assets/rbp-onboarding-form.css
assets/rbp-onboarding-form.js
assets/rbp-business-nbn-checker.js

docs/jules/00-jules-implementation-index.md
docs/jules/12-data-model-registry.md
docs/jules/13-testing-and-deployment-checklist.md
docs/jules/14-copy-and-conversion-rules.md
docs/jules/business-nbn-shopify-context.md
docs/jules/customer-account-portal-context.md
docs/jules/marketplace-project-overview.md
docs/jules/membership-section-project-context.md
docs/jules/real-estate-booking-project-context.md
docs/jules/services-onboarding-forms-context.md
docs/jules/shopify-product-template-context.md
docs/jules/shopify-ui-ux-project-overview.md
```

Expected new locations:

```txt
assets/rbp-theme.css
assets/rbp-components.css
assets/rbp-sections.css
assets/rbp-commerce.css
assets/rbp-onboarding-form.css
assets/rbp-onboarding-form.js
assets/rbp-business-nbn-checker.js

docs/codex/
docs/migration/
docs/jules/
```

### 6.2 Refactor before migration

These old files contain useful work but should not be copied as-is.

```txt
sections/rbp-home-ux-refresh.liquid
sections/rbp-home.liquid
sections/rbp-landing-page.liquid
sections/rbp-core-services-landing.liquid
sections/rbp-core-service-product.liquid
sections/rbp-marketplace.liquid
sections/rbp-marketplace-page.liquid
sections/rbp-offers-page.liquid
sections/rbp-membership-page.liquid
sections/rbp-document-hub.liquid
sections/rbp-resource-library.liquid
sections/rbp-help-center.liquid
sections/rbp-business-nbn.liquid
sections/rbp-contact-page.liquid
sections/rbp-product-state.liquid
sections/rbp-product-state-guard.liquid
sections/rbp-product-information.liquid
sections/rbp-product-offerings.liquid
sections/rbp-product-faq.liquid
sections/rbp-product-help.liquid
```

Refactor them into reusable Trade-compatible sections:

```txt
sections/rbp-hero.liquid
sections/rbp-page-hero.liquid
sections/rbp-service-router.liquid
sections/rbp-problem-cards.liquid
sections/rbp-feature-grid.liquid
sections/rbp-how-it-works.liquid
sections/rbp-service-pathways.liquid
sections/rbp-split-content.liquid
sections/rbp-resource-preview.liquid
sections/rbp-faq.liquid
sections/rbp-cta-band.liquid
sections/rbp-contact-panel.liquid
sections/rbp-product-benefits.liquid
sections/rbp-product-state.liquid
sections/rbp-product-information.liquid
sections/rbp-product-help.liquid
sections/rbp-product-faq.liquid
sections/rbp-collection-intro.liquid
sections/rbp-cart-support.liquid
```

### 6.3 Do not migrate long-term

These old files should be retired or replaced by proper architecture.

```txt
sections/rbp-home-button-fix.liquid
sections/rbp-css-loader.liquid
sections/rbp-css-loader-v2.liquid
sections/rbp-card-fallback-styles.liquid
sections/rbp-nav-fixes.liquid
sections/rbp-header-spacing.liquid
sections/rbp-header-controller.liquid
```

Reason:

- Button fixes belong in `snippets/rbp-button.liquid` and `assets/rbp-components.css`.
- CSS loaders should be replaced by direct asset loading in `layout/theme.liquid`.
- Header/nav fixes should not be carried forward until the Trade header strategy is confirmed.

---

## 7. Target file structure

The final repository should trend toward this structure.

```txt
assets/
  base.css                         # Trade native
  rbp-theme.css                    # RBP tokens and global variables
  rbp-components.css               # RBP reusable component styles
  rbp-sections.css                 # RBP reusable section layouts
  rbp-commerce.css                 # Product, collection, cart enhancements
  rbp-onboarding-form.css
  rbp-onboarding-form.js
  rbp-business-nbn-checker.js

snippets/
  rbp-button.liquid
  rbp-section-heading.liquid
  rbp-card.liquid
  rbp-resource-card.liquid
  rbp-service-card.liquid
  rbp-cta-link.liquid
  rbp-breadcrumbs.liquid
  rbp-onboarding-field.liquid
  rbp-offer-card.liquid
  rbp-nbn-faq-support.liquid

sections/
  rbp-hero.liquid
  rbp-page-hero.liquid
  rbp-service-router.liquid
  rbp-problem-cards.liquid
  rbp-feature-grid.liquid
  rbp-how-it-works.liquid
  rbp-service-pathways.liquid
  rbp-split-content.liquid
  rbp-resource-preview.liquid
  rbp-faq.liquid
  rbp-cta-band.liquid
  rbp-contact-panel.liquid
  rbp-collection-intro.liquid
  rbp-product-benefits.liquid
  rbp-product-use-cases.liquid
  rbp-product-state.liquid
  rbp-product-information.liquid
  rbp-product-help.liquid
  rbp-product-faq.liquid
  rbp-cart-support.liquid
  rbp-onboarding-form.liquid
  rbp-business-nbn.liquid
  rbp-marketplace-offers.liquid
  rbp-membership-benefits.liquid

blocks/
  keep existing Trade block until reviewed
  future reusable RBP theme blocks only if clearly needed

templates/
  index.json
  page.json
  page.contact.json
  page.service-landing.json
  page.service-detail.json
  page.resource-hub.json
  page.membership.json
  page.marketplace.json
  page.business-nbn.json
  page.onboarding.json
  product.json
  product.on-demand-service.json
  product.core-service.json
  product.booking-service.json
  product.business-nbn.json
  collection.json
  collection.services.json
  collection.resources.json
  collection.marketplace.json
  blog.json
  article.json
  cart.json
  search.json
  404.json

docs/
  codex/
    IMPLEMENTATION_PLAN.md
    MIGRATION_MAP.md
    QA_CHECKLIST.md
  jules/
    migrated old repository docs where still useful
```

---

## 8. Implementation phases

## Phase 0: Baseline and safety

**Goal:** Get the new Trade theme into `shopify-rbp` cleanly before adding RBP customisations.

### Tasks

1. Import the new Trade theme export into the repository root.
2. Confirm the following folders exist:

```txt
assets/
blocks/
config/
layout/
locales/
sections/
snippets/
templates/
```

3. Commit the clean baseline.
4. Add `_migration/` and `*.zip` to `.gitignore`.
5. Add this implementation plan to:

```txt
docs/codex/IMPLEMENTATION_PLAN.md
```

### Done when

- The repo contains the clean Trade theme baseline.
- The baseline is committed before migration work starts.
- No old RBP files have been copied yet.

---

## Phase 1: Migration audit

**Goal:** Inventory the old RBP implementation and decide what moves, what gets refactored, and what gets retired.

### Tasks

1. Create:

```txt
docs/codex/MIGRATION_MAP.md
```

2. Document files under these categories:

```txt
Migrate directly
Refactor before migration
Use as reference only
Retire / do not migrate
Needs manual Shopify Admin configuration
```

3. Prioritise old docs:

```txt
docs/jules/shopify-product-template-context.md
docs/jules/13-testing-and-deployment-checklist.md
docs/jules/12-data-model-registry.md
docs/jules/14-copy-and-conversion-rules.md
docs/jules/business-nbn-shopify-context.md
docs/jules/marketplace-project-overview.md
docs/jules/membership-section-project-context.md
```

4. Audit old template families:

```txt
product.on-demand-service.json
product.core-service.json
product.booking-service.json
product.business-nbn.json
page.core-services.json
page.membership.json
page.marketplace.json
page.business-nbn.json
page.document-hub.json
page.help-center.json
```

### Done when

- Each old RBP file has a migration decision.
- Codex has a written migration map before editing files.

---

## Phase 2: RBP design-system foundation

**Goal:** Add the RBP design layer to the Trade theme without replacing Trade’s native CSS.

### Tasks

1. Migrate and clean:

```txt
assets/rbp-theme.css
assets/rbp-components.css
```

2. Create:

```txt
assets/rbp-sections.css
assets/rbp-commerce.css
```

3. Consolidate duplicate or overlapping old CSS from:

```txt
assets/rbp-landing.css
assets/rbp-product.css
assets/rbp-service-product.css
assets/rbp-ux-remediation.css
```

4. Load RBP CSS in `layout/theme.liquid` after Trade’s native CSS.

Recommended pattern:

```liquid
{{ 'rbp-theme.css' | asset_url | stylesheet_tag }}
{{ 'rbp-components.css' | asset_url | stylesheet_tag }}
{{ 'rbp-sections.css' | asset_url | stylesheet_tag }}
{{ 'rbp-commerce.css' | asset_url | stylesheet_tag }}
```

5. Do not load CSS through a custom Shopify section unless there is no safer option.

### CSS rules

- Use `.rbp-` namespace.
- Do not globally override `button`, `a`, `.button`, `.card`, `.section`, or Shopify-native product/cart classes unless intentionally scoped.
- Preserve Trade’s native base styles.
- Ensure primary CTA text is white in the reusable button system.

### Done when

- RBP CSS loads globally through `layout/theme.liquid`.
- Buttons, cards, containers, badges, and section headings have centralised styles.
- No homepage-specific button patch is required.

---

## Phase 3: Shared snippets

**Goal:** Create reusable Liquid snippets before building sections.

### Create snippets

```txt
snippets/rbp-button.liquid
snippets/rbp-section-heading.liquid
snippets/rbp-card.liquid
snippets/rbp-resource-card.liquid
snippets/rbp-service-card.liquid
snippets/rbp-cta-link.liquid
snippets/rbp-breadcrumbs.liquid
```

### Migrate/refactor old snippets

Review and migrate where useful:

```txt
snippets/rbp-offer-card.liquid
snippets/rbp-onboarding-field.liquid
snippets/rbp-nbn-faq-support.liquid
snippets/rbp-marketplace-offers-compat.liquid
```

### `rbp-button.liquid` requirements

The button snippet must support:

```txt
label
url
variant: primary, secondary, ghost, light, dark
size: small, default, large
icon / arrow toggle
aria_label
new_tab toggle
```

All button variants must define text colour centrally.

### Done when

- New RBP sections can render buttons and cards by calling snippets.
- Button text colour is no longer solved by a patch section.

---

## Phase 4: Reusable section library

**Goal:** Build reusable sections that can work across homepage, pages, services, resources, and product-support templates.

### Core sections to create first

```txt
sections/rbp-hero.liquid
sections/rbp-page-hero.liquid
sections/rbp-service-router.liquid
sections/rbp-problem-cards.liquid
sections/rbp-feature-grid.liquid
sections/rbp-how-it-works.liquid
sections/rbp-service-pathways.liquid
sections/rbp-split-content.liquid
sections/rbp-resource-preview.liquid
sections/rbp-faq.liquid
sections/rbp-cta-band.liquid
sections/rbp-contact-panel.liquid
```

### Section rules

Each section must include:

```txt
clear schema name
safe defaults
presets where editor-addable
settings for headings/copy/CTA
blocks for repeatable content
enabled_on / disabled_on rules where appropriate
```

### Block-based sections

The following must use blocks:

```txt
rbp-service-router.liquid
rbp-problem-cards.liquid
rbp-feature-grid.liquid
rbp-how-it-works.liquid
rbp-service-pathways.liquid
rbp-resource-preview.liquid
rbp-faq.liquid
```

### Done when

- Sections are modular.
- Sections can be added/reordered in Shopify theme editor.
- No section tries to own an entire page unless it is intentionally a native Shopify main section.

---

## Phase 5: Homepage rebuild

**Goal:** Rebuild the homepage from modular sections.

### Do not migrate as-is

Do not copy the old homepage implementation directly:

```txt
sections/rbp-home-ux-refresh.liquid
sections/rbp-home.liquid
sections/rbp-home-button-fix.liquid
```

Use them only as reference for:

```txt
hero messaging
service routing concept
problem-card UX
how-it-works flow
SME positioning
membership/partner split
resource preview
final CTA
```

### Target `templates/index.json`

Use modular sections:

```json
{
  "sections": {
    "hero": {
      "type": "rbp-hero"
    },
    "service_router": {
      "type": "rbp-service-router"
    },
    "problem_cards": {
      "type": "rbp-problem-cards"
    },
    "how_it_works": {
      "type": "rbp-how-it-works"
    },
    "service_pathways": {
      "type": "rbp-service-pathways"
    },
    "sme_positioning": {
      "type": "rbp-split-content"
    },
    "resources": {
      "type": "rbp-resource-preview"
    },
    "final_cta": {
      "type": "rbp-cta-band"
    }
  },
  "order": [
    "hero",
    "service_router",
    "problem_cards",
    "how_it_works",
    "service_pathways",
    "sme_positioning",
    "resources",
    "final_cta"
  ]
}
```

### Done when

- Homepage no longer relies on a single full-page RBP section.
- Homepage can be rearranged in the Shopify editor.
- CTA button styling is inherited from reusable snippets/CSS.

---

## Phase 6: Page template families

**Goal:** Create reusable JSON template families instead of dozens of one-off pages.

### Keep Trade templates

Preserve and enhance:

```txt
templates/page.json
templates/page.contact.json
templates/product.json
templates/collection.json
templates/cart.json
templates/blog.json
templates/article.json
templates/search.json
templates/404.json
```

### Add RBP page templates

Create only the template families that are actually needed.

```txt
templates/page.service-landing.json
templates/page.service-detail.json
templates/page.resource-hub.json
templates/page.membership.json
templates/page.marketplace.json
templates/page.business-nbn.json
templates/page.onboarding.json
```

### Standard page template

Use for generic pages:

```txt
main-page
rbp-page-hero
rbp-rich-text or rbp-feature-grid
rbp-cta-band
```

### Service landing template

Use for advisory, consulting, implementation, operations:

```txt
rbp-page-hero
rbp-service-router
rbp-service-pathways
rbp-feature-grid
rbp-how-it-works
rbp-faq
rbp-cta-band
```

### Resource hub template

Use for documents, templates, toolkits, guides:

```txt
rbp-page-hero
rbp-resource-preview
featured-collection
featured-blog
rbp-cta-band
```

### Membership template

Use for membership pages:

```txt
rbp-page-hero
rbp-feature-grid
rbp-how-it-works
rbp-faq
rbp-cta-band
```

### Marketplace template

Use for partner offers and marketplace pages:

```txt
rbp-page-hero
rbp-service-router
rbp-marketplace-offers
rbp-feature-grid
rbp-faq
rbp-cta-band
```

### Business NBN template

Use for Business NBN pages:

```txt
rbp-page-hero
rbp-business-nbn
rbp-feature-grid
rbp-faq
rbp-contact-panel
```

### Done when

- The site uses template families, not page-specific chaos.
- Old page templates are mapped to new template families.
- Duplicate templates are retired or avoided.

---

## Phase 7: Product template migration

**Goal:** Preserve Trade’s product functionality while migrating RBP fulfilment logic.

### Keep Trade product behaviour

Do not break:

```txt
main-product
variant picker
quantity selector
buy buttons
price display
product media
pickup availability
cart interaction
```

### Add product family templates

Create or migrate:

```txt
templates/product.on-demand-service.json
templates/product.core-service.json
templates/product.booking-service.json
templates/product.business-nbn.json
```

Only create additional templates when there is a clear Shopify assignment strategy.

### Product sections to migrate/refactor

```txt
sections/rbp-product-state.liquid
sections/rbp-product-state-guard.liquid
sections/rbp-product-information.liquid
sections/rbp-product-offerings.liquid
sections/rbp-product-faq.liquid
sections/rbp-product-help.liquid
sections/rbp-core-service-product.liquid
sections/booking-service-product.liquid
```

### Product fulfilment rule

RBP products must not falsely claim instant download or instant delivery where the journey requires:

```txt
onboarding
intake
manual preparation
booking
availability check
requirements capture
service delivery
review/approval
```

Use language like:

```txt
Prepared digital delivery
Intake required
Booking required
Availability check required
Manual review required
Next-step guidance provided after purchase
```

### Done when

- Default product template remains safe.
- Product family templates exist where needed.
- CTA and fulfilment messaging match the product family.
- No service product accidentally behaves like a basic downloadable product.

---

## Phase 8: Collection template migration

**Goal:** Preserve Trade collection filtering/sorting while adding RBP context sections.

### Keep Trade collection behaviour

Do not break:

```txt
product grid
filtering
sorting
pagination
collection images
tag handling
```

### Add collection templates only where useful

```txt
templates/collection.services.json
templates/collection.resources.json
templates/collection.marketplace.json
```

### Add collection support sections

```txt
sections/rbp-collection-intro.liquid
sections/rbp-collection-help.liquid
sections/rbp-collection-empty-state.liquid
```

### Done when

- Collections remain Shopify-native and functional.
- Service/resource/marketplace collections have better explanatory content.
- Empty or confusing collections provide guidance instead of dead air.

---

## Phase 9: Onboarding, marketplace, NBN, and support modules

**Goal:** Migrate business-critical RBP modules without forcing them into the homepage architecture.

### Onboarding

Migrate:

```txt
assets/rbp-onboarding-form.css
assets/rbp-onboarding-form.js
sections/rbp-onboarding-form.liquid
sections/rbp-template-onboarding-form.liquid
sections/rbp-core-intake-form.liquid
snippets/rbp-onboarding-field.liquid
```

Ensure app proxy URLs are configurable and no secrets are exposed.

### Marketplace

Refactor/migrate:

```txt
sections/rbp-marketplace.liquid
sections/rbp-marketplace-page.liquid
sections/rbp-marketplace-offers.liquid
sections/rbp-marketplace-enquiry-form.liquid
sections/rbp-offer-detail.liquid
sections/rbp-offer-listing.liquid
sections/rbp-offer-categories.liquid
sections/rbp-offer-category-detail.liquid
snippets/rbp-offer-card.liquid
```

### Business NBN

Refactor/migrate:

```txt
assets/rbp-business-nbn-checker.js
sections/rbp-business-nbn.liquid
snippets/rbp-nbn-faq-support.liquid
```

### Help centre and support

Refactor/migrate:

```txt
sections/rbp-help-center.liquid
sections/rbp-product-help.liquid
sections/rbp-contact-page.liquid
sections/rbp-cart-guidance.liquid
sections/rbp-account-dashboard-guidance.liquid
```

### Done when

- Each business module has a template or section strategy.
- Old modules are not dumped into the new theme without cleanup.
- Dependencies on metafields, metaobjects, app proxy endpoints, or external services are documented.

---

## Phase 10: Header, footer, and navigation strategy

**Goal:** Keep the Trade theme stable while deciding whether to retain Trade native header/footer or migrate old RBP header/footer work.

### Important

Do not immediately migrate:

```txt
sections/rbp-header.liquid
sections/rbp-footer.liquid
sections/rbp-nav-fixes.liquid
sections/rbp-header-controller.liquid
sections/rbp-header-spacing.liquid
```

The new Trade export includes a block-based header/navigation area in `templates/index.json` and `blocks/ai_gen_block_8fd98c7.liquid`. Review this first.

### Recommended approach

1. Preserve Trade header/footer initially.
2. Audit the exported header block.
3. Decide whether RBP needs:
   - Trade native header with settings;
   - a refined custom RBP header;
   - a hybrid approach.
4. Do not mix old and new header systems.

### Done when

- Header/nav strategy is documented.
- Header changes do not block the section/template migration.
- No old nav patch files are carried forward blindly.

---

## Phase 11: Cleanup and retirement

**Goal:** Remove prototype files, duplicate CSS, and obsolete patches after the modular system works.

### Retire after replacement

```txt
sections/rbp-home-ux-refresh.liquid
sections/rbp-home.liquid
sections/rbp-home-button-fix.liquid
sections/rbp-css-loader.liquid
sections/rbp-css-loader-v2.liquid
sections/rbp-card-fallback-styles.liquid
```

### Consolidate CSS

Old CSS files should be consolidated into:

```txt
rbp-theme.css
rbp-components.css
rbp-sections.css
rbp-commerce.css
```

Avoid keeping:

```txt
rbp-landing.css
rbp-product.css
rbp-service-product.css
rbp-ux-remediation.css
```

unless there is a clear reason.

### Done when

- The repo no longer contains dead prototype files.
- CSS has clear ownership.
- Templates do not reference missing or obsolete sections.

---

## 9. Codex work packets

Use these as discrete Codex tasks. Do not ask Codex to do everything in one pass unless the goal is to create a thrilling new category of mess.

### Packet 1: Trade baseline

**Task:** Import the Trade theme export into `shopify-rbp`, add `.gitignore`, and commit the clean baseline.

**Files expected:**

```txt
assets/
blocks/
config/
layout/
locales/
sections/
snippets/
templates/
.gitignore
```

---

### Packet 2: Migration documentation

**Task:** Import useful old `docs/jules/` files into `docs/jules/`, create `docs/codex/MIGRATION_MAP.md`, and classify old files.

**Do not modify theme runtime files in this packet.**

---

### Packet 3: RBP CSS foundation

**Task:** Migrate and clean RBP CSS into:

```txt
assets/rbp-theme.css
assets/rbp-components.css
assets/rbp-sections.css
assets/rbp-commerce.css
```

Load these assets from `layout/theme.liquid` after Trade’s native CSS.

---

### Packet 4: Shared snippets

**Task:** Create:

```txt
snippets/rbp-button.liquid
snippets/rbp-section-heading.liquid
snippets/rbp-card.liquid
snippets/rbp-resource-card.liquid
snippets/rbp-service-card.liquid
snippets/rbp-cta-link.liquid
```

Make button text colours reliable at source.

---

### Packet 5: Core reusable sections

**Task:** Create the reusable section library:

```txt
rbp-hero
rbp-page-hero
rbp-service-router
rbp-problem-cards
rbp-feature-grid
rbp-how-it-works
rbp-service-pathways
rbp-split-content
rbp-resource-preview
rbp-faq
rbp-cta-band
rbp-contact-panel
```

Each section should have valid schema, useful defaults, and presets.

---

### Packet 6: Homepage rebuild

**Task:** Replace the Trade homepage template stack with modular RBP sections. Do not use the old monolithic homepage section.

---

### Packet 7: Page template families

**Task:** Add:

```txt
page.service-landing.json
page.service-detail.json
page.resource-hub.json
page.membership.json
page.marketplace.json
page.business-nbn.json
page.onboarding.json
```

Use the reusable section library.

---

### Packet 8: Product templates

**Task:** Migrate/refactor product family templates and product support sections while preserving Trade product functionality.

---

### Packet 9: Collection templates

**Task:** Add collection intros/help sections and optional collection template families without breaking filters, sorting, or pagination.

---

### Packet 10: Business modules

**Task:** Migrate onboarding, marketplace, Business NBN, membership, and help centre modules with dependencies documented.

---

### Packet 11: Cleanup

**Task:** Remove retired sections, duplicate CSS, and obsolete patch files after replacement.

---

## 10. Validation checklist

### 10.1 JSON templates

For every JSON template:

```txt
[ ] JSON is valid.
[ ] Top-level sections/order structure is valid.
[ ] Every section ID in order exists in sections.
[ ] Every section type maps to an actual section file.
[ ] No JSON comments are present.
[ ] Template suffixes match Shopify assignment needs.
```

### 10.2 Liquid sections/snippets

For every Liquid file:

```txt
[ ] Liquid tags are balanced.
[ ] Schema JSON is valid.
[ ] Blocks/settings have safe defaults.
[ ] Classes use rbp- namespace where custom.
[ ] Product/cart/customer objects are checked before use.
[ ] No secrets or private URLs are exposed.
```

### 10.3 CSS

```txt
[ ] No broad unscoped overrides.
[ ] Button text contrast is correct.
[ ] Mobile layout is covered.
[ ] Focus states remain visible.
[ ] Trade native product/cart UI is not broken.
```

### 10.4 Storefront QA

Test:

```txt
Homepage
Standard page
Contact page
Service landing page
Resource hub
Membership page
Marketplace page
Business NBN page
Default product page
On-demand service product page
Core service product page
Booking service product page
Collection page
Cart page
Search page
Blog page
Article page
404 page
Customer account pages
```

### 10.5 Shopify theme editor QA

Test:

```txt
[ ] Sections can be added.
[ ] Sections can be removed.
[ ] Sections can be reordered.
[ ] Blocks can be added.
[ ] Blocks can be reordered.
[ ] Settings update preview correctly.
[ ] Presets appear with useful names.
[ ] Disabled/enabled section rules behave correctly.
```

---

## 11. Definition of done

The refactor is done when:

```txt
[ ] Trade theme is the clean baseline.
[ ] RBP design system is loaded through assets, not patch sections.
[ ] Reusable snippets exist for buttons, headings, cards, and CTAs.
[ ] Homepage is rebuilt from modular sections.
[ ] Page templates use reusable section families.
[ ] Product templates preserve Shopify-native commerce behaviour.
[ ] RBP product/service fulfilment messaging is preserved.
[ ] Onboarding, marketplace, Business NBN, membership, and help modules have migration paths.
[ ] Old monolithic homepage and button-fix sections are retired.
[ ] No old RBP file is copied without a migration decision.
[ ] Theme editor and storefront QA pass.
[ ] Documentation exists for future Codex/Jules work.
```

---

## 12. Codex instruction block

Paste this into Codex when starting the work:

```txt
We are working in the new GitHub repository https://github.com/info-rbp/shopify-rbp.

Use the Shopify Trade theme export as the clean baseline. Use shopify-design-main (1).zip only as a migration source. Do not copy the old theme wholesale into the new repository.

The old RBP repository contains useful assets, sections, product templates, onboarding logic, marketplace logic, Business NBN logic, membership sections, help centre work, and documentation. Migrate that work selectively into the Trade theme as reusable assets, snippets, sections, blocks, and JSON template families.

Do not preserve the old monolithic homepage architecture. The old rbp-home-ux-refresh.liquid file is a visual/content reference only. The old rbp-home-button-fix.liquid file must not survive because button styling belongs in the shared RBP button snippet and CSS.

Preserve Shopify Trade native functionality for product pages, collections, carts, search, customer accounts, localisation, and checkout-adjacent UI. Do not replace product forms, variant selectors, cart controls, collection filters, or search behaviour unless explicitly instructed.

Use .rbp- scoped classes for all new RBP-specific CSS. Avoid broad global CSS selectors. Use section settings and blocks for editable/repeatable content. Use snippets for repeated markup.

Work in phases:
1. Commit clean Trade baseline.
2. Create migration documentation.
3. Add RBP CSS foundation.
4. Create shared snippets.
5. Create reusable sections.
6. Rebuild homepage from modular sections.
7. Add page template families.
8. Migrate product template family logic.
9. Migrate collections, onboarding, marketplace, Business NBN, membership, and support modules.
10. Remove retired old prototype/patch files after replacement.

Before completing each task, validate JSON templates, Liquid syntax, section schemas, scoped CSS, and Shopify-native commerce behaviour.
```

---

## 13. Final warning for implementation

The old repository contains valuable work, but it also contains workaround files, page-specific sections, monolithic homepage code, and patch sections. Codex should mine it, not worship it.

The new Trade theme gives us the stable Shopify base. The old RBP repo gives us the business logic, content structure, and design direction. The implementation succeeds only if those are combined into a proper theme component system.

A copied theme is a migration. A reusable component system is a product. We want the second one, because apparently we are choosing sanity today.
