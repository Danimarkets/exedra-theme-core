# Exedra Theme Core — Demo Content Policy V1

## Objective
Define how demo content should be handled so the theme feels polished in the editor without becoming noisy, misleading, or overly tied to a single vertical.

## Core principle
Demo content should help users understand how a section works, not pretend to be final brand content.

## Content states
### 1. Neutral demo content
Use when a section should not ship empty because it benefits from immediate visual understanding.
Examples:
- hero
- trust-bar
- testimonials
- faq
- featured-collections-editorial
- featured-products
- slideshow

Characteristics:
- premium but generic tone
- no client-specific branding
- no legal or regulated claims
- short, explanatory, implementation-safe

### 2. Soft demo content
Use when a section should feel alive but not over-authored.
Examples:
- multicolumn
- custom-content
- image-gallery
- lookbook-cards
- products-showcase

Characteristics:
- minimal sample blocks
- low-risk wording
- enough to understand layout and rhythm

### 3. Empty-by-default sections
Use when fake content would create confusion or bad assumptions.
Examples:
- custom-liquid
- pickup-availability
- product-bundles-shell
- promo-popup logic-heavy variants
- search-drawer predictive behavior

Characteristics:
- section available
- shell visible if needed
- no misleading default claims

## Default copy rules
### Good demo copy should be
- short
- clear
- visually useful
- implementation-safe
- neutral across industries when possible

### Avoid demo copy that
- sounds like final brand messaging
- contains hard promises
- includes medical or cosmetic claims
- assumes store operations the merchant may not have
- uses fake urgency that could be misleading

## Demo block policy by family
### Editorial sections
Ship with example content.
Reason:
- helps visualize hierarchy and spacing quickly.

### Merchandising sections
Ship with fallback cards if no products/collections are assigned.
Reason:
- preserves layout understanding.

### Data / utility / integration shells
Do not fake deep functionality.
Reason:
- better to be clearly incomplete than misleading.

## Visual media policy
### Use placeholders when
- a section needs immediate structure
- no meaningful default image exists

### Use real demo imagery only later if
- a vertical preset library is built intentionally
- the image system is clearly separated from neutral core defaults

## Recommended starter behavior
- Ship neutral demo content in core-ready sections
- Ship minimal sample blocks in optional sections
- Ship empty or clearly shell-labeled content in shell-only sections

## Next step
- Define per-section demo intensity
- Mark which sections should keep 1, 2, 3, or 4 starter blocks by default
