# Baseline Realm — Final Architecture Map

Date: 2026-06-28
Branch: `integration/baseline-realm-complete-20260628`

## Runtime map

```text
Baseline Games Hub
└── baseline-games-hub.js / baseline-games-hub-core.js
    └── BaselineRealmHost (`shared/js/realm-entry.js`)
        ├── RealmEventBus
        ├── RealmSceneRouter
        │   ├── Basecamp
        │   ├── Ninja Training
        │   ├── Exploration — Meridian Grove
        │   ├── Workshop
        │   ├── Calorie Escape
        │   └── Tactical Operations
        ├── RealmStateService
        │   ├── shared wallet: coins + Spirit
        │   ├── shared character roster
        │   ├── active party + reserve party
        │   ├── atomic equipment transfer
        │   └── connected-module snapshots
        ├── RealmInventoryService
        │   ├── materials
        │   ├── items
        │   ├── equipment instances
        │   ├── food
        │   ├── potions
        │   └── tools
        ├── RealmWorkshopService
        │   ├── discovery and station levels
        │   ├── atomic consume/produce crafting
        │   ├── cross-module consumable use
        │   └── active and equipment effects
        ├── RealmSaveAdapter
        │   ├── Realm v3 envelope
        │   ├── checksum validation
        │   ├── write journal
        │   ├── previous-save backup
        │   ├── v2 migration
        │   ├── legacy Ninja profile migration
        │   └── account-load fallback to recoverable guest state
        ├── RealmInputManager
        │   ├── keyboard
        │   ├── mouse
        │   ├── touch / pointer
        │   └── RealmGamepadProvider
        ├── RealmAssetLoader
        │   ├── critical preload manifest
        │   ├── optional module preload groups
        │   ├── progress events
        │   └── fail-soft loading report
        ├── RealmAudioService
        │   ├── master volume
        │   ├── music channel
        │   ├── effects channel
        │   └── mute
        ├── RealmAccessibilityService
        │   └── system / reduce / no-preference motion policy
        ├── RealmPerformanceMonitor
        │   ├── mobile budget
        │   └── desktop budget
        └── RealmRuntimeUi
            ├── loading screen
            ├── progress display
            └── audio controls
```

## State ownership

`realm-model.js` is the canonical shape authority. Every service normalises through it before committing.

```text
realm
├── version / revision / savedAt
├── wallet
│   ├── coins
│   └── spirit
├── inventory
│   ├── materials: quantity map
│   ├── items: quantity map
│   ├── equipment: instance record map
│   ├── food: quantity map
│   ├── potions: quantity map
│   └── tools: quantity map
├── party
│   ├── active: character ids, maximum four
│   ├── reserve: character ids
│   └── characters: canonical character records
├── settings
│   ├── audio
│   ├── accessibility
│   └── controls
├── recovery
├── basecamp
├── ninjaTraining
├── exploration
├── workshop
├── calorieEscape
└── tacticalOperations
```

The Exploration and Tactical Operations source rosters are registered into the shared character map without discarding their module-specific loadouts. Shared equipment is held as Realm equipment instances; original module loadouts remain under `moduleEquipment`.

## Transaction boundaries

1. A caller reads a normalised Realm save.
2. Inventory availability is validated before any mutation.
3. Consume, produce and connected-state mutation occur on one draft.
4. The draft is normalised and committed once.
5. The v3 adapter journals the intended save, backs up the previous primary save, writes the checksummed primary save, mirrors the legacy account profile, then clears the journal.
6. Services emit state, inventory, wallet, item or save events after the successful commit.

Failed validation or a thrown mutation produces no inventory or state commit.

## Save recovery order

```text
valid v3 primary
→ valid v3 journal
→ valid v3 backup
→ valid v2 save
→ valid legacy Ninja guest profile
→ normalised default Realm save
```

Recovery records the source and recovery count, then rewrites a valid primary envelope.

## Input parity

All input methods dispatch the same semantic Realm actions. Pointer events distinguish mouse and touch but do not fork gameplay logic. Controller face/shoulder/start/select inputs map to primary action, menu, shuriken, Basecamp, Training, Exploration, fullscreen and mute. Controller axes and keyboard arrows use the same focus-navigation action.

## Loading and performance boundaries

Critical assets are the shared icon/data set and Basecamp art. Optional module groups preload after the critical set and cannot prevent the Realm from opening. The loading UI reports critical progress and marks partial readiness when an optional asset must be retried later.

Performance budgets are declared in code rather than inferred in tests:

| Tier | Startup | Interaction | Frame | Transfer |
|---|---:|---:|---:|---:|
| Mobile | 3500 ms | 120 ms | 24 ms | 4.5 MB |
| Desktop | 2200 ms | 80 ms | 18 ms | 7 MB |

## Test ownership

- Node tests own schema, migration, recovery, transactions, roster/party, input provider, audio, accessibility, preload and budget behaviour.
- Existing Stage 1 Playwright tests own the established shell, portrait gate, mobile landscape fill, desktop 16:9 and fullscreen compatibility.
- The integration Playwright suite owns cross-module navigation, save/reload, crafting, battle interaction, item use, inventory transfer, audio controls, reduced motion and the five-size screenshot matrix.
