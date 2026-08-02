# Baseline Lifestyle modernisation status — 2 August 2026

## Saved Data architecture

The earlier conclusion that an external SQLite file completed Saved Data was withdrawn. The target resource authority is:

```text
Saved Data/
├── Account Index/accounts.json
├── Users/{padded-id}/
│   ├── account.json
│   ├── favourites.json
│   ├── binaural.json
│   ├── fitness.json
│   ├── voice.json
│   └── Games/{one canonical file per played game}
└── Shared/Badminton/badminton.json

Runtime/
├── Locks/
└── Temporary Files/
```

Authentication credentials remain in protected SQLite. Password hashes and provider subjects are never written into account projections or browser-facing resources.

## Repository implementation status

The repository now supports three host-controlled modes:

| Mode | Meaning |
|---|---|
| `sqlite` | Existing SQLite resource behavior; safe deployment default |
| `mirror` | SQLite stays authoritative while complete resource snapshots are refreshed |
| `saved-data` | Canonical resource files are authoritative |

Implemented resource surfaces:

- account projection and Account Index synchronization after registration, password login and Google login;
- favourites read/write/delete-empty behavior;
- Binaural preset read/write/delete-empty behavior;
- voice-settings read/write;
- one physical file per approved game, including Baseline Realm at `baseline-realm.json`;
- Fitness plan creation, loading, editing, deletion, session status/rescheduling and achievements in one revisioned `fitness.json`;
- validated automatic import and continuing synchronization of signed-in Fitness Body Profile/current-workout browser state;
- shared Badminton loading and saving at `Shared/Badminton/badminton.json` while preserving administrator, court-player and score validation;
- optimistic revision conflict responses;
- atomic writes through `Runtime/Temporary Files` and resource locks;
- semantic SQLite-to-Saved-Data cutover verification;
- construction of a validated current SQLite rollback copy from Saved Data without replacing authentication secrets.

## Real copied-production-data evidence

The supplied copied database contained:

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

The copied source passed integrity, foreign-key, JSON, relationship and table-classification review. Its data was successfully represented in the canonical physical tree without exposing authentication credentials.

## Canonical game files

| Production identifier | File |
|---|---|
| `ninja` / Baseline Realm | `baseline-realm.json` |
| `pairs` | `pairs.json` |
| `detectword` | `detect-word.json` |
| `make24` | `make-24.json` |
| `trackcoin` | `track-coin.json` |
| `ruleshift` | `rule-shift.json` |
| `dartsfocused` | `darts-focused.json` |
| `meridiangrove` | `meridian-grove.json` |

The historical `hubsettings` API identifier remains SQLite-compatible but is not an approved game resource and cannot create an unapproved Saved Data file.

## Completion table

| Area | Status |
|---|---|
| Copied SQLite integrity/data review | **Complete and passed** |
| Canonical migration exporter | **Complete** |
| Resource-only independent verification | **Complete** |
| Saved Data atomic-write and Runtime foundation | **Complete** |
| Account projection and Account Index synchronization | **Complete** |
| Favourites live file reader/writer | **Complete** |
| Binaural live file reader/writer | **Complete** |
| Voice live file reader/writer | **Complete** |
| Fitness live file reader/writer | **Complete** |
| Browser-owned Fitness migration/synchronization | **Complete** |
| One-file-per-game live readers/writers | **Complete** |
| Shared Badminton live reader/writer | **Complete** |
| SQLite/mirror/Saved Data authority modes | **Complete** |
| Semantic cutover verifier | **Complete** |
| Current SQLite rollback-copy builder | **Complete** |
| Automated runtime and round-trip contracts | **Complete when final CI passes** |
| Hostinger private directories, backup/restore proof and live switch | **Pending authenticated host work** |
| Live production Saved Data authority | **Not changed by repository work** |

## Hostinger boundary

Repository implementation does not change the live host by itself. The authenticated hosting sequence remains:

1. deploy code while authority remains `sqlite`;
2. create private Saved Data, Runtime and evidence directories;
3. take a fresh write-free SQLite copy and hosting backup;
4. export and validate the fresh copy;
5. enable `mirror` mode and allow signed-in browser-owned Fitness state to import;
6. run semantic cutover verification;
7. prove backup inclusion and isolated individual-resource restoration;
8. change authority to `saved-data`;
9. perform live resource-by-resource smoke tests;
10. retain SQLite authentication and rollback copies.

Exact commands and rollback handling are documented in `SAVED_DATA_RUNTIME_CUTOVER_20260802.md`.

## Guardrails

- Do not upload private Saved Data into `public_html` or commit it to GitHub.
- Do not switch directly from an old SQLite copy back to SQLite after Saved Data has received newer writes; build and validate a current rollback copy first.
- Do not remove authentication SQLite: it intentionally retains credentials, uniqueness and recovery responsibilities.
- Do not create empty optional or unplayed-game files.
- Do not use usernames or email addresses as physical folder identities.
- Do not place migration evidence, locks or temporary files inside Saved Data.
- Do not describe production cutover as complete until Hostinger deployment, backup/restore evidence and live smoke tests have passed.
