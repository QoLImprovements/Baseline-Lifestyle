# Darts Focused Rules

Darts Focused is a Recreation subsystem containing ten distinct website-based training games for checkout calculation, route recovery, visual targeting, memory, board geography, routines and decision control.

## Preservation rules

1. The public subsystem remains `darts-focused` inside the Recreation.
2. The ten game identities remain distinct and use the canonical IDs exported by the Darts engine.
3. Difficulty tiers remain Foundation, Match and Pressure, with unlock levels defined by the content authority.
4. Profile migration and storage compatibility must preserve the existing `__bl_darts_focused_v1__` primary key and `__bl_darts_focused_v2__` legacy mirror.
5. Delayed callbacks and Auto-Next must be scoped to the selected Darts game session and may not mutate a different game after switching.
6. Hidden/background page time must not consume usable Darts timing windows or response-time measurement.
7. Checkout decisions must be judged by legal double-out arithmetic within the available dart count, not by equality with one preferred route string.
8. A listed scenario route remains a recommended/explained route, but another selectable route is correct when the engine validates it as a legal checkout from the same remaining score.
9. Darts progression and Baseline Realm contribution formulas remain owned by the engine; UI refactors must not silently alter XP, Bank, levels, skill points, clean streaks or Realm multipliers.
10. Structural changes must preserve the existing scenario prompts, target pools, routine sequences and decision-training content unless content is intentionally revised.

## Module ownership

- `darts-focused-engine.mjs` owns target normalisation, dartboard arithmetic, checkout validation/search, profile semantics, result recording and Baseline Realm contribution.
- `darts-focused-content.js` owns game metadata, tiers, checkout/recovery scenarios, target pools, routines and decision-training question banks.
- `darts-focused-timing.js` owns delayed-work lifecycle, selected-game session binding, hidden-tab pause/resume and Auto-Next timing.
- `darts-focused-storage.js` owns browser persistence and legacy-key migration.
- `darts-focused-board.js` owns dartboard geometry and reusable board/scenario SVG markup.
- `darts-focused-ui.js` owns generic Recreation shell markup and reusable choice/feedback controls.
- `darts-focused-decision.js` owns Decision Training category metadata, tier-sized question pools, category/pace presentation helpers and specialist Decision Training rendering.
- `darts-focused-rounds.js` owns tier filtering, recent-scenario avoidance, target-pool selection, sequence generation and board-geography prompt preparation.
- `darts-focused.js` remains the controller for drill state transitions, game-specific rendering and interaction routing.

Do not reintroduce parallel implementations of these responsibilities into the controller. Extend the owning module instead.


## Additional extracted authorities

- `darts-focused-renderers.js` owns game-specific presentation.
- `darts-focused-progress.js` owns progress, tier and active-control presentation.
- `darts-focused-actions.js` owns non-Decision drill transitions and answer handling.
- `darts-focused-decision-actions.js` owns Decision Training series, answer and pace transitions.
- `darts-focused-state.js` owns canonical initial state shapes for each Darts game.
- `darts-focused-shell.js` owns Recreation mounting, modal/how-to, overview insertion, panel open/close and fullscreen shell behavior.
- `darts-focused-events.js` owns click, change and keyboard dispatch.

The remaining `darts-focused.js` file is the coordinator that connects these authorities and exposes the subsystem to the Recreation.
