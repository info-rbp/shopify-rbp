# Product Media Admin Remediation

Date: 2026-06-05

Theme fallback thumbnails now reduce the worst trust issue when product media is missing or when a product card reuses the known generic `90 Day Execution Partner Kit Business-In-A-Box` media alt. This is not a full replacement for real product media.

## Current theme fallback

Implemented in:

- `snippets/card-product.liquid`
- `snippets/rbp-product-thumbnail-placeholder.liquid`
- `assets/component-card.css`

The fallback can show category-appropriate labels:

- Agreement Template
- Property Template
- HR Template
- Compliance Resource
- Business Toolkit
- Documentation Suite
- Core Service
- On-Demand Service
- Business Admin

## Why Admin media is still required

Theme fallback thumbnails are generic category covers. They do not:

- attach real product media in Shopify Admin;
- improve product image data for channels outside this theme;
- distinguish every individual product;
- replace product-specific previews, screenshots, document covers or service graphics.

## Product image priority order

Assign real media in this order:

1. Visible first-page collection products.
2. High-value or promoted templates.
3. Toolkits.
4. Documentation suites.
5. Core services.
6. On-demand services.

## Suggested category thumbnail system

Create a small approved media set with consistent RBP branding:

| Category | Suggested label |
| --- | --- |
| Legal / agreements | Agreement Template |
| Farm / property | Property Template |
| HR / employment | HR Template |
| Compliance | Compliance Resource |
| Business admin | Business Admin |
| Toolkits | Business Toolkit |
| Documentation suites | Documentation Suite |
| Advisory/Core Services | Core Service |
| On-Demand Services | On-Demand Service |

Use branded abstract/document-style thumbnails. Do not use photographic imagery that implies specific contents, outcomes or regulated advice.

## Required Admin steps

1. Export products or use Shopify Admin product search for the target collections:
   - `/collections/templates`
   - `/collections/documentation-suites`
   - `/collections/toolkits`
   - `/collections/on-demand-services`
   - `/collections/core-services`
2. Sort by collection first-page order and promotional priority.
3. Identify products with missing media or the reused `90 Day Execution Partner Kit Business-In-A-Box` image.
4. Assign the approved category thumbnail or a product-specific approved image.
5. Confirm alt text is category/product-appropriate and does not overclaim product contents.
6. Re-test first-page collection grids after assignment.

## Handle report requirement

Exact product handles needing media require Shopify Admin access, product export access, or a product CSV. The repository does not contain the live product catalogue, so this document does not claim a complete handle list.

