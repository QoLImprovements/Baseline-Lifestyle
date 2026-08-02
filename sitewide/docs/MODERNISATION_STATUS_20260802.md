# Baseline Lifestyle modernisation status — corrected 2 August 2026

## Architectural correction

PRs #47–#48 incorrectly concluded that moving `baseline.sqlite` outside `public_html` completed the Saved Data objective.

That conclusion is withdrawn.

Moving SQLite to a protected base-level location may be useful as an interim safety measure, migration source or minimal account/authentication index. It does **not** implement the agreed permanent Saved Data structure.

The target production authority remains the independent resource files defined in:

```text
sitewide/docs/SAVED_DATA_STRUCTURE_AUTHORITY_20260802.md
```

## Required target authority

```text
Saved Data/
├── Account Index/
├── Users/
│   └── 000001/
│       ├── account.json
│       ├── favourites.json
│       ├── binaural.json
│       ├── fitness.json
│       ├── voice.json              only if needed
│       └── Games/
│           ├── baseline-realm.json
│           ├── pairs.json
│           ├── detect-word.json
│           ├── make-24.json
│           ├── track-coin.json
│           ├── rule-shift.json
│           ├── darts-focused.json
│           └── meridian-grove.json
└── Shared/
    └── Badminton/
        └── badminton.json

Runtime/
├── Locks/
└── Temporary Files/
```

`Saved Data` contains live user-created or selected values and shared live state. `Runtime` contains temporary coordination files. Website code, schemas, validation and migration instructions remain replaceable application files.

## Current production authority

SQLite remains the current live production authority **during migration**. It must not be described as the final Saved Data architecture.

The current SQLite database can continue serving the website until the resource files, APIs, migration and rollback gates are complete. A protected SQLite account lookup may remain where authentication requirements justify it, but unrelated user resources must move to their specified files.

## Completed repository work

- Stability and release foundations are present.
- Structural work has progressed through small behaviour-preserving pull requests.
- A protected Saved Data path foundation exists outside the document root.
- Revision checking, short resource locks, atomic replacement, temporary-file cleanup and active-editing leases exist in `sitewide/api/saved_data.php`.
- Browser storage has been inventoried and classified.
- The copied SQLite exporter, independent verifier and privacy-safe evidence gate exist.
- Source-table inventory fails closed on unknown production tables.
- Account JSON projections exclude password hashes and provider subjects while the final protected authentication/index division remains subject to the account migration design.
- Voice settings and copied Badminton state have been analysed against production data.
- The actual copied production database passed integrity, foreign-key, JSON, relationship and source-classification review.

## Real copied-production-data evidence

The supplied separately copied database contains:

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

The review found zero missing expected tables, zero invalid JSON records, zero foreign-key violations, zero unmapped database columns and zero unclassified tables.

This proves that the source is suitable for migration work. It does not prove that the target Saved Data runtime is wired or live.

## Corrected path decisions

### Users

Stable internal IDs produce folders such as:

```text
Saved Data/Users/000001/
```

Paths are never generated from usernames, display names or email addresses.

### Games

Each played game has one physical save file. Current production identifiers map to the agreed filenames:

- `ninja` → `baseline-realm.json`;
- `pairs` → `pairs.json`;
- `detectword` → `detect-word.json`;
- `make24` → `make-24.json`;
- `trackcoin` → `track-coin.json`;
- `ruleshift` → `rule-shift.json`;
- `dartsfocused` → `darts-focused.json`;
- `meridiangrove` → `meridian-grove.json`.

Unplayed games do not receive empty files.

### Badminton

The agreed shared path is:

```text
Saved Data/Shared/Badminton/badminton.json
```

The flattened `Shared/badminton-session.json` decision from PRs #42/#45 is not the target structure and must not be used for final authority.

### Fitness

One `fitness.json` initially contains the user's supported Fitness profile, plans, sessions, completed results, achievements, progress, records and persistent workout-recovery state. The copied plan and 20 ordered relational sessions are migration inputs, not the complete final schema by themselves.

### Account index

`Saved Data/Account Index` is a minimal protected lookup only where required for authentication, uniqueness and user-folder resolution. It must not absorb Fitness, games, favourites, Binaural, voice or Badminton data.

## Completion status

| Area | Status |
|---|---|
| Copied SQLite integrity/data review | **Complete and passed** |
| Migration/export foundation | **Implemented, but canonical path correction and final schemas remain** |
| Saved Data path/atomic-write foundation | **Implemented** |
| Canonical per-user/shared path contract | **Restored and contract-locked** |
| Account index and `account.json` authority split | **Pending final implementation** |
| Favourites live file reader/writer | **Pending** |
| Binaural live file reader/writer | **Pending** |
| Fitness complete file schema and live reader/writer | **Pending** |
| Voice live file reader/writer | **Pending** |
| One-file-per-game live readers/writers | **Pending** |
| Shared Badminton live reader/writer | **Pending** |
| Browser-only Fitness migration | **Pending** |
| Controlled SQLite-to-Saved-Data cutover | **Not started** |
| Hostinger Saved Data backup/restore proof | **Pending authenticated host work** |
| Production Saved Data authority | **Not complete** |

## Required sequence

1. Correct migration output to the canonical filenames and folders.
2. Define and contract-test each resource schema.
3. Implement protected resource-specific read/write APIs using the Saved Data foundation.
4. Preserve a minimal protected account/authentication lookup where necessary.
5. Migrate the copied SQLite data to the exact Saved Data tree.
6. Explicitly migrate eligible browser-owned signed-in data, including Fitness body/profile and recoverable workout state.
7. Independently verify every generated resource and revision.
8. Prove Hostinger backup inclusion and individual-resource restoration with harmless test files.
9. Perform a controlled maintenance or dual-read cutover with SQLite rollback.
10. Smoke-test account, favourites, Binaural, Fitness, each existing game, voice and shared Badminton.
11. Retire old SQLite resource writers only after the new authority has operated successfully.

## Guardrails

- Do not describe an external SQLite file as the completed Saved Data structure.
- Do not collapse unrelated user systems into one database merely to simplify deployment.
- Do not create empty optional or unplayed-game files.
- Do not use usernames or emails as filesystem identities.
- Do not expose physical paths or Saved Data files to the browser.
- Do not place locks, heartbeats or abandoned temporary writes in permanent Saved Data.
- Do not delete or retire the current production authority before verified migration, backup and rollback evidence exists.
