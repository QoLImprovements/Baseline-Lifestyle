# Games Hub and Baseline Realm Runtime Repair — 2026-06-29

## Failure chain

The Games Hub became non-interactive through a combined startup and deployment failure:

1. Optional Baseline Realm code was loaded as part of the Hub bootstrap.
2. Exploration also had a separate interception runtime that raced the normal Realm scene router.
3. Exploration, Calorie Escape, and Tactical Operations were static Realm-entry dependencies, so one broken optional module could prevent all Realm startup.
4. Repaired JavaScript was repeatedly published under URLs previously marked `immutable` for one year.
5. Cache clearing matched only the main Games Hub URL, not its public subroutes.
6. Browser tests loaded the physical HTML file through Python's basic server, bypassing public routing and production cache headers.
7. The runtime workflow did not run on ordinary Games Hub source changes pushed to `main`.
8. Existing tests still encoded the obsolete Exploration interceptor and previous Realm build, so they rewarded the workaround rather than the corrected architecture.

## Corrected architecture

```text
Public Games Hub route
├── shared banner navigation
├── independent Hub guard
├── independent Hub core
└── optional Baseline Realm loader
    ├── shared Realm services
    ├── Basecamp
    ├── Ninja Training
    ├── Workshop
    ├── Exploration (lazy, contained failure/retry)
    ├── Calorie Escape (lazy, isolated frame ownership)
    └── Tactical Operations (lazy, isolated frame ownership)
```

The Hub becomes interactive without waiting for Realm. The Hub core publishes its dependency object, and Realm consumes it whenever the optional loader completes. Exploration, Calorie Escape and Tactical Operations are imported on entry instead of forming one startup dependency graph.

Each optional scene has local failure containment. A failed import or `enter()` operation cleans partial scene DOM, records the failure, and presents Retry and Return to Basecamp controls. It cannot disable another Realm game, shared Realm services, Hub tabs, or the site banner.

Calorie Escape and Tactical Operations use an external-scene boundary so the legacy Training, Basecamp and Exploration chrome cannot remain visible underneath them. Returning to Basecamp removes the external scene classes and restores the shared controls.

## Deployment correction

JavaScript, MJS, and CSS now revalidate rather than using a one-year immutable policy with mutable URLs. Images and fonts retain long immutable caching.

Every public Games Hub route participates in a one-time cache-upgrade epoch. The first visit clears the obsolete browser cache and records the epoch in a cookie; later visits do not repeatedly clear the cache. The public route and subroutes are tested through a production-style static server that supplies the clean-route mapping, MIME types and cache headers used by deployment.

## Obsolete-file report

Removed:

- `systems/baseline-games-hub/games/baseline-realm/exploration/js/exploration-atb-only.js`

Removed from active runtime:

- direct Meridian Grove importing, mounting and mutation observation in `realm-stage-1-shell.js`
- the architecture test that required the obsolete Exploration interceptor to load before Realm
- the Python basic HTTP server used by Playwright

Retained intentionally:

- the independent Hub guard, because it provides a usable Hub shell if the large legacy core itself cannot load
- the legacy Ninja runtime's three internal views, wrapped by a compatibility boundary rather than expanded to own unrelated games

## Test report

Locally executed and passed during the repair:

- Node syntax validation for the production-route test server
- live HTTP checks for the public Games Hub route, no-store HTML, one-time `Clear-Site-Data`, epoch-cookie suppression, JavaScript MIME type and mandatory revalidation
- loader and scene-router syntax validation
- scene-router recovery after a failed scene
- serialized navigation when multiple scene transitions are requested
- YAML parsing for the Stage 1, Stage 2, full integration and Games Hub runtime workflows
- line-by-line source review of the final Realm entry, optional module paths, cleanup path and late-host handoff

Repository tests added or corrected:

- public `/baseline-games-hub/games-hub` route
- banner dropdown
- Hub tabs and game selection
- optional Realm entry failure
- slow Realm loading
- core-script failure and dominant guard
- isolated Tactical Operations dependency failure
- partial optional-scene cleanup
- Calorie Escape frame ownership
- Tactical Operations frame ownership
- return to Basecamp after an optional game failure
- one-time cache upgrade
- JS/MJS MIME and cache revalidation
- CI path coverage for runtime, route, cache, Realm and test-server changes

## Unresolved-defect list

No known application defect remains in this repair branch.

GitHub Actions is currently an unresolved repository infrastructure issue: every affected workflow creates a job and immediately reports failure with `steps: none`, `logs_url: none`, and no executed command. Therefore, the complete Chromium and Node repository suites could not be executed by GitHub-hosted runners during this repair. The workflows and coverage are committed so they will run automatically when runner availability is restored.
