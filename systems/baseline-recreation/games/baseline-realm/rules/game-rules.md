# Baseline Realm Rules

Baseline Realm is a connected game world containing separate game modules, a shared inventory and party system, and Basecamp as its navigation hub.

## Core rules

1. Baseline Realm is the RPG/Basecamp layer, not a replacement for the Recreation itself.
2. Mobile play is landscape-first. Portrait mode presents a rotate-device gate rather than stretching the stage vertically.
3. The normal embedded stage uses a 16:9 play surface. Fullscreen targets `#realmSceneFrame` and fills the viewport.
4. Basecamp is the navigation hub. Players enter Ninja Training, Exploration, Workshop, Calorie Escape, Tactical Operations, stores, storage, cooking, and every connected Realm system through Basecamp landmarks rather than direct game links in the shared banner.
5. Each Baseline Realm game or system owns a subfolder under `systems/baseline-recreation/games/baseline-realm/`. Shared services and shared assets belong under `shared/`.
6. Runtime art and interface assets must remain inside the Baseline Realm folder. Use absolute site paths.
7. Local SVG symbols are the interface-art authority. Platform emoji must not be used as permanent control icons.
8. Shared wallet, inventory, materials, equipment, consumables, party members, and save migration must stay coherent across every Realm module.
9. Linked bonuses from other Recreation games remain bounded and must not make any single game mandatory.
10. A change to Baseline Realm must not override another Recreation game's mechanics, layout, input, or visual identity.

## Ninja Training

11. Ninja Training is a horizontal running/tapping combat game with dense forest parallax, a visible run cycle, idle attack animation, manual attack animation, enemy hit/defeat reactions, stages, zones, and bosses.
12. Dash Cut is an immediate manual strike.
13. Shuriken is a manual-only tactical ability: 10 hits across 3 seconds, each at 50% of Dash Cut damage, with a 15-second cooldown. Its disabled/cooldown state must be unmistakably dark and unavailable.

## Exploration

14. Exploration is a character-controlled map JRPG, not a progress bar with Advance/Resolve buttons.
15. Exploration uses a four-character active party, zones containing stages, random encounters, experience, levels, equipment, treasure, events, elites, bosses, and a visible menu-driven ATB battle system.
16. Enemy drops and map resources feed blacksmithing, armour, tailoring, alchemy, cooking, tools, quests, and trading.

## Basecamp and Workshop

17. Basecamp artwork must retain a readable full-scene composition. Foreground bushes, paths, overlays, and signs must not obscure the lower half of the camp.
18. Basecamp landmarks use coherent local symbols and accessible labels.
19. Workshop is a functional crafting system. Materials are consumed to create weapons, armour, tailored equipment, potions, food, and tools that are usable in connected Realm modules.

## Calorie Escape

20. Calorie Escape is a perspective chase runner in which the overweight ninja runs toward the camera/down-screen while escaping a themed pursuer.
21. It supports horizontal movement, jumping, attacks, visibly distinct breakable/unbreakable obstacles, replayable levels, multiple stages per zone, ability progression, rewards, and Caloric Experience reduction/progression.

## Tactical Operations

22. Tactical Operations is a separate grid tactics RPG with terrain, elevation, facing, movement, line of sight, area effects, a visible turn timeline, jobs, abilities, equipment, mission objectives, and a deployable party drawn from the wider Realm roster.

## Rule Shift connection

23. Rule Shift keeps a five-second answer window at every tier. Higher tiers become harder through additional variables, descriptor combinations, stronger distractors, more options, and longer runs rather than shorter answer time.
24. Size (`small` and `large`) is introduced only in harder tiers and can appear alone or combined with colour/shape.
