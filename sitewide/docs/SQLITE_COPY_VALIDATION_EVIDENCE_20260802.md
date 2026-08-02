# Copied SQLite validation evidence gate — corrected 2 August 2026

## Purpose

The fail-closed copied-data command inventories every source table, exports the supplied SQLite copy into the canonical resource-based Saved Data tree, independently regenerates and verifies that tree, and writes privacy-safe evidence.

It does not alter the live database, enable production readers/writers, migrate authentication credentials or approve cutover.

## Command

```bash
php sitewide/migration/validate_sqlite_copy.php \
  --source=/absolute/path/to/copied.sqlite \
  --output=/absolute/path/to/candidate-saved-data \
  --evidence=/absolute/path/to/copied-data-evidence.json
```

The source must be a separate copy. All paths are absolute and the evidence file remains outside the verified tree.

## Canonical output checked

The validator requires:

- `Account Index/accounts.json` where an account lookup is generated;
- stable `Users/{six-digit-id}/` folders;
- independent account, favourites, Binaural, Fitness and optional voice files;
- one canonical physical file per exported played game;
- `Shared/Badminton/badminton.json` for the one shared `global` Badminton state;
- no flattened `Shared/badminton-session.json` path;
- no raw database-app filenames such as `detectword.json`, `make24.json`, `trackcoin.json`, `ruleshift.json`, `dartsfocused.json` or `ninja.json`.

The game verifier confirms that each stored source app maps to the correct filename, including `ninja` → `baseline-realm.json`.

## Source-table classification

Every non-internal source table is classified as exported, deliberately excluded, accepted retired-and-empty, or blocking/unclassified. The retired `submissions` table is accepted only while empty. Any future row blocks validation so user content cannot be silently discarded.

## Evidence contents

The evidence includes source and tree hashes, source-table names/classifications, counts, missing-table names, invalid-record summaries, unmapped field names, explicit credential-field exclusions, checked-file totals, representative internal user/game identifiers and pass/fail gates.

It excludes names, email addresses, provider subjects, password hashes and resource payload values.

## Fail-closed behaviour

Validation fails on:

- an unknown or non-empty retired table;
- a missing expected table;
- invalid source JSON;
- an unsupported game identifier;
- a non-canonical path or filename;
- unmapped source fields;
- credential leakage;
- unexpected, missing, modified or permission-invalid files.

A passing result still records:

```json
{
  "readyForProductionCutover": false,
  "productionAuthority": "sqlite",
  "productionAuthorityChanged": false
}
```

This describes the current live source during migration. It does not redefine SQLite as the final architecture. The target production authority is the resource structure in `SAVED_DATA_STRUCTURE_AUTHORITY_20260802.md`.

## Required review before cutover

Confirm expected counts, zero invalid/unmapped/unclassified data, canonical game paths, the nested Badminton path, credential exclusion, complete Fitness and account schemas, eligible browser-data migration, protected live APIs, Hostinger backup/individual-resource restoration, controlled cutover and SQLite rollback.

Do not publish the copied database, candidate tree or account files as CI artifacts.
