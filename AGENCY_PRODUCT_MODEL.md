# Exedra Theme Core — Agency Product Model

## Objective
Turn Exedra Theme Core into a mature agency product by defining implementation layers, vertical fit, and packaging logic.

## Product layers
### 1. Core layer
Always recommended in almost every implementation.

Includes:
- announcement-bar
- header
- footer
- hero
- image-with-text
- trust-bar
- featured-collections-editorial
- featured-collection
- featured-products
- testimonials
- faq
- main-collection-product-grid
- product-main
- product-tabs
- cart-drawer

### 2. Optional layer
Useful depending on brand type, campaign style or content strategy.

Includes:
- rich-text
- multicolumn
- custom-content
- custom-liquid
- image-gallery
- image-comparison
- featured-product
- collection-showcase
- products-showcase
- marquee
- sticky-atc
- video-with-text
- lookbook-cards

### 3. Premium layer
Higher-complexity or more brand-led modules that should be used intentionally.

Includes:
- slideshow
- video-hero
- image-with-text-overlay
- highlight-text-with-image
- lookbook-banner
- related-products
- promo-popup
- search-drawer

### 4. Shell layer
Do not lead implementations until hardened.

Includes:
- pickup-availability
- product-bundles-shell
- lookbook-slider
- search-drawer predictive placeholder behavior
- promo-popup logic layer

## Vertical mapping
### Beauty
#### Core-recommended
- hero
- image-with-text
- featured-collection
- featured-products
- testimonials
- faq
- product-main
- product-tabs
- cart-drawer

#### Optional-recommended
- image-comparison
- image-gallery
- rich-text
- multicolumn
- featured-product
- sticky-atc
- marquee
- video-with-text

#### Premium-recommended
- video-hero
- image-with-text-overlay
- slideshow
- lookbook-banner

### Fashion
#### Core-recommended
- hero
- featured-collections-editorial
- featured-collection
- featured-products
- testimonials
- faq
- main-collection-product-grid
- product-main
- product-tabs

#### Optional-recommended
- lookbook-cards
- image-gallery
- highlight-text-with-image
- collection-showcase
- products-showcase
- sticky-atc

#### Premium-recommended
- lookbook-banner
- slideshow
- image-with-text-overlay
- video-hero

### Tech / gadget retail
#### Core-recommended
- hero
- image-with-text
- featured-product
- featured-products
- faq
- main-collection-product-grid
- product-main
- product-tabs
- cart-drawer

#### Optional-recommended
- multicolumn
- rich-text
- products-showcase
- collection-showcase
- sticky-atc
- marquee
- video-with-text

#### Premium-recommended
- slideshow
- promo-popup
- search-drawer

## Implementation package model
### Package A — Core Launch
For brands needing a clean, professional ecommerce presence fast.
- Core layer only
- Minimal optional modules
- Best for first builds and lower-risk projects

### Package B — Growth Launch
For brands that need stronger storytelling and merchandising.
- Core layer
- Select optional modules
- Motion system enabled strategically
- Best for beauty and fashion clients

### Package C — Premium Commerce
For brands that want strong visual impact and editorial control.
- Core layer
- Optional layer
- Select premium modules
- Used only after stronger hardening and design direction

## Product maturity rule
A client implementation should never start by selecting sections at random.
Use package logic first, then vertical logic, then campaign-specific additions.

## Immediate next requirement for maturity
- Create per-vertical starter presets
- Define demo content philosophy
- Define which defaults are neutral vs vertical-specific
