# Phase 5 — Post-Cutover Production Acceptance

Status date: 2026-10-16  
Repository: `QoLImprovements/Baseline-Lifestyle`

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

This is historical evidence for the successful plan split. A **new final live-health run is still required after the latest application deployment** before Phase 5 can be closed.

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
- [ ] Latest `main` Website Checks are fully green after all post-cutover cleanup PRs.

---

## Production acceptance still required

Do these against the **currently deployed latest main**, without changing production authority.

### Deployment identity

- [ ] Production Git working tree is clean.
- [ ] Production HEAD matches the latest accepted `main` commit.

### Browser acceptance — Fitness

After one hard refresh:

- [ ] Baseline Fitness → My Routine → Routine Plan loads without wrong-plan flash.
- [ ] No temporary “No saved plans yet” state appears.
- [ ] No Plan Generator flash appears while loading a saved plan.
- [ ] Plan selector is alphabetical:
  - K Pushups & Squats
  - Pre-Mid Badminton Calisthenics
- [ ] Switch from one saved Calisthenics plan to the other in place.
- [ ] Correct plan content appears.
- [ ] No full-page reload occurs.
- [ ] Routine Groups remains interactive.
- [ ] Calisthenics disclosure opens/closes immediately after the switch.
- [ ] Cardio disclosure opens/closes immediately after the switch.
- [ ] Other Fitness Activity disclosure opens/closes immediately after the switch.
- [ ] Sports disclosure opens/closes immediately after the switch.

### Account / Saved Data acceptance

- [ ] Login succeeds.
- [ ] Sign-out/sign-in succeeds.
- [ ] Account reload resolves to the correct account.
- [ ] `php sitewide/migration/verify_account_index.php` returns `ok: true` and `matches: true`.
- [ ] Representative Favourite write/readback succeeds.
- [ ] Representative Binaural write/readback succeeds.
- [ ] Representative Voice settings write/readback succeeds.
- [ ] Representative Food write/readback succeeds.
- [ ] Representative Skincare partial-section write/readback succeeds without replacing unrelated sections.
- [ ] Representative Fitness write/readback outside plan selection succeeds.
- [ ] Key systems/pages load without Saved Data, revision or permission errors.

### Charity Shop protected access

- [ ] Charity Shop protected access unlocks with the privately rotated PIN.
- [ ] PIN is entered only by the user in the production UI.
- [ ] PIN is never pasted into terminal output, repository files, evidence or support chat.

### Final live health

Run the read-only health verifier against the production paths and retain new private evidence:

```bash
php sitewide/migration/verify_saved_data_live_health.php \
  --document-root="/home/u470362356/domains/baselinelifestyle.org/public_html" \
  --evidence="/home/u470362356/domains/baselinelifestyle.org/Migration Evidence/phase-5-live-health-current.json"
```

Required result:

- [ ] `ok: true`
- [ ] `healthySavedDataMode: true`
- [ ] authority remains `saved-data`
- [ ] `productionAuthorityChanged: false`
- [ ] no unexpected Saved Data files/directories
- [ ] no symlinks or unsafe permissions
- [ ] all resource envelopes/revisions are valid

---

## Recovery package refresh still required

The currently retained Phase 4 recovery archive predates the Fitness per-plan split.

The repository recovery builder now supports the split layout, but **code support is not the same as a current recovery artifact**.

Before Phase 5 is closed:

- [ ] build a fresh recovery/rollback copy from the current protected authentication SQLite database plus the current Saved Data tree;
- [ ] retain it outside the document root;
- [ ] validate SQLite integrity/foreign keys;
- [ ] retain current Saved-Data-only resources separately because SQLite is not a complete representation of all current application data;
- [ ] record evidence identifying the current recovery package and the live Saved Data state it represents.

Do not restore an old recovery archive simply to test it against live production.

---

## Phase 5 completion gate

Phase 5 may be marked complete only when all of the following are true:

- [ ] latest accepted `main` is deployed cleanly;
- [ ] Fitness browser acceptance passes on production;
- [ ] account-index verification passes;
- [ ] representative Saved Data reads/writes outside Fitness pass;
- [ ] key systems/pages pass production acceptance;
- [ ] Charity Shop protected access passes privately;
- [ ] final Saved Data live-health evidence passes;
- [ ] a fresh current recovery package has been built and validated;
- [ ] no unresolved storage, revision, permission, routing or interaction defect remains.

Until those gates pass, production remains on Saved Data authority and Phase 5 remains **active, not complete**.
