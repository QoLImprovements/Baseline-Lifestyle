# SQLite copied-data export checkpoint — corrected 2 August 2026

## Status

SQLite remains the current live source during migration. The exporter does not change production authority, but its output is the candidate tree for the agreed resource-based Saved Data architecture—not a replacement SQLite design.

The canonical authority is recorded in `SAVED_DATA_STRUCTURE_AUTHORITY_20260802.md`.

## Safety properties

The copied database is opened read-only with query-only and integrity checks. Source hash, size and modification time are compared before and after export. Output is assembled privately through staging and atomic replacement, with private permissions and fail-closed reporting for missing tables, invalid JSON, unmapped fields and unclassified tables.

Password hashes and provider subjects are excluded from browser-facing account projections and remain in the protected authentication authority while the final account-index split is implemented.

## Canonical migration output

- accounts → `Account Index/accounts.json` plus `Users/{padded-id}/account.json`;
- favourites → `Users/{padded-id}/favourites.json` only when records exist;
- Binaural presets → `Users/{padded-id}/binaural.json` only when records exist;
- voice settings → optional `Users/{padded-id}/voice.json`;
- Fitness plans, sessions and achievements → initial `Users/{padded-id}/fitness.json` migration content;
- each played game → one canonical file under `Users/{padded-id}/Games/`;
- shared Badminton → `Shared/Badminton/badminton.json`.

Canonical game filename mapping:

| Source app | Physical save file |
|---|---|
| `ninja` | `baseline-realm.json` |
| `pairs` | `pairs.json` |
| `detectword` | `detect-word.json` |
| `make24` | `make-24.json` |
| `trackcoin` | `track-coin.json` |
| `ruleshift` | `rule-shift.json` |
| `dartsfocused` | `darts-focused.json` |
| `meridiangrove` | `meridian-grove.json` |

The exporter fails closed on an unsupported game identifier rather than inventing a path.

## Verification

The independent verifier regenerates the expected tree and compares every path, file hash, envelope and permission. It allows only the canonical game filenames and validates that each file's stored game identifier maps back to that filename.

It also verifies:

- stable six-digit user folders;
- exact account projection fields and credential exclusion;
- account-index shape;
- direct voice payload shape;
- direct shared Badminton payload with no obsolete wrapper;
- `Shared/Badminton/badminton.json` rather than a flattened path;
- source counts, invalid records and unmapped fields;
- rejection of extra, missing or tampered files.

## Completion boundary

A passing copied-data export proves that SQLite data can be represented in the canonical tree. It does not yet prove:

- complete live schemas for every resource;
- migration of eligible browser-only Fitness state;
- protected resource-specific production readers and writers;
- Hostinger backup and individual-file restoration;
- controlled live cutover and rollback.

Do not declare Saved Data complete merely because the copy validates or SQLite is moved outside `public_html`.
