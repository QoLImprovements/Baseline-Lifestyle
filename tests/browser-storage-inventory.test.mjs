import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { collectBrowserStorageInventory } from "../tools/browser-storage-inventory.mjs";

const here=path.dirname(fileURLToPath(import.meta.url));
const root=process.env.BASELINE_REPO_ROOT ? path.resolve(process.env.BASELINE_REPO_ROOT) : path.resolve(here,"..");

test("production runtime contains no browser-owned persistence",()=>{
  const first=collectBrowserStorageInventory(root);
  const second=collectBrowserStorageInventory(root);
  console.log(`BASELINE_BROWSER_STORAGE_INVENTORY=${JSON.stringify(first)}`);
  assert.deepEqual(second,first);
  assert.deepEqual(first.productionPaths,["index.html","index","sitewide","systems"]);
  assert.ok(first.scannedFiles>10,"expected production source files");
  assert.equal(first.occurrenceCount,0,"localStorage/sessionStorage/indexedDB are not production save authorities");
  assert.deepEqual(first.groups,[]);
});

test("browser storage cannot silently return through a new production file",()=>{
  const inventory=collectBrowserStorageInventory(root);
  assert.equal(inventory.occurrenceCount,0);
  assert.deepEqual(inventory.groups,[]);
});
