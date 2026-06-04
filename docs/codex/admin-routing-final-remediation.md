# Remote Business Partner Admin Routing Final Remediation

Date: 2026-06-04

This document captures the Shopify Admin actions still required after the theme-code remediation. Theme JSON files create assignable templates, but Shopify Admin must publish pages, assign templates, set SEO fields, create redirects, update menus and populate metaobjects.

## Page Publishing And Template Assignments

Create or update these pages in Shopify Admin:

| URL | Title | Template | Published | SEO title | SEO description |
| --- | --- | --- | --- | --- | --- |
| `/pages/business-finance` | Business Finance | `page.business-finance` | Yes | Business Finance Pathways \| Remote Business Partner | Explore provider-neutral business finance information and submit a funding enquiry for Remote Business Partner to review and route where appropriate. |
| `/pages/enquire-about-funding` | Enquire About Funding | `page.enquire-about-funding` | Yes | Enquire About Business Funding \| Remote Business Partner | Submit a business funding enquiry with your contact and company details so Remote Business Partner can review the request and advise the next appropriate pathway. |
| `/pages/business-insurance` | Business Insurance | `page.business-insurance` | Yes | Business Insurance Quote Pathways \| Remote Business Partner | Explore business insurance quote pathways through Remote Business Partner with provider referral boundaries and Get A Quote links. |
| `/pages/business-nbn-plans` | Business NBN Plans | `page.business-nbn-plans` | Yes | Business NBN Plan Options \| Remote Business Partner | Review Business NBN plan pathways after address entry, with final serviceability, technology type and activation details confirmed before activation. |
| `/pages/business-nbn-support` | Business NBN Support | `page.business-nbn-support` | Yes | Business NBN Support \| Remote Business Partner | Get Business NBN support guidance with clear serviceability, technology, speed and activation confirmation boundaries. |
| `/pages/marketplace-terms` | Marketplace Terms | `page.marketplace-terms` | Yes | Marketplace Terms \| Remote Business Partner | Review marketplace participation, partner offer and eligibility terms for Remote Business Partner marketplace pathways. |
| `/pages/help-center` | Help Centre | `page.help-center` | Yes | Help Centre \| Remote Business Partner | Find help for orders, Core Services, Business NBN support, membership, marketplace pathways and contacting Remote Business Partner. |
| `/pages/managed-services` | Managed Services | `page.managed-services` | Yes if route is exposed | Managed Services \| Remote Business Partner | Request managed services support for recurring operational work with clear support scope and exclusions. |
| `/pages/property-field-services` | Property Field Services | `page.property-field-services` | Yes if route is exposed | Property Field Services \| Remote Business Partner | Request property field support with clear location, scope and regulated advice boundaries. |

## Help Centre Canonical Route

Use `/pages/help-center` as the canonical working route because the previous investigation found it already had the Help Center template.

Admin actions:

1. Set the visible page title to `Help Centre`.
2. Assign `/pages/help-center` to `page.help-center`.
3. Create a URL redirect from `/pages/help-centre` to `/pages/help-center`.
4. Update header and footer labels to `Help Centre` and link to `/pages/help-center`.
5. Do not expose both spellings in menus.

The theme includes a safe `page.help-centre` fallback template only to prevent wrong/default content if the alternate page remains accessible before the redirect is created.

## Navigation Cleanup

Update `new-header-menu`:

- Keep top-level links: Advisory, Consulting, Implementation, Operations Hub, Essentials, Membership, Support.
- Membership submenu: keep `Overview -> /pages/membership`; hide Membership Options, Member Benefits, Frequently Asked Questions and Sign Up until pricing, inclusions and signup flow are ready.
- Hide Business Finance and Business Insurance links until the pages above are published and assigned to the correct templates.
- Hide Offers and Offer Categories if empty states are not approved.
- Do not expose Buyer Guide, Seller Guide, Asset Sales Process, Due Diligence Packs or Confidentiality Process unless those pages are built and approved.

Update `footer-menu`:

- Keep production-ready links only: Contact, Help Centre, Advisory, Consulting, Implementation, Operations Hub, Essentials, safe Membership overview, Marketplace and legal policies.
- Remove Top Offers, Exclusive Offers, Limited Time Offers, Offers By Categories, Buyer Guide, Seller Guide, Asset Sales Process, Due Diligence Packs, Confidentiality Process and any 404 route.

## Metaobjects

Partner offer definitions to inspect:

- `partner`
- `offer_category`
- `partner_offer`

For every public offer, confirm title, handle, active/public status, active/public partner, CTA URL, category reference, eligibility notes and terms/disclaimer. Do not create fake offers.

Help Centre definitions to populate when approved content is available:

- `rbp_help_category`
- `rbp_help_article`
- `rbp_help_faq`

Minimum help categories: Account access, Orders and purchases, Business Health Check, Core Services, Business NBN support, Membership, Marketplace and partner offers, Contact and support.

## Manual QA After Admin Updates

Test these routes on desktop and mobile:

- `/`
- `/pages/essentials`
- `/pages/business-finance`
- `/pages/enquire-about-funding`
- `/pages/business-insurance`
- `/pages/business-nbn`
- `/pages/business-nbn-plans`
- `/pages/business-nbn-support`
- `/pages/marketplace`
- `/pages/marketplace-terms`
- `/pages/help-center`
- `/pages/help-centre`
- `/pages/membership`
- `/pages/managed-services`
- `/pages/property-field-services`

Confirm no header, footer, homepage or marketplace link opens a 404.
