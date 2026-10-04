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
