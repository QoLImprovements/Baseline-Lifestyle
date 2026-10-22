# Stability and release checkpoint

Date opened: 2 August 2026  
Production repository: `QoLImprovements/Baseline-Lifestyle`  
Production branch: `main`  
Verified pre-release rollback commit: `5b5c9d0587e31a81da75379aece460f5a657d944`

## Purpose

This checkpoint converts the remaining stability work into a finite release gate. It does not repeat the completed repository audit, private-path setup, database copy, GitHub connection or initial Hostinger deployment. SQLite remains the production data authority. The Saved Data and voice prototypes remain isolated.

## Verified starting point

The following facts were verified before this checkpoint began:

- Pull Request #23 was merged to `main`.
- Website Checks run 130 passed for the reviewed PR head.
- Hostinger deploys `main` into `public_html` and the merged build is live.
- PHP 8.3 is active.
- `Saved Data` and `Runtime` exist beside `public_html` with mode `700`.
- `.baseline-private.env` exists beside `public_html` with mode `600`.
- the live `baseline.sqlite` exists under `Saved Data` with mode `600` and passed `PRAGMA quick_check`.
- existing-account login and the host-configured Charity Shop code work.
- daily Hostinger backups and a manual pre-deployment backup exist.

These facts are the starting baseline, not proof that every later release gate has passed.

## Automated finite smoke test

Run:

```bash
npm run test:stability-smoke
```

The suite must finish and pass. It covers:

1. the homepage and every primary system route;
2. the shared account login and logout path;
3. authenticated favourite add/remove behavior;
4. authenticated Binaural preset save/load behavior;
5. the Charity Shop digital-code gate through a mocked protected API response, without committing a production code;
6. Fitness plan generation, API save and API reload;
7. Recreation account progress restoration and playable game opening;
8. Badminton shared-state loading and persistence across a page reload;
9. uncaught browser runtime errors during the primary-route pass.

The test uses isolated in-memory fixtures. It never uses production credentials, production Saved Data or the live database.

## Release gate

A stable tag may be created only when every item below is recorded as passed.

| Gate | Evidence required | Status at branch creation |
|---|---|---|
| Pull-request checks | All required GitHub Actions jobs green for the exact release commit | Pending |
| Finite smoke suite | `npm run test:stability-smoke` passes | Pending |
| Live read-only smoke | Home/navigation, login/logout, Charity Shop, favourites, Binaural, Fitness, Recreation and Badminton checked on the deployed `main` build | Pending |
| Production error review | Deployment and PHP logs contain no new release-caused error pattern; report is redacted | Pending |
| Git deployment boundary | hPanel still shows `QoLImprovements/Baseline-Lifestyle` and branch `main` | Pending |
| Failed-check protection | A failed required workflow cannot be treated as an approved release | Pending confirmation |
| Backup inclusion | Private sibling paths are proven included or an external recovery method is recorded | Unproven |
| Restore drill | A non-sensitive probe file is restored and its checksum matches | Unproven |
| Rollback record | Previous commit, release commit, procedure and responsible operator are written down | Partly complete |

This is the complete stability gate. New feature work is not added to it. A failure creates one specific corrective task; it does not restart every already-passed item.

## Safe backup and restore drill

Do not use `baseline.sqlite` as the first restoration test.

1. Create a folder named `Backup Verification` under the private `Saved Data` directory.
2. Create `hostinger-restore-probe.txt` inside it containing only a date, the words `Baseline restore probe`, and a random non-secret identifier.
3. Set the folder to mode `700` and the file to mode `600`.
4. Record the file's byte size and SHA-256 checksum.
5. Wait until the next automated Hostinger backup reports completion.
6. Move the original probe to `hostinger-restore-probe.held.txt`; do not delete it.
7. Restore only `hostinger-restore-probe.txt` from the completed backup.
8. Record the restoration start and finish times.
9. Compare the restored file's byte size and SHA-256 with the original record.
10. Record whether hPanel restored an individual file, the containing folder, or a wider backup unit.
11. After the result is documented, remove the restored probe and retain the held copy only until the stable release is confirmed.

Repeat the inclusion check for `Runtime` only if Runtime recovery is intentionally required. Runtime locks, leases and temporary files are normally disposable and must not be restored over active runtime state.

For `.baseline-private.env`, first confirm inclusion from backup inventory or a safe restore-to-alternate-location option. Do not overwrite the live private file merely to prove restoration. Never copy its values into screenshots, issue text, test fixtures or Git.

Record the following:

| Field | Result |
|---|---|
| Backup frequency | |
| Retention period | |
| `Saved Data` included | |
| `Runtime` included | |
| `.baseline-private.env` included | |
| Individual-file restoration available | |
| Restore-to-alternate-location available | |
| Probe backup timestamp | |
| Restore duration | |
| Original SHA-256 | |
| Restored SHA-256 | |
| Result and limitations | |

## Stable tag and branch retention

After all gates pass:

1. record the exact release commit from `main`;
2. create an annotated tag using the date-based form `stable-2026-08-02.1`;
3. state in the tag message that SQLite is still authoritative and Saved Data/voice prototypes are not production cutovers;
4. retain the merged release branch for at least 48 hours while the tagged build is observed;
5. delete only the merged temporary branch after the tagged build and rollback procedure have been confirmed;
6. retain the repository, `main`, the stable tag and Git history permanently.

Do not create the tag merely because the branch tests pass. The live and backup gates above are also required.

## Exact application rollback

Rollback from a later release to the verified baseline as follows:

1. Stop any pending deployment and record the failing release commit.
2. Disable any newly enabled resource-authority or voice feature flag before changing application source.
3. Open an emergency pull request that reverts only the release commit or merge commit. Do not force-reset `main`, delete history or reconnect Hostinger to another repository.
4. Require the same automated checks on the revert pull request unless the outage makes a documented emergency exception unavoidable.
5. Merge the reviewed revert so `main` moves forward to a commit whose application tree matches the prior stable state.
6. Confirm Hostinger deploys that new `main` commit.
7. Run the finite live smoke list again and review new PHP/deployment errors.
8. Do not restore SQLite or Saved Data during an application-only rollback.
9. Restore persistent data only when separate diagnostics prove data damage, using the verified backup and resource-specific restoration procedure.
10. Preserve redacted logs and open a corrective pull request for the failed release.

For the first release after this checkpoint, the recorded application baseline is commit `5b5c9d0587e31a81da75379aece460f5a657d944`.

## Completion record

When the release is complete, add:

- release commit;
- stable tag;
- GitHub Actions run URL/number;
- Hostinger deployment timestamp;
- live smoke timestamp;
- backup/restore drill result;
- rollback baseline;
- end of branch-retention window.
> Historical checkpoint (2026-08-02). For the current runtime and Hostinger status, see `CURRENT_ARCHITECTURE_AND_HOSTINGER_STATUS_20260823.md`.
