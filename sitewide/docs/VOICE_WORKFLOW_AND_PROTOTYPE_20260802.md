# Fitness voice workflow trace and replacement gate

## Current production path

The live Fitness page loads `sitewide/js/baseline-voice.js` and `systems/baseline-fitness/js/baseline-fitness-voice.js`.

1. `baseline-voice.js` owns settings, spoken-number parsing, speech synthesis and a generic browser-recognition wrapper used by shared code.
2. The Fitness runtime opens WebRTC transcription through `sitewide/api/realtime_transcription.php`.
3. That endpoint requires `OPENAI_API_KEY` and creates an OpenAI Realtime transcription session using `gpt-4o-transcribe`.
4. Fitness supplies a broad prompt/vocabulary including `begin`, `start`, `ready`, `go`, result synonyms, repeat/stop phrases and numbers.
5. Browser `speechSynthesis` speaks workout prompts; recognition is paused while speech is playing and resumed for the next expected state.

The existing state constants are effectively idle, begin, timing, result, number, paused, finished and error. The implemented flow is:

| State | Listening for | Action |
|---|---|---|
| Begin | begin/start/ready/go | starts current exercise |
| Timing/active | recognition paused during prompt/timing | timer or manual action advances |
| Result | success/succeeded/successful/complete/completed or fail/failed/failure | success saves target; failure asks for achieved amount |
| Number | any parsed number | clamps to 0..target, immediately saves failure result and advances |
| Paused/error | resume/retry behavior in runtime | returns to an expected state where possible |
| Finished | no workout commands | recognition should be stopped |

Manual success/failure controls and voice ultimately use the shared `BASELINE_fitnessWorkout` save/progression actions. This is the boundary a replacement should call.

## Documented differences from the requested known flow

The repository does not currently implement several behaviors described as known:

- The number is not displayed/spoken back through a dedicated confirmation state before saving.
- `confirmNumbers` exists in saved settings and the UI but is not enforced by the Fitness workout controller.
- Rejected-number handling is absent because there is no confirmation state.
- Workout rests and `Continue` are absent from the Fitness voice state machine. `maximumRestSeconds` and `restAnnouncements` are persisted/displayed but unused by this runtime.
- An uncertain/incorrect recognized number can currently reach a save after parser acceptance.
- Broad synonyms work today, despite the desired constrained vocabulary.

These are gaps, not permission to rewrite production progression without first adding tests and clarifying the intended rest source.

## Candidate constrained state contract

The isolated prototype in `prototypes/voice-recognition/workout-policy.mjs` exposes this engine-independent contract:

| State | Allowed vocabulary | Save permitted? |
|---|---|---|
| `await_begin` | `Begin` | no |
| `active` | none | no |
| `await_result` | `Succeeded`, `Failed` | success may invoke authoritative action once |
| `await_number` | number only, bounded by current target | no |
| `confirm_number` | `Yes`, `No` | yes may invoke authoritative failure action once; no clears candidate |
| `rest` | `Continue` | no |
| `complete` | none | no |

`Start`, `Ready` and `Go` are intentionally not in the prototype. The existing production vocabulary remains unchanged until integration approval.

The recognizer must receive server-derived state context or a short-lived authenticated state token; it must not trust a browser's unverified claim that a number or command is currently legal. Recognition returns a candidate event only. It never writes Fitness data directly.

## Number handling contract

1. Derive result type, target and unit from the current authoritative step.
2. Enter number-only recognition after `Failed`.
3. Parse digits and compound English numbers with the existing tested parser.
4. Reject negative, non-integer, uncertain or above-target values unless the exercise schema explicitly permits another bound.
5. Place the candidate in the existing field and display it prominently.
6. Speak the candidate with its unit and ask for confirmation.
7. `No` clears the candidate and returns to number listening.
8. `Yes` invokes the same idempotent Fitness result action as the manual control.
9. Mark the state/action token consumed so duplicate transcripts cannot create another save revision.

Manual correction remains available at every recognition step.

## Audio/privacy contract

- Prefer streaming or short bounded chunks.
- Keep microphone audio in memory or a private Runtime temporary path.
- Do not write audio into Saved Data, logs or Git.
- Delete temporary chunks immediately after recognition and on error/timeout.
- Log event type, duration, confidence band, engine version and redacted error only; do not log raw audio or routine transcripts by default.
- Make listening/paused/error state visually and audibly clear.
- Silence/background noise creates no Fitness revision.

## Stage 10 feasibility gate

Official Hostinger documentation now confirms managed server-side Node processes on Business plans and Node 18–24 support, but it does not document the specific offline-speech requirements. A real hPanel non-production benchmark must verify:

- chosen recognizer/model installation and native-module compatibility;
- model size, download persistence and cold-start time;
- 2-core/3-GB-class CPU/RAM behavior or the actual legacy-plan limits;
- WebSocket and request-duration behavior;
- concurrency during overlapping workouts;
- process restart and deploy behavior;
- environment configuration and private temporary-directory access;
- temporary-audio cleanup under success, disconnect and crash;
- whether the persistent PHP site and Node recognizer can coexist without route or resource contention.

Reference: <https://www.hostinger.com/support/how-to-deploy-a-nodejs-website-in-hostinger/>.

## Stage 11 comparative test matrix

Create a consented, non-production corpus of short utterances covering quiet/noisy rooms, near/far microphones, laptop/phone/tablet, supported browsers, expected accents and deliberately invalid commands. Do not commit identifiable recordings.

| Category | Required cases | Metric |
|---|---|---|
| Commands | Begin, Succeeded, Failed, Yes, No, Continue; invalid cross-state commands | exact event accuracy and false activation rate |
| Numbers | 0, teens, similar-sounding values, compounds such as 23, target boundary, above target | exact numeric accuracy and unsafe acceptance rate |
| Timing | cold and warm requests | median, p95 and worst response latency |
| Reliability | silence, music, speech synthesis overlap, disconnect, repeated utterance | no duplicate save; recovery success |
| Resources | idle and concurrent users | peak/steady RAM, CPU, model load time |
| Privacy | success, timeout, crash | zero retained audio after cleanup window |

Compare at least: current production Realtime path, the offline candidate on the real Hostinger plan and manual fallback. Predefine acceptance thresholds before looking at the result. A candidate must not replace production merely because its average accuracy is acceptable; state-specific false activation, number errors, latency and resource failures are release blockers.

## Stage 12 integration sequence

1. Keep current production recognition as default.
2. Add server-issued expected-state tokens and idempotency before changing engines.
3. Integrate the constrained policy behind a disabled feature flag.
4. Enable only for test accounts and capture redacted metrics.
5. Exercise the same manual/voice authoritative actions and revision conflicts.
6. Roll out gradually only after the comparative gate passes.
7. Preserve immediate feature-flag rollback to the previous recognizer and manual controls.
