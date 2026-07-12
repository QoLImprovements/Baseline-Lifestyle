# Voice-Activated Workout — 2026-07-12

## Sitewide ownership

- Added the reusable voice runtime at `sitewide/js/baseline-voice.js`.
- Added sitewide voice settings styling at `sitewide/css/baseline-voice.css`.
- Added account-bound settings storage at `sitewide/api/voice_settings.php` and the `voice_settings` shared database table.
- Added a sitewide **Voice** control beside the existing banner controls.
- Voice capability may be enabled sitewide, but microphone listening begins only after a system-specific voice session is deliberately started.

## Baseline Fitness ownership

- Added `js/baseline-fitness-voice.js` as the Fitness-specific voice adapter.
- Added **Start (Voice Activated)** to the left of the existing manual workout button.
- Added the guided workout popup, command state machine, achieved-number capture, recovery timer, and timed-exercise display.
- Retained the literal result distinction:
  - `Succeeded` / `Failed` = outcome against the target.
  - `Achieved` = quantity completed.
- Default maximum recovery is 150 seconds (2 minutes 30 seconds), with **Ready** ending recovery early.
- Manual controls remain available as the fallback and use the same workout result controller.

## Commands currently used by Baseline Fitness

- Start
- Succeeded
- Failed
- Ready
- Add thirty seconds
- Finish
- Repeat
- Stop Voice Workout

## Validation

- JavaScript syntax checks passed for the sitewide engine, shared runtime, Fitness application, and Fitness adapter.
- PHP syntax checks passed for the shared configuration and voice settings endpoint.
- Voice parser, state-machine, Fitness progression, ownership, and file-contract tests passed.
