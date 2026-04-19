# Exedra Theme Core — Stable Release Plan V1

## Objective
Define the final path from current advanced build state to a stable, mature agency product release.

## Current maturity estimate
- Product maturity: ~80–88%
- Main gap is no longer feature breadth
- Main gap is closing, validating, and stabilizing

## Final path to stable release
### Phase 1 — Final hardening
#### Goals
- finish snippet reuse in remaining repeated modules
- normalize residual naming inconsistencies
- review shell-only modules and keep them clearly bounded
- reduce editor friction further

#### Exit criteria
- no major repeated markup families left unreviewed
- key section families internally consistent
- starter pack feels coherent in editor

### Phase 2 — Pilot implementation on Miis
#### Goals
- install the product model in a real beauty environment
- test core + optional package decisions
- identify real friction in section behavior, defaults and data assumptions

#### Exit criteria
- home, collection and PDP operate cleanly
- no major structural blockers appear
- changes required after implementation are understood and documented

### Phase 3 — Post-pilot corrections
#### Goals
- fix friction detected in real use
- reclassify any modules if needed
- harden or demote any sections that do not perform like expected

#### Exit criteria
- pilot-informed adjustments merged
- product model still coherent after real use

### Phase 4 — Stable candidate release
#### Goals
- publish a clean internal stable version
- freeze core starter pack behavior
- mark shell modules explicitly as non-default
- define backlog for future V2 work without destabilizing V1

#### Exit criteria
- stable internal release tagged
- implementation guidance documented
- theme ready to be reused as agency product

## What should count as stable
A stable release must mean:
- reusable in real client work
- consistent in the editor
- not dependent on improvisation
- clear on what is core vs optional vs premium vs shell
- proven by at least one real implementation

## Recommended internal milestone naming
- M1 — Hardening Complete
- M2 — Miis Pilot Live
- M3 — Post-Pilot Corrections Complete
- M4 — Stable Candidate
- M5 — Agency Stable Release

## Immediate next action
Continue hardening until the remaining repeated section families are reviewed, then prepare Miis pilot setup as the first validation environment.
