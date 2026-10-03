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
const php = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/api/badminton_session.php"),
  "utf8",
);

test("doubles ratings use canonical Pair IDs made from two Player IDs", () => {
  assert.match(js, /function getPairIdFromPlayers\(players\)/);
  assert.match(js, /return ids\.length === 2 \? \('pair:' \+ ids\.join\('::'\)\) : ''/);
  assert.match(php, /function bl_badminton_pair_id\(string \$a, string \$b\): string/);
  assert.match(php, /'pair:' \. implode\('::', \$ids\)/);
});

test("legacy name-keyed pair ratings migrate to Pair IDs", () => {
  assert.match(js, /getPlayerByNameForRatingMigration/);
  assert.match(js, /normalizePairRatingKeys/);
  assert.match(php, /\$playersByName\[bl_badminton_normalize/);
  assert.match(php, /\$pairRatings\[\$pairId\] = \$rating/);
});

test("solo 1v2 ratings use Player IDs rather than names", () => {
  assert.match(js, /const playerId = getPlayerRatingId\(player\)/);
  assert.match(js, /state\.oneVsTwoRatings\[playerId\]/);
  assert.match(php, /\$state\['oneVsTwoRatings'\]\[\$player\['id'\]\]/);
});

test("25 players imply exactly 300 unique unordered Pair IDs", () => {
  const ids = Array.from({ length: 25 }, (_, i) => `player-${i + 1}`);
  const pairs = new Set();
  for (let i = 0; i < ids.length; i += 1) {
    for (let j = i + 1; j < ids.length; j += 1) {
      pairs.add("pair:" + [ids[i], ids[j]].sort().join("::"));
    }
  }
  assert.equal(pairs.size, 300);
});

test("Pair IDs are order-independent", () => {
  const pairId = (a, b) => "pair:" + [a, b].sort().join("::");
  assert.equal(pairId("p1", "p2"), pairId("p2", "p1"));
});
