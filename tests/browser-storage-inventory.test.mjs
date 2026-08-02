import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { collectBrowserStorageInventory } from "../tools/browser-storage-inventory.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = process.env.BASELINE_REPO_ROOT
  ? path.resolve(process.env.BASELINE_REPO_ROOT)
  : path.resolve(here, "..");

test("browser-storage inventory scans production sources deterministically", () => {
  const first = collectBrowserStorageInventory(root);
  const second = collectBrowserStorageInventory(root);
  console.log(`BASELINE_BROWSER_STORAGE_INVENTORY=${JSON.stringify(first)}`);
  assert.deepEqual(second, first);
  assert.ok(first.scannedFiles > 10, "expected production source files");
  assert.ok(first.occurrenceCount > 0, "expected browser-storage accesses");
  assert.ok(first.groups.some((group) => group.pattern.includes("voice_settings")));
  assert.equal(
    first.groups.some((group) =>
      group.occurrences.some((item) => item.file.startsWith("tests/")),
    ),
    false,
  );
});
