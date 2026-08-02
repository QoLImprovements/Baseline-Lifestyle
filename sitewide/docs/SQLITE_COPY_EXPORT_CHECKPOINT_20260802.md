# SQLite Copy Export Checkpoint — 2 August 2026

## Status

This increment begins the migration-tooling stage without changing production authority. SQLite remains the sole live authority and `saved_data.php` remains unwired.

## Added tooling

`sitewide/migration/export_sqlite_copy.php` exports an explicitly supplied SQLite copy into an isolated shadow Saved Data tree.

Safety properties:

- the source path must be explicit, absolute, readable and not a symbolic link;
- SQLite is opened with `mode=ro` and `PRAGMA query_only = ON`;
- `PRAGMA quick_check` must return `ok`;
- source hash, size and modification time are checked before and after export;
- output is assembled in a private staging directory and swapped only after every file validates and writes successfully;
- directories use permission `0700` and files use `0600`;
- rerunning against the same unchanged copy produces the same resource contents;
- no production path is inferred and no database schema migration is run.

## Current mapping

- `users` → account index plus `Users/{padded-id}/account.json`
- `favourites` → `favourites.json`, created only when records exist
- `binaural_presets` → `binaural.json`, created only when records exist
- `voice_settings` → optional `voice.json`
- Fitness plans, sessions and achievements → `fitness.json`
- each Games Hub profile → one `Games/{app}.json` file
- shared Badminton rows → `Shared/Badminton/badminton.json`

Password hashes and provider links are preserved only inside permission-restricted shadow output. They are never printed in the command summary or account index.

Password-reset tokens, rate-limit events and schema-migration bookkeeping are deliberately not converted into permanent user resources. The export report records these exclusions, missing tables, invalid JSON and any unexpected source columns.

## Verification gate

The executable contract creates a disposable SQLite fixture, exports it twice, verifies the source hash is unchanged, checks every target resource and proves deterministic reruns. It never opens the configured production database or production Saved Data.

## Still required before migration

- run the exporter against a separately copied production database;
- review counts and representative records;
- resolve invalid or unmapped fields;
- add schema-specific validation for the exact current Fitness and game payload versions;
- document localStorage mappings;
- define and test rollback for a partial production cutover;
- do not enable a JSON writer or change live authority until those comparisons pass.
