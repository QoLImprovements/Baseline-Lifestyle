# Colour Sort Rules

Colour Sort is an independently owned puzzle game inside Baseline Recreation. It uses the general colour-sorting puzzle mechanic and original Baseline presentation; it must not copy third-party branding, artwork, characters, sounds or proprietary puzzle layouts.

## Canonical identity

- Public game ID and route: `colour-sort`
- Save profile app ID: `coloursort`
- Runtime folder: `systems/baseline-recreation/games/colour-sort/`

## Mechanics authority

`js/colour-sort-engine.mjs` owns bottle capacity, legal-pour rules, level data, solved-state detection and hint solving. UI code must use this authority rather than implementing competing rules.

Bottle arrays are stored bottom-to-top. Only the contiguous exposed run may move. A destination must have capacity and must either be empty or expose the same colour. A level is solved when every non-empty bottle is full and contains one colour only.

All authored starting layouts must pass `validateLevel` and remain solvable under the engine's legal moves. Hints may use the engine solver but should reveal one next move rather than the complete solution.

## Hub integration

Colour Sort uses the shared Recreation shell, account/temporary storage authority, progression presentation and accessibility conventions. Colours are paired with distinct symbols so the puzzle does not rely on hue alone. Game-specific CSS must remain namespaced to `.colour-sort-panel`.

Profile data may preserve the active puzzle, completed levels, best move counts and XP progression. Undo history is session-local and is cleared after a solved puzzle so persistent rewards cannot be repeatedly reversed and re-awarded.
