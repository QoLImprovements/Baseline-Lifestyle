# Phase 5 — Production Saved Data Completion Evidence

Status date: 2026-09-20  
Repository: `QoLImprovements/Baseline-Lifestyle`  
Working branch: `saved-data-completion-20260913`

## Outcome

Phase 5 is operationally complete for the production state that was actually observed and verified in September 2026.

Production is running:

```ini
BASELINE_RESOURCE_AUTHORITY="saved-data"
```

Authentication remains in the protected SQLite database and canonical application resources remain in the private Saved Data tree.

The repository and deployed production commit at final verification were:

```text
324b3bbb4e75872bac5883f865e504fb5536439f
```

The local working branch, remote working branch, remote `main`, and deployed production release all matched that commit.

## Historical transition discrepancy

The September Phase 5 runbooks describe the intended transition:

`sqlite → mirror → final write-free snapshot → rollback package → saved-data`

That historical transition was **not observed during the September verification work**. Production was already in `saved-data` mode when the current deployment state was first inspected.

The transition was therefore not recreated merely to satisfy the historical sequence. Doing so would have created unnecessary risk to legitimate newer Saved Data writes.

The evidence in this document establishes the current production architecture, backup/restore capability and current-state rollback readiness. It does **not** claim that the earlier `sqlite → mirror → saved-data` transition was independently witnessed.

## Production storage and isolation

Verified production responsibilities:

| Location / component | Responsibility | Final status |
|---|---|---|
| `public_html/` | Deployed application source | Verified deployed commit |
| `private-auth/baseline.sqlite` | Authentication and protected SQLite state | Healthy |
| `Saved Data/` | Canonical revisioned resource authority | Healthy |
| `Runtime/` | Locks and temporary files | Private |
| `Migration Evidence/` | Recovery packages and redacted operational evidence | Private |
| `.baseline-private.env` | Private configuration | Recoverable and private |

Direct HTTP checks against the tested private paths returned 404 for both HEAD and GET.

## Hostinger backup coverage

The downloaded Hostinger account file backup was:

```text
u470362356.20260918230950.tar.gz
7,710,864,803 bytes
SHA-256: 962C164D02DE7CA8623BDDD376B59A3DB0B6F05FB30A0CDB653A2D5FF9A69047
```

Archive inspection found:

- `private-auth/baseline.sqlite`;
- the private `Saved Data/` tree;
- `.baseline-private.env`;
- private Runtime and Migration Evidence paths.

The separate Hostinger `.sql.gz` download was classified as a MySQL/MariaDB-style Hostinger database dump and was **not** treated as authentication-SQLite recovery evidence.

## Isolated restore drill

A private local restore drill was performed without restoring anything to production.

Results:

- authentication SQLite extraction: **PASS**;
- `PRAGMA integrity_check`: **PASS**;
- `PRAGMA foreign_key_check`: **PASS**;
- required authentication schema: **PASS**;
- Saved Data extraction: **PASS**;
- restored resource structural/JSON/schema-version/revision checks: **PASS** for all resources inspected;
- Account Index verification: **PASS**;
- Saved-Data-only material preservation: **PASS**;
- private configuration recovery/readability: **PASS**.

The drill did not change production and did not modify the original downloaded backup.

## Current-data rollback readiness

Because production had received legitimate Saved Data writes after the historical cutover, rollback readiness was proven from the **current** state rather than from an older SQLite backup.

The current recovery package used:

- a current protected authentication SQLite snapshot;
- a current Saved Data recovery copy;
- a newly constructed rollback SQLite database;
- a preservation manifest/evidence for Saved-Data-only content.

The final private recovery package was created under a timestamped directory in production `Migration Evidence/`. Private contents are intentionally not committed to Git.

Final current-state validation:

| Check | Result |
|---|---|
| Current authentication snapshot | PASS |
| Current Saved Data recovery copy | PASS |
| New rollback SQLite construction | PASS |
| SQLite integrity check | PASS |
| SQLite foreign-key check | PASS |
| Converted-resource semantic coverage | PASS |
| Account Index | PASS, without repair |
| Live Saved Data health | PASS — 16 resources |
| Authentication SQLite health | PASS |
| Private HTTP-path checks | PASS |
| Saved-Data-only preservation | PASS |
| Production authority remained `saved-data` | PASS |
| Live application data/configuration remained unchanged | PASS |

Timestamp representation differences in account/favourites and Fitness identifier remapping were verified as representation differences rather than semantic data loss.

## Skincare rollback defect and repair

The first current-state rollback drill found one real defect: the rollback builder preserved the complete current `skincare.json`, but legacy SQLite Skincare tables retained older `logs` and `groups`.

That meant an actual future SQLite-authority rollback could have exposed stale Skincare content.

The defect was fixed in:

`sitewide/migration/build_sqlite_rollback_copy.php`

The rollback builder now reconstructs the SQLite-representable Skincare state from current Saved Data:

- visibility;
- routine;
- logs;
- groups;
- assignments.

The full `skincare.json` remains preserved outside SQLite for Saved-Data-only content.

Regression coverage was added to:

`tests/resource-cutover-rollback-contract.php`

GitHub CI passed the complete website workflow before the fix was merged. The final production deployment and current-state rollback package then verified that the stale Skincare logs/groups problem was resolved.

## Saved-Data-only preservation

The current rollback evidence preserves resource state that must not be discarded merely because historical SQLite cannot fully represent it, including:

- complete Skincare Saved Data;
- Baseline Realm Saved-Data-only sections;
- Fitness Routine;
- Food;
- optional Fitness sections;
- Account Index;
- resource revisions.

Rollback remains a compatibility operation. It must never delete the canonical Saved Data tree.

## Remaining operational limitation

The hosting environment did not expose a readable application/server error log during final verification.

Therefore comprehensive server-error-log inspection remains unavailable.

This is retained as an explicit operational limitation rather than being inferred as a pass. Live Saved Data health, authentication health, direct private-path checks, current-state fingerprints and rollback validation all passed.

## Phase 5 completion boundary

The following are now established:

- production is explicitly `saved-data` authoritative;
- the deployed release matches reviewed `main`;
- authentication SQLite remains private and healthy;
- canonical Saved Data is private and healthy;
- Account Index is consistent;
- Hostinger backup coverage includes required recovery material;
- an isolated restore drill passed;
- current-state rollback SQLite can be constructed and validated;
- Saved-Data-only material is separately preserved;
- private paths fail closed over HTTP;
- the Skincare rollback defect discovered during real rollback verification was repaired, tested, merged and deployed;
- verification did not change live application data, configuration or authority.

Phase 6 may proceed from this established production state.

## Related documents

- `PHASE_5_HOSTINGER_DEPLOYMENT_FIRST_HALF_20260918.md` — intended first-half deployment procedure.
- `PHASE_5_SAVED_DATA_CUTOVER_SECOND_HALF_20260918.md` — intended transition procedure.
- `CURRENT_ARCHITECTURE_AND_HOSTINGER_STATUS_20260823.md` — architecture reference; later completion evidence in this document supersedes its pending-Hostinger statements.
