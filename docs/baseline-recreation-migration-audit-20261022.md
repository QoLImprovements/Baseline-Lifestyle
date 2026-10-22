# Baseline Recreation migration audit — 22 October 2026

## Canonical result

- Top-level system identity: Baseline Recreation.
- Top-level navigation: System | Games | Puzzles.
- Physical root: systems/baseline-recreation/.
- Canonical shell: systems/baseline-recreation/baseline-recreation.html.
- Public System route: /baseline-recreation/system.
- Public Games route: /baseline-recreation/games and /baseline-recreation/games/<game-slug>.
- Public Puzzles route: /baseline-recreation/puzzles with clean jigsaw and Crossnumber descendants.

## Compatibility

- Legacy /baseline-games-hub/... public URLs exist only as HTTP redirects.
- Legacy physical Games Hub asset paths have explicit compatibility redirects where container filenames changed and a generic migrated-folder fallback for unchanged assets.
- The obsolete baselineGamesHubView browser preference is deletion-only compatibility state. Recreation tab/view authority is the canonical URL.
- That cleanup lives only in js/recreation-legacy-state-migration.js; the canonical Recreation core remains free of browser-storage persistence APIs.

## Preserved game-specific architecture

- Game registry, game core config, game progression/profile rules, games_profiles data and Games/ Saved Data resources retain Games terminology because they genuinely describe games.
- Existing public game IDs and legacy game save aliases are not gratuitously renamed.

## Colour authority

- Canonical Recreation hue tokens live in sitewide/css/baseline-themes.css.
- The mirrored habitat is Burgundy -> Rose -> Copper -> Rose -> Burgundy.
- css/recreation-theme.css maps components into that family.
- structural Recreation CSS consumes canonical tokens instead of owning an indigo/blue/teal/orange competing palette.

## Verification

- tests/baseline-recreation-migration.test.mjs guards physical identity, routes, redirects, colour authority, naming boundaries and legacy view-state retirement.
- Existing Games, Puzzles and Baseline Realm tests remain part of the verification suite under their semantically appropriate names.
