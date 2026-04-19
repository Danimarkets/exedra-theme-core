# Exedra Theme Core — Starter Pack Hardening Checklist V1

## Objective
Define the final cleanup required before the current starter pack can be considered implementation-grade for a first real store.

## Scope
Applies to the current recommended starter pack:
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

## Final hardening checklist
### 1. Editor consistency
- section labels use normalized naming
- button fields behave consistently
- text fields use the same intent across similar sections
- motion settings are present only where useful

### 2. Demo behavior
- starter pack sections follow the editor defaults matrix
- no section feels noisy with demo content
- no section feels confusingly empty where explanation is needed

### 3. Snippet reuse
- repeated editorial patterns use shared snippets where appropriate
- repeated CTA patterns use button-group where appropriate
- repeated overlay patterns use overlay-content where appropriate
- repeated media wrappers use media-frame where appropriate

### 4. Store-readiness
- no shell-only section is accidentally required by the starter pack
- collection/product assumptions stay safe when data is missing
- fallback states remain visually understandable

### 5. Product surface clarity
- starter pack feels coherent as a package
- no premium-only section is silently acting like a default dependency
- no beta/shell section weakens the core implementation path

## Remaining focus before pilot recommendation becomes execution-ready
- final starter pack pass in home flow
- one more PDP/editor experience review
- confirm no residual naming drift in starter pack sections

## Success condition
The starter pack should feel like a deliberate product baseline, not just the least risky subset of a bigger system.
