# Phase 4 — Production Saved Data Cutover Readiness

Status date: 2026-09-18  
Repository: `QoLImprovements/Baseline-Lifestyle`  
Working branch: `saved-data-completion-20260913`

## Scope

This checklist completes Phase 4 readiness only.

It does **not** change production persistence authority and does **not** begin Phase 5.

The production transition remains:

`sqlite → mirror → verify → saved-data`

Every item below is classified as either:

- **Repository verified** — established by current source/contracts; or
- **Manual Hostinger/deployment action** — cannot be proven from Git and must be recorded with redacted operational evidence.

An old hosting observation is not treated as current proof.

---

## 1. Production authority and deployed release

| Prerequisite | Status | Evidence / required action |
|---|---|---|
| Supported authority modes are only `sqlite`, `mirror`, `saved-data` | Repository verified | `sitewide/api/resource_authority.php` rejects every other value. |
| Missing authority configuration defaults to `sqlite` | Repository verified | Source default only; this is **not** evidence of the deployed production value. |
| Actual production `BASELINE_RESOURCE_AUTHORITY` value known | Manual Hostinger/deployment action | Read the deployed process environment or private `.baseline-private.env` and record only the mode, not secrets. Do not infer it from source. |
| Exact deployed `main` commit known | Manual Hostinger/deployment action | Record the Hostinger-deployed Git commit before mirror/cutover work. |
| Production transition uses `sqlite → mirror → verify → saved-data` | Repository verified as required procedure | `.env.example` and current architecture documentation state the sequence. |
| Production authority remains unchanged during Phase 4 | Repository verified for repository work | No Phase 4 repository change sets the deployed authority value. |

---

## 2. PHP/runtime capability

Historical evidence recorded PHP 8.3 on 2026-08-02. That is not current proof.

| Prerequisite | Status | Evidence / required action |
|---|---|---|
| PHP 8+ | Repository requirement verified; deployment manual | Current code uses PHP 8 functions such as `str_starts_with`. Confirm the deployed PHP version again. |
| PDO SQLite available | Repository requirement verified; deployment manual | Authentication and rollback tooling require `pdo_sqlite`. Confirm `extension_loaded('pdo_sqlite')` on Hostinger. |
| JSON functions available | Repository requirement verified; deployment manual | Saved Data envelopes and migration tooling require JSON encode/decode. Confirm on Hostinger. |
| Cryptographic randomness available | Repository requirement verified; deployment manual | `random_bytes` is used for temporary names/tokens. Confirm on Hostinger. |
| File locking and atomic replacement functions available | Repository requirement verified; deployment manual | Saved Data uses `flock`, temporary writes and `rename`. Confirm a real private-path write on Hostinger. |
| `fsync` | Optional | Used when available; absence does not block the implementation. |

---

## 3. Private storage layout and permissions

Required production layout keeps persistence outside `public_html`.

| Prerequisite | Status | Evidence / required action |
|---|---|---|
| Saved Data root must be an absolute path | Repository verified | `saved_data.php` rejects a non-absolute Saved Data root. |
| Runtime root must be an absolute path | Repository verified | `saved_data.php` rejects a non-absolute Runtime root. |
| Saved Data and Runtime must be outside `DOCUMENT_ROOT` | Repository verified in code; deployment manual | Code rejects configured roots inside the document root. Confirm the real Hostinger paths. |
| Symlinked private directory ancestry rejected | Repository verified | Saved Data directory creation/writes reject symlink ancestors. |
| Private directories use restrictive permissions | Repository verified in code; deployment manual | Code applies mode `700`; confirm actual Hostinger ownership/mode. |
| Resource/private files use restrictive permissions | Repository verified in code; deployment manual | Resource writes apply mode `600`; confirm actual Hostinger mode. |
| Private environment file protected | Repository verified in code; deployment manual | Loader refuses symlinks, files larger than 16 KiB, or group/other permissions. Confirm deployed file is mode `600` or stricter. |
| Saved Data and Runtime temporary directory are on the same filesystem | Repository verified as enforced; deployment manual | Atomic writer raises `saved_data_and_runtime_must_share_filesystem` when device IDs differ. Exercise one safe test write on Hostinger. |
| Private paths are not web-accessible | Manual Hostinger/deployment action | Attempt direct HTTPS requests for private env, auth DB, Saved Data, Runtime and Migration Evidence locations/names and record that no private content is served. |
| Saved Data survives deployment/restart lifecycle | Manual Hostinger/deployment action | Write a non-sensitive probe/resource in the private Saved Data root, perform the normal Hostinger deployment/restart lifecycle, then verify identical content/checksum remains. |

The public-root Apache denial for `.sqlite`, `.db`, `.env`, `.ini`, `.log`, `.bak`, `.old` and `.zip` is defence in depth only. Production persistence must still remain outside `public_html`.

---

## 4. Authentication SQLite

The active authentication database remains intentionally separate from Saved Data.

| Prerequisite | Status | Evidence / required action |
|---|---|---|
| Password hashes stay in SQLite | Repository verified | Secure Saved Data export excludes `pass_hash`. |
| Provider subjects stay in SQLite | Repository verified | Secure Saved Data export excludes `google_sub`. |
| Password reset/recovery credentials are not exported as permanent Saved Data | Repository verified | Exporter intentionally excludes `password_reset_tokens`. |
| Production DB is outside document root | Repository requirement verified; deployment manual | Confirm actual `BASELINE_DB_PATH` and location on Hostinger. |
| Auth DB health/foreign keys/schema are valid | Tooling verified; deployment manual | Run the external SQLite verifier/read-only integrity checks against the deployed private DB and retain redacted evidence. |
| Auth DB remains available after application rollback | Repository verified by rollback design | Rollback builder begins from an authentication SQLite source copy and overlays representable Saved Data without replacing password hashes/provider subjects. |

Do not delete or migrate authentication secrets to JSON during Saved Data cutover.

---

## 5. Backup readiness

Historical documentation reports daily Hostinger backups and a manual pre-deployment backup on 2026-08-02, but private-path inclusion and restore proof were explicitly unproven. Therefore current backup readiness requires fresh evidence.

| Backup prerequisite | Status | Required action |
|---|---|---|
| Authentication SQLite included in recoverable backup | Manual Hostinger/deployment action | Confirm the private `private-auth/baseline.sqlite` path is covered. Record backup timestamp/retention without exposing data. |
| Saved Data tree included in recoverable backup | Manual Hostinger/deployment action | Confirm the entire private Saved Data tree is covered, including user/game/shared resources. |
| Any other intentionally required SQLite persistence included | Manual Hostinger/deployment action | Inventory intentional SQLite files at cutover time; include each required file or state explicitly that auth SQLite is the only required SQLite authority remaining. |
| Private environment/config recoverable | Manual Hostinger/deployment action | Confirm backup inventory or a separate secure configuration recovery method. Never paste secret values into evidence. |
| Runtime included | Not required for data recovery by default | Locks, leases and temporary files are disposable and must not be restored over active runtime state. |
| Backup is actually restorable | Manual Hostinger/deployment action | Perform the restore drill below. A backup listing alone is not sufficient. |

### Restore drill

1. Create `Saved Data/Backup Verification/hostinger-restore-probe.txt` containing only a date, `Baseline restore probe`, and a random non-secret identifier.
2. Set the directory/file to private permissions and record byte size plus SHA-256.
3. Wait for a completed backup that includes the probe.
4. Move the original probe aside rather than deleting it.
5. Restore the probe from backup, preferably to an alternate location or as an individual file.
6. Verify restored byte size and SHA-256 are identical.
7. Record whether Hostinger restored one file, one directory, or a wider backup unit.
8. Remove the restored test artifact after evidence is recorded.

For the authentication database, also prove recovery without overwriting the live database:

1. restore/copy the backed-up SQLite file to a private alternate path;
2. run `PRAGMA quick_check`, `PRAGMA integrity_check` and `PRAGMA foreign_key_check` read-only;
3. confirm the expected authentication/application tables are present;
4. remove the alternate restored copy only after the evidence is recorded.

A live SQLite file must not be copied casually while WAL/journal state may be outstanding. Use Hostinger's consistent backup/restore facility, a quiesced source, or another SQLite-consistent copy process.

---

## 6. Cutover verification tooling

| Prerequisite | Status | Evidence / required action |
|---|---|---|
| Read-only SQLite → Saved Data comparison tooling exists | Repository verified | `sitewide/migration/verify_saved_data_cutover.php`. |
| Verification does not itself change production authority | Repository verified | Report explicitly returns `productionAuthorityChanged=false`. |
| Missing resources are reported | Repository verified | Cutover verifier emits `missing_resource`. |
| Divergent resources are reported | Repository verified | Cutover verifier emits `resource_mismatch`. |
| Unexpected resources are rejected unless recognised as Saved-Data-native | Repository verified | Native-resource allowlist covers current Saved-Data-only resources/sections. |
| Authentication secrets are excluded from Saved Data comparison/export | Repository verified | Secure exporter omits password hashes/provider subjects. |
| Mirror verification actually completed against production | Manual Hostinger/deployment action, required before Phase 5 switch | Run the verifier against a consistent production SQLite source and the mirror Saved Data tree. Any error blocks cutover. Record hashes/counts/redacted report. |

The verifier treats Saved-Data-native resources separately where SQLite has no equivalent representation. This prevents legitimate newer resource files from being mislabelled as an automatic cutover discrepancy.

---

## 7. Rollback readiness

Rollback is a **controlled compatibility rollback**, not a claim that every newer Saved Data structure can be represented in historical SQLite.

### Repository-verified rollback behaviour

`sitewide/migration/build_sqlite_rollback_copy.php`:

- starts from a protected SQLite source copy, preserving authentication secrets;
- overlays account identity fields that are representable without replacing password hashes/provider subjects;
- reconstructs Favourites;
- reconstructs Binaural presets;
- reconstructs Voice settings;
- reconstructs SQLite-representable Fitness plans/sessions/achievements;
- reconstructs canonical game profiles;
- reconstructs Shared Badminton;
- runs `PRAGMA integrity_check` and `PRAGMA foreign_key_check`;
- refuses to overwrite the source database;
- writes a separate rollback database;
- reports Saved Data that must remain preserved outside SQLite.

### Badminton Focused rollback

Badminton Focused has an explicit mapping:

`Users/{id}/Games/badminton-focused.json → games_profiles.app = badmintonfocused`

The rollback contract now includes dedicated coverage that:

1. legacy SQLite `badmintonfocused` exports to canonical `badminton-focused.json`;
2. a later Saved Data profile change is read from that canonical file;
3. rollback reconstructs the `badmintonfocused` SQLite row with the updated profile.

### Saved Data intentionally preserved outside rollback SQLite

The rollback report preserves/reports resources SQLite cannot fully represent, including:

- `Account Index/accounts.json`;
- `fitness-routine.json`;
- `food.json`;
- `skincare.json`;
- `fitness.json#profile`;
- `fitness.json#activeWorkout`;
- `fitness.json#progressionHistory`;
- additional non-profile sections of `Games/baseline-realm.json`.

These files/sections must remain backed up and must **not** be fabricated into unsupported SQLite fields.

### Rollback limitations and required operational handling

1. **Use a consistent SQLite source copy.** The rollback builder copies the supplied SQLite file before overlaying Saved Data. Do not point it at a live database while WAL/journal companion state may contain uncheckpointed data. Use a verified backup/restore copy or a quiesced/consistent SQLite copy.
2. **Do not replace live production data until the rollback copy validates.** Build to a separate private output path and inspect the JSON evidence first.
3. **Saved-Data-only resources remain outside SQLite.** A rollback of application authority must not delete them.
4. **Application rollback and data rollback are different operations.** Reverting source code does not itself justify restoring older persistent data.
5. **Authentication SQLite remains protected.** Never rebuild password hashes, provider subjects or recovery credentials from Saved Data.
6. **A rollback copy must be current.** Build a fresh copy from the current protected authentication SQLite source plus the current Saved Data tree immediately before any authority reversal.

---

## 8. Exact pre-Phase-5 operational gate

Phase 5 must **not** begin until all of the following have recorded evidence:

- [ ] deployed `main` commit identified;
- [ ] actual deployed `BASELINE_RESOURCE_AUTHORITY` identified;
- [ ] current PHP version and required extensions/functions confirmed;
- [ ] actual private DB/Saved Data/Runtime paths confirmed outside `public_html`;
- [ ] permissions/ownership confirmed;
- [ ] private paths tested as non-web-accessible;
- [ ] Saved Data persistence proven through deployment/restart lifecycle;
- [ ] authentication SQLite backup coverage confirmed;
- [ ] Saved Data backup coverage confirmed;
- [ ] any other required SQLite backup coverage confirmed;
- [ ] real restore drill passed;
- [ ] restored auth SQLite copy passed integrity/foreign-key checks;
- [ ] current production backup timestamp recorded;
- [ ] production authority is in the intended pre-cutover state;
- [ ] mirror mode has been deliberately enabled when appropriate;
- [ ] mirror verification completed with no unsafe discrepancy;
- [ ] current rollback SQLite copy built and validated;
- [ ] Saved-Data-only resources listed/preserved outside rollback SQLite;
- [ ] no unresolved migration discrepancy remains.

A failed item blocks authority cutover. It does not justify skipping the check.

---

## 9. Phase 4 conclusion

### Repository readiness

The repository contains the required authority controls, private-path guards, cutover verifier, rollback builder, explicit unsupported-resource preservation, authentication-secret separation, canonical Badminton Focused rollback mapping, and migration contracts.

### Deployment readiness

Hostinger-specific facts remain deliberately **unverified until operational evidence is recorded**. The exact manual actions are enumerated above; none should be silently marked complete from historical documentation.

### Authority state

Phase 4 does not authorize or perform the production switch to `saved-data`.

Phase 5 requires explicit user instruction and must stop on any failed backup, mirror, verification, isolation, revision, empty-state, migration, persistence or rollback prerequisite.
