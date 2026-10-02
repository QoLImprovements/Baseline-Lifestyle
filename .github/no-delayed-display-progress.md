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


## Checkpoint — resumed structural audit

- Commit `5bc3b4d12e35878eb41606652b738c1468056446`: fixed the static recipe hydration selector so it binds `input.multiplier-input`, not the wrapper that shares the same class.
- Commits `8ef41686ee52b24855f7c9a6527aaadcc951a8a8` and `521d3917b6f6461075c0888ba2e4fc7e16258f44`: removed a Standard-View/hidden-class contradiction, authored slider breakdown hidden state, and made semantic emphasis available before JavaScript.
- Commit `0b372a94d4e28135f55165dafbd185f60356dc1d`: pre-authored recipe shells no longer run the shared post-load structural grouping/emphasis rewrite.
- Structural audit: all 10 canonical Skincare recipe cards currently contain exactly one static control shell, one metadata row, one recipe tab set, one Details block, and one Adjustments row. No Standard View element is still authored with `recipe-view-hidden`.
- Removed repair script references remain absent: finaliser, slider cleanup, entry guard and old recipe bootstrap.
- Reduced `skincare-recipe-ux-20260906.js` contains no `setTimeout`, `requestAnimationFrame`, `createElement`, or `MutationObserver`.

### Failure classification

- Inline parser initially reported "Unexpected token :" for script block 5. Inspection showed block 5 is `type="application/json"` authoring data, not executable JavaScript. Classification: validation-script false positive, not a site syntax failure.

## Checkpoint — targeted static validation passed

Latest static validation result: **21 / 21 checks passed**.

Validated:
- 10 canonical Skincare recipe cards.
- 10 static controls, tab sets and Details blocks.
- Standard / Details / Guidance initial visibility state.
- No obsolete recipe repair/bootstrap runtime references.
- No delayed DOM-construction primitives in the reduced Skincare recipe UX module.
- Static multiplier input hydration selector.
- Static slider layout, save controls and hidden breakdown state.
- Static semantic-emphasis CSS.
- External recipe runtime scripts parse.
- Executable inline Skincare scripts parse.
- Updated structural tests now assert the authored-shell architecture.

Additional fix before this checkpoint:
- Commit `e4d4ccd4adf7f5fed46f1901b0210f2c0a505f8c` authored `recipe-view-hidden` on the nine Details `(View)` links so DOM state is final as well as visual state.

Failure-log addition:
- Checkpoint-write orchestration retry failed before repository mutation because unescaped Markdown backticks terminated the local JavaScript template literal. Classification: assistant/tool-call construction error; no GitHub or code state affected.

Next action: open a PR to trigger the repository's real GitHub Actions workflows. Any CI failure must be logged with workflow/job/step and classified before another fix.

## Checkpoint — first real CI failure classified

Draft PR: #180

My Routine coherence / structure run produced four failures:
1. Stale test: expected Skincare to dynamically load `baseline-routine-coherence-v12.js`; Skincare now loads it statically in canonical HTML.
2. Stale test: expected `Create Routine Group` text inside the group renderer; that visible shell now belongs to canonical HTML.
3. Process artifact placement: this checkpoint file was initially created in forbidden root `/docs`. It is moved under `.github/` in this checkpoint.
4. Real content defect: Lip Balm Method told the viewer to `Set the sliders...`, contrary to the intended interaction contract. The Method now tells the viewer only to weigh the amounts currently shown in the ingredient list.

Fix commits:
- `16cdd93faab5d83f1bd1409271778e1ab8509509` — align My Routine coherence tests with static Skincare ownership.
- `f61fea74767a63b022f13662eb59a27b41efc3a8` — remove slider instruction from Lip Balm Method.
