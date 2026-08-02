# Baseline Lifestyle modernisation status — 2 August 2026

## Purpose

This is the reconciled checkpoint after reviewing the current `main` branch rather than relying on an older continuation brief. It distinguishes implemented repository work from live-host verification, migration cutover and experimental work that still requires separate evidence.

`main` remains the production branch. SQLite remains the production data authority. The Saved Data API foundation remains deliberately unwired.

## Work discovered as already complete

The continuation brief stopped at pull request #23, but the repository had already progressed further:

- PR #24 added stability and release foundations;
- PRs #25–#35 completed eleven small behaviour-preserving structural separations;
- the existing site, Fitness, Games Hub, Badminton and established visual design remained in place;
- automated Website checks already covered structure, Fitness/voice, Chromium voice behaviour, finite stability smoke, Games Hub, PHP lint and Saved Data contracts.

The structural stage is therefore underway, not untouched, but it is not finished across every large runtime.

## Work completed in this continuation

### PR #36 — copied SQLite exporter

Merge commit: `31e6b9be10cdbf98842067d7684ef02f14bf9fae`

Added an explicit, read-only exporter for a separately copied SQLite database. It uses `mode=ro`, `PRAGMA query_only`, `PRAGMA quick_check`, source hash/stat checks, stable padded user IDs, private permissions, staging and deterministic output. It exports account projections, favourites, Binaural, voice, Fitness, individual games and shared Badminton without changing production authority.

### PR #37 — copied-export verifier

Merge commit: `1b794688fcb4f685f4dddfd5fcc5b1bdcebc6662`

Added an independent comparison gate that regenerates a canonical temporary tree from the same SQLite copy and compares every exported file. The disposable fixture proves that an altered game save is rejected and that a clean deterministic rerun restores validity.

### PR #38 — exact production voice documentation

Merge commit: `3c395097b138c1836db5aa04c2a6ecb9ea9ef504`

Documented the recognition system actually running in Fitness: authenticated same-origin WebRTC negotiation, OpenAI Realtime `gpt-4o-transcribe`, server VAD, the exact production states, commands, retries, errors, manual fallback and save flow.

The documentation explicitly records that production does **not** currently provide:

- spoken-number echo and confirmation before saving;
- rejection after a valid number has already been parsed;
- a rest/Continue state;
- spoken pause/resume routing;
- voice completion of the final saved session;
- server-issued expected-state or idempotency tokens.

A contract test prevents the documentation from drifting away from the runtime.

### PR #39 — browser-storage inventory and migration map

Merge commit: `3cf7b27851ca11bb8f4c177681c45c656c63e14d`

Added a deterministic production-source scanner and reviewed mapping for every discovered browser-storage group. New or multiply assigned groups now fail the contract.

The map:

- routes validated Fitness body profile and current-session workout progress toward `fitness.json`;
- treats Fitness plan caches and file-protocol fallbacks as non-authoritative;
- routes authenticated voice settings toward optional `voice.json`;
- routes recognised game progress toward one protected file per played game;
- treats browser Badminton state as a non-authoritative cache beside protected shared state;
- keeps guest imports explicit and prevents automatic overwrite of authenticated data;
- classifies recipe indexes and view state as rebuildable/transient;
- excludes browser account/session preview fallbacks from production authentication;
- preserves diet logs and Natural Skincare slider positions locally because no approved Saved Data resource exists for them.

### PR #41 — combined copied-data validation evidence

Merge commit: `9c1f6f915274203d51a5fa62ca0b2450af7d5508`

Added one fail-closed operator command that exports a separately copied SQLite database, independently verifies the resulting shadow tree and writes a separate privacy-safe evidence file. The evidence records source/tree hashes, counts, missing tables, invalid-record summaries, unmapped field names, checked-file totals and internal representative resource IDs without copying user values.

A passing result still records `readyForProductionCutover: false`; it is evidence about the supplied copy only, not approval to change live authority.

### PR #42 — account security and canonical Badminton alignment

Merge commit: `989893df1be7bc8009d2daeb7034f6880be10371`

Resolved two contradictions before the first real copied-production-data run:

- password hashes and provider subjects are now explicitly excluded from Saved Data account projections and indexes, remaining in the hardened authentication store;
- exporter, verifier, validation evidence, browser-storage map and architecture now agree on `Shared/badminton-session.json`.

Supported migration entry points are contract-locked to the security-aligned exporter. The disposable fixture contains known password/provider values and proves that neither enters the account projection, account index or evidence.

## Checklist status

| Stage | Status | Current evidence / next gate |
|---|---|---|
| 1. Stability and release process | **Partially complete** | Automated finite smoke and release documentation foundations exist and repeatedly pass. Live stability period, production error-log inspection, permanent Hostinger-to-`main` confirmation, failed-check release enforcement, stable tag and final rollback rehearsal still require live administrative evidence. |
| 2. Backups outside `public_html` | **Unproven** | Must be tested in Hostinger with a harmless file. Confirm inclusion, retention and individual restore for `Saved Data`, appropriate `Runtime` content and `.baseline-private.env`; then establish an encrypted external recovery copy. |
| 3. Structural improvements | **In progress** | Eleven small separations are merged. Continue only with behaviour tests and small pull requests; no broad Fitness/Games/Badminton rewrite. |
| 4. Saved Data implementation | **Foundation only** | Protected path/configuration, atomic-write and resource-contract foundations exist. Account projection security and the shared Badminton path are aligned. Exact remaining resource schemas, permissions, conflict handling and production readers/writers remain unwired. |
| 5. Migration tools using copied data | **Repository tooling complete and security-aligned; real copied-data run pending** | Exporter, independent verifier, combined evidence gate, field report and browser-storage map are merged. Next run must use a separately copied production database and produce zero missing tables, invalid records and unmapped fields. |
| 6. Controlled existing-data migration | **Not started** | Do not begin until copied-data validation passes and a fresh backup plus write-control/cutover plan are confirmed. |
| 7. Stabilise Fitness internals | **Partially complete** | Active workout state and save flow are traced and behaviour tests exist. Full separation of rules/rendering, final `fitness.json` schema and copied-data migration tests remain. |
| 8. Voice workflow documentation | **Complete for current production reality** | Exact active states, commands, transport, retries, errors, manual fallback and save behaviour are documented and contract-tested. |
| 9. Real recognition prototype | **Reframed and pending** | Production already has a working OpenAI Realtime recogniser. The remaining prototype work is a stricter confirmation/idempotency flow or an alternative recogniser, isolated behind a feature flag. |
| 10. Hostinger recognition feasibility | **Pending live benchmark** | Requires an isolated Hostinger deployment measuring exact model/runtime, RAM, CPU, storage, process persistence, dependencies, WebSockets, inference time and capacity. |
| 11. Comparative voice testing | **Pending** | Requires a consent-aware identical-sample corpus and measured command/number accuracy, false activations/rejections, latency, noise, browsers and resource use. |
| 12. Controlled voice integration | **Not started** | Integrate only a proven change, with expected-state/idempotency protection, authenticated sessions, limits, temporary-audio deletion, feature flag and rollback. |
| 13. Saved Data/security testing | **Partially complete** | Atomic write/path/revision contracts and copied-migration success, tamper, invalid-data, credential-exclusion and evidence tests pass. Comprehensive provider/account operations, symlink/interruption, restore and live copied-data tests remain. |
| 14. Final documentation | **In progress** | Release, structure, copied-export, validation-evidence, browser-storage and voice documents are updated. Final architecture/schema/restore/capacity/rollback documentation must reflect the eventual implemented authority. |

## Immediate safe next sequence

1. Create a fresh, separately copied production SQLite database; do not point tools at the live database.
2. Keep the copy, shadow output and evidence outside `public_html` with private permissions.
3. Run the combined command:

   ```bash
   php sitewide/migration/validate_sqlite_copy.php \
     --source=/absolute/path/to/copied.sqlite \
     --output=/absolute/path/to/shadow-saved-data \
     --evidence=/absolute/path/to/copied-data-evidence.json
   ```

4. Require the command to exit successfully and review the evidence for expected counts, zero missing tables, zero invalid records, zero unmapped fields and confirmed authentication-credential exclusion.
5. Privately inspect representative resources by their padded internal IDs; do not publish the shadow tree or account files as CI artifacts.
6. Resolve schema gaps, especially Fitness body profile/active workout and any live fields not represented by the current fixture.
7. Separately perform the harmless Hostinger backup/restore test.
8. Only after both evidence sets pass, design the first resource-by-resource cutover pull request with rollback to the verified SQLite database.

## Explicitly not complete

A green repository pipeline does not prove:

- that Hostinger backups include private base-level folders;
- that a live restore works;
- that current production data exports without unmapped/invalid fields;
- that JSON should replace SQLite now;
- that Hostinger can run an alternative speech model;
- that a candidate recogniser materially outperforms the current OpenAI Realtime path;
- that a stable production tag should be created before the remaining live release checks.

Those items require direct host/data/test evidence and must not be marked complete from repository inspection alone.
