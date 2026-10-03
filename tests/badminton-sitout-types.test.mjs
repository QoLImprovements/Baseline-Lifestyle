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

test("badminton state distinguishes circumstantial and optional sit-outs", () => {
  assert.match(source, /currentCircumstantialSitOutPlayerIds:\s*\[\]/);
  assert.match(source, /currentOptionalSitOutPlayerIds:\s*\[\]/);
  assert.match(source, /syncCurrentSitOutUnion/);
});

test("only circumstantial sit-outs affect automatic rotation fairness", () => {
  assert.match(
    source,
    /lastSitOutPlayerIds\s*=\s*state\.plan\.currentCircumstantialSitOutPlayerIds\.slice\(\)/,
  );
  assert.match(
    source,
    /currentCircumstantialSitOutPlayerIds\.forEach\(playerId\s*=>\s*\{\s*state\.plan\.sitOutCounts\[playerId\]/,
  );
  assert.doesNotMatch(
    source,
    /currentOptionalSitOutPlayerIds\.forEach\(playerId\s*=>\s*\{\s*state\.plan\.sitOutCounts\[playerId\]/,
  );
});

test("finished batches retain both sit-out causes separately", () => {
  assert.match(source, /circumstantialSitOutPlayerIds:/);
  assert.match(source, /optionalSitOutPlayerIds:/);
});
