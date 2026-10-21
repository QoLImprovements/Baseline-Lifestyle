import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = process.env.BASELINE_REPO_ROOT
  ? path.resolve(process.env.BASELINE_REPO_ROOT)
  : path.resolve(here, "..");
const read = (relative) => fs.readFileSync(path.join(root, relative), "utf8");

const documentation = read(
  "sitewide/docs/VOICE_WORKFLOW_AND_PROTOTYPE_20260802.md",
);
const adapter = read(
  "systems/baseline-fitness/js/baseline-fitness-voice.js",
);
const endpoint = read("sitewide/api/realtime_transcription.php");
const app = read("systems/baseline-fitness/js/baseline-fitness-app.js");

test("voice documentation names the actual production transport and authority", () => {
  assert.match(documentation, /working OpenAI Realtime transcription integration/i);
  assert.match(documentation, /\/sitewide\/api\/realtime_transcription\.php/);
  assert.match(documentation, /gpt-4o-transcribe/);
  assert.match(documentation, /SQLite remains authoritative/i);
  assert.match(adapter, /RTCPeerConnection/);
  assert.match(endpoint, /gpt-4o-transcribe/);
  assert.match(app, /BASELINE_fitnessWorkout/);
});

test("voice documentation records every current Fitness state", () => {
  for (const state of [
    "idle",
    "awaiting_begin",
    "timing",
    "awaiting_result",
    "awaiting_number",
    "paused",
    "finished",
    "error",
  ]) {
    assert.match(documentation, new RegExp(`\\b${state}\\b`));
    assert.match(adapter, new RegExp(`["']${state}["']`));
  }
});

test("voice documentation does not claim absent number confirmation or rest states", () => {
  assert.match(documentation, /display\/speak recognised number \| not implemented/i);
  assert.match(documentation, /require number confirmation \| not implemented/i);
  assert.match(documentation, /“Continue” after rest \| not implemented/i);
  assert.match(documentation, /pause\/resume \| manual control only/i);
  assert.doesNotMatch(adapter, /confirm_number|await_continue/);
  assert.match(adapter, /failCurrentStep\?\.\(i, "voice"\)/);
});

test("voice documentation distinguishes settings aliases from routed Fitness commands", () => {
  assert.match(documentation, /shared settings UI exposes aliases/i);
  assert.match(documentation, /does not request or handle those commands/i);
  assert.match(documentation, /spoken stop\/end\/cancel phrases/i);
  assert.match(documentation, /spoken `repeat`/i);
});

test("voice documentation records current duplicate limits without overstating idempotency", () => {
  assert.match(documentation, /`handling` lock/i);
  assert.match(documentation, /no server-issued expected-state token/i);
  assert.match(documentation, /no consumed action\/idempotency token/i);
  assert.match(adapter, /a\.handling/);
  assert.doesNotMatch(adapter, /expectedStateToken|idempotencyToken/);
});

test("voice documentation preserves the isolated prototype boundary", () => {
  assert.match(documentation, /not loaded by production/i);
  assert.match(documentation, /confirm_number/);
  assert.match(documentation, /alternative constrained or offline recogniser/i);
});

test("retired voice-access runtime stays absent from production", () => {
  const retired = path.join(root, "sitewide/js/baseline-voice-access.js");
  assert.equal(fs.existsSync(retired), false);

  const productionOwners = [
    "systems/baseline-fitness/baseline-fitness.html",
    "sitewide/js/baseline-shared.js",
    "sitewide/js/baseline-voice.js",
    "systems/baseline-fitness/js/baseline-fitness-app.js",
    "systems/baseline-fitness/js/baseline-fitness-voice.js",
  ];

  for (const relative of productionOwners) {
    const source = read(relative);
    assert.doesNotMatch(source, /baseline-voice-access|BASELINE_fitnessPersistentRecognition|__BASELINE_VOICE_ACCESS__/);
  }
});
