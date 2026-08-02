# Copied SQLite validation evidence gate — 2 August 2026

## Purpose

The repository has one fail-closed command for the first real copied-production-data exercise. It combines a complete source-table inventory, the security-aligned read-only exporter and an independent verifier, then writes a separate privacy-safe evidence file.

This command does **not** point at the live database, write to SQLite, change production readers or writers, enable Saved Data authority, migrate authentication credentials, or approve a production cutover.

## Command

```bash
php sitewide/migration/validate_sqlite_copy.php \
  --source=/absolute/path/to/copied.sqlite \
  --output=/absolute/path/to/shadow-saved-data \
  --evidence=/absolute/path/to/copied-data-evidence.json
```

All three paths must be absolute. The source must be a separately created copy. The evidence file must be outside the export tree so that it cannot alter the tree being verified.

## What it performs

1. Opens the supplied SQLite copy in read-only and query-only mode.
2. Runs SQLite `quick_check`.
3. Enumerates every non-internal source table before export.
4. Classifies each source table as exported, deliberately excluded, accepted retired-and-empty, or unclassified.
5. Blocks validation if any table is unclassified or if an empty-only retired table contains records.
6. Exports the shadow Saved Data tree through staging and atomic replacement.
7. Produces account projections without password hashes or provider subjects.
8. Writes shared Badminton state only to `Shared/badminton-session.json`.
9. Independently regenerates the expected tree from the same copy.
10. Compares every expected file, JSON envelope, hash, path and private permission.
11. Rejects missing tables, invalid source records, unmapped source fields, unexpected files, credential-field leakage and content differences.
12. Writes a separate evidence file with mode `0600` on Unix-like hosts.

## Source-table classification

The inventory prevents a table that exists only in production from being silently ignored by repository fixtures.

Current classifications are:

- exported: accounts, favourites, Binaural presets, voice settings, Fitness plans/sessions/achievements, Games Hub profiles and shared Badminton state;
- deliberately excluded: password-reset tokens, rate-limit telemetry and schema-migration bookkeeping;
- retired and accepted only while empty: `submissions`;
- all other tables: unclassified and blocking.

`submissions` is not part of the current Fitness-owned schema. It is accepted only when its row count is zero. Any future row causes it to move into the blocking unclassified set so user content cannot be discarded merely because the table is considered legacy.

## Evidence contents

The evidence contains only information needed to review the migration gate:

- copied-source SHA-256, size and modification time;
- complete source-table classification by table name;
- complete exported-tree SHA-256;
- resource counts;
- missing-table names;
- invalid-record counts grouped by source and reason;
- unmapped field names, never their values;
- explicitly excluded authentication field names;
- number of checked files;
- up to three representative padded user-folder IDs and game-resource IDs;
- pass/fail state for each copied-data gate, including source-table classification and credential exclusion.

It deliberately excludes usernames, names, email addresses, provider subjects, password hashes, favourites, plan contents, workout values, game payloads and Badminton player data. Password hashes and provider subjects are also excluded from the shadow Saved Data tree itself; they remain in the hardened authoritative authentication store.

## Fail-closed behaviour

Any failed gate writes `ok: false`, records only a sanitised error summary and returns a non-zero CLI exit. Unclassified tables, non-empty retired tables, invalid data, unmapped fields or credential-bearing account content are never silently accepted.

Even a fully passing result always records:

```json
{
  "readyForProductionCutover": false,
  "productionAuthority": "sqlite",
  "productionAuthorityChanged": false
}
```

A passing copied-data validation means only that the isolated security-aligned export matches the supplied copy and every source table has a reviewed disposition. It does not prove Hostinger backup coverage, live restore, write control, concurrency handling, production permissions or rollback readiness.

## Required human review

Before planning a cutover, review the evidence and the private shadow tree for:

- every source table appearing in exactly one reviewed classification;
- no non-empty retired or unclassified tables;
- expected account and resource counts;
- absence of missing tables;
- zero invalid records;
- zero unmapped fields;
- confirmed exclusion of `pass_hash` and `google_sub`;
- representative resources corresponding to expected internal IDs;
- no unapproved resource types or obsolete Badminton paths;
- successful Hostinger backup and harmless restore evidence gathered separately.

Do not publish the shadow tree or account files as CI artifacts. Keep the copied database, shadow export and evidence outside `public_html` with private permissions, then securely remove temporary copies when the review is complete.
