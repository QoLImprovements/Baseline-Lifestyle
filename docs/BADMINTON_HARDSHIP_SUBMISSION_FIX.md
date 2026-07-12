# Badminton Hardship Submission Fix

Source: `baseline-lifestyle-site(23).zip`

## Problem

Selecting a hardship option and pressing Save Results could appear to do nothing.

The issues found were:

- Save Results could remain disabled when the score was valid but the hardship selection had not synced into `court.pendingHardship`.
- The hardship value was read from one strict selector only; if the enhanced select/hidden input was involved, the selected value could be missed.
- Some save exits returned silently, so failure looked like no action.
- Court evaluation could still use non-dominant rule paths, so active hardship memory did not consistently control the saved/next game state.
- Explicit court-area presets were not always treated as dominant; duplicated zone maps could collapse restriction state.

## Fix

- Save Results is now enabled for a valid completed score; missing required hardship selection is handled inside `saveCourtResult` with an alert.
- Hardship syncing now reads any matching hardship input/select for that court.
- Silent save exits now show a clear plan alert or browser alert.
- Active hardship memory is dominant during court evaluation.
- The selected hardship is preserved across the save-time re-evaluation.
- The next generated game is refreshed from hardship memory immediately after the current set rolls forward.
- Explicit target presets now dominate zone inference, preventing maxed restrictions from appearing addable again.

## Changed file

- `systems/baseline-badminton-session/js/baseline-badminton-session.js`

## Not changed

- `.htaccess`
- Food / Skincare files
- Badminton HTML/CSS
- API/database files
