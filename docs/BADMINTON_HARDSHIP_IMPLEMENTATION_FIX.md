# Badminton Hardship Implementation Fix

Source: `baseline-lifestyle-site-badminton-game-plan-ladder-fix.zip`

## Problem

The Game Plan hardship control could show the same hardship repeatedly, such as **Remove Shot Options** / **Reduce Target Area**, without the next generated game actually carrying that hardship forward.

The practical cause was that hardship memory was tied mainly to the exact matchup signature. When the next game was generated with a different opponent or a different exact court grouping, the selected hardship had no active memory to apply. This made the alteration appear briefly or appear saved, then the next game reverted to full rules.

## Fix

- Hardships now attach to the affected player / side as well as the exact matchup.
- `Reduce Target Area` now persists into the next game involving that affected side.
- `Remove Shot Options` now persists into the next game involving that affected side.
- The same hardship is no longer offered repeatedly while it is already active.
- Restoring / reducing hardship now updates the same side-level memory.
- The existing ladder fix remains in place.
- No Food / Skincare files were changed.
- No `.htaccess` changes were made.

## Changed file

- `systems/baseline-badminton-session/js/baseline-badminton-session.js`
