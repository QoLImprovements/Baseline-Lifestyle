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

test("current courts explain why the matchup was selected", () => {
  assert.match(source, /court\.matchupReason = reasons\.join\(' '\)/);
  assert.match(source, /Why this matchup\?/);
  assert.match(source, /Rating gap:/);
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
