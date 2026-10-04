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

test("newer local hardship wins independently of whole-session freshness", () => {
  const core = loadCore();
  const key = core.getHardshipContextKey("singles", ["p1"], ["p2"]);
  const serverLedger = {
    [key]: {
      targetPreset: "full-court",
      shotStage: 0,
      updatedAt: 100,
    },
  };
  const localLedger = {
    [key]: {
      targetPreset: "m1m2",
      shotStage: 1,
      shotRestrictions: ["no-smashes", "no-downward-shots"],
      updatedAt: 200,
    },
  };

  const merged = core.mergeNewestHardshipRecords(serverLedger, localLedger);
  assert.equal(merged.recovered, true);
  assert.equal(merged.ledger[key].targetPreset, "m1m2");
  assert.equal(merged.ledger[key].shotStage, 1);
});

test("newer hardship tombstone wins so refresh cannot resurrect a cleared rule", () => {
  const core = loadCore();
  const key = core.getHardshipContextKey("singles", ["p1"], ["p2"]);
  const serverLedger = {
    [key]: { targetPreset: "m1m2", shotStage: 1, updatedAt: 100 },
  };
  const localLedger = {
    [key]: {
      targetPreset: "full-court",
      shotStage: 0,
      shotRestrictions: [],
      cleared: true,
      updatedAt: 200,
    },
  };

  const merged = core.mergeNewestHardshipRecords(serverLedger, localLedger);
  assert.equal(merged.ledger[key].cleared, true);
  assert.equal(merged.ledger[key].shotStage, 0);
  assert.equal(merged.ledger[key].targetPreset, "full-court");
});

test("reload reconciliation always compares hardship records before whole-session freshness", () => {
  const start = runtimeSource.indexOf("function hydrateSessionFromServer");
  const end = runtimeSource.indexOf("function normalizeLoginName", start);
  const hydration = runtimeSource.slice(start, end);
  const mergeAt = hydration.indexOf(
    "mergeNewestLocalHardshipsIntoServerState(serverState, localSnapshot)",
  );
  const freshnessAt = hydration.indexOf(
    "localStateIsNewerThanServer(localSnapshot,serverState)",
  );

  assert.ok(mergeAt >= 0, "hardship reconciliation must run during hydration");
  assert.ok(
    freshnessAt < 0 || mergeAt < freshnessAt,
    "hardship reconciliation must not depend on whole-session freshness",
  );
});

test("transient POST failure retries instead of permanently setting serverSaveBlocked", () => {
  const start = runtimeSource.indexOf("function queueServerSave");
  const end = runtimeSource.indexOf("function saveSessionData", start);
  const save = runtimeSource.slice(start, end);

  assert.match(save, /scheduleServerSaveRetry\(\)/);
  assert.doesNotMatch(
    save,
    /catch\(function\(_error\)\)\{[\s\S]*?serverSaveBlocked\s*=\s*true/,
  );
  assert.match(save, /getStateUpdatedAt\(state\) > requestLocalUpdatedAt/);
});

test("controller delegates stable identity and record reconciliation to extracted core", () => {
  assert.match(runtimeSource, /window\.BASELINE_BADMINTON_SESSION_CORE/);
  assert.match(runtimeSource, /sessionCore\.getStableSideKey\(ids\)/);
  assert.match(runtimeSource, /sessionCore\.getHardshipContextKey\(/);
  assert.match(runtimeSource, /sessionCore\.mergeNewestHardshipRecords\(/);
});
