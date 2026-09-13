# Baseline Lifestyle — Current Architecture and Hostinger Status

Status date: 2026-08-23

This document is the current repository authority. Earlier dated audit, checkpoint and cutover documents are retained as historical evidence and must not be read as descriptions of the current runtime.

## Production boundaries

| Hostinger location | Responsibility |
|---|---|
| `public_html/` | Public PHP entry points, JavaScript, CSS and assets only |
| `private-auth/baseline.sqlite` | Authentication, account identity, password/Google identity and recovery only; it is not a live application Saved Data fallback |
| `Saved Data/` | Sole live authority for authenticated meaningful application data |
| `Runtime/Locks/` | Short write locks and active leases |
| `Runtime/Temporary Files/` | Same-filesystem atomic-write temporary files |
| `Migration Evidence/` | Migration validation, rollback material and redacted operational evidence |
| `.baseline-private.env` | Private paths and secrets; there is no live resource-authority mode switch |

The active authentication database is `/home/u470362356/domains/baselinelifestyle.org/private-auth/baseline.sqlite`. It must not be deleted or moved into Saved Data. Password hashes, external identity subjects, session material and credentials must never be written to JSON.

## One live saving model

Authenticated meaningful data has one live destination: protected revisioned Saved Data files. A live endpoint must not switch to SQLite, silently retain a browser copy as a successful account save, or mirror a failed write into another authority.

Canonical resources include:

- `Account Index/accounts.json`;
- `Users/{six-digit-id}/account.json`;
- `Users/{six-digit-id}/favourites.json`;
- `Users/{six-digit-id}/binaural.json`;
- `Users/{six-digit-id}/voice.json`;
- `Users/{six-digit-id}/fitness.json` for Calisthenics plans, achievements, body profile and validated active-workout state;
- `Users/{six-digit-id}/fitness-routine.json` for Fitness Routine activities, logs, visibility, groups and assignments;
- `Users/{six-digit-id}/food.json` for Food Diet Log content;
- `Users/{six-digit-id}/skincare.json` for Skincare Routine, logs, visibility, groups, assignments and recipe-controller settings;
- one canonical file per recognised game under `Users/{six-digit-id}/Games/`, including `badminton-focused.json`;
- `Shared/Badminton/badminton.json` for the protected shared Badminton Session state.

Resource writes validate private absolute roots, reject symlink ancestors, use restrictive permissions, lock briefly, write and validate a same-filesystem temporary file, and atomically rename it over the previous revision.

Every browser-originated Saved Data mutation submits an expected revision. A stale revision or ordinary save failure produces a visible error and stops further writes for that resource until the latest server state is reloaded. A client must never fetch a newer revision and blindly resubmit an older full document.

## Browser boundary

Browser storage has three permitted roles only:

1. **Device/session UI state** — navigation, selected views, Games Auto Next and comparable non-account preferences may remain local or session-only.
2. **Rebuildable/non-authoritative caches** — a cache may speed first paint but cannot substitute for a failed server save or overwrite newer server state.
3. **Recovery or pre-cutover copies** — retained only for explicit inspection/import and never automatically promoted to account data.

Meaningful guest changes are current-page/session state only. They are not durable account saves.

Old browser Saved Data is hidden from normal authenticated runtime reads. When an eligible pre-cutover copy exists, the signed-in user receives an explicit one-time import choice. Import refuses to overwrite an already-populated corresponding server resource. This applies to the remaining legacy browser forms including Food Diet Log, Skincare Routine/groups/recipe settings, Fitness Routine/groups, Voice settings and Badminton Focused progress.

Guest Games progress follows the same principle: recognised per-game progress is imported only by explicit signed-in choice and is never copied automatically. Games Auto Next remains device-only.

Browser authentication preview/password keys are never migration sources. Shared Badminton browser state and conflict backups remain non-authoritative caches/recovery material and never become a silent fallback authority.

## Operational deployment verification

Repository checks establish the source contract but cannot prove Hostinger filesystem permissions, backup coverage or the exact deployed release. For production sign-off, record redacted evidence for:

1. the exact deployed `main` commit and PHP version;
2. private directory ownership and restrictive permissions;
3. public inaccessibility of `.baseline-private.env`, Saved Data, Runtime, Migration Evidence and the auth database;
4. write, refresh and sign-out/sign-in tests for Account, Favourites, Binaural, Voice, Fitness, Fitness Routine, Food, Skincare, every recognised played game and Shared Badminton;
5. revision increments and confirmation that only the intended resource file changed;
6. visible stop behaviour for a deliberately induced stale revision/save failure;
7. no abandoned Runtime temporary files or locks;
8. backup inclusion and a real restore drill;
9. a current rollback SQLite copy where migration/rollback tooling still requires one.

The active `private-auth/baseline.sqlite` remains required for authentication and identity. It is not an application-data fallback.

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

Production deploys reviewed `main` to `public_html`. Work uses a separate branch and pull request. Do not merge when required checks are failing or skipped, and never run automated tests against live Saved Data.
