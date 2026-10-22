# Recreation Rules

This page owns the Recreation system and navigation between games.

The Recreation is a hub. It must not absorb every game's identity or mechanics into one vague blob.

Each game has its own local reference folder under:

```text
systems/baseline-recreation/games/
```

Current game folders:

```text
systems/baseline-recreation/games/pairs/
systems/baseline-recreation/games/detect-the-word/
systems/baseline-recreation/games/make-the-number/
systems/baseline-recreation/games/track-the-coin/
systems/baseline-recreation/games/rule-shift/
systems/baseline-recreation/games/block-grid/
systems/baseline-recreation/games/colour-sort/
systems/baseline-recreation/games/baseline-realm/
systems/baseline-recreation/games/darts-focused/
systems/baseline-recreation/games/badminton-focused/
```

Individual game mechanics stay separate from hub-level rules.

The top-level `Puzzles` tab is a separate image-puzzle area and currently owns `puzzles/the-weight-of-coherence/`. Block Grid and Colour Sort are puzzle-genre **games** and remain inside the Games list under a `Puzzle Games` group. Do not collapse these two navigation concepts into competing tab implementations.

Block Grid and Colour Sort are module-first games. Their mechanics live in their own game folders, while `js/puzzle-game-support.mjs` provides only shared Recreation navigation/presentation glue. That helper must not become a second mechanics authority.

Canonical game identity and routing are defined in:

```text
systems/baseline-recreation/js/games-registry.js
```

Public IDs/routes use canonical names such as `make-the-number` and `baseline-realm`. Legacy runtime/save IDs such as `make24` and `ninja` are compatibility aliases only and must not become new public identifiers.

## Runtime ownership

Most existing game runtime code is still implemented in:

```text
systems/baseline-recreation/baseline-recreation.html
systems/baseline-recreation/js/baseline-recreation.js
systems/baseline-recreation/css/baseline-recreation.css
```

Baseline Realm is now explicitly approved for a staged extraction from the shared monolith. Its modules live under:

```text
systems/baseline-recreation/games/baseline-realm/shared/
systems/baseline-recreation/games/baseline-realm/basecamp/
systems/baseline-recreation/games/baseline-realm/ninja-training/
systems/baseline-recreation/games/baseline-realm/exploration/
systems/baseline-recreation/games/baseline-realm/workshop/
systems/baseline-recreation/games/baseline-realm/calorie-escape/
systems/baseline-recreation/games/baseline-realm/tactical-operations/
```

Extraction must be incremental. Account saves, routes, public IDs, and current progress need migration support before old code is removed.

Before changing a game, read that game's own rules folder first.

Baseline Realm is the fullscreen exception inside the shared runtime. Fullscreen controls target `#realmSceneFrame`, so the complete animated stage enters fullscreen rather than the surrounding game card or page.

Do not let a fix for one game overwrite another game's mechanics, status feedback, progression model, colour identity, layout contract, or input behaviour.

## Route and asset integrity

Baseline Realm art assets live only inside the module that owns them. Ninja Training art is under `ninja-training/assets/`; Basecamp settlement art is under `basecamp/art/`; Exploration art is under `exploration/art/`. The removed shared art directory must not be recreated or referenced.

Use absolute site paths for runtime assets unless a file has been physically moved and its route has been checked.
