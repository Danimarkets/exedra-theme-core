# Exedra Theme Core — Preset Strategy V1

## Objective
Define how default section presets and demo content should behave across verticals so the theme can be implemented faster and with less improvisation.

## Preset philosophy
Presets should exist in three levels:

### 1. Neutral defaults
Used in the core codebase as the safest fallback.
Characteristics:
- generic but premium tone
- no industry-specific claims
- no sensitive legal promises
- no beauty/fashion/tech assumptions unless the section inherently implies them

### 2. Vertical starter presets
Prepared implementation sets for the first supported verticals.
- Beauty Starter
- Fashion Starter
- Tech Starter

### 3. Campaign presets
Used later for specific intents.
Examples:
- Launch campaign
- Bestseller campaign
- Editorial campaign
- Sale / promotion campaign

## Neutral default content rules
### Use
- modular commerce language
- premium but non-branded wording
- short support copy
- generic CTA language such as “Explorar”, “Ver más”, “Descubrir”

### Avoid
- hard promises like “entrega en 24 horas” unless configurable
- industry-specific medical/cosmetic claims
- emotional language tied to one vertical only
- heavy English if the base implementation audience is mostly Spanish-speaking

## Vertical starter preset logic
### Beauty Starter
Recommended section order:
1. announcement-bar
2. hero
3. image-with-text
4. image-comparison
5. featured-collection
6. featured-products
7. testimonials
8. faq

Default language style:
- benefit-led
- visual transformation oriented
- credibility and routine-focused

### Fashion Starter
Recommended section order:
1. announcement-bar
2. hero
3. featured-collections-editorial
4. lookbook-cards
5. featured-collection
6. products-showcase
7. testimonials
8. faq

Default language style:
- aspirational
- visual and editorial
- style and identity oriented

### Tech Starter
Recommended section order:
1. announcement-bar
2. hero
3. image-with-text
4. featured-product
5. multicolumn
6. featured-products
7. faq
8. testimonials

Default language style:
- utility-led
- clarity and specs oriented
- lower editorial density

## Preset content strategy by section family
### Hero
Neutral:
- structural, broad, premium
Beauty:
- results / routine / confidence
Fashion:
- collection / drop / identity
Tech:
- utility / setup / performance

### Featured collection / products
Neutral:
- generic merchandising language
Beauty:
- routines / essentials / bestsellers
Fashion:
- drops / collections / looks
Tech:
- top picks / recommended gear / essentials

### FAQ
Neutral:
- shipping / support / product clarity
Beauty:
- use / ingredients / shipping
Fashion:
- sizing / care / exchanges
Tech:
- compatibility / warranty / shipping

## Immediate implementation rule
Core files should keep neutral defaults.
Vertical starter presets should be documented and later represented as ready-to-apply JSON variants or implementation checklists.

## Next maturity step
- Create default copy system guidance
- Define demo image philosophy
- Define which sections should ship with example blocks by default and which should ship empty
