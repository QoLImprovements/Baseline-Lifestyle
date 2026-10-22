# Block Grid Rules

Block Grid is an independently owned puzzle game inside Baseline Recreation. It is inspired by the general block-placement puzzle genre; it must not copy third-party branding, artwork, sounds or proprietary level layouts.

## Canonical identity

- Public game ID and route: `block-grid`
- Save profile app ID: `blockgrid`
- Runtime folder: `systems/baseline-recreation/games/block-grid/`

## Mechanics authority

`js/block-grid-engine.mjs` owns the board rules, piece definitions, placement validation, line clearing, scoring, legal-move detection and tray generation. UI code must call the engine instead of creating a second implementation.

The board is 8 × 8. A supplied piece keeps its orientation. A placement is legal only when every cell is inside the board and currently empty. Full rows and columns clear simultaneously. A three-piece tray is replenished after all three pieces have been used. If the current tray has no legal placement, the run ends.

The tray generator may vary pieces, but it must preserve the engine's fairness rule: when the selected mode still contains at least one piece that fits the current board, a freshly generated tray contains at least one fitting piece.

## Hub integration

Block Grid uses the shared Recreation shell, account/temporary storage authority, game overview patterns and accessibility conventions. Game-specific CSS must remain namespaced to `.block-grid-panel` and may not repaint another game.

Profile data may preserve the current board and tray so an authenticated player can continue a run. The public profile may track XP, profile level, best score, games started, lines cleared and pieces placed.
