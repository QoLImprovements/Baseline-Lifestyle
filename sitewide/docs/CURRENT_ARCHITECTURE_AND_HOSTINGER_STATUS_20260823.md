# Baseline Lifestyle — Current Architecture and Hostinger Status

Status date: 2026-08-23

This document is the current repository authority. Earlier dated audit, checkpoint and cutover documents are retained as historical evidence and must not be read as descriptions of the current runtime.

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

The active authentication database is `/home/u470362356/domains/baselinelifestyle.org/private-auth/baseline.sqlite`. It must not be deleted or moved into Saved Data. Password hashes, external identity subjects, session material and credentials must never be written to JSON.

## Saved Data authority

The intended production setting is `BASELINE_RESOURCE_AUTHORITY=saved-data`.

Canonical resources are:

- `Account Index/accounts.json`;
- `Users/{six-digit-id}/account.json`;
- per-user `favourites.json`, `binaural.json`, `fitness.json` and `voice.json`;
- one canonical file per played game under `Users/{six-digit-id}/Games/`;
- `Shared/Badminton/badminton.json`.

Resource writes validate private absolute roots, reject symlink ancestors, use restrictive permissions, lock briefly, write and validate a same-filesystem temporary file, and atomically rename it over the previous revision.

Every browser-originated Saved Data mutation must submit `expectedRevision`. A conflict must reload or stop for review; a client must never obtain a newer revision and blindly resubmit an older full document.

## Browser migration decisions

- Games auto-next is a device-only preference and remains in local storage.
- Guest Games profiles require an explicit per-game signed-in import decision.
- Food diet logs, Skincare slider settings and Badminton Focused progress remain preserved in browser storage until dedicated schemas are approved. Their keys block browser-storage retirement.
- Browser authentication preview/password keys are never migration sources.
- Shared Badminton browser state is a non-authoritative cache after a verified server load.

## Operational sign-off still required

Repository tests cannot prove the private Hostinger paths or backup system. Before declaring the cutover complete, record redacted evidence for:

1. the exact deployed `main` commit and PHP version;
2. private directory ownership and restrictive permissions;
3. public inaccessibility of `.baseline-private.env`, Saved Data, Runtime, Migration Evidence and the auth database;
4. write, refresh and sign-out/sign-in tests for Account, Favourites, Binaural, Voice, Fitness, every played game and Shared Badminton;
5. revision increments and confirmation that only the intended resource file changed;
6. no abandoned Runtime temporary files or locks;
7. backup inclusion and a real restore drill;
8. a current rollback SQLite copy built from Saved Data before any authority reversal.

Only the obsolete migration-source SQLite copy under Saved Data may be archived after the checks above. The active `private-auth/baseline.sqlite` remains required.

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
