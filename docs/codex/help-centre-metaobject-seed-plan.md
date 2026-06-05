# Help Centre Metaobject Seed Plan

Date: 2026-06-05

This plan is for Shopify Admin population of Help Centre records. Theme fallback content exists in `templates/page.help-center.json`, but these Admin records have not been created by this repository change.

## Canonical route

- Visible label: Help Centre
- Canonical URL: `/pages/help-center`
- Alternate spelling: `/pages/help-centre` should redirect to `/pages/help-center` in Shopify Admin.

## Required metaobject definitions

Use existing definitions if present. If missing, create definitions with equivalent fields.

### `rbp_help_category`

Required fields:

- `title`: single-line text
- `handle`: single-line text or handle
- `short_description`: multi-line text
- `sort_order`: integer
- `active_public`: boolean

### `rbp_help_article`

Required fields:

- `title`: single-line text
- `handle`: single-line text or handle
- `category`: metaobject reference to `rbp_help_category`
- `summary`: multi-line text
- `body`: rich text
- `sort_order`: integer
- `active_public`: boolean

### `rbp_help_faq`

Required fields:

- `question`: single-line text
- `answer`: rich text
- `category`: optional metaobject reference to `rbp_help_category`
- `sort_order`: integer
- `active_public`: boolean

## Starter categories

Create these categories with `active_public = true` when approved:

| Sort | Title | Handle | Short description |
| ---: | --- | --- | --- |
| 10 | Account access | `account-access` | Help with customer account access and access issues. |
| 20 | Orders and purchases | `orders-and-purchases` | What customers should expect after checkout. |
| 30 | Business Health Check | `business-health-check` | What context helps RBP review a Business Health Check request. |
| 40 | Core Services | `core-services` | Guidance for choosing Business Health Check, Business Advisor, Decision Desk or The Fixer. |
| 50 | Business NBN support | `business-nbn-support` | What to provide before RBP reviews a Business NBN request. |
| 60 | Membership | `membership` | How membership enquiries are currently routed. |
| 70 | Marketplace and partner offers | `marketplace-and-partner-offers` | How marketplace and partner pathways are handled. |
| 80 | Contact and support | `contact-and-support` | What to include in a support request. |

## Starter articles

Create one article per category first. Use this copy as safe starter content.

### Account access

Title: How to access your account

Summary: Learn how customers access their account area and what to do if account access is unavailable.

Body: Customers can access their account using the account link in the store header. If you cannot access your account, contact RBP with the email address used for your order or enquiry. Do not send passwords or verification codes through the contact form.

### Orders and purchases

Title: What happens after checkout

Summary: Learn what to expect after purchasing a resource, service or toolkit.

Body: After checkout, your order confirmation will be sent to the email used at checkout. Some products are self-serve, while others require intake, manual review or support before delivery. Check the product page for fulfilment notes.

### Business Health Check

Title: What to include before requesting a Business Health Check

Summary: Learn what context helps RBP review your request.

Body: Include your business name, the issue or decision you are reviewing, timing pressure, relevant documents if requested, and the outcome you are trying to clarify. Do not provide sensitive passwords, financial account access, or confidential legal material unless specifically requested through a secure process.

### Core Services

Title: Choosing the right Core Service

Summary: Learn the difference between Business Health Check, Business Advisor, Decision Desk and The Fixer.

Body: Use Business Health Check for broad review, Business Advisor for owner decision support, Decision Desk for structured decision review, and The Fixer for practical triage of a specific issue. RBP does not provide legal, tax, accounting, financial or insurance advice unless separately arranged with an appropriate provider.

### Business NBN support

Title: What to provide for Business NBN support

Summary: Learn what details help RBP understand your NBN support request.

Body: Include the business address, current provider if known, current connection status, activation timing, preferred contact method and any operational urgency. Address acceptance on the website does not confirm final serviceability, speed, network technology or activation.

### Membership

Title: How membership enquiries work

Summary: Learn how to ask about membership before applying or subscribing.

Body: Membership enquiries currently route through RBP support. Use the contact form to explain your business, what support you are looking for and any specific resources or services you want access to. RBP will respond with the appropriate next step.

### Marketplace and partner offers

Title: How partner pathways work

Summary: Learn how RBP marketplace and partner pathways are handled.

Body: Marketplace and partner pathways may depend on eligibility, provider terms, availability and approval. RBP may help route enquiries but does not guarantee partner acceptance, offer availability, funding, insurance, legal or commercial outcomes.

### Contact and support

Title: What to include in a support request

Summary: Learn what information helps RBP respond faster.

Body: Include your name, email, business name, product or service involved, order number if available, preferred contact method, timing/deadline and a short summary of the issue. Do not send passwords, card numbers, tax file numbers or other highly sensitive information.

## Starter FAQs

Create these as `rbp_help_faq` records once approved:

| Sort | Question | Answer |
| ---: | --- | --- |
| 10 | What should I include in a support request? | Include your name, email, business name, product or service involved, order number if available, preferred contact method, timing/deadline and a short summary of the issue. Do not send passwords, card numbers, tax file numbers or other highly sensitive information. |
| 20 | Are marketplace offers guaranteed? | No. Partner pathways may depend on eligibility, provider terms, availability and approval. RBP does not guarantee partner acceptance, offer availability, funding, insurance, legal or commercial outcomes. |
| 30 | Is Business NBN address acceptance final serviceability approval? | No. Address acceptance starts the review pathway only. Final serviceability, technology type, speed, pricing, setup fees and activation timing must be confirmed before relying on a plan. |

## Manual Admin steps

1. In Shopify Admin, open Content > Metaobjects.
2. Confirm the three definitions exist with fields matching the plan above.
3. Create categories first, then articles and FAQs.
4. Set only approved records to active/public.
5. Verify `/pages/help-center` displays the intended content or fallback.
6. Keep `/pages/help-centre` redirected or visibly routed to `/pages/help-center`.

