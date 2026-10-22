# Calorie Escape

Calorie Escape is a complete four-zone chase module for Baseline Realm.

## Routes

- City — Chef Brasa
- Desert — Dusthorn Stampede
- Forest — Bramble Bear
- Snow Mountain — Whitefall Avalanche

Each zone contains three escalating levels. Completing a level unlocks the next route in the global campaign. Runs support keyboard, pointer/touch and controller input, shared Workshop effects, shared food use, shared material rewards, save/load, mastery, rankings and ability progression.


## Runtime ownership

- `game-shell.js` owns setup, mount and lifecycle state.
- `ui-methods.js` owns menu/run/result markup and HUD presentation.
- `controls.js` owns keyboard, pointer and controller actions.
- `runtime-loop.js` owns frame updates, obstacle resolution and run completion.
- `world-renderer.js` owns zone/world drawing.
- `obstacle-renderer.js` owns obstacle drawing.
- `calorie-escape-game.js` only composes those authorities.
