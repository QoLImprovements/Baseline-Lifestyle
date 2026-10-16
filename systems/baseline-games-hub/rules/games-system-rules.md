# Games Hub Rules

This page owns the Games Hub system and navigation between games.

The Games Hub is a hub. It must not absorb every game's identity or mechanics into one vague blob.

Each game has its own local reference folder under:

```text
systems/baseline-games-hub/games/
```

Current game folders:

```text
systems/baseline-games-hub/games/pairs/
systems/baseline-games-hub/games/detect-the-word/
systems/baseline-games-hub/games/make-the-number/
systems/baseline-games-hub/games/track-the-coin/
systems/baseline-games-hub/games/rule-shift/
systems/baseline-games-hub/games/block-grid/
systems/baseline-games-hub/games/colour-sort/
systems/baseline-games-hub/games/baseline-realm/
systems/baseline-games-hub/games/darts-focused/
systems/baseline-games-hub/games/badminton-focused/
```

Individual game mechanics stay separate from hub-level rules.

Block Grid and Colour Sort are module-first puzzle games. Their mechanics live in their own game folders, while `js/puzzle-game-support.mjs` provides only the shared Hub shell/navigation bridge. The shared helper must not become a second mechanics authority.

Canonical game identity and routing are defined in:

```text
systems/baseline-games-hub/js/games-registry.js
```

Public IDs/routes use canonical names such as `make-the-number` and `baseline-realm`. Legacy runtime/save IDs such as `make24` and `ninja` are compatibility aliases only and must not become new public identifiers.

## Runtime ownership

Most existing game runtime code is still implemented in:

```text
systems/baseline-games-hub/baseline-games-hub.html
systems/baseline-games-hub/js/baseline-games-hub.js
systems/baseline-games-hub/css/baseline-games-hub.css
```

Baseline Realm is now explicitly approved for a staged extraction from the shared monolith. Its modules live under:

```text
systems/baseline-games-hub/games/baseline-realm/shared/
systems/baseline-games-hub/games/baseline-realm/basecamp/
systems/baseline-games-hub/games/baseline-realm/ninja-training/
systems/baseline-games-hub/games/baseline-realm/exploration/
systems/baseline-games-hub/games/baseline-realm/workshop/
systems/baseline-games-hub/games/baseline-realm/calorie-escape/
systems/baseline-games-hub/games/baseline-realm/tactical-operations/
```

Extraction must be incremental. Account saves, routes, public IDs, and current progress need migration support before old code is removed.

Before changing a game, read that game's own rules folder first.

Baseline Realm is the fullscreen exception inside the shared runtime. Fullscreen controls target `#realmSceneFrame`, so the complete animated stage enters fullscreen rather than the surrounding game card or page.

Do not let a fix for one game overwrite another game's mechanics, status feedback, progression model, colour identity, layout contract, or input behaviour.

## Route and asset integrity

Baseline Realm art assets live only inside the module that owns them. Ninja Training art is under `ninja-training/assets/`; Basecamp settlement art is under `basecamp/art/`; Exploration art is under `exploration/art/`. The removed shared art directory must not be recreated or referenced.

Use absolute site paths for runtime assets unless a file has been physically moved and its route has been checked.
