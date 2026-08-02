# Saved Data runtime cutover — 2 August 2026

## Authority modes

`BASELINE_RESOURCE_AUTHORITY` controls only user/shared resource storage. Authentication credentials remain in protected SQLite.

| Mode | Reads | Writes | Use |
|---|---|---|---|
| `sqlite` | SQLite | SQLite | Safe deployment default |
| `mirror` | SQLite | SQLite, then complete Saved Data snapshots | Migration observation and browser-data import |
| `saved-data` | Saved Data files | Saved Data files | Final resource authority after verification |

The default is `sqlite`. An invalid value fails closed. `mirror` and `saved-data` also require valid absolute `BASELINE_SAVED_DATA_PATH` and `BASELINE_RUNTIME_PATH` values outside the document root.

## Private Hostinger layout

```text
/home/ACCOUNT/
├── .baseline-private.env
├── private-auth/
│   └── baseline.sqlite
├── Saved Data/
│   ├── Account Index/
│   ├── Users/
│   └── Shared/Badminton/
├── Runtime/
│   ├── Locks/
│   └── Temporary Files/
├── Migration Evidence/
└── public_html/
```

`Saved Data` and `Runtime` must be on the same filesystem so final replacement uses an atomic rename.

Example private settings:

```ini
BASELINE_DB_PATH="/home/ACCOUNT/private-auth/baseline.sqlite"
BASELINE_SAVED_DATA_PATH="/home/ACCOUNT/Saved Data"
BASELINE_RUNTIME_PATH="/home/ACCOUNT/Runtime"
BASELINE_RESOURCE_AUTHORITY="sqlite"
```

The private environment file must remain outside `public_html`, must not be a symlink, and should use mode `0600`.

## Repository-supported resources

- account projection and Account Index synchronization;
- favourites;
- Binaural presets;
- voice settings;
- Fitness plans, sessions, achievements, body profile and current-workout recovery state;
- one physical file per approved played game;
- shared Badminton state.

Authentication password hashes and provider subjects remain only in protected SQLite.

## Controlled deployment sequence

### 1. Deploy without changing authority

Deploy the current application code while keeping:

```ini
BASELINE_RESOURCE_AUTHORITY="sqlite"
```

Confirm registration/login, Fitness, Games, voice, favourites, Binaural and Badminton still operate normally.

### 2. Create private directories and backup

Create the private directories above, set restrictive permissions, and take a fresh Hostinger backup plus a separate SQLite copy during a write-free maintenance window. Check that no unresolved `-wal`, `-shm` or `-journal` file exists.

### 3. Export the fresh SQLite copy

```bash
php sitewide/migration/validate_sqlite_copy.php \
  --source="/home/ACCOUNT/Migration Evidence/pre-cutover.sqlite" \
  --output="/home/ACCOUNT/Saved Data" \
  --evidence="/home/ACCOUNT/Migration Evidence/copied-data-evidence.json"
```

This command must pass. Its output contains only canonical live candidate resources; reports remain in the evidence directory.

### 4. Enable mirror mode

```ini
BASELINE_RESOURCE_AUTHORITY="mirror"
```

In this mode SQLite remains authoritative. Successful resource reads/writes refresh complete file snapshots. Signing into Fitness also imports eligible local Body Profile/current-workout state when the server copy does not already contain it. Conflicts do not overwrite server values silently.

Use each system normally and then inspect logs for write, revision, permission or path failures.

### 5. Run semantic cutover verification

```bash
php sitewide/migration/verify_saved_data_cutover.php \
  --database="/home/ACCOUNT/Migration Evidence/pre-cutover.sqlite" \
  --saved-data="/home/ACCOUNT/Saved Data" \
  --evidence="/home/ACCOUNT/Migration Evidence/cutover-verification.json"
```

The result must contain:

```json
{
  "ok": true,
  "readyForSavedDataMode": true,
  "productionAuthorityChanged": false
}
```

The verifier compares semantic resource data rather than envelope revision timestamps. Optional Fitness browser-owned sections are permitted while SQLite-derived plans and achievements must still match.

### 6. Prove backup and individual restore

Before changing authority, confirm the hosting backup includes `Saved Data`, `Runtime` configuration and the protected authentication database. Restore a harmless test resource into an isolated location and verify its SHA-256 before deleting the isolated copy.

### 7. Switch resource authority

After another fresh backup and a brief write-free window:

```ini
BASELINE_RESOURCE_AUTHORITY="saved-data"
```

Do not delete or move the SQLite authentication database. It remains required for login, registration, Google authentication, uniqueness and password recovery.

### 8. Live smoke tests

Test with the real account:

1. log in and refresh the account;
2. add/remove one favourite;
3. create/update/delete one Binaural test preset;
4. change and reload voice settings;
5. load Fitness, save Body Profile, create/edit a plan, update one session and confirm achievements;
6. load and save every existing played game independently;
7. verify one game change does not alter another game file;
8. load and submit an authorised Badminton change;
9. inspect server logs and Runtime for abandoned temporary files;
10. verify every changed resource revision increased.

Keep the pre-cutover SQLite copy and Hostinger backup until Saved Data operation has been proven over normal use.

## Rollback before Saved Data receives new writes

Set:

```ini
BASELINE_RESOURCE_AUTHORITY="sqlite"
```

and restore the verified pre-cutover database if required.

## Rollback after Saved Data receives new writes

Do not simply switch back to an older SQLite copy, because that would discard newer resource changes.

Build a new rollback database copy first:

```bash
php sitewide/migration/build_sqlite_rollback_copy.php \
  --source-database="/home/ACCOUNT/Migration Evidence/pre-cutover.sqlite" \
  --saved-data="/home/ACCOUNT/Saved Data" \
  --output-database="/home/ACCOUNT/Migration Evidence/rollback-current.sqlite" \
  --evidence="/home/ACCOUNT/Migration Evidence/rollback-current-evidence.json"
```

The builder:

- leaves the source database unchanged;
- preserves password hashes and provider subjects;
- projects current account/resource values into a new SQLite copy;
- validates integrity and foreign keys;
- reports optional Fitness Body Profile/current-workout sections that SQLite cannot represent.

After validating and backing up that output, point `BASELINE_DB_PATH` to the new rollback copy and set authority to `sqlite`. Leave the Saved Data tree intact so optional Fitness sections and recovery evidence are not destroyed.

## Retirement boundary

Do not retire SQLite authentication or remove rollback copies merely because Saved Data mode is functioning. Authentication remains intentionally protected in SQLite. Old resource tables may be retired only after prolonged verified operation, backup restoration proof and a separate reviewed migration.
