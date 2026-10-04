import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = process.env.BASELINE_REPO_ROOT
  ? path.resolve(process.env.BASELINE_REPO_ROOT)
  : path.resolve(here, "..");

const js = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/js/baseline-badminton-session.js"),
  "utf8",
);
const css = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/css/baseline-badminton-session.css"),
  "utf8",
);

function section(startName, endName) {
  const start = js.indexOf("function " + startName);
  assert.notEqual(start, -1, startName + " must exist");
  const end = endName ? js.indexOf("function " + endName, start + 1) : js.length;
  assert.notEqual(end, -1, endName + " must follow " + startName);
  return js.slice(start, end);
}

test("server reconciliation status stays internal instead of leaking into the plan UI", () => {
  const announce = section("announceServerSaveConflict", "mergeNewestLocalHardshipsIntoServerState");
  assert.doesNotMatch(announce, /planAlert|data-plan-alert|\.plan-alert/);
  assert.match(announce, /__BASELINE_BADMINTON_SERVER_STATUS__/);
});

test("newer local hardship rules are merged by exact hardship key and timestamp", () => {
  const merge = section("mergeNewestLocalHardshipsIntoServerState", "serverPayload");
  assert.match(merge, /activeHardships/);
  assert.match(merge, /hardship::/);
  assert.match(merge, /localUpdatedAt > serverUpdatedAt/);
  assert.match(js, /mergeNewestLocalHardshipsIntoServerState\(serverState, localSnapshot\)/);
  assert.match(js, /if\(recoveredHardships\)[\s\S]*queueServerSave\(\)/);
});

test("court cards no longer render Why this matchup", () => {
  const card = section("renderCourtCard", "sanitizeScoreInput");
  assert.doesNotMatch(card, /Why this matchup\?/);
  assert.doesNotMatch(card, /court-matchup-reason/);
});

test("active hardship explanation is a compact question-mark control on the artwork", () => {
  assert.match(js, /function renderHardshipHelp\(court\)/);
  assert.match(js, /aria-label="Why this hardship\?"/);
  assert.match(js, /renderCourtDiagram\(court\) \+ renderBoundaryMask\(court\) \+ renderCourtShotRestrictionOverlay\(court\) \+ renderHardshipHelp\(court\)/);
  assert.match(css, /\.court-hardship-help\{position:absolute;top:8px;right:8px/);
  assert.match(css, /\.court-hardship-help>summary/);
});

test("court artwork is not pushed down by a forced flexible grid row", () => {
  const courtCardRule = css.match(/\.court-card\{[^}]+\}/)?.[0] || "";
  assert.match(courtCardRule, /grid-auto-rows:auto/);
  assert.doesNotMatch(courtCardRule, /1fr/);
});
