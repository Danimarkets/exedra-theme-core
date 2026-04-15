# Exedra Theme Core — Naming Conventions V1

## Goal
Normalize schema labels and setting ids across sections to reduce drift and make the editor more consistent.

## Standard field names
### Headings
- Use `heading` for the main section title.
- Avoid mixing `title` and `heading` at section level unless the block is conceptually a card or slide.

### Support copy
- Use `text` for the main supporting rich text.
- Use `caption` only for media captions.
- Use `highlight` only for emphasized single-line statements.
- Use `eyebrow` only for small pre-heading labels.

### Actions
- Use `button_label` and `button_link` for the primary call to action.
- Use `secondary_label` and `secondary_link` only when a true second action exists.

### Media
- Use `image` for the main image.
- Use `before_image` / `after_image` only in comparison contexts.
- Use `poster_image` only when paired with video.
- Use `video` for native section video.
- Use `video_url` only when a separate video-type setting already requires that distinction.

### Cards / blocks
- Block-level titles should use `title` when they represent a card or content tile.
- Block-level descriptions should use `text`.
- Product fallbacks should use `fallback_title`.

## Preferred label language in editor
- Heading
- Text
- Button label
- Button link
- Image
- Caption
- Eyebrow
- Highlight

## Avoid
- Mixing `support text`, `intro text`, `custom text`, `description text` when plain `text` is enough.
- Using `title` for sections and `heading` for blocks without clear reason.
- Inconsistent button naming across similar sections.

## Next cleanup targets
- featured-product
- featured-collection
- featured-products
- collection-showcase
- products-showcase
- slideshow
- lookbook cards / slider
- custom-content
