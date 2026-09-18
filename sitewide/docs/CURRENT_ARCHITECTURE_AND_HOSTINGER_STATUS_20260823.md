# Baseline Lifestyle — Current Architecture and Hostinger Status

Status date: 2026-09-18

This document is the current repository authority. Earlier dated audit, checkpoint and cutover documents are retained as historical evidence and must not be read as descriptions of the current runtime.

Phase 4 production readiness and the exact remaining Hostinger/deployment gates are tracked in `PHASE_4_PRODUCTION_CUTOVER_READINESS_20260918.md`. That checklist does not authorize or perform the Phase 5 authority switch.

Phase 5 first-half Hostinger deployment preparation is tracked in `PHASE_5_HOSTINGER_DEPLOYMENT_FIRST_HALF_20260918.md`. That runbook keeps resource authority explicitly on `sqlite` and stops before mirror mode.

Phase 5 second-half production transition is tracked in `PHASE_5_SAVED_DATA_CUTOVER_SECOND_HALF_20260918.md`. It requires `sqlite → mirror → fresh final SQLite snapshot → stable cutover package → saved-data`, and the final snapshot must be taken after mirror observation rather than reusing the older pre-mirror copy.

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

The intended final production setting is `BASELINE_RESOURCE_AUTHORITY=saved-data`.

Supported authority modes are deliberately limited to:

- `sqlite`;
- `mirror`;
- `saved-data`.

The source default is `sqlite` when no authority value is configured. That default is not evidence of the real Hostinger production setting. The deployed `.baseline-private.env` or process environment must be inspected before any production cutover.

The intended production transition is:

`sqlite → mirror → verify → saved-data`

Do not skip mirror verification and do not switch production authority as part of readiness verification.

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

## Operational sign-off still required

Repository tests cannot prove the private Hostinger paths, deployed environment values or backup system. Before declaring the cutover complete, record redacted evidence for:

1. the exact deployed `main` commit and current PHP version/modules;
2. the actual deployed `BASELINE_RESOURCE_AUTHORITY` value;
3. the deployed `BASELINE_DB_PATH`, `BASELINE_SAVED_DATA_PATH` and `BASELINE_RUNTIME_PATH` locations, confirming private absolute roots outside `public_html`;
4. private directory ownership and restrictive permissions;
5. public inaccessibility of `.baseline-private.env`, Saved Data, Runtime, Migration Evidence and the auth database;
6. write, refresh and sign-out/sign-in tests for Account, Favourites, Binaural, Voice, Fitness, Fitness Routine, Food, Skincare, every played game and Shared Badminton;
7. revision increments and confirmation that only the intended resource file or section changed;
8. no abandoned Runtime temporary files or locks;
9. persistence of Saved Data through the relevant Hostinger deployment/restart lifecycle;
10. backup inclusion and a real restore drill;
11. a current rollback SQLite copy built from Saved Data before any authority reversal, while separately preserving Saved-Data-only resources that SQLite cannot represent.

Only obsolete migration-source SQLite copies may be archived after the required checks. The active `private-auth/baseline.sqlite` remains required.

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
