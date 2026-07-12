# Badminton Game Plan Ladder Fix

Source: `baseline-lifestyle-site(22).zip`

## Problem area

Badminton Session → Game Plan.

The current generator could feel unclean because:

- Current games were not explicitly ordered as a ladder after generation.
- The four-player doubles sequence reset to the first pairing when Generate Game Plan was pressed manually.
- Duplicate matchups inside the same generated batch were only penalised, not blocked.

## Changes made

- Added ladder ordering for generated current courts: strongest court first, then downwards.
- Kept public URLs unchanged.
- Prevented duplicate matchup signatures inside one generated batch.
- Preserved the existing save-results flow.
- Fixed manual Generate Game Plan so the four-player doubles ladder rotates instead of resetting.
- Added a clearer Game Plan alert explaining the cleaned ladder behaviour.

## Files changed

- `systems/baseline-badminton-session/js/baseline-badminton-session.js`

## Not changed

- Food / Skincare extraction work.
- Badminton HTML structure.
- Badminton CSS.
- `.htaccess`.
- API/database files.
