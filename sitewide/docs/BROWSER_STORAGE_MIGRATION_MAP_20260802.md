# Browser-storage migration map — current cutover mapping

Originally opened: 2 August 2026  
Updated: 18 September 2026

## Purpose

This document summarises the production browser-storage decisions that must hold through the Saved Data cutover.

The executable contract is `sitewide/migration/browser_storage_map.json`. When this prose and the executable contract differ, the executable contract and current implementation must be treated as the source to investigate before deployment.

SQLite remains the controlled migration source for legacy application records where applicable. The target application-data authority is the protected `Saved Data` tree. Authentication identity, password hashes, external provider subjects, recovery material and authentication secrets remain in protected SQLite.

## Authority rules

1. Usernames, emails and display names found in legacy keys are lookup context only and never filesystem identities.
2. A successful authenticated Saved Data read, including an empty resource, is authoritative.
3. Guest or legacy local data cannot overwrite authenticated data automatically.
4. Account content may enter Saved Data only through the resource-specific explicit import path.
5. Rebuildable caches and interface/session state are not migrated as account persistence.
6. Conflicting duplicate, divergent or stale local copies are preserved for review; the importer never silently chooses or blind-retries.
7. Legacy candidates are account-bound where required so an account switch cannot expose the same candidate to another account.
8. Legacy physical storage is deleted only after the resource-specific verified import or explicit keep-account decision.
9. Baseline Realm modes that belong to the same canonical game resource merge into one physical `baseline-realm.json` save.
10. Shared Badminton maps only to `Shared/Badminton/badminton.json` and never into a user game save.
11. Badminton Focused is an individual user game and never Shared Badminton state.

## Canonical game filenames

| Production identifier | Saved file |
|---|---|
| `ninja` / `baseline-realm` | `baseline-realm.json` |
| `pairs` | `pairs.json` |
| `detectword` / `detect-word` | `detect-word.json` |
| `make24` / `make-24` | `make-24.json` |
| `trackcoin` / `track-coin` | `track-coin.json` |
| `ruleshift` / `rule-shift` | `rule-shift.json` |
| `dartsfocused` / `darts-focused` | `darts-focused.json` |
| `meridiangrove` / `meridian-grove` | `meridian-grove.json` |
| `badmintonfocused` / `badminton-focused` | `badminton-focused.json` |

The Recreation guest-profile bundle is split by recognised game ID through this map. A physical file is created only for recognised saveable progress.

## Fitness

Authenticated Fitness account data is server authoritative.

- `__bl_fitness_body_profile_v1__::{user}` → `Users/{paddedUserId}/fitness.json#profile` after validation and an explicit import decision.
- `__bl_fitness_workout_progress_v2__::{planId}::{sessionIndex}::{user}` → `fitness.json#activeWorkout` only after explicit import and validation against the authoritative plan/current session.
- exercise success/failure history → `fitness.json#progressionHistory` through explicit import.
- Fitness Routine v1/v2 browser content → `Users/{paddedUserId}/fitness-routine.json` through the dedicated bridge and explicit import path.
- the server-plan cache is rebuildable and not persistence authority.
- file-protocol development plan state is excluded from production migration.
- routine display/start-day and navigation preferences remain device/session UI state where classified that way.

A pre-existing browser copy must be quarantined before the authenticated application treats the server result as authoritative. Stale, invalid or conflicting progress is preserved rather than silently attached to account state.

## Voice

`Users/{paddedUserId}/voice.json` is authoritative for an authenticated account, including an empty/default resource.

`__baseline_voice_settings_v1__` remains guest/device preference state only. It is not automatically promoted to an authenticated account and is not authenticated save fallback.

## Food

`__baseline_food_diet_log_v1__` is an explicit migration candidate for:

`Users/{paddedUserId}/food.json`

The complete Diet Log document is preserved for review after the authenticated server read. A successful empty server resource remains empty unless the signed-in user deliberately chooses **Import browser Diet Log**.

The unresolved candidate is bound to the first authenticated account that reviews it. The legacy source is removed only after verified server acceptance or an explicit decision to keep the account copy. Divergent/stale saves are retained as conflict recovery state and are never automatically retried with a newly fetched revision.

## Skincare

Authenticated Skincare account data is held in:

`Users/{paddedUserId}/skincare.json`

Legacy browser content may be offered only through explicit import:

- routine → `skincare.json#routine`;
- routine groups/assignments → `skincare.json#groups`;
- slider state → `skincare.json#sliders`.

The authoritative server resource is loaded first, including an empty section. Partial imports/writes must preserve unrelated Skincare sections. Conflict backups remain local review-only recovery copies until the authoritative resource is resolved.

## Games

Legacy or guest game content is never silently promoted into authenticated state.

- Darts Focused v1/v2 → `Games/darts-focused.json`, with differing copies reported rather than silently chosen.
- Track Coin → `Games/track-coin.json`.
- Meridian Grove exploration key `baseline.realm.exploration.jrpg.v1` → `Games/meridian-grove.json`.
- Tactical Operations v1/v2 → `Games/baseline-realm.json#tacticalOperations`.
- Badminton Focused `__bl_badminton_focused_v1__` → `Games/badminton-focused.json`.
- recognised Recreation guest-profile entries → their canonical physical files.

Physical legacy candidates are bound to the reviewing account where required. All authenticated server mutations use expected revisions and stop on conflict.

Games auto-next and Recreation view/navigation state are not progression data and remain local/session state as classified by the executable map.

## Shared Badminton

Legacy/current browser copies target:

```text
Shared/Badminton/badminton.json
```

Import is allowed only through the protected Badminton administrator path after comparison with current server state. A browser cache cannot replace a newer shared revision.

If a stale writer is detected, the browser preserves its local snapshot under `__baseline_badminton_session_v4_conflict_backup__`. This is recovery state only: it must be compared by an administrator and is never auto-imported or automatically deleted.

## Deliberately not migrated as account persistence

The executable map keeps non-account state out of Saved Data, including:

- Games auto-next;
- current view/tab/navigation state;
- one-session microphone approval;
- Fitness one-session start-early permission;
- Fitness plan-selection/create-plan handoff state;
- recipe-title indexes that can be rebuilt;
- outer-embed and route-handoff snapshots;
- generic storage-wrapper implementation expressions;
- local account preview users/session data, including any browser-stored password material.

These items must not be mistaken for authenticated persistence just because they use browser storage.

## Legacy migration and recovery state that may remain locally

Local browser storage may still legitimately contain migration-only material such as:

- account-bound Food import candidates and conflict backups;
- Fitness import/recovery candidates;
- Fitness Routine import candidates;
- Skincare import candidates and conflict backups;
- Games legacy/guest import candidates and owner metadata;
- Shared Badminton conflict recovery snapshots.

These copies are not authenticated authority. Their retention/deletion rules are resource-specific and are defined in `browser_storage_map.json`.

## Verification

Run:

```bash
npm run test:browser-storage
```

The contract must verify deterministic inventory, unique complete mapping, canonical game filenames, explicit migration decisions, account-binding rules, server-authoritative empty-state behaviour, and preservation of unresolved user content without authenticated browser fallback.
