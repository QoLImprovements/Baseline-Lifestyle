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

test("Generate Game Plan never auto-selects roster members as attendees", () => {
  assert.doesNotMatch(source, /function autoSelectAllPlayersForPlan\(/);
  const start = source.indexOf("function generateGamePlan");
  const end = source.indexOf("function renderPlayerPill", start);
  const generate = source.slice(start, end);
  assert.doesNotMatch(generate, /state\.players\.map\(player => player\.id\)/);
  assert.doesNotMatch(generate, /autoSelectAllPlayersForPlan/);
});

test("zero and one attendee are preserved and generation is refused", () => {
  const start = source.indexOf("function generateGamePlan");
  const end = source.indexOf("function renderPlayerPill", start);
  const generate = source.slice(start, end);
  assert.match(generate, /const attendingPlayers = getAttendingPlayers\(\)/);
  assert.match(generate, /if\(attendingPlayers\.length < 2\)/);
  assert.match(generate, /No attendees are selected/);
  assert.match(generate, /At least two attendees are needed/);
});
