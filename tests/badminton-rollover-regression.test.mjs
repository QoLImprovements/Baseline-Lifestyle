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

test("Singles Day routes directly through the singles-only builder", () => {
  const start = source.indexOf("function buildCurrentCourtSet");
  const end = source.indexOf("function generateGamePlan", start);
  const slice = source.slice(start, end);
  assert.match(slice, /else if\(normalizedFormat === 'singles'\)\{\s*result = buildSinglesDayCourtSet/);
});

test("completed-set rollover cannot leave 2+ attendees with zero current courts", () => {
  assert.match(source, /function ensureGeneratedCurrentSet\(attendingPlayers, usedSet\)/);
  assert.match(source, /if\(attendingPlayers\.length >= 2 && !courts\.length\)/);
  assert.match(source, /state\.plan\.current = ensureGeneratedCurrentSet\(attendingPlayers, usedSet\)/);
});

test("old DOM scores cannot bleed into a newly generated set", () => {
  const start = source.indexOf("function syncCourtScoresFromInputs");
  const end = source.indexOf("function syncCourtHardshipFromInput", start);
  const slice = source.slice(start, end);
  assert.match(slice, /data-generation-token/);
  assert.match(slice, /inputToken === generationToken/);
});

test("three attendees on Singles Day imply one singles court and one sit-out", () => {
  const playerCount = 3;
  const courtLimit = 4;
  const singlesCount = Math.min(courtLimit, Math.floor(playerCount / 2));
  const usedCount = singlesCount * 2;
  assert.equal(singlesCount, 1);
  assert.equal(playerCount - usedCount, 1);
});
