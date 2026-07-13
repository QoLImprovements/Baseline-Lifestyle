# Baseline Fitness production crash repair

## Confirmed failure chain

The live My Plan path had three simultaneous owners:

1. `baseline-shared.js` attached a sitewide handler to every `.tab[data-target]` button.
2. `baseline-fitness-app.js` attached a second handler to the same buttons and maintained a second route/history model.
3. Fitness subscribed to both the sitewide `baseline:auth` DOM event and `BASELINE_auth.onChange`, although the sitewide auth emitter fires both for the same update.

A live authenticated plan therefore caused duplicate plan requests and duplicate complete renders. `currentWorkout()` also generated Completed and Future DOM on every render even while those panels were hidden. A plan may contain 120 sessions, so opening My Plan could expose thousands of elements generated more than once. Localhost did not reproduce this because it did not have the same live auth/session response.

## Repair

- Fitness clones its tab controls once during initialisation, removing the previously attached sitewide handlers from those specific elements.
- Fitness then owns one canonical route handler and exposes it through `BASELINE_selectTab` for shared callers.
- Fitness uses only `BASELINE_auth.onChange` and ignores repeated identical auth snapshots.
- Plan data is requested only when My Plan or Achievements is opened.
- Only one plan request may be active at a time; stale responses are rejected and requests have a 12-second abort timeout.
- Current workout renders only Current.
- Completed, Future and preview sessions render only when requested, 12 at a time.
- Server session arrays are bounded to the normalised plan length.
- The Binaural SVG path is statically forced to white by one stylesheet rule.

## Verification

- Node syntax check: passed.
- Progression and side-plank unit checks: passed.
- Browser production-path check with a 120-session plan: passed.
- 25 My Plan/System switching cycles: one plan request.
- 20 repeated identical auth emissions: no additional request.
- Existing sitewide tab listener after Fitness ownership transfer: zero calls.
- Current DOM: 287 elements.
- Future view after first page: 492 elements and 12 session cards.
- Left/right side-plank steps: present.
- Computed Binaural path fill: `rgb(255, 255, 255)`.
- Uncaught browser errors: none.
