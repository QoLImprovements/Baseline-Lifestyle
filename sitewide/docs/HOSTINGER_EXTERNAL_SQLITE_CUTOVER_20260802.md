# Hostinger external SQLite Saved Data cutover — 2 August 2026

## Final production decision

Baseline Lifestyle will keep SQLite as the authoritative live database and place the database file in the private base-level `Saved Data` folder outside `public_html`.

This directly meets the operational requirement that deleting and re-uploading website code must not overwrite accounts, Fitness plans, game progress, voice settings or shared Badminton state. It avoids a high-risk rewrite of every proven database reader and writer into JSON.

The existing runtime already supports this architecture:

- `BASELINE_DB_PATH` is allowlisted in the protected `.baseline-private.env` file;
- `bl_db_path()` uses that value before the legacy in-code default;
- every current account, Fitness, Games Hub, voice, favourite, Binaural and Badminton API continues to use the same SQLite authority;
- the JSON Saved Data exporter remains a validated shadow export and recovery/inspection tool, not live authority.

## Copied-production-data evidence

The supplied separately copied production database was reviewed read-only.

Privacy-safe result:

- SQLite quick check: passed;
- SQLite integrity check: passed;
- foreign-key violations: zero;
- expected source tables: all present;
- unclassified source tables: zero;
- invalid JSON records: zero;
- unmapped database fields: zero;
- accounts: 1;
- Fitness plans: 1;
- Fitness sessions: 20;
- game profiles: 7;
- voice settings: 1;
- shared Badminton states: 1;
- retired `submissions` rows: zero;
- password hashes and provider subjects: excluded from the JSON shadow export.

The isolated execution environment used for the copied-data review did not provide PHP's PDO SQLite driver. The equivalent read-only checks and export were therefore executed with Python's SQLite driver. The merged PHP validator remains the required command on Hostinger, where the website already depends on PDO SQLite.

## Required private paths

Use paths beside—not inside—`public_html`:

```text
/home/ACCOUNT/Saved Data/Database/baseline.sqlite
/home/ACCOUNT/Saved Data/Evidence/
/home/ACCOUNT/Runtime/
/home/ACCOUNT/.baseline-private.env
/home/ACCOUNT/public_html/
```

Replace `/home/ACCOUNT` with the actual Hostinger account home path.

Private directory permissions should be `0700`; the SQLite database, evidence files and `.baseline-private.env` should be `0600` where the hosting filesystem supports Unix permissions.

## Pre-cutover preparation

1. Create a fresh Hostinger backup.
2. Confirm that the backup includes the base-level private folders, not only `public_html`.
3. Put the website into a write-free maintenance window. Do not copy an actively changing SQLite file.
4. In `public_html/sitewide/api/`, check for:

   ```text
   baseline.sqlite-wal
   baseline.sqlite-shm
   baseline.sqlite-journal
   ```

   When any exists, do not move only `baseline.sqlite`. Stop writes and allow SQLite to close/checkpoint first.
5. Retain the original database in place until the new path has passed verification and live smoke testing.

## Copy the database

Copy—not move—the current live file from:

```text
/home/ACCOUNT/public_html/sitewide/api/baseline.sqlite
```

to:

```text
/home/ACCOUNT/Saved Data/Database/baseline.sqlite
```

Set the copied file to private permissions.

## Verify the copied private database before switching

From the repository root, run:

```bash
php sitewide/migration/verify_external_sqlite.php \
  --database="/home/ACCOUNT/Saved Data/Database/baseline.sqlite" \
  --document-root="/home/ACCOUNT/public_html" \
  --evidence="/home/ACCOUNT/Saved Data/Evidence/pre-switch.json"
```

The command must exit `0` and report every gate as `true`, including:

- database readable and writable;
- parent directory writable;
- outside document root;
- private permissions;
- quick and integrity checks passed;
- no foreign-key violations;
- all required tables present.

This command is read-only and does not change authority.

## Change the active path

Edit the base-level private file:

```text
/home/ACCOUNT/.baseline-private.env
```

Add or replace exactly:

```ini
BASELINE_DB_PATH="/home/ACCOUNT/Saved Data/Database/baseline.sqlite"
```

Do not put the setting in a file within `public_html`. Keep `.baseline-private.env` at mode `0600` or stricter.

## Verify the configured authority

Run the verifier again without `--database`; this proves that the application's environment resolution selects the private file:

```bash
php sitewide/migration/verify_external_sqlite.php \
  --document-root="/home/ACCOUNT/public_html" \
  --evidence="/home/ACCOUNT/Saved Data/Evidence/post-switch.json"
```

The content SHA-256 in `post-switch.json` must match `pre-switch.json` before any new live write occurs.

## Live smoke test

After leaving maintenance mode, perform one controlled test for each authority path:

1. Sign in with the existing account.
2. Load the existing Fitness plan and its current session.
3. Save and reload one harmless Fitness change.
4. Open the Games Hub and confirm the seven existing profiles load.
5. Save one harmless game-state change and reload it.
6. Load and save voice settings.
7. Load shared Badminton state.
8. Confirm favourites and Binaural endpoints return normally even when they currently contain no rows.
9. Review PHP error logs for database-open, permission, locking or schema errors.
10. Run `verify_external_sqlite.php` again and retain the evidence.

## Rollback

Rollback is one environment-line change:

1. Re-enter maintenance mode.
2. Remove or comment out `BASELINE_DB_PATH` in `.baseline-private.env`, or set it back to the original absolute database path.
3. Confirm the original database still exists and has not been overwritten.
4. Run the verification command against the original path.
5. Leave maintenance mode and repeat the sign-in/Fitness/Games smoke checks.

Do not attempt to merge two SQLite files after both have accepted writes. Once the new private path is active, the original must remain a rollback snapshot and must not continue receiving traffic.

## Retention and deployments

After a successful stability period and backup restore proof:

- keep the authoritative database only in the private `Saved Data/Database` folder;
- ensure code-deployment procedures delete or replace only `public_html`;
- exclude the private Saved Data and Runtime folders from ordinary website uploads;
- keep automated Hostinger backups plus an encrypted external recovery copy;
- keep the validated JSON shadow exporter available for inspection and disaster-recovery conversion;
- do not enable the currently unwired JSON readers/writers merely because the shadow export validates.

## Completion boundary

Repository preparation, copied-data inspection, schema decisions, external-path support, verification tooling and rollback instructions are complete.

The actual authority switch is complete only after authenticated Hostinger access is used to copy the live file, update `.baseline-private.env`, run the verifier and pass the live smoke test. No repository or offline tool can truthfully perform that server-side operation without Hostinger access.
