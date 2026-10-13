# Phase 4 — Hostinger / Production Cutover Readiness

Status: ACTIVE — repository verification complete; Hostinger runtime evidence still required where marked.

## Boundary

Phase 4 verifies production readiness only. It MUST NOT change production resource authority.

Required transition remains:

`sqlite -> mirror -> verify mirror -> saved-data`

A direct production switch to `saved-data` is prohibited.

## Production cutover checklist

| # | Prerequisite | Status | Evidence / required action |
|---|---|---|---|
| 1 | Confirm current production authority mode | MANUAL HOSTINGER ACTION REQUIRED | Run the Hostinger preflight against the deployed environment and confirm `BASELINE_RESOURCE_AUTHORITY` is explicitly configured and currently resolves to `sqlite`. Do not infer this from `.env.example` or development configuration. |
| 2 | Verify Hostinger PHP support | MANUAL HOSTINGER ACTION REQUIRED | Run `php sitewide/migration/hostinger_cutover_preflight.php --document-root=/absolute/path/to/public_html --evidence=/absolute/private/path/phase-4-preflight.json`. The preflight checks PHP 8+, `pdo_sqlite`, `json`, and required filesystem/runtime functions including `random_bytes`, `flock`, `rename`, `chmod`, `mkdir`, JSON encode/decode; it also reports `fsync` availability. |
| 3 | Verify private data locations are outside document root | MANUAL HOSTINGER ACTION REQUIRED | The deployed values of `BASELINE_DB_PATH`, `BASELINE_SAVED_DATA_PATH`, and `BASELINE_RUNTIME_PATH` must resolve outside `public_html`. The preflight rejects paths under the document root and symlinked ancestors. |
| 4 | Verify required Saved Data and Runtime directories exist | MANUAL HOSTINGER ACTION REQUIRED | Confirm the deployed Saved Data and Runtime roots exist before mirror preparation. The preflight requires both directories to exist. |
| 5 | Verify permissions and ownership | MANUAL HOSTINGER ACTION REQUIRED | Run the preflight under the same PHP/CLI user used by production deployment. It requires private permissions, readable/writable application access, safe parent permissions for SQLite, and no symlinked private path chain. Do not use unnecessarily broad permissions. |
| 6 | Authentication SQLite remains separate and credentials are excluded from Saved Data | VERIFIED | Repository contracts preserve authentication SQLite separately. The Saved Data exporter explicitly excludes `pass_hash` and `google_sub`, and tests reject credential leakage into Saved Data/evidence. Production placement of the SQLite file is still covered by items 3–5. |
| 7 | Verify Saved Data persistence across requests/restarts/deployments | MANUAL HOSTINGER ACTION REQUIRED | Confirm the configured Saved Data path is not a release/deployment directory and survives an application redeploy. Perform a harmless sentinel/readback test in the private Saved Data area before cutover, then redeploy/restart and verify the sentinel remains. Remove the sentinel afterwards. |
| 8 | Verify backup coverage for authentication SQLite and Saved Data | MANUAL HOSTINGER ACTION REQUIRED | Confirm Hostinger backup coverage includes both the external SQLite database path and the external Saved Data tree. Record backup location, retention, and whether restore can target both resources. |
| 9 | Verify restore procedure for authentication data, Saved Data and application | MANUAL HOSTINGER ACTION REQUIRED | Document and test a restore drill using non-production copies: restore application files, authentication SQLite, and Saved Data to a private test location; validate SQLite integrity and Saved Data tree health before considering the procedure proven. |
| 10 | Verify rollback tooling | VERIFIED | `sitewide/migration/build_sqlite_rollback_copy.php`, `verify_saved_data_cutover.php`, and the cutover package/round-trip contracts provide a defined SQLite rollback-copy path. Tests cover round-trip reconstruction, authentication snapshot drift detection, and blocked cutover when verification fails. |
| 11 | Verify production resource-authority configuration | MANUAL HOSTINGER ACTION REQUIRED | Production must explicitly configure `BASELINE_DB_PATH`, `BASELINE_SAVED_DATA_PATH`, `BASELINE_RUNTIME_PATH`, and `BASELINE_RESOURCE_AUTHORITY` via process environment or the protected `.baseline-private.env`. If the private file is used it must be outside `public_html`, non-symlinked, 16 KiB or smaller, and mode 600 or stricter. |
| 12 | Final production cutover checklist exists and authority remains unchanged | VERIFIED | This document is the Phase 4 checklist. Repository preflight code reports `productionAuthorityChanged=false` and refuses advanced authority state during pre-mirror preparation. Phase 4 does not authorize a production authority mutation. |

## Repository verification completed

The current `main` implementation contains and tests:

- `sitewide/api/resource_authority.php`
  - accepted modes are exactly `sqlite`, `mirror`, and `saved-data`;
  - default remains `sqlite`;
  - file-backed roots are required before non-SQLite modes can operate;
  - revision-protected resource mutations are supported.
- `sitewide/api/private_environment.php`
  - process environment is authoritative;
  - protected private-file fallback is allowlisted;
  - unsafe permissions, symlinks, oversized files, and parse failures are rejected.
- `sitewide/api/saved_data.php`
  - Saved Data and Runtime roots must be absolute;
  - document-root placement is rejected;
  - atomic/private write machinery and locking are provided.
- `sitewide/migration/hostinger_cutover_preflight.php`
  - checks explicit configuration, PHP/runtime support, private paths, permissions, filesystem compatibility, SQLite health, and current `sqlite` authority;
  - writes evidence only to a private location;
  - does not mutate production authority or write Saved Data.
- migration/cutover verification and rollback contracts
  - verify export integrity;
  - exclude authentication credentials from Saved Data;
  - detect Saved Data tampering/drift;
  - generate/test SQLite rollback copies;
  - fail closed when authority, paths, or snapshots are unsafe.

## Hostinger execution command

Run from the deployed application checkout, using absolute paths:

```bash
php sitewide/migration/hostinger_cutover_preflight.php \
  --document-root=/absolute/path/to/public_html \
  --evidence=/absolute/private/path/phase-4-preflight.json
```

Expected Phase 4 production result before Phase 5:

- `ok: true`
- `readyForMirrorPreparation: true`
- `authority.mode: "sqlite"`
- every preflight gate: `true`
- `productionAuthorityChanged: false`

Do **not** change `BASELINE_RESOURCE_AUTHORITY` during this Phase 4 verification.

## Phase 4 completion rule

Phase 4 is complete when:

1. this checklist exists;
2. every prerequisite is classified as either `VERIFIED` or `MANUAL HOSTINGER ACTION REQUIRED`;
3. no production authority change has occurred.

The actual manual Hostinger actions are prerequisites for Phase 5 cutover approval. Phase 5 must not begin authority mutation until the Hostinger preflight evidence and backup/recovery position have been reviewed.
