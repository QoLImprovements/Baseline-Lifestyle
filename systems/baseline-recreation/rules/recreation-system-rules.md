# Baseline Recreation Rules

Baseline Recreation owns the top-level recreation system and navigation between its current categories.

Canonical top-level navigation:

    System | Games | Puzzles | Concepts

The System page is the default Recreation overview. It may summarise shared account and progression state, but it must not redefine the whole Recreation container as a game system.

Games remain games. Their local reference folders live under systems/baseline-recreation/games/.
Puzzle material remains puzzle material under systems/baseline-recreation/puzzles/.
Concept material remains concept material under systems/baseline-recreation/concepts/.
Do not force future recreational material into Games, Puzzles or Concepts merely because those are the categories that currently exist.

## Canonical routes

- /baseline-recreation/system
- /baseline-recreation/games
- /baseline-recreation/games/<game-slug>
- /baseline-recreation/puzzles
- /baseline-recreation/puzzles/jigsaws
- /baseline-recreation/puzzles/jigsaws/<jigsaw-id>
- /baseline-recreation/puzzles/crossnumber
- /baseline-recreation/concepts
- /baseline-recreation/concepts/<concept-slug>

Old /baseline-games-hub/... paths are compatibility redirects only. They must never become canonical links again.

## Identity rule

- Anything representing the top-level container is Recreation.
- Anything genuinely representing games remains Games.
- Anything genuinely representing puzzles remains Puzzles.
- Anything genuinely representing concepts remains Concepts.
- Existing game save app IDs, games_profiles data, and Saved Data Games/ resources remain game identifiers, not Recreation identifiers.

Canonical game identity metadata remains in systems/baseline-recreation/js/games-registry.js.
Public game IDs such as make-the-number and baseline-realm remain unchanged. Legacy runtime/save IDs such as make24 and ninja remain compatibility aliases only.

## Theme authority

The Recreation habitat is Burgundy -> Rose -> Copper -> Rose -> Burgundy.
Canonical Recreation hue tokens live in sitewide/css/baseline-themes.css.
Recreation-specific component mappings live in css/recreation-theme.css.
Structural CSS must not carry a competing indigo, blue, teal or orange top-level palette.

## Runtime ownership

The shared Recreation shell currently hosts several game runtimes. Game mechanics remain game-specific. Baseline Realm keeps its staged module architecture beneath games/baseline-realm/.

Before changing a game or puzzle, read its local rules/reference material. A fix for one activity must not overwrite another activity's mechanics, progression, layout contract, input behaviour or intentional in-game visual identity.
