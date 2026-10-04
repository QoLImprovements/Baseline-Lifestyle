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
const renderer = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/js/badminton-session-court-renderer.js"),
  "utf8",
);
const courtCards = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/js/badminton-session-court-cards.js"),
  "utf8",
);
const restrictions = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/js/badminton-session-restrictions.js"),
  "utf8",
);
const hardships = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/js/badminton-session-hardships.js"),
  "utf8",
);
const stateHydration = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/js/badminton-session-state-hydration.js"),
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

function rendererSection(startName, endName) {
  const start = renderer.indexOf("function " + startName);
  assert.notEqual(start, -1, startName + " must exist in court renderer");
  const end = endName ? renderer.indexOf("function " + endName, start + 1) : renderer.length;
  assert.notEqual(end, -1, endName + " must follow " + startName + " in court renderer");
  return renderer.slice(start, end);
}

function courtCardSection(startName, endName) {
  const start = courtCards.indexOf("function " + startName);
  assert.notEqual(start, -1, startName + " must exist in court-card renderer");
  const end = endName ? courtCards.indexOf("function " + endName, start + 1) : courtCards.length;
  assert.notEqual(end, -1, endName + " must follow " + startName + " in court-card renderer");
  return courtCards.slice(start, end);
}

function restrictionSection(startName, endName) {
  const start = restrictions.indexOf("function " + startName);
  assert.notEqual(start, -1, startName + " must exist in restriction model");
  const end = endName ? restrictions.indexOf("function " + endName, start + 1) : restrictions.length;
  assert.notEqual(end, -1, endName + " must follow " + startName + " in restriction model");
  return restrictions.slice(start, end);
}

function hardshipSection(startName, endName) {
  const start = hardships.indexOf("function " + startName);
  assert.notEqual(start, -1, startName + " must exist in hardship ledger");
  const end = endName ? hardships.indexOf("function " + endName, start + 1) : hardships.length;
  assert.notEqual(end, -1, endName + " must follow " + startName + " in hardship ledger");
  return hardships.slice(start, end);
}

test("hardships are owned by persistent top-level state, not today's plan", () => {
  const initial = section("createInitialState", "uid");
  assert.match(initial, /hardshipRecords: {}/);
  const ledger = hardshipSection("getActiveHardshipLedger", "normaliseHardshipRule");
  assert.match(ledger, /current\.hardshipRecords/);
  assert.match(ledger, /current\.plan\.activeHardships = current\.hardshipRecords/);
  assert.match(ledger, /return current\.hardshipRecords/);
});

test("legacy server document hardship data migrates into persistent hardshipRecords", () => {
  assert.match(stateHydration, /hardshipRecords: parsed\.hardshipRecords/);
  assert.match(stateHydration, /parsed\.plan && parsed\.plan\.activeHardships/);
  const hydrate = section("hydrateLoadedState", "hydrateSessionFromServer");
  assert.match(hydrate, /state = stateHydrator\.hydrate\(parsed\)/);
  assert.match(hydrate, /state\.plan\.activeHardships = state\.hardshipRecords/);
});

test("Badminton persistent hardships are loaded only from authoritative server state", () => {
  const hydrate = section("hydrateSessionFromServer", "normalizeLoginName");
  assert.match(hydrate, /state=hydrateLoadedState\(data\.state/);
  assert.doesNotMatch(hydrate, /localStorage|sessionStorage|localSnapshot|mergeNewestLocalHardshipsIntoServerState/);
  assert.doesNotMatch(js, /persistSessionLocalOnly|CONFLICT_BACKUP_KEY/);
});

test("server storage preserves and canonicalises persistent hardshipRecords", () => {
  const storageFn = php.match(/function bl_badminton_storage_state\(array \$state\): array \{[\s\S]*?\n\}/)?.[0] || "";
  assert.match(storageFn, /unset\(\$state\['approvedAdminUsernames'\]/);
  assert.match(storageFn, /\$state\['hardshipRecords'\] = bl_badminton_canonical_hardship_records\(\$state\)/);
  assert.match(storageFn, /\$state\['plan'\]\['activeHardships'\] = \$state\['hardshipRecords'\]/);
});

test("No Game slider has one inline label and requested instruction", () => {
  const editor = courtCardSection("renderCourtVariableEditor", "renderCourtCard");
  assert.doesNotMatch(editor, /<strong>No Game<\/strong>/);
  assert.match(editor, /<label class="court-no-game-range-label"><input[^>]+><span>No Game<\/span><\/label>/);
  assert.match(editor, /Move the slider right to register \\'No Game\\'/);
  assert.match(css, /\.court-no-game-range-label\{display:grid;grid-template-columns:minmax\(0,180px\) auto;align-items:center/);
});

test("hardship help stays concise and neutral", () => {
  const help = rendererSection("getHardshipHelpText", "renderHardshipHelp");
  assert.match(help, /Saved hardship for /);
  assert.match(help, /Target area:/);
  assert.match(help, /Shot restriction:/);
  assert.match(help, /This remains saved until a later result changes it\./);
  assert.doesNotMatch(help, /won strongly enough/i);
  assert.doesNotMatch(help, /adaptive hardship/i);
});


test("shot restriction markers read the persistent hardship rule rather than a second store", () => {
  const active = rendererSection("getActiveShotRestrictionsForCourt", "renderCourtShotRestrictionIcon");
  assert.match(active, /getDominantHardshipEntryForCourt\(court\)/);
  assert.match(active, /entry\.rule\.shotRestrictions/);
  assert.match(active, /entry\.rule\.shotStage/);
  assert.doesNotMatch(active, /localStorage|sessionStorage|activeShotRestrictions\s*=/);
});

test("legacy shotStage hardships map to both explicit shot restrictions", () => {
  const normalise = restrictionSection("normaliseShotRestrictions", "getShotRestrictionText");
  assert.match(normalise, /\['no-smashes', 'no-downward-shots'\]/);
  assert.match(normalise, /Number\(stage \|\| 0\) > 0 \? allowed\.slice\(\) : \[\]/);
});

test("court restriction overlay is one side-level stack in the restricted half", () => {
  const overlay = rendererSection("renderCourtShotRestrictionOverlay", "getHardshipHelpText");
  assert.match(overlay, /data-restricted-side=/);
  assert.match(overlay, /is-side-/);
  assert.match(overlay, /active\.restrictions\.map\(renderCourtShotRestrictionIcon\)/);
  assert.doesNotMatch(overlay, /player|adjustedSideIds|side\.players/);
  assert.match(css, /\.court-shot-restrictions\.is-side-1\{top:25%\}/);
  assert.match(css, /\.court-shot-restrictions\.is-side-2\{top:75%\}/);
  assert.match(css, /\.court-shot-restrictions\{[\s\S]*left:50%/);
});

test("No Smashes and No Downward Shots markers are independently conditional", () => {
  const icon = rendererSection("renderCourtShotRestrictionIcon", "renderCourtShotRestrictionOverlay");
  assert.match(icon, /type === 'no-smashes'/);
  assert.match(icon, /No Smashes/);
  assert.match(icon, /No Downward Shots/);
  assert.match(icon, /court-shot-restriction--/);
  assert.match(icon, /<circle[^>]+stroke="#c8273d"/);
  assert.match(icon, /<line x1="7\.5" y1="28\.5" x2="28\.5" y2="7\.5"[^>]+stroke="#c8273d"/);
  assert.match(icon, /M18 7 L12\.5 17/);
  assert.match(icon, /M11 10 L25 24/);
  const overlay = rendererSection("renderCourtShotRestrictionOverlay", "getHardshipHelpText");
  assert.match(overlay, /if\(!active\.sideNumber \|\| !active\.restrictions\.length\) return ''/);
});

test("shot restriction marker captions are compact click/tap details on the court artwork", () => {
  const icon = rendererSection("renderCourtShotRestrictionIcon", "renderCourtShotRestrictionOverlay");
  assert.match(icon, /<details class="court-shot-restriction/);
  assert.match(icon, /<summary aria-label="/);
  assert.match(icon, /court-shot-restriction__caption/);
  const card = courtCardSection("renderCourtCard");
  assert.match(card, /renderCourtDiagram\(court\) \+ renderBoundaryMask\(court\) \+ renderCourtShotRestrictionOverlay\(court\) \+ renderHardshipHelp\(court\)/);
  assert.match(css, /touch-action:manipulation/);
  assert.match(css, /\.court-shot-restriction__caption\{/);
});

test("visible shot guidance semantically bolds both restriction names", () => {
  const guidance = rendererSection("renderRuleGuidance", "renderCourtDiagram");
  assert.match(guidance, /getShotRestrictionHtml\(court\.shotRestrictionStage, court\.shotRestrictions\)/);
  const html = restrictionSection("getShotRestrictionHtml", "getHardshipLabel");
  assert.match(html, /'<strong>' \+ escapeHtml\(label\) \+ '<\/strong>'/);
  assert.match(html, /labels\.join\(' or '\)/);
});

test("saved hardship rules retain shot restriction detail without changing hardship ownership", () => {
  const getRule = hardshipSection("getDominantHardshipRuleForSide", "getActiveHardshipRuleEntryForCourt");
  assert.match(getRule, /normaliseShotRestrictions\(raw\.shotRestrictions, raw\.shotStage\)/);
  assert.match(getRule, /ledger\[key\] = rule/);
  const setter = hardshipSection("setDominantHardshipRuleForSide", "writeHardshipRuleForSide");
  assert.match(setter, /shotRestrictions: activeShotRestrictions/);
  assert.doesNotMatch(setter, /state\.(?!hardshipRecords|plan)/);
  const ledger = hardshipSection("getActiveHardshipLedger", "normaliseHardshipRule");
  assert.match(ledger, /current\.hardshipRecords/);
  assert.match(ledger, /current\.plan\.activeHardships = current\.hardshipRecords/);
});


test("server canonicalises legacy hardship identities to Player IDs before storage and GET", () => {
  assert.match(php, /function bl_badminton_hardship_identity_map/);
  assert.match(php, /function bl_badminton_canonical_hardship_records/);
  assert.match(php, /'id:' \. \$id/);
  assert.match(php, /\$state\['hardshipRecords'\] = bl_badminton_canonical_hardship_records\(\$state\)/);
  assert.match(php, /\$state\['plan'\]\['activeHardships'\] = \$state\['hardshipRecords'\]/);
});


test("legacy matchupMemory hardship is promoted into the authoritative exact-context ledger", () => {
  const promote = hardshipSection("promoteLegacyMatchupMemoryForCourt", "getActiveHardshipRuleEntryForCourt");
  assert.match(promote, /memory\.targetPreset/);
  assert.match(promote, /memory\.hardshipCounts/);
  assert.match(promote, /getDominantHardshipKeyForSide\(court, sideNumber\)/);
  assert.match(promote, /Object\.prototype\.hasOwnProperty\.call\(ledger, key\)/);
  assert.match(promote, /setDominantHardshipRuleForSide\(court, sideNumber/);

  const evaluate = section("evaluateCourtRestrictionsBase", "syncDominantRuleToMemory");
  assert.match(evaluate, /promoteLegacyMatchupMemoryForCourt\(court,\s*memory\)/);
  assert.ok(
    evaluate.search(/promoteLegacyMatchupMemoryForCourt\(court,\s*memory\)/) <
      evaluate.indexOf("getActiveHardshipRuleEntryForCourt(court)"),
    "legacy memory must be promoted before the active hardship lookup"
  );
});


test("submitted match carries a recoverable authoritative hardship snapshot", () => {
  const saveStart = js.indexOf("async function saveCourtResult");
  const saveEnd = js.indexOf("window.__baselineSaveCourtResult", saveStart);
  const save = js.slice(saveStart, saveEnd);
  assert.match(save, /hardshipContextKey/);
  assert.match(save, /hardshipRuleAfter/);
  assert.match(save, /state\.hardshipRecords\[hardshipContextKey\]/);

  assert.match(php, /function bl_badminton_apply_added_match_hardship_snapshots/);
  assert.match(php, /bl_badminton_match_accepts_hardship_key/);
  assert.match(php, /\$match\['hardshipContextKey'\]/);
  assert.match(php, /\$match\['hardshipRuleAfter'\]/);
  assert.match(php, /\$state = bl_badminton_apply_added_match_hardship_snapshots\(\$storedState, \$state\)/);
});
