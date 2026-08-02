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
  assert.deepEqual(first.productionPaths, ["index.html", "sitewide", "systems"]);
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

test("migration rules are explicit and preserve unresolved user content", () => {
  assert.equal(mapping.formatVersion, 1);
  assert.match(mapping.authority, /SQLite remains authoritative/i);
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

  const diet = rules.find((rule) => rule.id === "diet-log-local-content");
  const skincare = rules.find((rule) => rule.id === "skincare-slider-settings");
  assert.equal(diet?.decision, "preserve-local-and-block-retirement");
  assert.equal(diet?.target, null);
  assert.equal(skincare?.decision, "preserve-local-and-block-retirement");
  assert.equal(skincare?.target, null);
});

test("shared Badminton browser state uses the canonical resource path", () => {
  const rules = mapping.rules || [];
  const sharedRules = rules.filter((rule) =>
    ["badminton-shared-v3-legacy", "badminton-shared-v4-cache"].includes(rule.id),
  );
  assert.equal(sharedRules.length, 2);
  for (const rule of sharedRules) {
    assert.equal(rule.target, "Shared/badminton-session.json");
  }
  assert.equal(
    rules.some((rule) => String(rule.target || "").includes("Shared/Badminton/badminton.json")),
    false,
  );
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
