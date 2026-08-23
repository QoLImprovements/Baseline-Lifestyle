# Browser-storage migration map — corrected 2 August 2026

## Purpose

This map assigns every production browser-storage group to migration, cache, local-only or retirement handling before the resource-based Saved Data cutover.

SQLite is the current migration source. The target authority is the protected `Saved Data` tree with stable padded user folders, one meaningful file per independent resource, one physical save per played game and shared Badminton under its own folder.

The executable inventory scans production entry points under `index.html`, `sitewide/` and `systems/`. Every discovered key or expression must be covered by `sitewide/migration/browser_storage_map.json`; new or multiply assigned groups fail the contract.

## Authority rules

1. Usernames, emails and display names found in legacy keys are lookup context only and never filesystem identities.
2. Guest or local data cannot overwrite authenticated data automatically.
3. Rebuildable caches and interface state are not migrated.
4. Conflicting duplicate or legacy keys produce a blocking report; the importer never silently chooses.
5. Data without an approved target remains protected locally and blocks retirement.
6. Baseline Realm modes merge into one physical `baseline-realm.json` save rather than becoming separate game files.
7. Shared Badminton maps only to `Shared/Badminton/badminton.json` and never into a user game save.

## Canonical game filenames

| Production identifier | Saved file |
|---|---|
| `ninja` / `baseline-realm` | `baseline-realm.json` |
| `pairs` | `pairs.json` |
| `detectword` | `detect-word.json` |
| `make24` | `make-24.json` |
| `trackcoin` | `track-coin.json` |
| `ruleshift` | `rule-shift.json` |
| `dartsfocused` | `darts-focused.json` |
| `meridiangrove` | `meridian-grove.json` |

The Games Hub guest-profile bundle must be split by recognised game ID through this map. A physical file is created only when saveable progress exists.

## Fitness

- `__bl_fitness_body_profile_v1__::{user}` → `Users/{paddedUserId}/fitness.json#profile` after field and unit validation.
- `__bl_fitness_workout_progress_v2__::{planId}::{sessionIndex}::{user}` → `fitness.json#activeWorkout` only when it matches the authoritative plan, next session and expected steps.
- the server-plan cache is rebuilt rather than migrated;
- the file-protocol plan fallback is excluded from production migration.

Stale or mismatched progress is reported and never attached to the wrong plan.

## Voice

`__baseline_voice_settings_v1__` maps to optional `Users/{paddedUserId}/voice.json`. The authenticated server record wins during migration; guest settings require explicit adoption.

## Games

- Darts Focused v1/v2 → `Games/darts-focused.json`, with conflicting copies reported.
- Track Coin → `Games/track-coin.json`.
- Baseline Realm exploration → `Games/baseline-realm.json#exploration`.
- Tactical Operations v1/v2 → `Games/baseline-realm.json#tacticalOperations`.
- recognised guest-profile entries → their canonical physical files.

`__bl_badminton_focused_v1__` is preserved locally because it is not recognised by the current protected Games API or canonical file map. It must not be deleted, silently mapped to shared Badminton, or assigned a physical filename until its game schema is explicitly approved.

## Shared Badminton

Both legacy v3 and current v4 browser copies target:

```text
Shared/Badminton/badminton.json
```

Import is allowed only through the protected administrator path after comparison with current server state. A browser cache cannot replace a newer shared revision.

If a stale writer is detected, the browser preserves its local snapshot under `__baseline_badminton_session_v4_conflict_backup__`. This is a recovery copy only: it must be compared by an administrator and is never auto-imported or automatically deleted.

## Deliberately not migrated

Device/session UI preferences, recipe-title indexes, outer-embed snapshots and generic storage-wrapper expressions are not persistent account data. Browser account/password previews and local preview sessions are explicitly excluded from production authentication.

## Preserved locally without an approved resource

- the Food diet log;
- Natural Skincare slider positions;
- Badminton Focused game progress until its schema is approved.

These entries block blanket localStorage deletion.

## Verification

```bash
npm run test:browser-storage
```

The contract verifies deterministic inventory, unique complete mapping, canonical game filenames, one Baseline Realm file, the nested shared Badminton path, explicit account-preview exclusion and preservation of unresolved user content.
