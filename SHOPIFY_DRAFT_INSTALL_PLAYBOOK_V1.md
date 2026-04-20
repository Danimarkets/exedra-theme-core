# Exedra Theme Core — Shopify Draft Install Playbook V1

## Objective
Define exactly how to install and test Exedra Theme Core in Shopify as a draft theme.

## Installation scope
This playbook is for:
- draft upload only
- real theme testing
- no immediate publish

## Approved baseline for first draft test
Use only this package first:
- announcement-bar
- header
- hero
- image-with-text
- featured-collections-editorial
- featured-collection
- featured-products
- testimonials
- faq
- main-collection-product-grid
- product-main
- product-tabs
- cart-drawer
- footer

## Keep disabled for the first pass
- search-drawer
- promo-popup
- pickup-availability
- lookbook-slider
- product-bundles-shell
- related-products

## Shopify upload flow
1. Export or zip the current theme repository build.
2. In Shopify Admin go to Online Store > Themes.
3. Use Add theme / Import zip upload.
4. Upload as a draft theme.
5. Do not publish.
6. Open the theme editor and configure the starter pack only.

## First test checklist
### Home
- header works
- announcement bar renders correctly
- hero hierarchy feels correct
- image-with-text behaves correctly with and without image
- featured collection/product sections preserve layout when incomplete
- testimonials and FAQ feel coherent in editor

### Collection
- collection grid renders correctly
- cards preserve spacing and fallback structure

### Product
- main product section renders safely
- product tabs behave correctly
- sticky/cart experience is acceptable if enabled

### Cart
- cart drawer opens and closes correctly
- subtotal and line items remain legible

### Editor
- settings labels feel coherent
- no obvious naming drift in starter pack sections
- motion settings do not create confusion

## Success condition
The draft install is successful when the starter pack can be configured and reviewed without needing shell-only modules or structural rework.

## Next step after successful draft test
- wire store-specific content
- document friction
- apply post-test corrections
- only then consider publish readiness
