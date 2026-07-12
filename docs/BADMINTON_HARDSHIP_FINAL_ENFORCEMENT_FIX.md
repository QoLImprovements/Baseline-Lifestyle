# Badminton Hardship Final Enforcement Fix

## Problem confirmed

The court could display hardship options after a valid score, but selecting an option and pressing Save Results did not reliably create the next-game hardship. The visible dropdown was not guaranteed to become the dominant saved rule.

## Fix

- Hardship select is now left native for the Badminton score card. This removes the custom dropdown layer from the score submission path.
- The shared select enhancer now skips selects marked `data-native-select="true"` and all `select[data-hardship]`.
- The save path reads the hardship value again immediately before saving.
- If an enhanced dropdown somehow remains, the save path can still infer the selected hardship from visible text.
- Active hardship memory remains dominant during rule evaluation.
- Selected hardship is validated against the currently available options before save.
- Manual Generate Game Plan refreshes current games from hardship memory.

## Edited files

- `systems/baseline-badminton-session/js/baseline-badminton-session.js`
- `sitewide/js/baseline-shared.js`
- `systems/baseline-badminton-session/baseline-badminton-session.html`

## Not edited

- `systems/baseline-badminton-session/css/baseline-badminton-session.css`
