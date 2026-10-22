# Phase 5 — Post-Cutover Production Acceptance

Status date: 2026-10-16  
Repository: `QoLImprovements/Baseline-Lifestyle`  
Status: **Phase 5 acceptance complete — closure record**

## Purpose

This document tracks the **final acceptance of the production Saved Data system after cutover**.

It is not a cutover runbook. Production has already moved to Saved Data authority. Do **not** repeat the SQLite → mirror → Saved Data transition and do **not** switch production back to SQLite merely to complete this checklist.

The older `PHASE_5_SAVED_DATA_CUTOVER_SECOND_HALF_20260918.md` remains historical transition documentation. This file is the current post-cutover acceptance record.

---

## Authoritative production state

Confirmed post-cutover state carried forward into this acceptance phase:

- Phase 4 production cutover is complete.
- Resource authority is `saved-data`, sourced from the private environment.
- Authentication SQLite remains required and must not be deleted.
- Saved Data, Runtime, the private environment, current recovery material and canonical migration evidence remain private production assets.
- The Charity Shop PIN has already been rotated privately; acceptance must never require the PIN to be pasted into repository output, chat, logs or evidence.

### Fitness Saved Data layout

Fitness plans are physically split into per-plan files:

```text
Saved Data/
└── Users/
    └── 000001/
        ├── fitness.json
        └── Fitness/
            └── Plans/
                ├── 000003.json
                └── 000004.json
```

Known migrated plans:

| Plan ID | Name | Sessions |
| ---: | --- | ---: |
| 3 | K Pushups & Squats | 20 |
| 4 | Pre-Mid Badminton Calisthenics | 85 |

The root Fitness resource contains no embedded plan array after the split.

> Architecture note: physical storage is per-plan, but the current Fitness API still assembles root state + plan files into a composite model in memory and `bl_fitness_resource_write()` synchronises plan files from that aggregate. Do not describe current API writes as fully independent plan-repository mutations.

---

## Preserved migration evidence

Retain the following production evidence:

- `Migration Evidence/fitness-pre-plan-split-20261013.json`
- `Migration Evidence/fitness-plan-split-20261013.json`
- `Migration Evidence/phase-5-live-health-current.json`

The post-split live-health evidence previously recorded:

```json
{
  "ok": true,
  "healthySavedDataMode": true,
  "resourceCount": 19,
  "treeSha256": "99d5da0677308a0c953aca532392bdfe5e7f808f34d29ab304f45c78d2d07927",
  "productionAuthorityChanged": false
}
```

This is historical evidence for the successful plan split. A newer final live-health run was completed after the latest application deployment; see **Final acceptance evidence — 2026-10-16** below.

---

## Fitness post-cutover repair history

The following fixes are part of the final Fitness acceptance history:

| PR | Purpose |
| ---: | --- |
| #286 | Prevent stale plan name state from overwriting another plan |
| #288 | Refresh/retry selected-plan persistence after a Saved Data revision conflict |
| #289 | Make selected-plan loading server-authoritative and remove the competing `get_plan.php` owner |
| #290 | Split Fitness plans into per-plan Saved Data files and alphabetise the plan selector |
| #292 | Remove transitional embedded-plan fallback and one-time migration runtime |
| #294 | Remove startup default-plan overwrite after alphabetical sorting |
| #296 | Keep first paint neutral until authoritative plan state resolves |
| #297 | Delete competing Fitness Routine controllers/CSS and establish the single-authority Routine shell |
| #298 | Remove the orphaned disclosure readiness CSS guard |
| #299 | Finish plan-switch single-authority cleanup, refresh stale Fitness asset cache keys and add browser regression coverage |
| #303 | Remove the remaining Fitness reload-route ownership, make “Create Another Plan” in-place, align stale validation contracts and restore the full repository validation suite |

PR #299 is the code-level resolution for the reproduced saved-plan switch interaction bug. PR #303 completes the remaining repository-side ownership cleanup by removing the separate page-reload path used by “Create Another Plan” and bringing stale CI contracts back into line with the current architecture. Production/browser acceptance of the deployed result remains a separate gate.

---

## Code-level acceptance

These checks are repository/CI checks and do not substitute for production verification.

- [x] Fitness single-authority audit exists and guards deleted compatibility layers.
- [x] Fitness Routine structure tests cover native disclosure ownership.
- [x] Plan selection regression coverage verifies in-place switching rather than full-page navigation.
- [x] Browser regression coverage verifies switching between two saved plans leaves Calisthenics/Cardio disclosures interactive.
- [x] Recovery builder code reads `Fitness/Plans/NNNNNN.json` when rebuilding SQLite-compatible recovery data.
- [x] Live-health allowlist accepts the canonical `Users/NNNNNN/Fitness/Plans/NNNNNN.json` layout.
- [x] PR #303 pre-merge Website Checks and Single Authority Audit are fully green.
- [x] Final accepted application commit validation completed: the strict single-authority audit passed and the executable Website Checks suites passed under Hostinger-safe serial execution. The closure-branch GitHub Actions jobs failed before runner assignment with no steps or logs, so this is recorded as an infrastructure exception rather than a code-test failure.

---

## Production acceptance completed

Do these against the **currently deployed latest main**, without changing production authority.

### Deployment identity

- [x] Production Git working tree is clean.
- [x] Production HEAD matches the latest accepted `main` commit.

### Browser acceptance — Fitness

After one hard refresh:

- [x] Baseline Fitness → My Routine → Routine Plan loads without wrong-plan flash.
- [x] No temporary “No saved plans yet” state appears.
- [x] No Plan Generator flash appears while loading a saved plan.
- [x] Plan selector is alphabetical:
  - K Pushups & Squats
  - Pre-Mid Badminton Calisthenics
- [x] Switch from one saved Calisthenics plan to the other in place.
- [x] Correct plan content appears.
- [x] No full-page reload occurs.
- [x] Routine Groups remains interactive.
- [x] Calisthenics disclosure opens/closes immediately after the switch.
- [x] Cardio disclosure opens/closes immediately after the switch.
- [x] Other Fitness Activity disclosure opens/closes immediately after the switch.
- [x] Sports disclosure opens/closes immediately after the switch.

### Account / Saved Data acceptance

- [x] Login succeeds.
- [x] Sign-out/sign-in succeeds.
- [x] Account reload resolves to the correct account.
- [x] `php sitewide/migration/verify_account_index.php` returns `ok: true` and `matches: true`.
- [x] Representative Favourite write/readback succeeds.
- [x] Representative Binaural write/readback succeeds.
- [x] Representative Voice settings write/readback succeeds.
- [x] Representative Food write/readback succeeds.
- [x] Representative Skincare partial-section write/readback succeeds without replacing unrelated sections.
- [x] Representative Fitness write/readback outside plan selection succeeds.
- [x] Key systems/pages load without Saved Data, revision or permission errors.

### Charity Shop protected access

- [x] Charity Shop protected access unlocks with the privately rotated PIN.
- [x] PIN is entered only by the user in the production UI.
- [x] PIN is never pasted into terminal output, repository files, evidence or support chat.

### Final live health

Run the read-only health verifier against the production paths and retain new private evidence:

```bash
php sitewide/migration/verify_saved_data_live_health.php \
  --document-root="/home/u470362356/domains/baselinelifestyle.org/public_html" \
  --evidence="/home/u470362356/domains/baselinelifestyle.org/Migration Evidence/phase-5-live-health-current.json"
```

Required result:

- [x] `ok: true`
- [x] `healthySavedDataMode: true`
- [x] authority remains `saved-data`
- [x] `productionAuthorityChanged: false`
- [x] no unexpected Saved Data files/directories
- [x] no symlinks or unsafe permissions
- [x] all resource envelopes/revisions are valid

---

## Recovery package refresh completed

The currently retained Phase 4 recovery archive predates the Fitness per-plan split.

The repository recovery builder now supports the split layout, but **code support is not the same as a current recovery artifact**.

Before Phase 5 is closed:

- [x] build a fresh recovery/rollback copy from the current protected authentication SQLite database plus the current Saved Data tree;
- [x] retain it outside the document root;
- [x] validate SQLite integrity/foreign keys;
- [x] retain current Saved-Data-only resources separately because SQLite is not a complete representation of all current application data;
- [x] record evidence identifying the current recovery package and the live Saved Data state it represents.

Do not restore an old recovery archive simply to test it against live production.

---

## Phase 5 completion gate

Phase 5 may be marked complete only when all of the following are true:

- [x] latest accepted `main` is deployed cleanly;
- [x] Fitness browser acceptance passes on production;
- [x] account-index verification passes;
- [x] representative Saved Data reads/writes outside Fitness pass;
- [x] key systems/pages pass production acceptance;
- [x] Charity Shop protected access passes privately;
- [x] final Saved Data live-health evidence passes;
- [x] a fresh current recovery package has been built and validated;
- [x] no unresolved storage, revision, permission, routing or interaction defect remains.

All production gates above passed on 2026-10-16. Production remains on Saved Data authority. Final repository-side validation also passed where the Hostinger environment could execute it. GitHub Actions for the closure branch repeatedly failed before any runner step executed, and Hostinger could not provide the localhost topology required by Playwright; those are recorded below as infrastructure limitations rather than application failures.


---

## Final closure validation — 2026-10-16

The final application validation was performed from a temporary archive of production application commit `4a9e51b581f5ddfe7627bcfd4214d1f0f4a5ee50`, outside `public_html`, using portable Node 24.22.0 and PHP 8.3.35.

Passed checks:

- strict single-authority audit: exit 0;
- exact `test:structure` suite: exit 0 under one-worker execution;
- remaining `npm test` sub-suites: all passed;
- `test:fitness` and `test:voice`: passed;
- Phase 3 first-half Node/PHP contract verification: passed;
- Phase 3 second-half Node verification: passed;
- full migration/cutover contract suite: passed;
- Recreation unit coverage: the combined shared-host run hit the host's Node thread/process ceiling, but both affected test files passed individually and the remaining 77 tests had already passed;
- PHP syntax lint: 97 PHP files checked, no failures;
- `test:saved-data-php`: passed.

### Test portability correction

Hostinger disables PHP's `symlink()` function. `tests/external-sqlite-authority-contract.php` previously assumed that every Unix-like host exposed it and therefore terminated before reaching its symlink-rejection assertion. The contract now runs that optional symlink case only when `function_exists('symlink')` is true. The complete migration/cutover suite passed after that portability correction. This changes test portability only; it does not change production storage authority or application behaviour.

### Automated browser infrastructure limitation

Playwright Chromium installed successfully on the Hostinger account. The repository's local static test server reported that it was listening on `127.0.0.1:4173`, but a separate process in the same hosting account received connection refused for that address. Playwright therefore timed out waiting for its configured `webServer`. Automated Playwright checks cannot be treated as executed successfully on this shared-hosting environment.

Production browser acceptance was completed separately against the live deployment and passed, including Fitness saved-plan switching and disclosures, account/session behaviour, representative Saved Data write/readback flows, key system pages and protected Charity Shop access.

### GitHub Actions infrastructure limitation

For closure branch head `9915ae47a17ab0fe7835c4a60d83f5dfc776db18`, both GitHub Actions workflows again completed as failures before any workflow step executed:

- Website checks run `38904336972`;
- Single authority audit run `38904337131`.

Each run returned a single failed job with `steps: null` and no job log. No checkout, dependency install, test or audit step executed. This is recorded as a runner-allocation/infrastructure failure, not a code-test failure.

The substantive acceptance evidence is therefore the passed production browser acceptance, final Saved Data live-health/recovery evidence, strict audit and the executable repository suites above.

---

## Final acceptance evidence — 2026-10-16

Production acceptance was completed against application commit `4a9e51b581f5ddfe7627bcfd4214d1f0f4a5ee50`, which remained the current `main` application commit during acceptance.

### Account index

`verify_account_index.php` returned:

- `ok: true`
- `matches: true`
- accounts: 1
- revision: 104
- issues: none
- repaired: false

### Final live health after browser write/readback tests

`verify_saved_data_live_health.php` returned:

- `ok: true`
- `healthySavedDataMode: true`
- authority: `saved-data`
- authority source: `private-env`
- authentication database healthy
- all path, permission, filesystem and Saved Data tree gates: true
- resource count: 20
- tree SHA-256: `745ba33ba293b47e03c9401f2caf35e644939ca998eaeb6b4cc6a42b471eb987`
- `productionAuthorityChanged: false`

### Final recovery package

The fresh rollback database and Saved Data archive were regenerated after the browser write/readback acceptance tests.

- rollback database SHA-256: `36930057f9957a6504bbf44770f16e1e2742252c966f42de9710eeb2cda3fe24`
- Saved Data archive SHA-256: `07b09c17b45a9f63f49c0118beb98b5ed39a533ccc57bbdbae288b406978832f`
- rollback database size: 294,912 bytes
- builder source database unchanged during the recovery build
- builder integrity and foreign-key validation passed

The recovery builder identified Saved-Data-only state that is retained by the separate Saved Data archive, including Food, Skincare and optional Fitness sections.

### Browser acceptance

The user confirmed PASS for:

- Fitness saved-plan switching and post-switch disclosures;
- sign-out/sign-in and account reload;
- Favourite write/readback;
- Binaural write/readback;
- Voice settings write/readback;
- Food write/readback;
- Skincare saved setting write/readback;
- Fitness Body Profile write/readback;
- key system pages;
- Charity Shop protected access using the private PIN.

The test changes were restored where they were intentionally reversible. A new final live-health verification and recovery package were then produced from the resulting accepted state.

### Non-blocking future UI note

Baseline Food → Diet Log → Daily Notes currently autosaves on input. A later UI change should add an explicit Save action or confirmation for clearer persistence feedback. This is a usability improvement and was not a Phase 5 storage or persistence failure.
