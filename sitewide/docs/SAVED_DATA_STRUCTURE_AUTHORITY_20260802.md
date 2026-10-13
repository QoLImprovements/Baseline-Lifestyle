# Baseline Lifestyle Saved Data structure authority — 2 August 2026

## Status

This document restores the agreed permanent Saved Data design after PRs #47–#48 incorrectly described an external SQLite file as the finished data-authority architecture.

That conclusion is withdrawn.

SQLite remains the current production source during migration and may remain as a **minimal protected account/authentication lookup index** where technically necessary. It is not a substitute for the permanent resource-based Saved Data structure described here.

The target production authority is the protected base-level Saved Data area, with independent physical resource files and temporary coordination data kept separately in Runtime.

## Required hosting structure

```text
/base-folder/
├── Saved Data/
│   ├── Account Index/
│   ├── Users/
│   └── Shared/
├── Runtime/
│   ├── Locks/
│   └── Temporary Files/
├── Migration Evidence/
│   └── reports, field maps and validation evidence
└── public_html/
    └── replaceable website and server code
```

`Saved Data`, `Runtime` and private migration evidence must be outside the public document root where Hostinger permits it. The browser must never browse or edit those folders directly.

The distinction is mandatory:

- **Saved Data:** live values created, selected, completed or saved by users, plus shared live-system records.
- **Replaceable application code:** rules, interfaces, validation, schemas, migrations, APIs and defaults.
- **Runtime:** short locks, active-editing leases, heartbeats and incomplete temporary writes.
- **Migration evidence:** source inventories, field maps, counts, hashes and validation reports. These are operational records, not live user resources.

A deployment may replace `public_html`; it must leave `Saved Data` untouched and reconnect to the existing resources.

## Stable user identity

User folders use padded internal IDs, never usernames, display names or email addresses:

```text
Saved Data/Users/000001/
Saved Data/Users/000002/
```

The folder identity remains stable when visible account details or authentication providers change.

`Account Index` is a minimal protected lookup mechanism only. It may use a small SQLite index or another protected format after authentication review, but it must not become the general store for Fitness, games, favourites, Binaural, voice or Badminton data.

## Required per-user structure

```text
Saved Data/
├── Account Index/
│   └── protected account lookup only where required
├── Users/
│   └── 000001/
│       ├── account.json
│       ├── favourites.json
│       ├── binaural.json
│       ├── fitness.json
│       ├── Fitness/
│       │   └── Plans/
│       │       └── one JSON file per saved Fitness plan
│       ├── voice.json              only when persistent choices exist
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
```

Files are created only when the relevant saved resource exists. Do not create empty files for unplayed games or optional panels that have no persistent user choices.

Do not combine unrelated systems into one enormous user file. Do not split a small independent panel into unnecessary fragments.

No `Migration Report`, evidence, lock, heartbeat or temporary file is permitted inside this tree.

## Resource decisions

### `account.json`

One user-owned account record. It contains only account information and never Fitness, game, Binaural, favourites, Badminton or temporary session-lock data.

Authentication secrets must remain protected server-side and must never be returned to the browser. The exact division between the protected account lookup index and `account.json` must be security-reviewed without weakening the required per-user account file.

### `favourites.json`

One cross-site favourites resource per user. Add/remove operations update the file through validation, a short write lock, revision checking and atomic replacement. The browser does not replace the whole file without validation.

### `binaural.json`

One small resource per user for the Binaural panel, including supported slider values, sound choices and user-created presets. Do not create one physical file per preset.

### `fitness.json` and `Fitness/Plans/`

`fitness.json` remains the user-level Fitness state resource for supported profile/body information, achievements, selected-plan identity, progression history and persistent current-workout recovery state.

Saved Calisthenics plans are physically isolated under:

```text
Saved Data/Users/000001/Fitness/Plans/000003.json
Saved Data/Users/000001/Fitness/Plans/000004.json
```

Each plan file owns that plan's definition and session history. The internal plan ID determines the stable filename; renaming a plan does not rename or relocate its file.

This split was adopted during Phase 5 production acceptance after live testing exposed cross-plan coupling in plan selection/name handling. The migration preserves plan IDs, plan definitions, completed/planned session history and selected-plan state. Recovery tooling must rebuild SQLite from both `fitness.json` and the per-plan files.

### `voice.json`

Optional. Create it only when persistent user-selected voice settings exist. Never store recorded or temporary microphone audio here.

### One physical save file per played game

Every signed-in user's played games are isolated physically. Damage to one game save must not normally damage another game's progress.

Canonical production identifiers map to filenames as follows:

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

A game file is created only after saveable progress exists. Guest/browser data cannot overwrite authenticated data without an explicit validated import.

### Shared Badminton

Badminton is shared system data, not duplicated into each user's folder:

```text
Saved Data/Shared/Badminton/badminton.json
```

It initially remains one file unless real size, write-conflict or restoration evidence justifies a later split. All writes retain the established administration and permission rules.

## Save and load requirements

Every persistent request must:

1. verify the authenticated session;
2. resolve the trusted internal user ID or shared resource;
3. enforce ownership or shared-system permissions;
4. validate allowed fields, structure, size and depth;
5. compare the submitted revision with the live revision;
6. write a complete temporary file under `Runtime/Temporary Files`;
7. parse and validate that temporary file;
8. acquire a short resource lock under `Runtime/Locks`;
9. re-check the live revision;
10. atomically replace the live file;
11. release the lock;
12. return the new revision and update time.

`Saved Data` and `Runtime` must reside on the same filesystem so the final rename is atomic. Configuration fails closed when they are not.

Loads address only the requested resource and never expose physical server paths.

Long-lived active-editing leases apply only to genuinely conflicting editors. Independent resources must remain independently usable. Lease and temporary files belong under `Runtime`, not permanent Saved Data.

## Migration evidence boundary

The migration exporter returns its source report to the validation process but writes only live candidate resources into the candidate `Saved Data` tree.

Field maps, source-table inventories, hashes, validation decisions and failure reports must be written to a separate private evidence path. They are never children of `Saved Data`, are never served as user resources and are not copied into the live authority during cutover.

## Migration boundary

The copied SQLite database has been validated as a migration source. Its data must be migrated into this exact structure and independently verified before authority changes.

The validated export is no longer described as a disposable shadow. It is the migration candidate for the target Saved Data authority, subject to:

- exact canonical paths and filenames;
- complete resource schemas;
- browser-only Fitness data migration where applicable;
- protected authentication/account-index decisions;
- read/write API wiring;
- dual-read or controlled maintenance cutover;
- rollback to the verified SQLite source;
- Hostinger backup and individual-resource restore proof;
- live account, Fitness, Games, voice, favourites, Binaural and Badminton smoke tests.

Do not declare the Saved Data project complete merely because SQLite has been moved outside `public_html`.
