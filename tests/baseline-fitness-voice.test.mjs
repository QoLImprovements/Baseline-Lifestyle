import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = process.env.BASELINE_REPO_ROOT
  ? path.resolve(process.env.BASELINE_REPO_ROOT)
  : path.resolve(here, "..");
const require = createRequire(import.meta.url);
const adapter = require(
  path.join(root, "systems/baseline-fitness/js/baseline-fitness-voice.js"),
);
const read = (relative) => fs.readFileSync(path.join(root, relative), "utf8");

test("voice workout exposes the current literal-command state model", () => {
  const S = adapter.STATES;
  assert.deepEqual(Object.keys(S), [
    "IDLE",
    "BEGIN",
    "TIMING",
    "RESULT",
    "NUMBER",
    "PAUSED",
    "FINISHED",
    "ERROR",
  ]);
  assert.equal(S.BEGIN, "awaiting_begin");
  assert.equal(S.RESULT, "awaiting_result");
  assert.equal(adapter.debug.normalise("  Start!  "), "start");
  assert.equal(adapter.debug.normalise("Succeeded"), "succeeded");
  assert.equal(adapter.debug.parseNumber("I achieved 18 repetitions"), 18);
});

test("voice dialogue keeps outcome and achievement terminology separate", () => {
  const source = read("systems/baseline-fitness/js/baseline-fitness-voice.js");
  assert.match(source, /say Success or Fail/i);
  assert.match(source, /number of .*repetitions/i);
  assert.match(source, /Success/);
  assert.match(source, /Fail/);
});

test("fitness voice prefers streamed OpenAI Realtime transcription and retains browser recognition as a fallback", () => {
  const source = read("systems/baseline-fitness/js/baseline-fitness-voice.js");
  assert.match(source, /selectResponsiveTranscript/);
  assert.match(source, /RTCPeerConnection/);
  assert.match(source, /\/sitewide\/api\/realtime_transcription\.php/);
  assert.match(source, /conversation\.item\.input_audio_transcription\.delta/);
  assert.match(
    source,
    /conversation\.item\.input_audio_transcription\.completed/,
  );
  assert.match(source, /startBrowserFallback/);
  assert.match(source, /voice\.startRecognition/);
  assert.match(source, /enhanced_voice_not_configured/);
  assert.match(source, /realtime_connection_failed/);
  const openingPrompt = source.indexOf("await L()");
  assert.ok(
    openingPrompt >= 0 && source.indexOf("T()", openingPrompt) > openingPrompt,
    "Voice transcription must start after the opening prompt has completed or been skipped",
  );
});

test("Realtime transcript events accumulate deltas and replace them with the final text", () => {
  const delta = adapter.debug.realtimeTranscriptEvent({
    type: "conversation.item.input_audio_transcription.delta",
    item_id: "voice-1",
    delta: "Begin",
  });
  assert.deepEqual(delta, {
    transcript: "Begin",
    isFinal: false,
    itemId: "voice-1",
  });
  const next = adapter.debug.realtimeTranscriptEvent(
    {
      type: "conversation.item.input_audio_transcription.delta",
      item_id: "voice-1",
      delta: " now",
    },
    delta.transcript,
  );
  assert.deepEqual(next, {
    transcript: "Begin now",
    isFinal: false,
    itemId: "voice-1",
  });
  const splitWord = adapter.debug.realtimeTranscriptEvent(
    {
      type: "conversation.item.input_audio_transcription.delta",
      item_id: "voice-2",
      delta: "now",
    },
    "Begin ",
  );
  assert.equal(splitWord.transcript, "Begin now");
  const completed = adapter.debug.realtimeTranscriptEvent(
    {
      type: "conversation.item.input_audio_transcription.completed",
      item_id: "voice-1",
      transcript: "Begin now.",
    },
    next.transcript,
  );
  assert.deepEqual(completed, {
    transcript: "Begin now.",
    isFinal: true,
    itemId: "voice-1",
  });
});

test("Realtime PHP endpoint protects the API key and tunes transcription for workout commands", () => {
  const endpoint = read("sitewide/api/realtime_transcription.php");
  assert.match(endpoint, /bl_require_same_origin\(\)/);
  assert.match(endpoint, /bl_require_user\(\)/);
  assert.match(endpoint, /bl_require_rate_limit/);
  assert.match(endpoint, /bl_env\('OPENAI_API_KEY'\)/);
  assert.match(endpoint, /gpt-4o-transcribe/);
  assert.match(endpoint, /server_vad/);
  assert.match(endpoint, /silence_duration_ms' => 250/);
  assert.doesNotMatch(endpoint, /sk-[A-Za-z0-9]/);
});

test("fitness page loads one sitewide engine adapter and presents the voice popup", () => {
  const html = read("systems/baseline-fitness/baseline-fitness.html");
  const app = read("systems/baseline-fitness/js/baseline-fitness-app.js");
  assert.match(html, /id="voiceWorkoutModal"/);
  assert.match(html, /baseline-fitness-voice\.js/);
  assert.equal((html.match(/baseline-fitness-voice\.js/g) || []).length, 1);
  assert.match(app, /Start \(Voice Activated\)/);
  assert.match(app, /BASELINE_fitnessWorkout/);
  assert.match(app, /inputMode/);
  assert.match(app, /✕ Failed/);
});

test("sitewide voice runtime is parser-loaded and owns its settings control", () => {
  const html = read("systems/baseline-fitness/baseline-fitness.html");
  const shared = read("sitewide/js/baseline-shared.js");
  const voice = read("sitewide/js/baseline-voice.js");
  const database = read("sitewide/api/database.php");
  assert.match(html, /\/sitewide\/js\/baseline-voice\.js/);
  assert.match(html, /data-baseline-voice-runtime="true"/);
  assert.match(voice, /bl-voice-toggle/);
  assert.doesNotMatch(shared, /baseline-voice\.js|bl-voice-toggle/);
  assert.match(database, /CREATE TABLE IF NOT EXISTS voice_settings/);
  assert.equal(
    fs.existsSync(path.join(root, "sitewide/api/voice_settings.php")),
    true,
  );
});
