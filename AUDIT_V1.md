# Exedra Theme Core — Audit V1

## Objective
Stabilize the growing theme system after the rapid expansion phase.

## Current strengths
- Strong section library foundation
- Modular direction is clear
- Motion system exists and is reusable
- Conversion utilities are in place
- Home, collection, product, cart and search all have base coverage

## Main risks detected
### 1. Section growth outrunning architectural cleanup
Many sections were added quickly. This creates risk of:
- duplicated patterns
- inconsistent schema naming
- style overlap
- unclear presets hierarchy

### 2. Snippet underuse
Several sections still render their own markup patterns that should later be abstracted into reusable snippets.
Examples:
- media wrappers
- editorial cards
- overlay cards
- section header variants

### 3. Settings consistency drift
Some sections use slightly different wording for similar settings.
Need normalization for:
- heading/title language
- support text naming
- button naming
- intro/editorial text naming

### 4. Shells vs production-ready modules
A few modules are intentionally shells and must remain marked as such until hardened:
- predictive search placeholder
- product bundles shell
- lookbook slider shell
- pickup availability shell
- promo popup shell

### 5. Missing utility family still relevant
Still advisable later:
- breadcrumbs
- newsletter section
- contact form
- press logos / brand logos
- store locator shell
- quick view shell
- recently viewed foundation

## Immediate hardening priorities
### Priority A — Naming normalization
Normalize section setting ids and labels across the system.

### Priority B — Snippet extraction pass
Create reusable snippet families for:
- editorial card
- media card
- overlay content card
- utility section wrapper

### Priority C — Section registry
Create a canonical list of all sections grouped by family.

### Priority D — Production readiness labels
Mark which sections are:
- Core-ready
- Beta-ready
- Shell-only

### Priority E — Pilot prep
Define which subset of sections forms the recommended starter pack for first client implementation.

## Recommendation
Do not add large new families before doing this cleanup pass.
