# Browser-storage migration map — 2 August 2026

## Purpose

This checkpoint maps production browser-storage access to an explicit migration, cache, local-only or retirement decision before any Saved Data cutover.

The executable inventory scans only production entry points under `index.html`, `sitewide/` and `systems/`. Tests, prototypes, documentation, dependencies and generated output are excluded. Every discovered key/expression must be covered by `sitewide/migration/browser_storage_map.json`; a newly introduced storage group makes the contract fail until it receives a reviewed decision.

SQLite remains authoritative. This map does not enable JSON writes or import any browser data.

## Authority rules

1. A username, email or display name found inside a legacy key is lookup context only. It must never become a filesystem path.
2. Guest/local data may be offered for explicit import, but it must never overwrite an authenticated resource automatically.
3. Rebuildable caches and UI state are not migrated.
4. A local cache beside an existing server record is not promoted above the server authority.
5. Conflicting duplicate or legacy keys are reported; the importer must not silently choose one.
6. Data with no approved destination remains local and blocks deletion until a schema is separately approved.

## Migrate into approved resources

### Fitness

- `__bl_fitness_body_profile_v1__::{user}` → validated `fitness.json.bodyProfile`.
- `__bl_fitness_workout_progress_v2__::{planId}::{sessionIndex}::{user}` → `fitness.json.activeWorkout` only when it matches the authoritative plan, next session and expected step count.
- `__bl_fitness_plan_cache_v1__::{user}` is a rebuildable server cache and is not migrated.
- `__bl_fitness_plan_v1__::{user}` is the file-protocol development fallback; production plans already come from the Fitness API and SQLite, so it is excluded from production migration.

The body profile and active-workout targets still require final schema validation before cutover. Stale or mismatched workout progress must be reported rather than attached to the wrong plan.

### Voice

- `__baseline_voice_settings_v1__` maps to optional `Users/{userId}/voice.json`.
- The authenticated server `voice_settings` row takes precedence.
- Guest settings remain local unless the user explicitly chooses to adopt them.

### Individual game saves

The following map to one protected file per played game:

- Badminton Focused;
- Darts Focused v1/v2;
- Track Coin;
- Baseline Realm Meridian Grove exploration;
- Baseline Realm Tactical Operations v1/v2;
- each recognised game inside the Games Hub guest-profile bundle.

Darts currently writes both its current and compatibility keys. Tactical Operations can also exist in the Realm inventory service and local fallback. These sources must be normalised and compared; divergence is a blocking report, not an invitation to choose the newest-looking value without validation.

### Shared Badminton

`__baseline_badminton_session_v4__` is a browser resilience copy beside the protected server state. It maps to `Shared/Badminton/badminton.json` only through the Badminton administrator path and revision/conflict checks. Legacy v3 is normalised and compared first. A local browser copy may not replace a newer shared revision.

## Deliberately not migrated

- `__bl_games_auto_next_v1__`, `baselineGamesHubView` and `baselineIndexActiveView` are device/session interface preferences.
- `bl_recipe_index_{app}` is rebuilt from recipe-page titles and is not the favourites authority.
- outer-embed snapshots are deletion-only compatibility state.
- generic storage-wrapper expressions are implementation details already accounted for by their concrete keys.
- `__bl_local_users_v1__` and `__bl_local_session_v1__` are file-preview fallbacks. Browser-stored account/password or session material must never be promoted into production authentication.

## Preserved locally because no approved resource exists

### Food diet log

`__baseline_food_diet_log_v1__` contains dated food entries, daily notes, recipes and health-profile fields. The approved Saved Data tree has no diet-log resource. It must remain local and must not be forced into `fitness.json` merely because some fields are health-related.

### Natural Skincare slider positions

`__baseline_slider_state__::{user}::{recipe-or-variant}` stores authenticated recipe-controller choices. The approved tree has no Natural Skincare settings resource. These values remain local until a protected schema and migration decision are separately approved.

These two entries are explicit blockers against deleting all legacy localStorage after the main migration.

## Verification command

```bash
npm run test:browser-storage
```

The contract:

- scans production sources deterministically;
- emits the discovered inventory for review;
- rejects an unmapped storage group;
- rejects duplicate mapping ownership;
- requires every rule to state its classification, decision and cutover rule;
- ensures the known account-preview keys are explicitly excluded;
- ensures the diet log and skincare sliders remain protected from accidental retirement.

## Still required before cutover

- add exact JSON schema fields for Fitness body profile and resumable active-workout state;
- decide whether diet logs and skincare preferences receive dedicated resources;
- implement explicit guest-to-account import screens and conflict decisions;
- compare local game copies with current authenticated server profiles using copied data;
- test localStorage cleanup only after each migrated resource is verified;
- retain guest and local-only values that have no approved destination.
