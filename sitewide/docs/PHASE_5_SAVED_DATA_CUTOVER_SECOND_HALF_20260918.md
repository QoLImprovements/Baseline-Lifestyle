# Phase 5 — Saved Data Cutover, Second Half

Status date: 2026-09-18  
Repository: `QoLImprovements/Baseline-Lifestyle`  
Working branch: `saved-data-completion-20260913`

## Scope

This is the production transition half of Phase 5.

It starts only after the Phase 5 first-half Hostinger deployment/preflight gates are complete with production still on:

```ini
BASELINE_RESOURCE_AUTHORITY="sqlite"
```

The intended transition is:

`sqlite → mirror → final write-free snapshot → verify/package rollback → saved-data → live health`

Authentication remains in the protected SQLite database throughout.

This runbook supersedes the older August sequence wherever that sequence uses the original pre-mirror SQLite copy for final verification or rollback. A pre-mirror copy can become stale while mirror mode is active.

---

## 1. Enter mirror mode deliberately

Before changing authority:

- confirm the Phase 5 first-half preflight passed;
- confirm current Hostinger backup/restore evidence is still valid;
- record the exact deployed `main` commit;
- record the current active authentication database path;
- remove any temporary backup/deployment probe files from the Saved Data tree.

Change only:

```ini
BASELINE_RESOURCE_AUTHORITY="mirror"
```

Restart/reload the PHP application as required by Hostinger, then confirm the deployed authority is actually `mirror`.

Do not change `BASELINE_DB_PATH`, `BASELINE_SAVED_DATA_PATH` or `BASELINE_RUNTIME_PATH` during the same step.

### Mirror-mode smoke checks

Use the real application normally and verify:

- account/session reads still come from SQLite;
- Favourites writes still succeed;
- Binaural writes still succeed;
- Voice writes still succeed;
- Fitness plans/sessions/achievements still succeed;
- Fitness Body Profile/current-workout/progression migration does not overwrite a non-empty authoritative server section;
- Fitness Routine saves correctly;
- Food saves correctly;
- Skincare partial-section writes preserve unrelated sections;
- each played game writes only its own canonical file;
- Badminton Focused uses `Games/badminton-focused.json`;
- Shared Badminton remains separate;
- revision conflicts are visible and block unsafe resubmission;
- an authoritative empty server resource remains empty unless an explicit legacy import is chosen;
- no authenticated browser fallback silently replaces a failed server read/write.

Inspect PHP/server logs and Runtime for permission, lock, revision, JSON or atomic-write failures.

Remain in `mirror` if any fault is unresolved.

---

## 2. Take the final SQLite snapshot after mirror observation

The old pre-mirror snapshot is **not** the final cutover source.

After mirror observation is complete:

1. enter a brief write-free maintenance window;
2. stop application actions that can mutate SQLite or Saved Data;
3. take a new, SQLite-consistent private snapshot of the current live database;
4. place it in the private Migration Evidence directory;
5. set it to mode `600` or stricter.

Example name:

```text
/home/ACCOUNT/Migration Evidence/mirror-final.sqlite
```

Do not use a casual file copy while live `-wal`, `-shm` or `-journal` state may contain uncheckpointed data.

Use Hostinger's consistent backup/restore mechanism, a properly quiesced database, or another SQLite-consistent copy method.

The final snapshot must contain the current authentication state as well as the current SQLite-representable resource state.

---

## 3. Build the final cutover package

The repository provides:

`sitewide/migration/prepare_saved_data_cutover.php`

Run it while the write-free window is still active and production authority is still exactly `mirror`:

```bash
php sitewide/migration/prepare_saved_data_cutover.php \
  --database-snapshot="/home/ACCOUNT/Migration Evidence/mirror-final.sqlite" \
  --saved-data="/home/ACCOUNT/Saved Data" \
  --rollback-output="/home/ACCOUNT/Migration Evidence/rollback-current.sqlite" \
  --evidence="/home/ACCOUNT/Migration Evidence/final-cutover-package.json" \
  --document-root="/home/ACCOUNT/public_html"
```

### What this command proves

It fails closed unless:

- all production persistence settings are explicit;
- any used private environment file satisfies its security policy;
- current resource authority is exactly `mirror`;
- the configured Saved Data path matches the path being verified;
- the live authentication database is healthy;
- Runtime remains private and valid;
- the final SQLite snapshot is private and outside the document root;
- the rollback-output directory is private and outside the document root;
- the final SQLite snapshot is not the live database file;
- the final snapshot matches the **current live SQLite database exactly** at schema/table-data fingerprint level;
- Saved Data semantically matches the final SQLite snapshot for every SQLite-representable resource;
- legitimate Saved-Data-only resources are recognised separately;
- a new rollback SQLite copy can be constructed and passes SQLite integrity/foreign-key checks;
- the live SQLite database does not change during package creation;
- the snapshot does not change during package creation;
- the Saved Data tree does not change during package creation.

The database fingerprints include all non-internal SQLite tables and schema but output only hashes and row counts. Password hashes, provider subjects and reset-token values are therefore covered by freshness verification without being exposed.

The command does **not** change production authority.

Expected result:

```json
{
  "ok": true,
  "readyForSavedDataMode": true,
  "productionAuthorityChanged": false
}
```

If it returns false, remain in `mirror`. Do not switch authority.

---

## 4. Preserve the rollback package

Before the authority switch:

- retain `mirror-final.sqlite`;
- retain `rollback-current.sqlite`;
- retain `final-cutover-package.json`;
- retain the current Hostinger backup;
- ensure Saved-Data-only resources reported by the package remain backed up separately from rollback SQLite.

The rollback copy is deliberately not a complete replacement for Saved Data.

Resources/sections that SQLite cannot fully represent remain preserved outside SQLite, including current Saved-Data-only resources such as Food, Skincare, Fitness Routine and browser-native Fitness sections.

Do not delete the Saved Data tree as part of rollback preparation.

---

## 5. Take one more production backup

With the write-free window still active and the cutover package passing:

1. take/confirm a fresh Hostinger production backup;
2. record its timestamp;
3. confirm the authentication database and Saved Data tree are included;
4. retain the final mirror snapshot and rollback package separately in the private Migration Evidence directory.

If backup coverage or restore confidence is uncertain, do not switch authority.

---

## 6. Switch resource authority to Saved Data

Change only:

```ini
BASELINE_RESOURCE_AUTHORITY="saved-data"
```

Do not change or remove:

- `BASELINE_DB_PATH`;
- the authentication SQLite database;
- password/recovery data;
- the Saved Data tree;
- the rollback package.

Restart/reload the application as required.

Immediately confirm the deployed authority is actually `saved-data`.

If the host still reports `mirror` or `sqlite`, treat the switch as not completed.

---

## 7. Immediate live smoke tests

Keep the test set finite and reversible.

Verify:

- login and sign-out/sign-in;
- account reload;
- add/remove one Favourite;
- create/update/delete one Binaural test preset;
- change/reload Voice settings;
- load Fitness;
- save Body Profile;
- create/edit a Fitness plan;
- update one Fitness session;
- confirm achievements/progression remain coherent;
- load/save Fitness Routine;
- perform one Food save/readback;
- perform one Skincare partial-section save and confirm unrelated sections survive;
- load/save every existing played game independently;
- verify Badminton Focused affects only `badminton-focused.json`;
- verify one game write does not alter another game file;
- perform one authorised Shared Badminton update;
- verify every successful mutation increments only the intended resource revision;
- inspect PHP/server logs;
- inspect Runtime for abandoned temporary files/locks.

On an unexpected missing resource, corrupt resource, repeated revision conflict, silent browser fallback, cross-resource mutation or elevated 5xx condition, stop further non-essential writes and evaluate rollback.

---

## 8. Run post-cutover live health verification

The repository provides:

`sitewide/migration/verify_saved_data_live_health.php`

Run:

```bash
php sitewide/migration/verify_saved_data_live_health.php \
  --document-root="/home/ACCOUNT/public_html" \
  --evidence="/home/ACCOUNT/Migration Evidence/saved-data-live-health.json"
```

This verification is read-only except for the optional private evidence file.

It requires:

- explicit `saved-data` authority;
- explicit DB/Saved Data/Runtime paths;
- private-environment policy compliance when applicable;
- healthy authentication SQLite;
- private Saved Data and Runtime paths outside the document root;
- Saved Data and Runtime on the same filesystem;
- only canonical Saved Data directories/files;
- no symlinks;
- restrictive permissions;
- valid JSON resource envelopes;
- expected schema version;
- non-negative integer revisions;
- object/array resource data.

Expected result:

```json
{
  "ok": true,
  "healthySavedDataMode": true,
  "productionAuthorityChanged": false
}
```

Also run the existing read-only Account Index verifier:

```bash
php sitewide/migration/verify_account_index.php
```

Do not use `--repair` during the first live verification unless the mismatch has been diagnosed and the optimistic revision precondition is understood.

---

## 9. Rollback decision

### Before any Saved Data-only post-switch write

If the switch fails before Saved Data receives legitimate new writes, returning authority to `mirror` or `sqlite` may be possible after diagnosis, using the verified current data state.

Do not restore older data merely because application code is rolled back.

### After Saved Data receives new writes

Do **not** point production back to an older SQLite copy.

Use the already-prepared rollback copy only if it still represents the current state at the rollback boundary. If Saved Data has received newer writes after the cutover package was created, build a new rollback copy from:

- the current protected authentication SQLite source; and
- the current Saved Data tree.

Then validate the new rollback copy before any SQLite authority reversal.

Saved-Data-only resources must remain preserved outside SQLite.

### Immediate rollback triggers

Consider rollback when there is:

- authentication/session failure caused by the release;
- missing or corrupt user resources;
- unexpected cross-resource replacement;
- repeated unresolved revision conflicts;
- failed atomic writes;
- unsafe browser fallback;
- persistent 5xx errors on core routes;
- invalid live-health verification;
- evidence that Saved Data or Runtime has become publicly accessible.

---

## 10. Second-half completion gate

Phase 5 second half is complete only when production evidence confirms:

- [ ] mirror mode was deliberately enabled;
- [ ] mirror-mode smoke checks passed;
- [ ] final write-free maintenance window was established;
- [ ] a fresh SQLite-consistent final snapshot was created after mirror observation;
- [ ] `prepare_saved_data_cutover.php` returned `ok: true`;
- [ ] final snapshot matched the live SQLite database;
- [ ] semantic Saved Data verification passed;
- [ ] rollback copy was built and validated;
- [ ] live DB/snapshot/Saved Data remained stable during package creation;
- [ ] fresh backup was recorded;
- [ ] authority was deliberately switched to `saved-data`;
- [ ] immediate live smoke tests passed;
- [ ] `verify_saved_data_live_health.php` returned `ok: true`;
- [ ] Account Index verification passed;
- [ ] no unresolved server/storage/revision error remains;
- [ ] rollback material and Saved-Data-only resources remain preserved.

Repository tests can prove the command contracts. They cannot prove that Hostinger production actually completed these operational steps.

Do not mark the live cutover complete from Git evidence alone.
