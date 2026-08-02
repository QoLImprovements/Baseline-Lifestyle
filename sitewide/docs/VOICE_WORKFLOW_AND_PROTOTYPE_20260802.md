# Fitness voice workflow: current production reality and replacement gate

## Scope and authority

This document records the code that is actually loaded by Baseline Fitness on 2 August 2026. It does not describe an intended future flow as though it already exists.

The production voice path is already a working OpenAI Realtime transcription integration. It is not the browser `SpeechRecognition` wrapper and it is not the isolated policy prototype under `prototypes/voice-recognition/`.

The active components are:

- `sitewide/js/baseline-voice.js` — sitewide settings, compound-number parsing, queued browser speech synthesis and a reusable browser-recognition wrapper used by other shared features;
- `systems/baseline-fitness/js/baseline-fitness-voice.js` — the Fitness state machine, WebRTC transcription client, prompts, microphone display and voice/manual adapter;
- `sitewide/api/realtime_transcription.php` — authenticated same-origin SDP negotiation with OpenAI Realtime;
- `systems/baseline-fitness/js/baseline-fitness-app.js` — the authoritative in-browser workout step logic used by both voice and manual controls.

SQLite remains authoritative for saved plans and completed session status. During an active workout, individual step results are stored through the existing guarded Fitness workout-progress store. The normal **Finish workout** action then calls `update_session.php` to mark the session complete.

## Recognition transport and server controls

The Fitness adapter creates a `RTCPeerConnection`, obtains a one-channel microphone stream and posts an SDP offer to `/sitewide/api/realtime_transcription.php` with same-origin credentials.

The endpoint:

- accepts `POST application/sdp` only;
- requires the normal same-origin check and an authenticated user;
- limits each user to 12 session negotiations per 300 seconds;
- limits the SDP body to 131,072 bytes;
- keeps `OPENAI_API_KEY` on the server;
- sends a pseudonymous HMAC safety identifier rather than account details;
- creates an OpenAI Realtime transcription session using `gpt-4o-transcribe`;
- configures far-field noise reduction and server VAD;
- requests short British-English workout commands and numbers;
- returns only the SDP answer to the browser.

The repository does not write microphone recordings to SQLite, Saved Data, Runtime, logs or Git. The endpoint streams the browser microphone through the negotiated Realtime connection and logs only a bounded service failure status/cURL error when negotiation fails. This code review cannot make claims about external provider retention beyond the configured application behaviour.

## Exact production states

| Runtime constant | Stored value | Meaning |
|---|---|---|
| `IDLE` | `idle` | no active voice workout |
| `BEGIN` | `awaiting_begin` | waiting to start the displayed step |
| `TIMING` | `timing` | the adapter is running its timed-step countdown |
| `RESULT` | `awaiting_result` | waiting for success or failure |
| `NUMBER` | `awaiting_number` | waiting for the achieved amount after failure |
| `PAUSED` | `paused` | microphone input paused by the manual control |
| `FINISHED` | `finished` | all step results are recorded; the user must still finish the session |
| `ERROR` | `error` | recognition cannot continue without user/server correction |

There is no production `confirm_number`, `rest` or `await_continue` state.

## Exact command behaviour

| Current state | Accepted voice input | Current action |
|---|---|---|
| any active listening state | `repeat` | repeats the last spoken instruction |
| any active listening state | `stop voice workout`, `end voice workout`, `cancel voice workout` | closes voice mode but keeps recorded workout progress |
| `awaiting_begin` | `begin`, `start`, `ready`; the transcript selector also maps `go` to `begin` | starts a timer for a timed step, or moves a repetition step to result entry |
| `awaiting_result` | `success`, `succeeded`, `successful`, `complete`, `completed` | records the displayed target as a successful step through `BASELINE_fitnessWorkout.succeedCurrentStep("voice")` |
| `awaiting_result` | `fail`, `failed`, `failure` | asks for the achieved number and enters `awaiting_number` |
| `awaiting_number` | a parsed digit or compound English number | clamps the value to `0..target`, immediately records failure through `failCurrentStep(value, "voice")`, then moves to the next step |
| `finished` | no step command | prompts the user to use **Finish Workout**; transcription remains connected until voice mode is ended or the page is left |

The sitewide parser recognises digits and compound forms such as `twenty-three`, including hundreds and thousands. The Fitness adapter applies the current step target as an upper bound.

The shared settings UI exposes aliases for `yes`, `no`, `pause`, `resume`, `finish` and rest-related options, but the production Fitness adapter does not request or handle those commands in its current states. Their presence in shared settings is not evidence that the Fitness workflow implements them.

## Requested-flow comparison

| Requested behaviour | Production status | Evidence in current flow |
|---|---|---|
| “Begin” | implemented | begins the displayed step |
| “Succeeded” | implemented | accepted together with several success synonyms |
| “Failed” | implemented | enters achieved-number listening |
| achieved-number entry | implemented | digits and compound English numbers are parsed |
| display/speak recognised number | not implemented | the number is not echoed before saving |
| require number confirmation | not implemented | `confirmNumbers` is stored in settings but not consulted by the Fitness adapter |
| reject and re-enter number | only for no recognised number | an unparsed utterance asks again; a parsed number is saved immediately |
| “Continue” after rest | not implemented | there is no rest or continue state in this adapter |
| pause/resume | manual control only | the button pauses/resumes the Realtime microphone; spoken pause/resume is not routed |
| repeat instruction | implemented | spoken `repeat` and a manual button use the same prompt function |
| terminate voice workout | implemented | spoken stop/end/cancel phrases and the manual End Voice Workout button close voice mode |
| finish the saved session by voice | not implemented | the user must use the normal **Finish workout** action after all steps |

## Listening lifecycle, retries and errors

1. Voice mode can start only for a signed-in user whose current planned session is due and available.
2. The adapter opens the modal, obtains microphone access and creates the live amplitude meter.
3. It calls the normal workout `startSession("voice")` action.
4. It speaks `When Ready, Say “Begin”.`
5. Only after that prompt completes does it establish Realtime transcription.
6. Recognition is paused while the site speaks and resumed afterwards, preventing most prompt echo.
7. Realtime delta and completed transcript events can both produce responsive commands.
8. Connection loss retries with exponential delays from 500 ms to a maximum 10 seconds, for up to five attempts.
9. Permission denial, missing microphone, missing server configuration, expired login and rate limiting enter explicit error states/messages.
10. Browser/page exit stops recognition, closes media tracks and cancels speech.

The visible microphone state distinguishes paused, speaking, reconnecting, hearing, transcribing, listening and error. Manual workout controls remain available independently of recognition.

## Save and duplicate behaviour

Voice and manual outcomes call the same `BASELINE_fitnessWorkout` functions. `recordStep()` checks that the workout can start, has started and has a current step, then records one result and advances `completedSteps`.

The voice adapter also uses a `handling` lock while processing a transcript. After a successful action it changes state and advances the current step, so repeated fragments that arrive after the transition normally become invalid for the new state.

This is useful duplicate resistance, but it is not the proposed final protection:

- there is no server-issued expected-state token;
- there is no consumed action/idempotency token;
- step-result writes are not revisioned server writes;
- an accepted number is saved before user confirmation;
- no comparative corpus has yet proved false-activation behaviour under realistic noise and repeated transcript events.

## Isolated constrained-policy prototype

`prototypes/voice-recognition/workout-policy.mjs` is not loaded by production. It models the stricter requested sequence:

| Prototype state | Allowed vocabulary | Save permitted? |
|---|---|---|
| `await_begin` | `Begin` | no |
| `active` | none | no |
| `await_result` | `Succeeded`, `Failed` | success may invoke the authoritative action once |
| `await_number` | number only, bounded by current target | no |
| `confirm_number` | `Yes`, `No` | yes may invoke the failure action once; no clears the candidate |
| `rest` | `Continue` | no |
| `complete` | none | no |

`Start`, `Ready`, `Go` and the current broad result synonyms are deliberately excluded from that prototype. Production vocabulary must not be changed merely by editing this document or prototype.

## Number-confirmation integration contract

A future approved implementation should:

1. derive unit, target and legal range from the authoritative current step;
2. accept a number only while the expected state is number entry;
3. place the candidate on screen without changing workout progress;
4. speak the number and unit once;
5. accept only `Yes` or `No` in confirmation state;
6. clear and re-enter number listening after `No`;
7. call the same authoritative manual/voice action after `Yes`;
8. consume a short-lived expected-state/idempotency token so duplicate transcripts cannot save twice;
9. preserve manual correction and completion controls throughout.

## Alternative recogniser feasibility gate

The checklist's prototype/Hostinger stages now mean testing an alternative constrained or offline recogniser, not creating the first working recogniser. Production already uses OpenAI Realtime.

A non-production Hostinger benchmark must still establish:

- exact model and runtime;
- native dependency and model-install compatibility;
- RAM, CPU, storage, cold-start and warm inference time;
- process persistence and deployment behaviour;
- HTTPS/WebSocket and request-duration limits;
- private temporary-file cleanup on success, disconnect and crash;
- repeated-request behaviour and estimated simultaneous-user capacity;
- whether the PHP site and candidate recogniser can coexist safely.

Do not replace the current Realtime path unless identical-sample comparative testing demonstrates a material improvement in command accuracy, number accuracy, false activation, latency, reliability, privacy and hosting capacity.

## Controlled integration sequence

1. Keep current OpenAI Realtime recognition and all manual controls as the production default.
2. Add expected-state and idempotency protection before changing engines or enabling confirmation saves.
3. Put the constrained policy or alternative recogniser behind a disabled feature flag.
4. Enable it only for explicit test accounts with redacted metrics.
5. Run identical consented samples through current Realtime, the candidate and manual fallback.
6. Roll out only after predefined comparative thresholds pass.
7. Preserve immediate rollback to the current recogniser and manual workflow.
