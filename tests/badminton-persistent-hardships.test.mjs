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
const php = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/api/badminton_session.php"),
  "utf8",
);

function section(startName, endName) {
  const start = js.indexOf("function " + startName);
  assert.notEqual(start, -1, startName + " must exist");
  const end = endName ? js.indexOf("function " + endName, start + 1) : js.length;
  assert.notEqual(end, -1, endName + " must follow " + startName);
  return js.slice(start, end);
}

test("hardships are owned by persistent top-level state, not today's plan", () => {
  const initial = section("createInitialState", "uid");
  assert.match(initial, /hardshipRecords: {}/);
  const ledger = section("getActiveHardshipLedger", "normaliseHardshipRule");
  assert.match(ledger, /state\.hardshipRecords/);
  assert.match(ledger, /state\.plan\.activeHardships = state\.hardshipRecords/);
  assert.match(ledger, /return state\.hardshipRecords/);
});

test("legacy plan hardship data migrates into persistent hardshipRecords", () => {
  const hydrate = section("hydrateLoadedState", "loadSessionData");
  assert.match(hydrate, /hardshipRecords: parsed\.hardshipRecords/);
  assert.match(hydrate, /parsed\.plan\.activeHardships/);
  assert.match(hydrate, /state\.plan\.activeHardships = state\.hardshipRecords/);
});

test("browser/server reconciliation merges persistent hardship records by newest timestamp", () => {
  const merge = section("mergeNewestLocalHardshipsIntoServerState", "serverPayload");
  assert.match(merge, /merged\.hardshipRecords/);
  assert.match(merge, /localState\.hardshipRecords/);
  assert.match(merge, /localUpdatedAt > serverUpdatedAt/);
  assert.match(merge, /merged\.plan\.activeHardships = nextLedger/);
});

test("server storage does not strip persistent hardshipRecords", () => {
  const storageFn = php.match(/function bl_badminton_storage_state\(array \$state\): array \{[\s\S]*?\n\}/)?.[0] || "";
  assert.match(storageFn, /unset\(\$state\['approvedAdminUsernames'\]/);
  assert.doesNotMatch(storageFn, /hardshipRecords/);
});

test("No Game slider has one inline label and requested instruction", () => {
  const editor = section("renderCourtVariableEditor", "makeBestCourtFromVariablePlayers");
  assert.doesNotMatch(editor, /<strong>No Game<\/strong>/);
  assert.match(editor, /<label class="court-no-game-range-label"><input[^>]+><span>No Game<\/span><\/label>/);
  assert.match(editor, /Move the slider right to register \\'No Game\\'/);
  assert.match(css, /\.court-no-game-range-label\{display:grid;grid-template-columns:minmax\(0,180px\) auto;align-items:center/);
});

test("hardship help stays concise and neutral", () => {
  const help = section("getHardshipHelpText", "renderHardshipHelp");
  assert.match(help, /Saved hardship for /);
  assert.match(help, /Target area:/);
  assert.match(help, /Shot restriction:/);
  assert.match(help, /This remains saved until a later result changes it\./);
  assert.doesNotMatch(help, /won strongly enough/i);
  assert.doesNotMatch(help, /adaptive hardship/i);
});


test("shot restriction markers read the persistent hardship rule rather than a second store", () => {
  const active = section("getActiveShotRestrictionsForCourt", "renderCourtShotRestrictionIcon");
  assert.match(active, /getDominantHardshipEntryForCourt\(court\)/);
  assert.match(active, /entry\.rule\.shotRestrictions/);
  assert.match(active, /entry\.rule\.shotStage/);
  assert.doesNotMatch(active, /localStorage|sessionStorage|activeShotRestrictions\s*=/);
});

test("legacy shotStage hardships map to both explicit shot restrictions", () => {
  const normalise = section("normaliseShotRestrictions", "getShotRestrictionText");
  assert.match(normalise, /\['no-smashes', 'no-downward-shots'\]/);
  assert.match(normalise, /Number\(stage \|\| 0\) > 0 \? allowed\.slice\(\) : \[\]/);
});

test("court restriction overlay is one side-level stack in the restricted half", () => {
  const overlay = section("renderCourtShotRestrictionOverlay", "getZoneRectsForSide");
  assert.match(overlay, /data-restricted-side=/);
  assert.match(overlay, /is-side-/);
  assert.match(overlay, /active\.restrictions\.map\(renderCourtShotRestrictionIcon\)/);
  assert.doesNotMatch(overlay, /player|adjustedSideIds|side\.players/);
  assert.match(css, /\.court-shot-restrictions\.is-side-1\{top:25%\}/);
  assert.match(css, /\.court-shot-restrictions\.is-side-2\{top:75%\}/);
  assert.match(css, /\.court-shot-restrictions\{[\s\S]*left:50%/);
});

test("No Smashes and No Downward Shots markers are independently conditional", () => {
  const icon = section("renderCourtShotRestrictionIcon", "renderCourtShotRestrictionOverlay");
  assert.match(icon, /type === 'no-smashes'/);
  assert.match(icon, /No Smashes/);
  assert.match(icon, /No Downward Shots/);
  assert.match(icon, /court-shot-restriction--/);
  assert.match(icon, /<circle[^>]+stroke="#c8273d"/);
  assert.match(icon, /<line x1="7\.5" y1="28\.5" x2="28\.5" y2="7\.5"[^>]+stroke="#c8273d"/);
  assert.match(icon, /M18 7 L12\.5 17/);
  assert.match(icon, /M11 10 L25 24/);
  const overlay = section("renderCourtShotRestrictionOverlay", "getZoneRectsForSide");
  assert.match(overlay, /if\(!active\.sideNumber \|\| !active\.restrictions\.length\) return ''/);
});

test("shot restriction marker captions are compact click/tap details on the court artwork", () => {
  const icon = section("renderCourtShotRestrictionIcon", "renderCourtShotRestrictionOverlay");
  assert.match(icon, /<details class="court-shot-restriction/);
  assert.match(icon, /<summary aria-label="/);
  assert.match(icon, /court-shot-restriction__caption/);
  const card = section("renderCourtCard", "sanitizeScoreInput");
  assert.match(card, /renderCourtDiagram\(court\) \+ renderBoundaryMask\(court\) \+ renderCourtShotRestrictionOverlay\(court\) \+ renderHardshipHelp\(court\)/);
  assert.match(css, /touch-action:manipulation/);
  assert.match(css, /\.court-shot-restriction__caption\{/);
});

test("visible shot guidance semantically bolds both restriction names", () => {
  const guidance = section("renderRuleGuidance", "getActiveShotRestrictionsForCourt");
  assert.match(guidance, /getShotRestrictionHtml\(court\.shotRestrictionStage, court\.shotRestrictions\)/);
  const html = section("getShotRestrictionHtml", "getLossSeverity");
  assert.match(html, /'<strong>' \+ escapeHtml\(label\) \+ '<\/strong>'/);
  assert.match(html, /labels\.join\(' or '\)/);
});

test("saved hardship rules retain shot restriction detail without changing hardship ownership", () => {
  const getRule = section("getDominantHardshipRuleForSide", "getDominantHardshipEntryForCourt");
  assert.match(getRule, /normaliseShotRestrictions\(raw\.shotRestrictions, raw\.shotStage\)/);
  assert.match(getRule, /ledger\[key\] = rule/);
  const setter = section("setDominantHardshipRuleForSide", "increaseDominantHardshipForSide");
  assert.match(setter, /shotRestrictions: activeShotRestrictions/);
  assert.doesNotMatch(setter, /state\.(?!hardshipRecords|plan)/);
  const ledger = section("getActiveHardshipLedger", "normaliseHardshipRule");
  assert.match(ledger, /state\.hardshipRecords/);
  assert.match(ledger, /state\.plan\.activeHardships = state\.hardshipRecords/);
});
