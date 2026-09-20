# Baseline Lifestyle — Current Architecture and Hostinger Status

Status date: 2026-09-20

This document is the current repository authority. Earlier dated audit, checkpoint and cutover documents are retained as historical evidence and must not be read as descriptions of the current runtime.

Phase 4 production readiness and the exact remaining Hostinger/deployment gates are tracked in `PHASE_4_PRODUCTION_CUTOVER_READINESS_20260918.md`. That checklist does not authorize or perform the Phase 5 authority switch.

Phase 5 first-half Hostinger deployment preparation is tracked in `PHASE_5_HOSTINGER_DEPLOYMENT_FIRST_HALF_20260918.md`. That runbook keeps resource authority explicitly on `sqlite` and stops before mirror mode.

Phase 5 second-half production transition is tracked in `PHASE_5_SAVED_DATA_CUTOVER_SECOND_HALF_20260918.md`. It requires `sqlite → mirror → fresh final SQLite snapshot → stable cutover package → saved-data`, and the final snapshot must be taken after mirror observation rather than reusing the older pre-mirror copy.

Current September production completion evidence is recorded in `PHASE_5_COMPLETION_EVIDENCE_20260920.md`. Production was already in `saved-data` mode when the September verification work began, so the earlier historical transition was not recreated. Backup restore capability, current-state rollback readiness, private-path isolation and the deployed `main` commit were verified against the observed production state.

The post-cutover architecture review is recorded in `PHASE_6_ARCHITECTURE_REVIEW_20260920.md`. It is the current source for reviewed empty-state semantics, monotonic revisions, browser migration/authentication authority, game isolation, failure behavior and accepted final-architecture limitations.

## Production boundaries

| Hostinger location | Responsibility |
|---|---|
| `public_html/` | Public PHP entry points, JavaScript, CSS and assets only |
| `private-auth/baseline.sqlite` | Authentication, account identity, password/Google identity, recovery and remaining explicitly SQLite-owned application tables |
| `Saved Data/` | Revisioned JSON resource authority |
| `Runtime/Locks/` | Short write locks and active leases |
| `Runtime/Temporary Files/` | Same-filesystem atomic-write temporary files |
| `Migration Evidence/` | Migration validation, rollback material and redacted operational evidence |
| `.baseline-private.env` | Private paths, resource-authority mode and secrets |

The documented production authentication database is `/home/u470362356/domains/baselinelifestyle.org/private-auth/baseline.sqlite`. It must not be deleted or moved into Saved Data. Password hashes, external identity subjects, session material and credentials must never be written to JSON.

The repository still contains a local-development SQLite fallback at `sitewide/api/baseline.sqlite`. Production must set `BASELINE_DB_PATH` to the private authentication database. The root Apache policy denies direct requests for `.sqlite`, `.db`, `.env`, `.ini`, `.log`, `.bak`, `.old` and `.zip` files, but this is defence in depth rather than a substitute for keeping production persistence outside `public_html`.

## Saved Data authority

The verified current production setting is `BASELINE_RESOURCE_AUTHORITY=saved-data`.

Supported authority modes are deliberately limited to:

- `sqlite`;
- `mirror`;
- `saved-data`.

The source default is `sqlite` when no authority value is configured. Production verification on 2026-09-20 confirmed the deployed authority is explicitly `saved-data`; the source default must still never be used as a substitute for deployment evidence.

The intended production transition is:

`sqlite → mirror → verify → saved-data`

The intended transition remains the procedure for any future fresh cutover. The September verification did not retroactively recreate it because production was already `saved-data` authoritative and contained legitimate newer writes.

Canonical Saved Data resources are:

- `Account Index/accounts.json`;
- `Users/{six-digit-id}/account.json`;
- per-user `favourites.json`, `binaural.json`, `voice.json`, `fitness.json`, `fitness-routine.json`, `food.json` and `skincare.json`;
- one canonical file per played game under `Users/{six-digit-id}/Games/`, including `badminton-focused.json`;
- `Shared/Badminton/badminton.json`.

Resource writes validate private absolute roots, reject symlink ancestors, use restrictive permissions, lock briefly, write and validate a same-filesystem temporary file, and atomically rename it over the previous revision.

Every browser-originated Saved Data mutation must submit `expectedRevision`. A conflict must reload or stop for review; a client must never obtain a newer revision and blindly resubmit an older full document.

## Browser migration decisions

The executable migration contract is `sitewide/migration/browser_storage_map.json`. Its current rules include:

- Games auto-next remains a device-only preference.
- Guest Games profiles and physical legacy game saves require explicit per-game signed-in import decisions.
- Badminton Focused is an individual game resource at `Games/badminton-focused.json`; its legacy browser save is an explicit, account-bound import candidate and is never Shared Badminton state.
- Food Diet Log browser content is an explicit, account-bound import candidate for `food.json`. A successful authoritative empty resource remains empty unless the user deliberately imports the browser copy.
- Skincare routine, groups/assignments and slider state are explicit import candidates for sections of `skincare.json`; unrelated sections must survive partial writes.
- Fitness body profile, active workout and progression history are explicit import candidates for `fitness.json`. Fitness Routine has its own authoritative `fitness-routine.json` resource and explicit legacy import candidate.
- The Voice browser key remains guest/device preference state. For an authenticated account, `voice.json` is authoritative, including the empty/default state.
- Shared Badminton browser state is a non-authoritative cache after a verified server load. Conflict backups are review-only recovery copies and are never auto-imported.
- Browser authentication preview/password keys are never migration sources.
- UI/session/navigation preferences remain browser/session state where the migration map classifies them as non-account data.

Legacy physical browser storage is removed only after the relevant explicit import succeeds or the user explicitly chooses to keep the account copy, according to the resource-specific migration rule.

## Repository-verifiable Hostinger requirements

The current Saved Data implementation requires a PHP 8 runtime because it uses PHP 8 language/runtime functions such as `str_starts_with`. The historical Hostinger checkpoint recorded PHP 8.3 as active on 2026-08-02; the current deployed PHP version still requires manual reconfirmation before cutover.

The deployment must provide:

- PDO with SQLite support for the authentication database and any intentionally remaining SQLite persistence;
- JSON support;
- `random_bytes`;
- filesystem functions used by the Saved Data writer, including directory creation, file reads/writes, `flock`, `rename` and permission changes;
- private absolute Saved Data and Runtime paths outside `DOCUMENT_ROOT`;
- Saved Data and Runtime temporary files on the same filesystem so atomic replacement can be enforced.

`fsync` is used when available and is not a hard requirement.

The repository enforces that configured Saved Data and Runtime roots are absolute and outside the document root, rejects symlinked directory ancestors, creates private directories with mode `700`, and writes resource files with mode `600`. The private environment loader refuses a symlinked private env file, files larger than 16 KiB, or files granting group/other access.

Repository code cannot prove that Hostinger actually exposes the required extensions, preserves Unix permissions, places the configured paths outside `public_html`, keeps Saved Data across deployment/restart, or blocks direct web access to the sibling private paths. Those remain manual deployment checks.

## Operational production evidence

September 2026 operational verification established:

- reviewed `main` and deployed production matched commit `324b3bbb4e75872bac5883f865e504fb5536439f`;
- production authority is explicitly `saved-data`;
- authentication SQLite is healthy and remains private;
- the canonical Saved Data tree is healthy;
- Account Index verification passes without repair;
- direct HTTP requests to tested private paths fail closed with 404;
- the Hostinger file backup includes authentication SQLite, Saved Data and private configuration;
- an isolated backup restore drill passed integrity, foreign-key, schema and Saved Data structural checks;
- a fresh current-state rollback SQLite copy can be built from current authentication SQLite plus current Saved Data;
- complete Saved-Data-only material is preserved outside rollback SQLite;
- the rollback Skincare mapping now reconstructs current visibility, routine, logs, groups and assignments rather than leaving stale legacy SQLite content;
- final rollback verification passed semantic coverage and left live application data, configuration and authority unchanged.

The hosting environment did not expose a readable application/server error log during final verification. Comprehensive server-log inspection therefore remains an explicit operational limitation rather than an inferred pass.

See `PHASE_5_COMPLETION_EVIDENCE_20260920.md` for the evidence summary and the historical-transition discrepancy.

## Account-index consistency

`account.json` and `Account Index/accounts.json` are separate atomic resources. Run the read-only verifier from the deployed release directory:

```bash
php sitewide/migration/verify_account_index.php
```

If it reports only an index mismatch and no projection issues, repair it with an optimistic revision check:

```bash
php sitewide/migration/verify_account_index.php --repair
```

The repair refuses to run when account projections contain unsafe directories, mismatched user IDs or duplicate names/emails.

## Release rule

Production deploys reviewed `main` to `public_html`. Work must use a separate branch and pull request. Do not merge when required checks are failing or skipped, and never run automated tests against live Saved Data.
