# Exedra Theme Core — Snippet Extraction Plan

## Goal
Identify repeated markup patterns that should be converted into reusable snippet families.

## Priority snippet families
### 1. Section wrapper
Current issue:
- Many sections repeat the same `page-width`, card, spacing, and wrapper patterns.

Recommended future snippets:
- `section-shell`
- `section-card-shell`
- `section-grid-shell`

### 2. Media blocks
Current issue:
- Image/video wrappers are repeated across many sections.

Recommended future snippets:
- `media-frame`
- `image-frame`
- `video-frame`
- `overlay-media-frame`

### 3. Editorial cards
Current issue:
- Editorial tiles, testimonial cards, content cards and showcase blocks overlap structurally.

Recommended future snippets:
- `editorial-card`
- `showcase-card`
- `testimonial-card`
- `lookbook-card`

### 4. Overlay content blocks
Current issue:
- Hero-like overlays and banner overlays repeat similar content layering.

Recommended future snippets:
- `overlay-content`
- `hero-content-stack`

### 5. CTA groups
Current issue:
- Many sections build button groups inline.

Recommended future snippets:
- `button-group`
- `primary-secondary-cta`

## Best immediate candidates for refactor
- featured-product
- slideshow
- video-hero
- image-with-text-overlay
- lookbook-banner
- custom-content
- collection-showcase
- products-showcase

## Refactor rule
Do not extract a snippet unless it will be reused in at least 3 meaningful contexts.
