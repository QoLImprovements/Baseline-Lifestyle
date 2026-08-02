# Copied SQLite validation evidence gate — 2 August 2026

## Purpose

The repository has one fail-closed command for the first real copied-production-data exercise. It combines the security-aligned read-only exporter and independent verifier, then writes a separate privacy-safe evidence file.

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
3. Exports the shadow Saved Data tree through staging and atomic replacement.
4. Produces account projections without password hashes or provider subjects.
5. Writes shared Badminton state only to `Shared/badminton-session.json`.
6. Independently regenerates the expected tree from the same copy.
7. Compares every expected file, JSON envelope, hash, path and private permission.
8. Rejects missing tables, invalid source records, unmapped source fields, unexpected files, credential-field leakage and content differences.
9. Writes a separate evidence file with mode `0600` on Unix-like hosts.

## Evidence contents

The evidence contains only information needed to review the migration gate:

- copied-source SHA-256, size and modification time;
- complete exported-tree SHA-256;
- resource counts;
- missing-table names;
- invalid-record counts grouped by source and reason;
- unmapped field names, never their values;
- explicitly excluded authentication field names;
- number of checked files;
- up to three representative padded user-folder IDs and game-resource IDs;
- pass/fail state for each copied-data gate, including credential exclusion.

It deliberately excludes usernames, names, email addresses, provider subjects, password hashes, favourites, plan contents, workout values, game payloads and Badminton player data. Password hashes and provider subjects are also excluded from the shadow Saved Data tree itself; they remain in the hardened authoritative authentication store.

## Fail-closed behaviour

Any failed gate writes `ok: false`, records only a sanitised error summary and returns a non-zero CLI exit. Invalid, unmapped or credential-bearing account content is never silently accepted.

Even a fully passing result always records:

```json
{
  "readyForProductionCutover": false,
  "productionAuthority": "sqlite",
  "productionAuthorityChanged": false
}
```

A passing copied-data validation means only that the isolated security-aligned export matches the supplied copy. It does not prove Hostinger backup coverage, live restore, write control, concurrency handling, production permissions or rollback readiness.

## Required human review

Before planning a cutover, review the evidence and the private shadow tree for:

- expected account and resource counts;
- absence of missing tables;
- zero invalid records;
- zero unmapped fields;
- confirmed exclusion of `pass_hash` and `google_sub`;
- representative resources corresponding to expected internal IDs;
- no unapproved resource types or obsolete Badminton paths;
- successful Hostinger backup and harmless restore evidence gathered separately.

Do not publish the shadow tree or account files as CI artifacts. Keep the copied database, shadow export and evidence outside `public_html` with private permissions, then securely remove temporary copies when the review is complete.
