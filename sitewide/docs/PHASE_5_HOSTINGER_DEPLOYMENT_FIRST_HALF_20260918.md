# Phase 5 — Hostinger Deployment, First Half

Status date: 2026-09-18  
Repository: `QoLImprovements/Baseline-Lifestyle`  
Working branch: `saved-data-completion-20260913`

## Purpose

This is the non-destructive first half of Phase 5.

The objective is to deploy the reviewed Saved Data-capable application to Hostinger, establish the real private storage/configuration boundary, and collect current deployment evidence **without changing resource authority away from SQLite**.

The hard stop for this half is:

```ini
BASELINE_RESOURCE_AUTHORITY="sqlite"
```

Do not enable `mirror` or `saved-data` during this half.

The second half begins only after this checklist is complete and will cover the fresh migration snapshot, mirror observation, semantic comparison, current rollback copy and final authority decision.

---

## 1. Required production layout

The intended Hostinger layout is:

```text
/home/ACCOUNT/
├── .baseline-private.env
├── private-auth/
│   └── baseline.sqlite
├── Saved Data/
├── Runtime/
│   ├── Locks/
│   └── Temporary Files/
├── Migration Evidence/
└── public_html/
```

The exact account/home path must come from Hostinger. Do not copy the placeholder `ACCOUNT` literally.

The database, Saved Data, Runtime and Migration Evidence locations must remain outside `public_html`.

### Directory preparation

Using Hostinger SSH or the equivalent file manager:

```bash
mkdir -p "/home/ACCOUNT/private-auth"
mkdir -p "/home/ACCOUNT/Saved Data"
mkdir -p "/home/ACCOUNT/Runtime"
mkdir -p "/home/ACCOUNT/Runtime/Locks"
mkdir -p "/home/ACCOUNT/Runtime/Temporary Files"
mkdir -p "/home/ACCOUNT/Migration Evidence"

chmod 700 "/home/ACCOUNT/private-auth"
chmod 700 "/home/ACCOUNT/Saved Data"
chmod 700 "/home/ACCOUNT/Runtime"
chmod 700 "/home/ACCOUNT/Runtime/Locks"
chmod 700 "/home/ACCOUNT/Runtime/Temporary Files"
chmod 700 "/home/ACCOUNT/Migration Evidence"
```

Do not move the live database merely to satisfy this layout. If the authentication database is not already in the intended private location, follow the separate external-SQLite verification/cutover procedure rather than improvising a move.

---

## 2. Explicit private configuration

Hostinger must have an explicit production value for each persistence setting. Source defaults do not count as deployment evidence.

Required values:

```ini
BASELINE_DB_PATH="/home/ACCOUNT/private-auth/baseline.sqlite"
BASELINE_SAVED_DATA_PATH="/home/ACCOUNT/Saved Data"
BASELINE_RUNTIME_PATH="/home/ACCOUNT/Runtime"
BASELINE_RESOURCE_AUTHORITY="sqlite"
```

Other secret settings remain deployment-specific and must not be copied into Git or evidence output.

If Hostinger uses the repository-supported private file fallback, place it beside `public_html` as:

```text
/home/ACCOUNT/.baseline-private.env
```

and apply:

```bash
chmod 600 "/home/ACCOUNT/.baseline-private.env"
```

The private environment loader refuses a symlink, a file larger than 16 KiB, or group/other access.

---

## 3. Current backup and restore evidence

Before deploying the Phase 5 source:

1. record the currently deployed production commit;
2. record the current authority mode;
3. create/confirm a current Hostinger backup;
4. confirm the private authentication SQLite path is included;
5. confirm the private Saved Data path is included;
6. confirm the private environment/configuration has a secure recovery method;
7. perform the harmless restore probe from the Phase 4 readiness checklist;
8. restore the authentication database backup to an **alternate private path**, not over the live file;
9. verify the restored database with read-only integrity, foreign-key and required-table checks.

A backup listing without a restore proof does not complete this gate.

Do not create a live SQLite backup with a casual filesystem copy while `-wal`, `-shm` or `-journal` state could contain uncheckpointed changes.

---

## 4. Deploy reviewed `main` with SQLite authority unchanged

Production deployment source must be reviewed `main`.

Before deployment:

- confirm the `main` commit SHA that Hostinger is expected to deploy;
- confirm `BASELINE_RESOURCE_AUTHORITY="sqlite"`;
- confirm no deployment process uploads a repository SQLite file, `.env`, Saved Data, Runtime, logs or archives into production;
- retain the current pre-deployment backup and rollback commit.

After deployment:

- record the exact commit reported by Hostinger;
- inspect deployment logs;
- verify the private database/Saved Data/Runtime timestamps were not unexpectedly mass-replaced;
- verify login/session, Favourites, Binaural, Voice, Fitness, Fitness Routine, Food, Skincare, Games and Shared Badminton still load through the SQLite-authoritative runtime;
- inspect PHP/server errors before proceeding.

This deployment is intentionally allowed to contain Saved Data-capable code while still using SQLite authority.

---

## 5. Run the Hostinger pre-mirror preflight

The repository now provides:

`sitewide/migration/hostinger_cutover_preflight.php`

Run it from the deployed release:

```bash
php sitewide/migration/hostinger_cutover_preflight.php \
  --document-root="/home/ACCOUNT/public_html" \
  --evidence="/home/ACCOUNT/Migration Evidence/stage5-pre-mirror-preflight.json"
```

The command does not change resource authority and does not write Saved Data or Runtime application state. When `--evidence` is supplied, it writes only the redacted evidence file to the already-existing evidence directory.

### The preflight blocks unless all of these pass

- PHP 8 or newer;
- required PHP extensions available;
- required filesystem/JSON/random functions available;
- `BASELINE_DB_PATH` explicitly configured;
- `BASELINE_SAVED_DATA_PATH` explicitly configured;
- `BASELINE_RUNTIME_PATH` explicitly configured;
- `BASELINE_RESOURCE_AUTHORITY` explicitly configured;
- any used `.baseline-private.env` satisfies its security policy;
- authority is still exactly `sqlite`;
- database path exists, is private, writable, outside the document root and symlink-safe;
- Saved Data path exists, is private, writable, outside the document root and symlink-safe;
- Runtime path exists, is private, writable, outside the document root and symlink-safe;
- Saved Data and Runtime are on the same filesystem;
- the authentication SQLite database passes structure, quick/integrity and foreign-key checks.

The evidence deliberately records path hashes/basenames rather than exposing absolute private paths.

Expected top-level result:

```json
{
  "ok": true,
  "readyForMirrorPreparation": true,
  "productionAuthorityChanged": false
}
```

Any failed gate blocks the second half.

---

## 6. Prove private storage persists independently of deployment

With authority still `sqlite`, test Hostinger's private-path lifecycle without touching user resources.

Use a non-sensitive probe under a dedicated private verification folder, for example:

```text
/home/ACCOUNT/Saved Data/Backup Verification/deployment-persistence-probe.txt
```

Record:

- file size;
- SHA-256;
- modification time.

Perform the normal Hostinger deployment/restart operation that production will use, then verify the probe is still present with the same size and SHA-256.

Delete only the dedicated probe after evidence is recorded.

Do not use an actual user resource as the persistence probe.

---

## 7. First-half smoke gate

Before declaring this half complete, verify:

- [ ] Hostinger deployed the expected reviewed `main` commit;
- [ ] production authority is explicitly `sqlite`;
- [ ] login and session remain functional;
- [ ] primary system routes load normally;
- [ ] representative SQLite-backed reads still work;
- [ ] no private path is web-accessible;
- [ ] required private directories exist with restrictive permissions;
- [ ] Hostinger backup coverage is current;
- [ ] restore probe passed;
- [ ] alternate restored authentication DB passed verification;
- [ ] deployment/restart persistence probe passed;
- [ ] `hostinger_cutover_preflight.php` returned `ok: true`;
- [ ] no unresolved PHP/server/storage error remains.

If any box fails, remain on SQLite authority and repair the failed prerequisite.

---

## 8. First-half completion boundary

When every gate above has evidence, Phase 5 first half is complete.

At that point:

- reviewed application code is deployed;
- the real Hostinger runtime/private path configuration has been verified;
- backups and restore behavior have current proof;
- private-path persistence across deployment/restart has been proven;
- the authentication database is healthy;
- Saved Data and Runtime are ready for controlled use;
- **SQLite is still authoritative**.

The second half may then create/validate the fresh migration snapshot and deliberately enter `mirror` mode.

No `saved-data` authority switch is authorized by this document.
