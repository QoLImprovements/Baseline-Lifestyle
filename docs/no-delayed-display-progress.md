# No Delayed Display — Working Checkpoint

Branch: `no-delayed-display-batch1-20260929`
Base: `main`
Purpose: preserve a diagnostic trail across connection/tool interruptions.

## Current architecture decisions

- Visible first-paint UI is authored in HTML/CSS.
- JavaScript binds behaviour, state and dynamic data; it should not create a second visible shell.
- Skincare Routine: HTML owns the shell; `skincare-routine-sitewide-v5.js` owns the calendar. The older duplicate calendar renderer was removed from `skincare-routine.js`.
- Skincare recipes: canonical recipe cards, recipe chrome, slider save/reset controls, slider layout, Details content and view-group markers are authored in HTML.
- Obsolete post-load recipe repair layers removed: `skincare-recipe-finalise-20260906.js`, `skincare-slider-cleanup-20260906.js`, `skincare-recipe-entry-guard-20260906.js`.
- Shared recipe JS now has hydration paths for pre-authored number steppers, scaling controls, compact controls and universal recipe chrome.
- Massage library/planner content is static; its default theme options were aligned with the actual default state.
- Food Diet Log keeps only genuinely dynamic data (library-derived categories and live logged-entry counts) dynamic.
- Charity Cashing Up shell is static; JS updates values only.

## Last completed checkpoint

Skincare recipe content view groups were moved into canonical HTML so Recipe/Details/Guidance state no longer depends on a post-load grouping pass.

Last known change before this checkpoint file:
`cb7044aa9d59a1357d325ba91be1d728f611becf` — Author skincare recipe view groups for first paint.

## Validation sequence from here

1. Structural assertions for Skincare recipes and Routine.
2. Update stale tests that still assert the old JS-generated architecture.
3. Run targeted test workflow / inspect failures.
4. Fix only the failing subsystem.
5. Re-run targeted checks.
6. Run the broader suite only after targeted checks are clean.
7. Do not merge until refresh / Back / Forward / direct-route / blocked-JS first-paint checks are clean.

## Failure log

- Checkpoint-write orchestration attempt: failed before repository mutation because the local tool script referenced an undeclared `path` variable. Classification: assistant/tool-call construction error; no code or GitHub state affected.
