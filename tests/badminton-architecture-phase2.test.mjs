import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = process.env.BASELINE_REPO_ROOT
  ? path.resolve(process.env.BASELINE_REPO_ROOT)
  : path.resolve(here, "..");
const source = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/js/baseline-badminton-session.js"),
  "utf8",
);
const ratingsSource = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/js/badminton-session-ratings.js"),
  "utf8",
);
const rendererSource = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/js/badminton-session-court-renderer.js"),
  "utf8",
);
const restrictionsSource = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/js/badminton-session-restrictions.js"),
  "utf8",
);
const hardshipsSource = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/js/badminton-session-hardships.js"),
  "utf8",
);
const hydrationSource = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/js/badminton-session-state-hydration.js"),
  "utf8",
);
const matchmakerSource = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/js/badminton-session-matchmaker.js"),
  "utf8",
);
const ruleAdminSource = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/js/badminton-session-rule-admin.js"),
  "utf8",
);
const reportingSource = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/js/badminton-session-reporting.js"),
  "utf8",
);

test("Badminton Session controller remains syntactically valid JavaScript", () => {
  assert.doesNotThrow(() => new Function(source));
});

test("rotation state distinguishes participation, partnerships, opponents and 2v1 solo assignments", () => {
  for (const field of [
    "sessionPlayCounts",
    "sessionPairCounts",
    "sessionOpponentCounts",
    "sessionSolo2v1Counts",
  ]) {
    assert.match(source, new RegExp(field + ": \\{\\}"));
  }
  assert.match(matchmakerSource, /function updateRotationMemoryFromCourt\(court\)/);
});

test("circumstantial bench choice considers both sit-out count and games played", () => {
  assert.match(matchmakerSource, /function chooseSitOutPlayers\(attendingPlayers, benchCount\)/);
  assert.match(matchmakerSource, /getSitOutCount\(a\.id\)/);
  assert.match(matchmakerSource, /getSessionPlayCount\(b\.id\) - getSessionPlayCount\(a\.id\)/);
  assert.match(matchmakerSource, /lastSitOutPlayerIds/);
});

test("generator exploration is deterministic rather than Math.random driven", () => {
  const layoutStart = matchmakerSource.indexOf("function choosePreferredLayout");
  const candidateEnd = matchmakerSource.indexOf("function buildSinglesDayCourtSet", layoutStart);
  const generatorSlice = matchmakerSource.slice(layoutStart, candidateEnd);
  assert.doesNotMatch(generatorSlice, /Math\.random/);
  assert.match(generatorSlice, /orderPlayersForGeneration/);
  assert.match(matchmakerSource, /function stableGenerationHash\(value\)/);
});

test("candidate quality penalises recent repeated partners, opponents and solo 2v1 roles", () => {
  assert.match(matchmakerSource, /function getCourtRotationPenalty\(court\)/);
  assert.match(matchmakerSource, /sessionPairCounts/);
  assert.match(matchmakerSource, /sessionOpponentCounts/);
  assert.match(matchmakerSource, /sessionSolo2v1Counts/);
  assert.match(source, /score -= getCourtRotationPenalty\(court\)/);
});

test("main current-set generation actually uses the scored candidate path", () => {
  const start = matchmakerSource.indexOf("function buildCurrentCourtSet");
  const end = matchmakerSource.indexOf("function updateRotationMemoryFromCourt", start);
  const currentSetSource = matchmakerSource.slice(start, end);
  assert.match(currentSetSource, /generateNovelCourtSet\(attendingPlayers, normalizedFormat, usedSet, courtLimit\)/);
  assert.match(currentSetSource, /buildSpecialFourPlayerSequence/);
});

test("matchup scoring remains internal and is not exposed as a viewer-facing explanation", () => {
  assert.match(matchmakerSource, /court\.matchupReason = reasons\.join\(' '\)/);
  const start = source.indexOf("function renderCourtCard");
  const end = source.indexOf("function sanitizeScoreInput", start);
  const card = source.slice(start, end);
  assert.doesNotMatch(card, /Why this matchup\?/);
  assert.doesNotMatch(card, /court-matchup-reason/);
});

test("Players & Pairs exposes Pair-ID statistics", () => {
  assert.match(source, /function normalizePairSummaryKeys\(\)/);
  assert.match(source, /Games together/);
  assert.match(source, /W-L/);
  assert.match(source, /Last played/);
  assert.match(source, /getPairLabelFromId/);
});

test("history exposes session summary metrics and stable match identities", () => {
  assert.match(source, /side1PlayerIds:/);
  assert.match(source, /side2PlayerIds:/);
  assert.match(source, /side1PairId:/);
  assert.match(source, /side2PairId:/);
  assert.match(reportingSource, /Pairs used/);
  assert.match(reportingSource, /Hardship changes/);
  assert.match(reportingSource, /Closest score/);
});

test("optional and circumstantial sit-outs remain separate in finished-set reporting", () => {
  assert.match(reportingSource, /Circumstantial sit-outs/);
  assert.match(reportingSource, /Optional sit-outs/);
});

test("hardship save flow delegates directly to one dominant mutation authority", () => {
  assert.match(hardshipsSource, /function getDominantHardshipLedger\(\)\{\s*return getActiveHardshipLedger\(\);\s*\}/);
  const start = source.indexOf("function applyHardshipSaveIntent");
  const end = source.indexOf("function restrictionMemoryHasActiveRule", start);
  const saveIntent = source.slice(start, end);
  assert.ok(start >= 0 && end > start);
  assert.match(saveIntent, /increaseDominantHardshipForSide/);
  assert.match(saveIntent, /reduceDominantHardshipForSide/);
  assert.doesNotMatch(source, /function increaseHardshipRuleForSide\(/);
  assert.doesNotMatch(source, /function reduceHardshipRuleForSide\(/);
});


test("Badminton rating engine is a separate syntactically valid module", () => {
  assert.doesNotThrow(() => new Function(ratingsSource));
  assert.match(source, /window\.BASELINE_BADMINTON_RATINGS/);
  assert.match(source, /ratingModule\.create/);
  assert.doesNotMatch(source, /function applyRatingChanges\(/);
  assert.match(ratingsSource, /function applyRatingChanges\(/);
});


test("Badminton court renderer is a separate syntactically valid module", () => {
  assert.doesNotThrow(() => new Function(rendererSource));
  assert.match(source, /window\.BASELINE_BADMINTON_COURT_RENDERER/);
  assert.match(source, /courtRendererModule\.create/);
  assert.doesNotMatch(source, /function renderCourtDiagram\(/);
  assert.doesNotMatch(source, /function renderBoundaryMask\(/);
  assert.match(rendererSource, /function renderCourtDiagram\(/);
  assert.match(rendererSource, /function renderBoundaryMask\(/);
});


test("Badminton restriction model is a separate syntactically valid module", () => {
  assert.doesNotThrow(() => new Function(restrictionsSource));
  assert.match(source, /window\.BASELINE_BADMINTON_RESTRICTIONS/);
  assert.match(source, /restrictionModule\.create/);
  assert.doesNotMatch(source, /function normaliseShotRestrictions\(/);
  assert.doesNotMatch(source, /function getPresetOrder\(/);
  assert.match(restrictionsSource, /function normaliseShotRestrictions\(/);
  assert.match(restrictionsSource, /function getPresetOrder\(/);
});


test("Badminton hardship ledger is a separate syntactically valid module", () => {
  assert.doesNotThrow(() => new Function(hardshipsSource));
  assert.match(source, /window\.BASELINE_BADMINTON_HARDSHIPS/);
  assert.match(source, /hardshipModule\.create/);
  assert.doesNotMatch(source, /function getActiveHardshipLedger\(/);
  assert.doesNotMatch(source, /function setDominantHardshipRuleForSide\(/);
  assert.match(hardshipsSource, /function getActiveHardshipLedger\(/);
  assert.match(hardshipsSource, /function setDominantHardshipRuleForSide\(/);
});


test("Badminton controller stays below the post-split size ceiling", () => {
  const lines = source.split("\n").length;
  assert.ok(lines < 3275, `controller grew back to ${lines} lines`);
  assert.ok(source.length < 158000, `controller grew back to ${source.length} characters`);
});


test("Badminton state hydration is a separate syntactically valid module", () => {
  assert.doesNotThrow(() => new Function(hydrationSource));
  assert.match(source, /window\.BASELINE_BADMINTON_STATE_HYDRATION/);
  assert.match(source, /stateHydrationModule\.create/);
  const start = source.indexOf("function hydrateLoadedState");
  const end = source.indexOf("function hydrateSessionFromServer", start);
  const wrapper = source.slice(start, end);
  assert.match(wrapper, /stateHydrator\.hydrate\(parsed\)/);
  assert.ok(wrapper.length < 400, "controller hydration wrapper should remain small");
  assert.match(hydrationSource, /currentCircumstantialSitOutPlayerIds/);
  assert.match(hydrationSource, /hardshipRecords:/);
});


test("Badminton matchmaker is a separate syntactically valid module", () => {
  assert.doesNotThrow(() => new Function(matchmakerSource));
  assert.match(source, /window\.BASELINE_BADMINTON_MATCHMAKER/);
  assert.match(source, /matchmakerModule\.create/);
  assert.doesNotMatch(source, /function buildCurrentCourtSet\(/);
  assert.doesNotMatch(source, /function chooseSitOutPlayers\(/);
  assert.match(matchmakerSource, /function buildCurrentCourtSet\(/);
  assert.match(matchmakerSource, /function chooseSitOutPlayers\(/);
});


test("Badminton rule-admin logic is a separate syntactically valid module", () => {
  assert.doesNotThrow(() => new Function(ruleAdminSource));
  assert.match(source, /window\.BASELINE_BADMINTON_RULE_ADMIN/);
  assert.match(source, /ruleAdminModule\.create/);
  assert.doesNotMatch(source, /function renderRuleAdmin\(/);
  assert.doesNotMatch(source, /function bindRuleAdminActions\(/);
  assert.match(ruleAdminSource, /function renderRuleAdmin\(/);
  assert.match(ruleAdminSource, /function bindRuleAdminActions\(/);
  assert.match(ruleAdminSource, /function ensureRuleAdminShape\(/);
});


test("Badminton reporting views are a separate syntactically valid module", () => {
  assert.doesNotThrow(() => new Function(reportingSource));
  assert.match(source, /window\.BASELINE_BADMINTON_REPORTING/);
  assert.match(source, /reportingModule\.create/);
  assert.doesNotMatch(source, /function renderStandings\(/);
  assert.doesNotMatch(source, /function renderMatchHistory\(/);
  assert.doesNotMatch(source, /function renderFinishedGames\(/);
  assert.match(reportingSource, /function renderStandings\(/);
  assert.match(reportingSource, /function renderMatchHistory\(/);
  assert.match(reportingSource, /function renderFinishedGames\(/);
});
