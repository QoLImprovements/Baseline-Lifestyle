# SQLite Copy Export Checkpoint — 2 August 2026

## Status

This migration-tooling increment does not change production authority. SQLite remains the sole live authority and `saved_data.php` remains unwired.

## Export tooling

`sitewide/migration/export_sqlite_copy.php` exports an explicitly supplied SQLite copy into an isolated shadow Saved Data tree through the security-aligned exporter entry point.

Safety properties:

- the source path must be explicit, absolute, readable and not a symbolic link;
- SQLite is opened with `mode=ro` and `PRAGMA query_only = ON`;
- `PRAGMA quick_check` must return `ok`;
- source hash, size and modification time are checked before and after export;
- output is assembled in a private staging directory and swapped only after every file validates and writes successfully;
- directories use permission `0700` and files use `0600`;
- rerunning against the same unchanged copy produces the same resource contents;
- no production path is inferred and no database schema migration is run;
- password hashes and authentication-provider subjects are deliberately excluded from Saved Data account projections;
- unknown user-table columns are reported by name and are not copied into a catch-all values object.

## Verification tooling

`sitewide/migration/verify_sqlite_export.php` compares a completed shadow export with the same copied SQLite source.

It verifies:

- source SHA-256 and read-only authority declaration;
- every expected account and account-index lookup;
- the exact account projection field allowlist;
- explicit exclusion of `pass_hash` and `google_sub`;
- favourites, Binaural presets and optional voice settings;
- Fitness plans, plan sessions and achievements;
- every Games Hub profile and one-file-per-game layout;
- all shared Badminton state rows at the canonical `Shared/badminton-session.json` path;
- JSON envelopes, stable six-digit folders and allowed paths;
- `0600` file and `0700` directory permissions on Unix hosts;
- exported counts against recomputed source counts;
- absence of unexpected files, invalid source JSON and unmapped source fields;
- deterministic first, middle and last representative user/game records in the verification report.

The verifier returns a non-zero exit code for any mismatch. The executable fixture alters an exported game value and proves the verifier rejects the tampered tree before a clean deterministic rerun restores validity.

## Current mapping

- `users` → account index plus `Users/{padded-id}/account.json` as a non-credential account projection
- `favourites` → `favourites.json`, created only when records exist
- `binaural_presets` → `binaural.json`, created only when records exist
- `voice_settings` → optional `voice.json`
- Fitness plans, sessions and achievements → `fitness.json`
- each Games Hub profile → one `Games/{app}.json` file
- shared Badminton rows → `Shared/badminton-session.json`

Authentication credentials remain in the hardened authoritative authentication store. `account.json` contains only the stable user ID, display/account fields, primary provider label and timestamps. The private account index contains name/email lookups only and no provider-subject index.

Password-reset tokens, rate-limit events, schema-migration bookkeeping, password hashes and provider subjects are deliberately not converted into permanent Saved Data resources. The export report records these exclusions, missing tables, invalid JSON and any unexpected source columns.

## Disposable verification gate

The executable contract creates a temporary SQLite fixture, exports it twice, verifies the source hash is unchanged, checks that fixture password/provider values never enter the shadow tree or evidence, compares all source-owned resources, tests deterministic reruns and rejects intentional tampering. It never opens the configured production database or production Saved Data.

## Still required before migration

- run the combined validator against a separately copied production database;
- review the generated counts and representative-record evidence;
- resolve any invalid or unmapped fields;
- define exact per-resource payload schemas beyond the account projection;
- define and test rollback for a partial production cutover;
- do not enable a JSON writer or change live authority until those comparisons pass.
