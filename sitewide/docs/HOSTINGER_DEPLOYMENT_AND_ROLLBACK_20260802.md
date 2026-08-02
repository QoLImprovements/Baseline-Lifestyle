# Hostinger Business deployment and rollback runbook

The finite post-deployment release gate, safe private-path restore drill, stable-tag rule and forward-only Git rollback procedure are recorded in [`STABILITY_AND_RELEASE_CHECKPOINT_20260802.md`](./STABILITY_AND_RELEASE_CHECKPOINT_20260802.md).

## Deployment boundary

Production deploys only reviewed `main`. Development and audit branches never auto-deploy to the production domain. Hostinger receives application source; it must not receive `.env`, SQLite files, logs, archives, local reports, `Saved Data` or `Runtime` from Git.

As of 2 August 2026, Hostinger's official documentation says Business supports Node.js web apps, GitHub automatic deployments, Node 18/20/22/24, environment-variable management and server-side app restart. It also says backend build output lives outside `public_html`, while an automatically generated `.htaccess` inside `public_html` routes requests. This establishes general Node capability, but it does not prove that a chosen offline speech model, native dependency, WebSocket pattern or memory profile is supported: <https://www.hostinger.com/support/how-to-deploy-a-nodejs-website-in-hostinger/>.

The current Baseline site remains a PHP application. Do not convert it to Node merely because Node is available.

## One-time hPanel checklist

The release owner must record screenshots or exported settings for these checks:

- exact plan name and current resource limits;
- document-root path and deployment target;
- ability for PHP to read/write two private sibling directories outside the document root;
- PHP version and required extensions (`pdo_sqlite`, `json`, `mbstring`, `openssl`);
- environment variables from `.env.example`, with secrets populated only in hPanel;
- current inode count and headroom;
- file/database backup frequency, retention and whether private sibling directories are included;
- a restore drill to a safe temporary location;
- GitHub repository, production branch and automatic-deploy trigger;
- deployment log and rollback mechanism.

Verified on the Baseline Lifestyle Business account on 2 August 2026: PHP 8.3 is selected; SSH is active; the account exposes 50 GiB storage and a 600,000-inode allowance; private `Saved Data` and `Runtime` siblings can be created beside `public_html`; and daily plus manual website backups are available. hPanel exposes no general PHP environment-variable screen, so this branch supports an allowlisted `.baseline-private.env` beside `public_html`. That file must use mode `600`, must never enter Git and is rejected if it grants any group/other access.

Hostinger documents `public_html` as the normal home directory and says the home directory cannot be changed on Web/Cloud plans. Confirm sibling private-directory access on the actual account before configuring Saved Data: <https://www.hostinger.com/support/1583494-what-is-the-path-to-your-website-s-root-home-directory-and-how-to-change-it-in-hostinger/>.

Hostinger's published current Web tier table lists the top shared tier at 2 CPU cores, 3 GB RAM, 50 GB disk, 600,000 inodes and 60 PHP workers, while warning that existing Business customers can retain older limits. Treat hPanel as authoritative: <https://www.hostinger.com/support/6976044-parameters-and-limits-of-hosting-plans-in-hostinger/>.

## Pre-deployment

1. Require a green pull-request workflow, including Node tests, browser voice smoke test, Realm tests, PHP lint and saved-data contract.
2. Review the diff for routes, database changes, secrets and user-data paths.
3. Confirm `BL_CHARITY_SHOP_PIN` exists; the endpoint intentionally returns 503 if it is absent.
4. Download file and database backups and record checksums/timestamps.
5. Record the current production commit and a smoke-test baseline.
6. Confirm no migration/cutover flag will change unless that migration has its own approved runbook.

## Deployment

1. Merge the reviewed PR to `main`.
2. Observe the exact Hostinger deployment commit and logs.
3. Confirm deploy exclusions and that private data directory timestamps were not mass-updated.
4. Run read-only route checks for home, each primary system, account session, Fitness plan, one Games profile and Badminton state.
5. Perform one reversible test write with a dedicated test account, then verify revision/readback.
6. Monitor PHP errors, HTTP 4xx/5xx, disk, inodes, CPU, RAM and I/O.

## Rollback triggers

Rollback on authentication/session failure, missing user data, unexpected Saved Data replacement, repeated revision conflicts, corrupt JSON, route loops, elevated 5xx, or failed core smoke tests.

## Rollback procedure

1. Disable any new per-resource authority flag.
2. Redeploy the previously recorded production commit. Do not change repositories in hPanel as a shortcut: Hostinger warns that changing the connected repository overwrites the deployment target.
3. Restore database/files only when diagnostics show data damage; application rollback alone should not touch persistent data.
4. Re-run read-only checks and compare counts/revisions.
5. Preserve failed release logs and redacted mismatch reports.
6. Open a corrective PR; never patch production without capturing the change in Git.

## Voice hosting gate

Before an offline recognizer can be integrated, deploy a non-production service and measure cold start, steady/peak RAM, CPU per utterance, maximum concurrency, request and WebSocket limits, model/native-module installation, process restart behavior, temporary-audio deletion and sustained cost. Official general Node support is not sufficient proof. If any required capability is unavailable, retain the current recognizer or choose a separately approved platform; do not degrade the workout experience silently.
