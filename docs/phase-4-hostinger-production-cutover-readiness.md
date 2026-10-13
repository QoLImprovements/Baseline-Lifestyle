# Phase 4 — Saved Data Production Verification and Recovery Readiness

Status: COMPLETE — production is operating with Saved Data authority. Phase 4 verification, recovery readiness, evidence cleanup, secret rotation, and documentation were completed on 13 October 2026. Phase 4 did not perform a resource-authority cutover.

## Production state and boundary

The production environment was already configured with:

`BASELINE_RESOURCE_AUTHORITY="saved-data"`

before the current Phase 4 inspection. The historical `sqlite -> mirror -> verify mirror -> saved-data` transition has therefore already occurred.

Phase 4 MUST NOT:
- switch production back to SQLite merely to repeat an obsolete plan;
- repeat the cutover;
- perform a destructive migration;
- overwrite live private data with an analysis/archive copy.

Phase 5 is final post-cutover production acceptance and requires explicit approval before it begins.

## Verified evidence

### Backup scope

Hostinger backup inspection on 13 October 2026 established that the domain backup includes the private sibling production data as well as `public_html`. The backed-up domain tree includes:
- `.baseline-private.env`
- `Migration Evidence/`
- `Runtime/`
- `Saved Data/`
- `private-auth/`
- `public_html/`

The backed-up `Saved Data/` tree is populated, including `Account Index/`, `Shared/`, and `Users/`.

### Reduced backup audit

A reduced copy of the current Hostinger backup was inspected separately. Results:
- archive integrity passed;
- 120 JSON files checked and valid;
- 17 current Saved Data JSON files checked and valid;
- `private-auth/baseline.sqlite` present;
- SQLite `quick_check` and `integrity_check` passed;
- SQLite foreign-key check returned zero violations;
- required authentication-related tables were present;
- no clear password hashes, reset secrets, API keys, private keys, or similar authentication secrets were found in current Saved Data.

The current authentication SQLite differs from the September rollback copy. September rollback/recovery material is therefore historical and must not be treated as the current recovery point.

## Current Phase 4 checklist

| Item | Status | Evidence |
|---|---|---|
| Backup scope established | VERIFIED | Hostinger backup includes private sibling production data and public_html. |
| Private backup method established | VERIFIED | Hostinger domain backup covers current private production structure. |
| Restore procedure documented | VERIFIED | Recovery procedure below. |
| Fresh current Saved Data live-health verification | VERIFIED | Live verifier returned `ok:true`, `healthySavedDataMode:true`, explicit `saved-data` authority, 17 resources, healthy auth DB, safe private paths, healthy tree, and `productionAuthorityChanged:false`. |
| Current authentication SQLite health | VERIFIED | Live verifier passed; recovery copy also passed `quick_check`, `integrity_check`, and zero foreign-key violations. |
| Authentication secrets excluded from Saved Data | VERIFIED | Backup audit found no clear authentication-secret material in current Saved Data. |
| Fresh current rollback/recovery package | VERIFIED | Built from current auth SQLite + current Saved Data; builder reported `sourceChanged:false`. |
| Fresh recovery package verified | VERIFIED | Rollback SQLite passed quick/integrity/FK checks and the archive listing confirmed current auth DB, complete Saved Data, live-health evidence, rollback SQLite and rollback evidence are present. |
| Obsolete Migration Evidence cleaned | VERIFIED | Superseded September health evidence removed after current recovery package verification. |
| Deployment persistence formally recorded | VERIFIED | Newer public_html deployment state coexists with intact private Saved Data, auth DB and Runtime. |
| Hostinger persistence/restart position | VERIFIED / N/A | Private sibling directories are persistent account filesystem storage; no artificial risky restart was required. |
| Exposed Charity Shop PIN/secret rotated | VERIFIED | Secret rotated privately and not recorded in GitHub/evidence/chat. |
| Phase 4 GitHub documentation corrected | VERIFIED | Documentation reflects existing Saved Data production state rather than an obsolete future cutover. |
| Phase 4 documentation merged to main | VERIFIED | Completion record merged after final verification. |

## Current live-health verification

Use the existing read-only verifier:

```bash
php sitewide/migration/verify_saved_data_live_health.php \
  --document-root=/absolute/path/to/public_html \
  --evidence="/absolute/private/path/Migration Evidence/phase-4-live-health-current.json"
```

The final production verification returned:
- `ok: true`;
- `healthySavedDataMode: true`;
- authority mode `saved-data`, source `private-env`;
- authentication database healthy;
- Saved Data and Runtime paths safe;
- private environment policy valid;
- Saved Data and Runtime on the same filesystem;
- Saved Data tree healthy;
- `resourceCount: 17`;
- Saved Data tree SHA-256 `4c4316c0fced311c87b968d5a60b3edc91e53b9ecf01de77f7da19715df8924f`;
- `productionAuthorityChanged: false`.

The verifier is read-only with respect to production authority.

## Recovery procedure

### Application restore
1. Restore/deploy `public_html` from the intended GitHub revision.
2. Do not copy private production state into `public_html`.

### Private configuration restore
1. Restore `.baseline-private.env` to the private domain sibling location.
2. Preserve private permissions.
3. Verify all configured paths are absolute and point outside `public_html`.
4. Verify `BASELINE_RESOURCE_AUTHORITY=saved-data`.

### Authentication restore
1. Restore the selected current `private-auth/baseline.sqlite`.
2. Preserve private directory/file permissions.
3. Run SQLite `PRAGMA quick_check`, `PRAGMA integrity_check`, and `PRAGMA foreign_key_check`.
4. Do not replace current authentication state with a September migration snapshot unless performing an explicitly selected historical disaster recovery.

### Saved Data restore
1. Restore the complete selected `Saved Data/` tree.
2. Preserve directory/file structure and private permissions.
3. Validate every resource as JSON and validate the Saved Data resource envelopes.
4. Verify the account index and representative user/shared resources.

### Runtime restore
1. Ensure `Runtime/`, `Runtime/Locks/`, and `Runtime/Temporary Files/` exist with private writable permissions.
2. Do not restore stale lock files as active runtime state.
3. Runtime is transient and is not the authoritative application-data store.

### Post-restore acceptance
1. Run `verify_saved_data_live_health.php`.
2. Confirm effective authority remains `saved-data`.
3. Confirm authentication works.
4. Confirm account index resolution.
5. Confirm representative Saved Data resources read correctly.
6. Do not resume normal operation if the health verifier reports a structural or authority failure.

## Fresh current recovery package

After current live-health verification passes, build a private current rollback SQLite copy using:

```bash
php sitewide/migration/build_sqlite_rollback_copy.php \
  --source-database="/absolute/private/path/private-auth/baseline.sqlite" \
  --saved-data="/absolute/private/path/Saved Data" \
  --output-database="/absolute/private/path/Migration Evidence/current-recovery/rollback.sqlite" \
  --evidence="/absolute/private/path/Migration Evidence/current-recovery/rollback-evidence.json"
```

The output and evidence must remain outside `public_html`. The builder validates SQLite integrity and foreign keys and checks that the source database did not change during construction.

The current package was built successfully from the live auth database and Saved Data. The builder recorded source SHA-256 `367fcaf9d6493210f791051021971c5ac081574aac4a4fd0454ca77d6ce98a10`, rollback SHA-256 `c5d6f3449933d0862c14414cf6d3ad3cea0424263d1c38c74119f79cd3c5916c`, `sourceChanged:false`, and successful reconstruction counts. The rollback database separately passed `PRAGMA quick_check`, `PRAGMA integrity_check`, and `PRAGMA foreign_key_check` with zero violations. A private recovery archive was then created and its contents verified to include the current authentication database, complete Saved Data tree, current live-health evidence, rollback SQLite and rollback evidence.

## Migration Evidence cleanup rule

Cleanup is permitted only after the fresh current recovery package has been created and verified.

Keep:
- one current live-health verification;
- one current verified recovery package;
- canonical cutover evidence;
- optionally one compact historical Saved Data health record;
- the Phase 4 backup audit.

Superseded historical rollback packages, pre-cutover SQLite snapshots, expected/current migration trees, temporary exports, pre-mirror evidence and superseded account-index evidence may then be removed.

Never delete as part of Migration Evidence cleanup:
- current `Saved Data/`;
- current `private-auth/baseline.sqlite`;
- current `.baseline-private.env`.

Do not manually clean Hostinger-managed `.builds` or `.trash` unless Hostinger provides a supported cleanup mechanism.

## Phase 4 completion gate

Phase 4 completion was achieved on 13 October 2026 after every required item was verified:
- backup scope and method;
- restore procedure;
- fresh current live-health verification;
- current authentication SQLite health;
- Saved Data authentication-secret exclusion;
- fresh current recovery package creation and verification;
- safe obsolete-evidence cleanup;
- deployment persistence;
- Hostinger persistence/restart position;
- exposed Charity Shop secret rotation;
- corrected Phase 4 documentation merged to `main`.

No production authority change was performed or required.

## Phase 5 boundary

Phase 5 is **Final Post-Cutover Production Acceptance**. It is not another SQLite-to-Saved-Data migration. Do not begin Phase 5 without explicit approval.
