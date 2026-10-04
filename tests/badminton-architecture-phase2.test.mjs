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
  assert.match(source, /function updateRotationMemoryFromCourt\(court\)/);
});

test("circumstantial bench choice considers both sit-out count and games played", () => {
  assert.match(source, /function chooseSitOutPlayers\(attendingPlayers, benchCount\)/);
  assert.match(source, /getSitOutCount\(a\.id\)/);
  assert.match(source, /getSessionPlayCount\(b\.id\) - getSessionPlayCount\(a\.id\)/);
  assert.match(source, /lastSitOutPlayerIds/);
});

test("generator exploration is deterministic rather than Math.random driven", () => {
  const layoutStart = source.indexOf("function choosePreferredLayout");
  const candidateEnd = source.indexOf("function buildSinglesDayCourtSet", layoutStart);
  const generatorSlice = source.slice(layoutStart, candidateEnd);
  assert.doesNotMatch(generatorSlice, /Math\.random/);
  assert.match(generatorSlice, /orderPlayersForGeneration/);
  assert.match(source, /function stableGenerationHash\(value\)/);
});

test("candidate quality penalises recent repeated partners, opponents and solo 2v1 roles", () => {
  assert.match(source, /function getCourtRotationPenalty\(court\)/);
  assert.match(source, /sessionPairCounts/);
  assert.match(source, /sessionOpponentCounts/);
  assert.match(source, /sessionSolo2v1Counts/);
  assert.match(source, /score -= getCourtRotationPenalty\(court\)/);
});

test("main current-set generation actually uses the scored candidate path", () => {
  const start = source.indexOf("function buildCurrentCourtSet");
  const end = source.indexOf("function generateGamePlan", start);
  const currentSetSource = source.slice(start, end);
  assert.match(currentSetSource, /generateNovelCourtSet\(attendingPlayers, normalizedFormat, usedSet, courtLimit\)/);
  assert.match(currentSetSource, /buildSpecialFourPlayerSequence/);
});

test("matchup scoring remains internal and is not exposed as a viewer-facing explanation", () => {
  assert.match(source, /court\.matchupReason = reasons\.join\(' '\)/);
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
  assert.match(source, /Pairs used/);
  assert.match(source, /Hardship changes/);
  assert.match(source, /Closest score/);
});

test("optional and circumstantial sit-outs remain separate in finished-set reporting", () => {
  assert.match(source, /Circumstantial sit-outs/);
  assert.match(source, /Optional sit-outs/);
});

test("hardship compatibility APIs delegate to one dominant mutation authority", () => {
  assert.match(source, /function getDominantHardshipLedger\(\)\{\s*return getActiveHardshipLedger\(\);\s*\}/);
  assert.match(source, /function getHardshipRuleForSide\(court, sideNumber\)\{\s*return getDominantHardshipRuleForSide\(court, sideNumber\);\s*\}/);
  assert.match(source, /function increaseHardshipRuleForSide\(court, sideNumber, hardshipType\)\{\s*return increaseDominantHardshipForSide\(court, sideNumber, hardshipType\);\s*\}/);
  assert.match(source, /function reduceHardshipRuleForSide\(court, sideNumber, hardshipType\)\{\s*return reduceDominantHardshipForSide\(court, sideNumber, hardshipType\);\s*\}/);
  assert.match(source, /function applyHardshipSaveIntent[\s\S]*increaseDominantHardshipForSide/);
  assert.match(source, /function applyHardshipSaveIntent[\s\S]*reduceDominantHardshipForSide/);
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
