import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { collectBrowserStorageInventory } from "../tools/browser-storage-inventory.mjs";

const here=path.dirname(fileURLToPath(import.meta.url));
const root=process.env.BASELINE_REPO_ROOT ? path.resolve(process.env.BASELINE_REPO_ROOT) : path.resolve(here,"..");

test("production runtime contains no unreviewed browser-owned persistence",()=>{
  const first=collectBrowserStorageInventory(root);
  const second=collectBrowserStorageInventory(root);
  console.log(`BASELINE_BROWSER_STORAGE_INVENTORY=${JSON.stringify(first)}`);
  assert.deepEqual(second,first);
  assert.deepEqual(first.productionPaths,["index.html","index","sitewide","systems"]);
  assert.ok(first.scannedFiles>10,"expected production source files");
  assert.equal(first.unreviewedOccurrenceCount,0,"unreviewed browser persistence must not become a production save authority");
  assert.deepEqual(first.unreviewedGroups,[]);
  assert.equal(first.reviewedDeviceOccurrenceCount,2);
  assert.equal(first.reviewedGroups.length,1);
  assert.equal(first.reviewedGroups[0].pattern,"baseline.games.music.v1");
  assert.equal(first.reviewedGroups[0].reviewedDevicePreference,true);
});

test("browser storage cannot silently return through a new production file or key",()=>{
  const inventory=collectBrowserStorageInventory(root);
  assert.equal(inventory.unreviewedOccurrenceCount,0);
  assert.deepEqual(inventory.unreviewedGroups,[]);
  assert.deepEqual(inventory.reviewedGroups.map((group)=>group.pattern),["baseline.games.music.v1"]);
});
