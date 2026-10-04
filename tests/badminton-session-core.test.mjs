import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = process.env.BASELINE_REPO_ROOT
  ? path.resolve(process.env.BASELINE_REPO_ROOT)
  : path.resolve(here, "..");

const coreSource = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/js/badminton-session-core.js"),
  "utf8",
);
const runtimeSource = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/js/baseline-badminton-session.js"),
  "utf8",
);

function loadCore(){
  const context = {};
  vm.createContext(context);
  vm.runInContext(coreSource, context);
  return context.BASELINE_BADMINTON_SESSION_CORE;
}

test("stable side identity is Player-ID and Pair-ID based, not player order based", () => {
  const core = loadCore();
  assert.equal(core.getStableSideKey(["player-b"]), "side::player-b");
  assert.equal(
    core.getStableSideKey(["player-b", "player-a"]),
    "side::player-a::player-b",
  );
  assert.equal(
    core.getStableSideKey(["player-a", "player-b"]),
    "side::player-a::player-b",
  );
});

test("hardship context survives court-side and pair ordering changes for the same identities", () => {
  const core = loadCore();
  const singlesA = core.getHardshipContextKey("singles", ["p1"], ["p2"]);
  const singlesB = core.getHardshipContextKey("singles", ["p1"], ["p2"]);
  assert.equal(singlesA, singlesB);

  const doublesA = core.getHardshipContextKey(
    "doubles",
    ["p2", "p1"],
    ["p4", "p3"],
  );
  const doublesB = core.getHardshipContextKey(
    "doubles",
    ["p1", "p2"],
    ["p3", "p4"],
  );
  assert.equal(doublesA, doublesB);
});

test("Badminton runtime is server-authoritative and has no browser persistence API", () => {
  assert.doesNotMatch(runtimeSource, /localStorage|sessionStorage/);
  assert.doesNotMatch(runtimeSource, /persistSessionLocalOnly|CONFLICT_BACKUP_KEY|mergeNewestLocalHardshipsIntoServerState/);
  assert.match(runtimeSource, /function hydrateSessionFromServer\(\)/);
  assert.match(runtimeSource, /state=hydrateLoadedState\(data\.state/);
  assert.match(runtimeSource, /expectedRevision/);
});

test("failed Badminton saves block further writes until authoritative reload", () => {
  const start = runtimeSource.indexOf("function postServerState");
  const end = runtimeSource.indexOf("function saveSessionData", start);
  const save = runtimeSource.slice(start, end);
  assert.match(save, /serverSaveBlocked=true/);
  assert.match(save, /Saving has stopped; reload the authoritative Badminton state/);
  assert.doesNotMatch(save, /scheduleServerSaveRetry|localStorage|sessionStorage/);
});

test("controller delegates stable Player and Pair identity to extracted core", () => {
  assert.match(runtimeSource, /window\.BASELINE_BADMINTON_SESSION_CORE/);
  assert.match(runtimeSource, /sessionCore\.getStableSideKey\(ids\)/);
  assert.match(runtimeSource, /sessionCore\.getHardshipContextKey\(/);
  assert.doesNotMatch(runtimeSource, /sessionCore\.mergeNewestHardshipRecords/);
});


test("Save Results waits for server confirmation before advancing the court", () => {
  const start = runtimeSource.indexOf("async function saveCourtResult");
  const end = runtimeSource.indexOf("window.__baselineSaveCourtResult", start);
  const saveCourt = runtimeSource.slice(start, end);
  assert.ok(start >= 0);
  assert.match(saveCourt, /await saveSessionData\(\{ immediate:true \}\)/);
  assert.match(saveCourt, /if\(!serverSaved\)/);
  assert.match(saveCourt, /Reloading the authoritative Badminton state/);
  assert.match(saveCourt, /saved on the server/);
  assert.doesNotMatch(saveCourt, /saveSessionData\(\{ immediate:true \}\);\s*refreshCurrentCourtCard/);
});
