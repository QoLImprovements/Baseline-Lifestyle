# Phase 6 — Saved Data Architecture Review

Status date: 2026-09-20  
Repository: `QoLImprovements/Baseline-Lifestyle`  
Working branch: `saved-data-completion-20260913`

## Purpose and review boundary

This review follows the production evidence recorded in `PHASE_5_COMPLETION_EVIDENCE_20260920.md`.

The final production architecture under review is:

- protected SQLite remains the authentication/account-identity authority;
- private revisioned JSON files under `Saved Data/` are the canonical application-resource authority;
- `Runtime/` contains locks, leases and same-filesystem temporary files;
- `Migration Evidence/` contains private recovery/evidence artifacts;
- browser storage is limited to reviewed device/session/cache/migration roles and must not become authenticated persistence authority.

The review covered persistence authority, empty-state semantics, browser migration, optimistic concurrency, partial writes, game isolation, failure behavior, private-path security, backup/rollback behavior and documentation authority.

## 1. Persistence authority

### Final authority

Production resource authority is explicitly:

```ini
BASELINE_RESOURCE_AUTHORITY="saved-data"
```

The Saved Data resource tree is authoritative for application resources.

SQLite remains intentionally required for authentication/account identity, password and provider credentials, recovery data and compatibility/rollback responsibilities. Authentication secrets are not exported into Saved Data.

### Supported transition modes

The source still supports `sqlite`, `mirror` and `saved-data` because migration and controlled rollback tooling require those modes.

`mirror` is a transitional compatibility mode rather than a final dual-authority design. It cannot provide a single cross-store atomic transaction across SQLite and JSON. Production is not currently using `mirror`.

## 2. Resource layout and isolation

Canonical server resources are physically separated:

- `Account Index/accounts.json`;
- `Users/{six-digit-id}/account.json`;
- `favourites.json`;
- `binaural.json`;
- `voice.json`;
- `fitness.json`;
- `fitness-routine.json`;
- `food.json`;
- `skincare.json`;
- one file per supported played game under `Games/`;
- `Shared/Badminton/badminton.json`.

Runtime coordination files do not live in Saved Data.

Path helpers require absolute private roots, reject document-root placement and unsafe path components, reject symlinked persistence entries, and use restrictive permissions.

Production verification confirmed the tested private paths fail closed over HTTP.

## 3. Saved Data envelope validation

A Phase 6 review found that runtime reads previously verified JSON parseability and the presence of `revision`/`data`, but did not fully enforce the canonical envelope contract on every read.

That could allow malformed schema versions, malformed revisions or scalar `data` values to be accepted until a later failure or overwrite.

The runtime reader now fails closed unless:

- `schemaVersion` is exactly the supported Saved Data schema version;
- `revision` is a non-negative integer;
- `data` is an array/object representation;
- `updatedAt`, when present, is null or a string.

Regression coverage exercises invalid schema, invalid revision type and invalid data shape.

## 4. Empty-state semantics and revision monotonicity

An authoritative empty account resource must remain authoritative and must not silently resurrect an older browser copy.

A Phase 6 review found an additional concurrency issue: some delete-if-empty paths physically removed a Saved Data file. A later read then returned revision `0`, allowing an old client that had also observed revision `0` to become valid again after an intervening create/delete cycle. This is an ABA-style revision reset.

Final behavior:

- once a Saved Data resource has been written, emptying it preserves an explicit revisioned empty envelope;
- its revision continues to increase;
- stale clients cannot regain validity merely because the logical content became empty;
- mirror/SQLite transition cleanup may still remove mirror files where the Saved Data revision is not the production authority.

Fitness empty-state handling follows the same rule.

Regression coverage proves a stale revision-`0` mutation is rejected after a create/empty cycle.

## 5. Optimistic concurrency

Persistent browser-originated Saved Data mutations require an observed `expectedRevision`.

The server returns a conflict rather than silently accepting a stale full-document write.

Reviewed browser clients handle conflicts by one or more of:

- blocking further writes;
- reloading current account state;
- preserving a local recovery copy;
- requiring an explicit user retry/review.

The architecture explicitly rejects the unsafe pattern of fetching a fresh revision and automatically resubmitting stale content.

The revision state is server-resource-specific; game resources maintain per-game revisions rather than a single Recreation revision.

## 6. Partial-resource writes

Where several application views share one canonical file, server endpoints perform read-normalise-mutate-replace behavior against the current resource revision so unrelated sections survive.

Important examples:

- Skincare routine/log writes preserve groups, assignments and slider state;
- Skincare group writes preserve routine/log/slider state;
- Skincare slider writes preserve routine/log/groups/assignments;
- Fitness Body Profile, active workout and progression history share `fitness.json` with plans/achievements without treating browser sections as separate files;
- Fitness Routine state and groups share one `fitness-routine.json` revision.

### Account Index limitation

`account.json` and `Account Index/accounts.json` are deliberately separate atomic resources. Updating the account projection and derived index is therefore not one filesystem transaction.

The index is reconstructable from account projections. The repository provides a read-only verifier plus an explicit optimistic repair path. Production verification passed without repair.

This remains an accepted derived-index consistency model rather than pretending that two physical files are transactionally atomic.

## 7. Browser storage and migration

`sitewide/migration/browser_storage_map.json` is the executable classification contract.

The repository inventory test scans production sources and requires every discovered browser-storage access group to have exactly one reviewed migration decision.

Current principles include:

- authenticated server data is authoritative even when empty;
- legacy account data requires explicit import where migration is supported;
- unresolved migration candidates are account-bound where account switching could otherwise expose them to the wrong account;
- conflict backups are review/recovery material, never auto-import authority;
- caches and navigation/session preferences remain non-authoritative;
- browser authentication preview/password material is never a migration source.

### Browser authentication cache repair

Phase 6 found that the legacy `__bl_local_session_v1__` key was still being read at startup and rewritten after authentication, even though the migration contract classifies it as obsolete and server sessions as authoritative.

That could temporarily make UI or migration code believe an unverified cached identity before `/me.php` confirmed the current server session.

The authentication client now:

- removes the obsolete local session/users keys;
- starts unauthenticated until the server confirms the session;
- keeps successful login/register state in memory;
- does not recreate a browser authentication-identity cache.

File-protocol previews remain explicitly non-authenticated.

## 8. Games persistence

Supported game saves remain physically independent.

Canonical files include:

- `baseline-realm.json`;
- `pairs.json`;
- `detect-word.json`;
- `make-24.json`;
- `track-coin.json`;
- `rule-shift.json`;
- `darts-focused.json`;
- `meridian-grove.json`;
- `badminton-focused.json`.

`hubsettings` is not an approved persistent game resource.

Badminton Focused is an individual game save and never aliases Shared Badminton.

Baseline Realm may contain Saved-Data-only sections within its own canonical file; rollback preservation reports those sections instead of fabricating unsupported SQLite columns.

Shared Badminton remains a separate protected shared resource with its own authorization and validation rules.

## 9. Failure behavior

Final Saved Data behavior is fail-closed for server persistence failures.

Reviewed safeguards include:

- malformed resources raise explicit corruption/configuration errors;
- stale writes return revision conflicts;
- authenticated clients do not silently promote device caches after failed account reads/writes;
- Shared Badminton blocks unsafe follow-up saves after load/save failure;
- Skincare and Fitness bridges preserve explicit conflict/recovery state;
- game migration/import is explicit and per-game;
- atomic resource replacement validates the temporary file before rename;
- Runtime temporary files share a filesystem with Saved Data so replacement remains atomic at the file level.

A failed account save is not converted into authenticated local persistence.

## 10. Security boundary

The final architecture keeps secrets and private persistent data outside the web root.

Repository guards include:

- absolute-path requirements;
- document-root exclusion;
- safe path-component rules;
- symlink checks;
- private environment allowlisting/size/permission checks;
- mode `700` directories and `600` resource files on Unix-like hosts;
- bounded JSON/resource sizes;
- schema/envelope validation;
- authentication-secret exclusion from Saved Data migration;
- private evidence rather than raw user records in migration reports.

Production HTTP isolation tests passed for the tested private paths.

## 11. Backup and rollback architecture

Stage 5 proved that the Hostinger file backup includes the required authentication SQLite, Saved Data and private configuration material and that selected recovery material can be restored into isolation.

Current-data rollback readiness was separately proven from a current authentication snapshot plus current Saved Data.

The rollback builder:

- starts from a protected authentication SQLite copy;
- preserves authentication credentials and unrelated protected tables;
- overlays the current SQLite-representable application state;
- validates integrity and foreign keys;
- never treats the rollback SQLite file as a complete replacement for Saved Data.

The real current-state drill exposed stale Skincare rollback mappings. That defect was repaired and production re-verification proved current Skincare visibility, routine, logs, groups and assignments are represented correctly.

Saved-Data-only content remains preserved separately.

## 12. Documentation authority

Current operational authority is:

1. `CURRENT_ARCHITECTURE_AND_HOSTINGER_STATUS_20260823.md` — current architecture, updated 2026-09-20;
2. `PHASE_5_COMPLETION_EVIDENCE_20260920.md` — actual production backup/restore/rollback evidence;
3. this Phase 6 review — final architecture review and accepted limitations;
4. `PHASE_6_PRODUCTION_COMPLETION_20260920.md` — final deployed-release verification and production completion evidence.

The September Phase 5 first/second-half documents remain the intended procedure for a controlled fresh cutover. They are not proof that their historical transition sequence was observed on this production instance.

Documents dated August 2026 are retained as historical design/checkpoint material unless a current document explicitly references a still-valid contract from them.

## 13. Accepted limitations

The review does not conceal these limitations:

- Hostinger did not expose a readable application/server error log during final Stage 5 verification, so comprehensive server-log inspection was unavailable.
- Account projection and Account Index are two separate physical resources; consistency is verified/reconstructable rather than cross-file transactional.
- Transitional `mirror` mode cannot make SQLite and JSON one atomic transaction; it is not the current production authority.
- A rollback SQLite copy cannot represent every Saved-Data-only resource/section; those remain preserved in the canonical Saved Data recovery set.

None of these limitations changes the final authority model.

## 14. Repository changes produced by Phase 6

Phase 6 made the following corrective changes:

1. strict canonical envelope validation on runtime Saved Data reads;
2. monotonic revision tombstones for Saved Data resources that become empty;
3. equivalent Fitness empty-state revision preservation;
4. removal of legacy browser authentication-session authority;
5. regression coverage for each of those behaviors;
6. current Stage 5 production evidence and architecture documentation.

These changes passed the repository CI workflow, were merged to `main`, and were verified in production on 2026-09-20. Production completion evidence is recorded in `PHASE_6_PRODUCTION_COMPLETION_20260920.md`.

## 15. Completion status

Phase 6 is complete.

Repository-side completion:

- the Phase 6 change set passed the repository CI workflow;
- the reviewed change set was merged to `main`.

Production completion:

- reviewed release `627a66925d57f9056a6a13bf81bfb47b872fc1ba` was deployed;
- production authority remained `saved-data`;
- the deployed commit was confirmed;
- live Saved Data health passed with 16 resources;
- authentication SQLite health passed;
- Account Index verification passed without repair;
- private-path isolation remained intact;
- public non-destructive smoke checks passed;
- authentication SQLite, Saved Data and private configuration remained intact.

The hosting environment still does not expose a readable application/server error log. See `PHASE_6_PRODUCTION_COMPLETION_20260920.md` for the final production evidence and remaining limitations.

