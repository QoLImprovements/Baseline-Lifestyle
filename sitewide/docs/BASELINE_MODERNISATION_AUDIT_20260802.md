# Baseline Lifestyle modernisation audit

Date: 2 August 2026  
Scope: complete tracked repository at `QoLImprovements/Baseline-Lifestyle`  
Implementation branch: `agent/baseline-modernisation-audit-20260802`

## Executive finding

The repository is a working PHP/HTML/CSS/JavaScript site with a mature SQLite-backed account layer, not a blank application. The safest upgrade is incremental: keep current routes, PHP endpoints, schemas and interfaces working; add tests and private-storage primitives; migrate one resource at a time behind an ownership rule; and leave the current Fitness voice recognizer active until an offline alternative passes realistic hosting and accuracy tests.

No live user data, database, credential or hosting configuration was added to Git. `main` was not edited directly.

## Inventory

The audited snapshot contains 17,342 tracked files and approximately 56.1 MB of tracked content. Most of the count is intentional Food Approach data: 17,046 JavaScript files include one-file-per-food records and a generated manifest. The main runtime areas are:

| Area | Current role | Persistence |
|---|---|---|
| `sitewide/` | shared shell, account UI, navigation, common APIs and voice utilities | SQLite and browser caches |
| Fitness | plans, sessions, achievements, body/profile UI, workout runtime | SQLite for authenticated plans/results; some local browser progress/profile data |
| Recreation | game launch/runtime and individual game profiles | SQLite whole-profile JSON for authenticated users; guest browser/memory profiles |
| Badminton Session | shared players, courts, matches, results and rating state | one SQLite JSON row named `global` |
| Food Approach | food library and diet log | static library plus browser diet log |
| Account/favourites/binaural/voice | identity and user preferences | normalized SQLite tables |
| Garmin | UI placeholder only | no OAuth or sync backend found |

The repository already has 35 PHP endpoints, 39 test files, Apache routing and access rules, GitHub Actions, a locked Node test dependency, input-size controls, same-origin checks, strict session cookies, password hashing, reset-token storage and rate limiting.

## Current persistence authority

`sitewide/api/config.php` selects SQLite through `BASELINE_DB_PATH` and otherwise uses the ignored `sitewide/api/baseline.sqlite`. The stable internal user identifier is the integer `users.id`; display names and email addresses are not suitable folder keys.

| Data | Current authority | Observed risk before migration |
|---|---|---|
| Account/authentication | `users`, `password_reset_tokens` | Password hashes must remain in the authentication store, not exported to `account.json` |
| Favourites | `favourites` | needs deterministic export/import and revision ownership |
| Binaural presets | `binaural_presets` | needs deterministic export/import and revision ownership |
| Voice settings | `voice_settings` | persistent settings exist, so `voice.json` is justified |
| Fitness | `plans`, `plan_sessions`, `achievements` | related rows must migrate as one logical resource without losing history |
| Games | `games_profiles`, unique by user and app | whole-profile last-writer-wins update has no expected revision |
| Badminton | `badminton_state_store`, key `global` | shared whole-state overwrite has no revision conflict or active-editor lease |
| Guest play | browser or memory | must never overwrite authenticated storage without explicit migration |

The repository has no active file-based `Saved Data` authority yet. The new `sitewide/api/saved_data.php` is intentionally an unwired foundation: absolute private paths, stable padded IDs, resource path allowlists, bounded JSON envelopes, expected revisions, exclusive resource locks, same-filesystem temporary writes, atomic replacement and expiring active leases. Existing endpoints continue using SQLite.

## Voice workflow: repository truth

Fitness currently opens a WebRTC session through `sitewide/api/realtime_transcription.php`; that endpoint requires `OPENAI_API_KEY` and requests OpenAI Realtime transcription. Browser speech synthesis provides spoken output. The current runtime accepts several synonyms such as `start`, `ready` and `go`.

The code differs materially from the requested known workflow:

- There is no number-confirmation state. A recognized number is clamped and saved immediately.
- There is no workout rest/`Continue` state, although maximum-rest and announcement settings are stored and displayed.
- The `confirmNumbers` preference is not enforced by the Fitness workout runtime.
- The transcription prompt contains unnecessary synonyms.
- Manual success/failure controls do call the shared workout save actions, which is a useful integration seam.

These differences are documented before any production voice change. The constrained policy prototype is not loaded by the live page.

## Test and source findings

The pre-existing `Website checks` run stopped at one stale structure assertion. Local execution also exposed two stale Realm assertions:

1. the Massage `.htaccess` was treated as obsolete even though it is the canonical route rule;
2. Realm now deliberately starts with Rowan alone, while the test expected four members;
3. the Games storage build marker advanced to `20260801`, while one test expected the July marker.

The assertions were updated to test current deliberate behavior. A saved-data contract test and PHP atomic-write exercise were added to the workflow.

`sitewide/js/baseline-voice-access.js` has no repository reference other than its own build attribute. It may be obsolete, but deletion is deferred until production access logs or a release-owner check confirm it is not injected outside the repository. Large shared/game scripts are candidates for later modular extraction, not safe same-sitting rewrites.

## Security findings

- The Charity Shop protected-access endpoint had a committed numeric fallback PIN. It now requires `BL_CHARITY_SHOP_PIN`; an unconfigured host returns `503 protected_access_not_configured` instead of accepting a repository-known code.
- `.env`, SQLite files, logs, archives, `Saved Data/` and `Runtime/` are excluded from Git. `.env.example` contains names only.
- Some Badminton developer/moderator identity defaults are embedded in source. They should move to host configuration or an account-role table in a separate compatibility change because they currently affect authorization behavior.
- Browser local storage remains a temporary or guest authority in several systems. It must not silently compete with the new authenticated file authority.

## Recommended order

1. Merge the safety/test changes after review and configure the Charity Shop PIN before deployment.
2. Confirm private directories, permissions, backup inclusion and restore behavior in hPanel.
3. Back up SQLite and validate counts/checksums.
4. Run read-only export and validation tooling for one non-critical resource.
5. Shadow-read/compare, then cut over one resource with an explicit ownership flag.
6. Migrate Fitness and shared Badminton only after conflict, lease and rollback tests pass.
7. Benchmark an offline recognizer on the real Business plan before replacing the live voice path.

## Stage status

| Stage | Status in this branch |
|---|---|
| 1. Repository audit | Completed at repository level |
| 2. Safety and testing foundation | Implemented; CI verification required |
| 3. Saved-data design and migration plan | Completed as design |
| 4. Structural improvements | Begun conservatively; no high-risk runtime split |
| 5. Hostinger deployment | Runbook prepared; no live deployment performed |
| 6. Controlled saved-data implementation | Unwired foundation implemented and tested |
| 7. Existing-data migration | Plan prepared; live migration not run |
| 8. Voice workflow | Completed from source trace |
| 9. Recognition prototype | State/vocabulary policy prototype implemented |
| 10. Hostinger feasibility | Official capability review completed; real-plan benchmark pending |
| 11. Comparative testing | Test matrix prepared; audio/model benchmark pending |
| 12. Controlled integration | Not started; correctly gated on Stages 10–11 |
> Historical checkpoint (2026-08-02). For the current runtime and Hostinger status, see `CURRENT_ARCHITECTURE_AND_HOSTINGER_STATUS_20260823.md`.
