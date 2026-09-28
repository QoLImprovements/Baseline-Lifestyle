import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { collectBrowserStorageInventory } from "../tools/browser-storage-inventory.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = process.env.BASELINE_REPO_ROOT
  ? path.resolve(process.env.BASELINE_REPO_ROOT)
  : path.resolve(here, "..");
const mapping = JSON.parse(
  fs.readFileSync(path.join(root, "sitewide/migration/browser_storage_map.json"), "utf8"),
);

function mappingOwners(rules) {
  const owners = new Map();
  for (const rule of rules) {
    for (const pattern of rule.inventoryPatterns || []) {
      const current = owners.get(pattern) || [];
      current.push(rule.id);
      owners.set(pattern, current);
    }
  }
  return owners;
}

test("browser-storage inventory scans production sources deterministically", () => {
  const first = collectBrowserStorageInventory(root);
  const second = collectBrowserStorageInventory(root);
  console.log(`BASELINE_BROWSER_STORAGE_INVENTORY=${JSON.stringify(first)}`);
  assert.deepEqual(second, first);
  assert.deepEqual(first.productionPaths, ["index.html", "index", "sitewide", "systems"]);
  assert.ok(first.scannedFiles > 10, "expected production source files");
  assert.ok(first.occurrenceCount > 0, "expected browser-storage accesses");
  assert.ok(first.groups.some((group) => group.pattern.includes("voice_settings")));
  assert.equal(
    first.groups.some((group) =>
      group.occurrences.some((item) =>
        item.file.startsWith("tests/") ||
        item.file.startsWith("prototypes/") ||
        item.file.includes("/node_modules/"),
      ),
    ),
    false,
  );
});

test("every discovered storage group has one reviewed migration decision", () => {
  const inventory = collectBrowserStorageInventory(root);
  const owners = mappingOwners(mapping.rules || []);
  const missing = inventory.groups
    .map((group) => group.pattern)
    .filter((pattern) => !owners.has(pattern));
  const duplicates = [...owners.entries()]
    .filter(([, ruleIds]) => ruleIds.length !== 1)
    .map(([pattern, ruleIds]) => ({ pattern, ruleIds }));
  const stale = [...owners.keys()].filter(
    (pattern) => !inventory.groups.some((group) => group.pattern === pattern),
  );

  assert.deepEqual(missing, [], `unmapped browser storage: ${missing.join(", ")}`);
  assert.deepEqual(duplicates, [], `duplicate mapping ownership: ${JSON.stringify(duplicates)}`);
  assert.deepEqual(stale, [], `stale inventory patterns: ${stale.join(", ")}`);
});

test("post-cutover browser storage never promotes retired account copies", () => {
  assert.equal(mapping.formatVersion, 1);
  assert.match(mapping.authority, /Saved Data resource files are the target production authority/i);
  const rules = mapping.rules || [];
  assert.ok(rules.length > 10);
  const ids = rules.map((rule) => rule.id);
  assert.equal(new Set(ids).size, ids.length, "mapping rule IDs must be unique");

  for (const rule of rules) {
    assert.ok(rule.id, "rule id required");
    assert.ok(rule.classification, `${rule.id}: classification required`);
    assert.ok(rule.decision, `${rule.id}: decision required`);
    assert.ok(Object.hasOwn(rule, "target"), `${rule.id}: target decision required`);
    assert.ok(rule.cutoverRule, `${rule.id}: cutover rule required`);
  }

  const voice=rules.find((rule)=>rule.id==="voice-settings");
  assert.equal(voice?.decision,"keep-local-for-guests-never-promote");
  assert.equal(voice?.target,null);
  assert.match(voice?.cutoverRule || "", /must never be automatically promoted/i);

  const expectedDecisions = new Map([
    ["diet-log-local-content","keep-local-when-signed-out-never-promote"],
    ["diet-log-legacy-owner","delete-on-authenticated-load"],
    ["fitness-body-profile","rebuild-from-account-never-promote"],
    ["fitness-active-workout","rebuild-from-account-never-promote"],
    ["fitness-progression-history","rebuild-from-account-never-promote"],
    ["fitness-import-recovery-backup","delete-on-authenticated-load"],
    ["fitness-routine-local-cache","retire-on-authenticated-load-never-promote"],
    ["fitness-routine-import-candidate","delete-on-authenticated-load"],
    ["skincare-routine-local-cache","retire-authenticated-physical-copy-never-promote"],
    ["skincare-routine-groups-local-cache","retire-authenticated-physical-copy-never-promote"],
    ["skincare-slider-settings","retire-authenticated-physical-copy-never-promote"],
    ["games-guest-profiles","keep-local-for-guests-never-promote"],
    ["games-legacy-import-owner","delete-on-authenticated-load"],
    ["trackcoin-game","keep-local-for-guests-never-promote"],
    ["darts-focused-game","keep-local-for-guests-never-promote"],
    ["realm-exploration-game","keep-local-for-guests-never-promote"],
    ["badminton-focused-game","keep-local-for-guests-never-promote"],
    ["realm-tactical-v1-legacy","keep-local-for-guests-never-promote"],
    ["realm-tactical-v2","keep-local-for-guests-never-promote"],
    ["realm-tactical-legacy-owner","delete-on-authenticated-load"],
  ]);
  for (const [id,decision] of expectedDecisions) {
    const rule=rules.find((entry)=>entry.id===id);
    assert.ok(rule, `missing reviewed storage rule ${id}`);
    assert.equal(rule.decision, decision, `${id} must match post-cutover retirement policy`);
    assert.doesNotMatch(decision, /migrat|import|candidate|bind/i);
  }

  assert.match(rules.find((rule)=>rule.id==="diet-log-local-content")?.cutoverRule || "", /Never offer, merge or promote/i);
  assert.match(rules.find((rule)=>rule.id==="fitness-body-profile")?.cutoverRule || "", /retired before account load/i);
  assert.match(rules.find((rule)=>rule.id==="fitness-routine-local-cache")?.cutoverRule || "", /may never be imported or promoted/i);
  assert.match(rules.find((rule)=>rule.id==="skincare-slider-settings")?.cutoverRule || "", /Never merge or promote/i);
  assert.match(rules.find((rule)=>rule.id==="games-guest-profiles")?.cutoverRule || "", /guest\/local progress only/i);
  assert.match(rules.find((rule)=>rule.id==="realm-tactical-v2")?.cutoverRule || "", /signed-out guest\/local progress only/i);

  const skincareBackup=rules.find((rule)=>rule.id==="skincare-conflict-backups");
  assert.equal(skincareBackup?.decision,"preserve-local-until-reviewed");
  assert.match(skincareBackup?.cutoverRule || "", /Never auto-import, retry or delete/i);

  assert.equal(rules.some((rule)=>rule.decision==="preserve-local-and-block-retirement"),false);
});

test("shared Badminton browser state uses the agreed nested resource path", () => {
  const rules = mapping.rules || [];
  const sharedRules = rules.filter((rule) =>
    ["badminton-shared-v3-legacy", "badminton-shared-v4-cache", "badminton-shared-conflict-backup"].includes(rule.id),
  );
  assert.equal(sharedRules.length, 3);
  for (const rule of sharedRules) {
    assert.equal(rule.target, "Shared/Badminton/badminton.json");
  }
  assert.equal(
    rules.some((rule) => String(rule.target || "").includes("Shared/badminton-session.json")),
    false,
  );
});

test("game browser data maps to canonical physical save files", () => {
  assert.equal(mapping.canonicalGameFiles?.ninja, "baseline-realm.json");
  assert.equal(mapping.canonicalGameFiles?.detectword, "detect-word.json");
  assert.equal(mapping.canonicalGameFiles?.make24, "make-24.json");
  assert.equal(mapping.canonicalGameFiles?.trackcoin, "track-coin.json");
  assert.equal(mapping.canonicalGameFiles?.ruleshift, "rule-shift.json");
  assert.equal(mapping.canonicalGameFiles?.dartsfocused, "darts-focused.json");
  assert.equal(mapping.canonicalGameFiles?.meridiangrove, "meridian-grove.json");
  assert.equal(mapping.canonicalGameFiles?.badmintonfocused, "badminton-focused.json");

  const rules = mapping.rules || [];
  assert.equal(
    rules.find((rule) => rule.id === "trackcoin-game")?.target,
    "Users/{paddedUserId}/Games/track-coin.json",
  );
  assert.equal(
    rules.find((rule) => rule.id === "badminton-focused-game")?.target,
    "Users/{paddedUserId}/Games/badminton-focused.json",
  );
  assert.equal(
    rules.find((rule) => rule.id === "realm-exploration-game")?.target,
    "Users/{paddedUserId}/Games/meridian-grove.json",
  );
  assert.equal(
    rules.find((rule) => rule.id === "realm-exploration-game")?.decision,
    "keep-local-for-guests-never-promote",
  );
  assert.match(
    rules.find((rule) => rule.id === "realm-exploration-game")?.cutoverRule || "",
    /guest\/local game progress only/i,
  );
  for(const id of ["realm-tactical-v1-legacy", "realm-tactical-v2"]){
    assert.match(
      rules.find((rule) => rule.id === id)?.target || "",
      /^Users\/\{paddedUserId\}\/Games\/baseline-realm\.json#/,
    );
  }
  assert.equal(
    rules.some((rule) => /Games\/(?:detectword|make24|trackcoin|ruleshift|dartsfocused|ninja)\.json/.test(String(rule.target || ""))),
    false,
  );
  const tacticalV1=rules.find((rule)=>rule.id==="realm-tactical-v1-legacy");
  const tacticalV2=rules.find((rule)=>rule.id==="realm-tactical-v2");
  assert.equal(tacticalV1?.decision,"keep-local-for-guests-never-promote");
  assert.equal(tacticalV2?.decision,"keep-local-for-guests-never-promote");
  assert.match(tacticalV1?.cutoverRule || "", /account section is authoritative/i);
  assert.match(tacticalV2?.cutoverRule || "", /browser save is ignored/i);
  const tacticalOwner=rules.find((rule)=>rule.id==="realm-tactical-legacy-owner");
  assert.equal(tacticalOwner?.decision,"delete-on-authenticated-load");
});

test("browser authentication preview keys are explicitly excluded", () => {
  const rules = mapping.rules || [];
  const localUsers = rules.find((rule) => rule.knownKeys?.includes("__bl_local_users_v1__"));
  const localSession = rules.find((rule) => rule.knownKeys?.includes("__bl_local_session_v1__"));
  assert.equal(localUsers?.decision, "exclude-and-retire-in-production");
  assert.equal(localUsers?.target, null);
  assert.match(localUsers?.cutoverRule || "", /Never migrate browser-stored password/i);
  assert.equal(localSession?.decision, "exclude-and-retire-in-production");
  assert.equal(localSession?.target, null);
});
