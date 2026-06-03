# RBP Trade Theme QA Checklist

## Automated Checks

- JSON templates parse successfully.
- Template `order` entries match declared sections.
- Template section types resolve to files in `sections/` or the preserved `_blocks` Trade block.
- Section and block schema JSON parses successfully.
- Shopify Theme Check completes with warnings only.

## Remaining Theme Check Warnings

The remaining warnings are inherited from the Trade baseline or intentionally retained snippets:

- `scheme_classes` undefined-object warnings in `layout/theme.liquid` and `layout/password.liquid`.
- Existing Trade naming/unused-assign warnings in `main-product`, `featured-product`, `main-search`, `main-article`, and `main-list-collections`.
- Orphaned snippets for retained reusable RBP snippets that are not yet referenced by a default template.

## Manual Storefront QA

- Homepage renders modular RBP sections and preserves the exported Trade block header.
- Standard page and contact page still render Trade-native sections.
- Service landing, service detail, resource hub, membership, marketplace, Business NBN, and onboarding templates are assignable.
- Default product page remains Trade-native.
- Product family templates render `main-product` first, then RBP fulfilment/support sections.
- Collection services/resources/marketplace templates preserve native collection filtering, sorting, pagination and product grid.
- Cart page keeps native cart item/footer sections and adds only the RBP support notice.
- Search, blog, article, customer account, localization and password templates still use Trade-native sections.

## Shopify Admin Follow-up

- Assign page templates to the correct Shopify pages.
- Assign product templates to on-demand, core service, booking service and Business NBN products.
- Configure collections for services, resources and marketplace where used.
- Configure app proxy endpoints for onboarding and Business NBN before disabling temporary validation.
- Confirm metaobject definitions for `partner_offer` before relying on automatic marketplace offer rendering.
- Review the exported Trade `_blocks` header strategy before changing header/navigation files.
