# Baseline Lifestyle modernisation status — 2 August 2026

## Current authority decision

`main` remains the production branch. SQLite remains the production data authority.

The final data-location design is now:

```text
/home/ACCOUNT/Saved Data/Database/baseline.sqlite
/home/ACCOUNT/Saved Data/Evidence/
/home/ACCOUNT/Runtime/
/home/ACCOUNT/.baseline-private.env
/home/ACCOUNT/public_html/
```

The exact Hostinger account-home prefix must replace `/home/ACCOUNT`.

`BASELINE_DB_PATH` in the private base-level `.baseline-private.env` selects the database outside `public_html`. This allows ordinary website deletion and re-upload operations to replace the code inside `public_html` without overwriting accounts, Fitness plans, game progress, voice settings, favourites, Binaural presets or shared Badminton state.

The JSON Saved Data API foundation remains deliberately unwired. The validated JSON export is a shadow/recovery and inspection format, not the live database authority.

## Repository work completed

### Stability and structure

- PR #24 established the finite stability and release process.
- PRs #25–#35 completed eleven small behaviour-preserving structural separations.
- Existing account, Fitness, Games Hub, Badminton, voice and visual behaviour remained in place.
- Website Checks cover repository structure, Fitness and voice unit tests, Chromium voice behaviour, finite stability smoke, Games Hub, PHP lint and Saved Data contracts.

### Copied-data migration and verification

- PR #36 added the deterministic read-only copied-SQLite exporter.
- PR #37 added independent exported-tree verification and tamper rejection.
- PR #39 inventoried browser storage and assigned every discovered data group.
- PR #41 added one fail-closed copied-data validation/evidence command.
- PR #42 excluded password hashes and provider subjects from JSON account projections and fixed the shared Badminton path.
- PR #44 inventories every non-internal SQLite source table and fails on unknown data. The retired `submissions` table is accepted only while empty.
- PR #45 exports the one canonical `global` Badminton state directly to `Shared/badminton-session.json`.
- PR #46 exports the twelve supported voice settings directly after applying the production normalisation rules.

### Final private SQLite authority preparation

PR #47, merge commit `365602e68bb5aa0c7c1d1e7cbc0182f9229eddc8`, completed the repository preparation for private external SQLite authority:

- added `sitewide/migration/sqlite_external_authority.php`;
- added `sitewide/migration/verify_external_sqlite.php`;
- verifies that the database is outside the document root;
- verifies private permissions, file/parent writability, SQLite quick/integrity checks, foreign keys and required tables;
- reports possible `-wal`, `-shm` and `-journal` companion files before a move;
- emits privacy-safe evidence containing hashes, gates and counts but no account values;
- added a disposable PDO SQLite contract that accepts a healthy external file and rejects document-root and symlink locations;
- added the contract to the required migration test chain;
- added `sitewide/docs/HOSTINGER_EXTERNAL_SQLITE_CUTOVER_20260802.md` with pre-switch verification, environment configuration, smoke testing and rollback.

Website Checks run 196 passed the complete pipeline before PR #47 was merged.

## Real copied-production-data result

A separately copied production SQLite database was supplied and inspected read-only.

The review found:

| Resource | Records |
|---|---:|
| Accounts | 1 |
| Fitness plans | 1 |
| Fitness sessions | 20 |
| Achievements | 0 |
| Game profiles | 7 |
| Voice-settings records | 1 |
| Shared Badminton states | 1 |
| Favourites | 0 |
| Binaural presets | 0 |
| Retired submissions | 0 |

Validation result:

- SQLite quick check passed;
- SQLite integrity check passed;
- foreign-key violations: zero;
- missing expected tables: zero;
- invalid stored JSON: zero;
- invalid source records: zero;
- unmapped database fields: zero;
- unclassified source tables: zero;
- authentication credentials excluded from JSON projections;
- 14 JSON shadow/evidence files generated and verified;
- copied shadow-tree SHA-256: `1dfa5ede49944012dc6d7932de97db4ab5ad0e904f62a22bca7f3a847413ef38`.

The isolated review executor did not provide PHP's PDO SQLite driver. The equivalent checks and export were run with Python's read-only SQLite driver. The merged PHP command remains the required verifier on Hostinger, where the live site already depends on PDO SQLite.

## Resolved schema decisions

### Accounts

Authentication password hashes, reset credentials and provider subjects remain in SQLite. JSON account projections contain only the approved identity/display fields and timestamps.

### Fitness

The copied database contains one canonical plan JSON object and 20 relational session rows. `fitness.json` preserves:

- the canonical plan object;
- source plan identity and creation time;
- all ordered session indices, scheduled dates, status, completion and update times;
- achievements.

No copied Fitness database fields are unrepresented.

Body-profile and active-workout browser state are separate browser-owned data groups. They were not present in the SQLite copy and were not fabricated or silently overwritten.

### Games

The current production Games API accepts:

- `pairs`;
- `make24`;
- `detectword`;
- `ninja`;
- `trackcoin`;
- `ruleshift`;
- `dartsfocused`;
- `meridiangrove`;
- `hubsettings`.

All seven profiles present in the copied database use accepted app identifiers and match the app identity inside their stored profile.

### Badminton

Exactly one `global` state is authoritative and maps directly to `Shared/badminton-session.json` in the shadow format.

### Voice

The twelve supported production settings are normalised and mapped directly to `voice.json`. Unknown future keys fail the unmapped-field gate rather than being discarded.

## Completion status

| Area | Status |
|---|---|
| Repository migration/export tooling | **Complete** |
| Real copied-production-data inspection | **Complete and passed** |
| Fitness and Games copied-data decisions | **Complete** |
| Private external SQLite verifier | **Complete and tested** |
| Final data-authority architecture | **Complete: SQLite outside `public_html`** |
| JSON shadow/recovery export | **Complete and validated** |
| Live JSON readers/writers | **Deliberately not enabled** |
| Hostinger live database copy/path switch | **Requires authenticated Hostinger access** |
| Hostinger base-folder backup inclusion and restore proof | **Requires authenticated Hostinger access** |
| Live sign-in/Fitness/Games/voice/Badminton smoke test after switch | **Requires authenticated Hostinger access** |
| Voice alternative-model benchmark | **Separate pending project; not required for data persistence** |

## Exact remaining live operation

The repository and copied-data work cannot itself alter a private Hostinger account. The only remaining data-authority operation is therefore the authenticated server-side cutover:

1. create and verify a fresh Hostinger backup;
2. enter a write-free maintenance window;
3. ensure no SQLite `-wal`, `-shm` or `-journal` file is active;
4. copy—not initially move—the live database to the base-level private Saved Data folder;
5. run `verify_external_sqlite.php` against the copied private path;
6. set `BASELINE_DB_PATH` in the base-level `.baseline-private.env`;
7. run the verifier again without an explicit database path to prove environment resolution;
8. leave maintenance mode and complete the sign-in, Fitness, Games, voice and Badminton smoke checks;
9. inspect PHP logs;
10. prove that Hostinger backup includes and can restore a harmless file from the private Saved Data folder;
11. retain the original database as a rollback snapshot until the stability period is complete.

Full commands and rollback instructions are in:

```text
sitewide/docs/HOSTINGER_EXTERNAL_SQLITE_CUTOVER_20260802.md
```

## Guardrails

- Do not commit or publish a production database or private shadow tree.
- Do not place `.baseline-private.env` inside `public_html`.
- Do not copy only the main SQLite file while companion files are active.
- Do not allow the old and new database copies to receive writes simultaneously.
- Do not enable JSON runtime authority merely because the shadow export validates.
- Routine deployments should replace only `public_html`, never the base-level `Saved Data` or `Runtime` folders.
- Keep Hostinger backups plus an encrypted external recovery copy.
