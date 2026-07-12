# Sitewide Structure and Routing Audit — 12 July 2026

Source archive: `baseline-lifestyle-site(44).zip`

## Canonical ownership

- Sitewide assets and account/API infrastructure remain under `sitewide/`.
- Compatibility API entry points remain under root `api/` only to support servers that do not apply rewrite rules; their implementation delegates to the sitewide API.
- Every application system owns its page, CSS, JavaScript, API, rules, recipes, ingredients, or game assets under `systems/<system>/`.
- Games exist only under `systems/baseline-games-hub/games/`; the root shadow `games/` folder was removed.
- Root shadow folders `css/`, `js/`, and `rules/` were removed.

## Massage repair

- The unresolved JavaScript merge conflict that disabled Massage Library and Plan My Massage controls was removed.
- Main navigation now contains System, Massage Library, and Plan My Massage.
- Types of Massage is contained inside Massage Library rather than competing as a separate main page.
- Provider-Guided, Focused, and Advanced / Custom planner subtabs are click-bound and persistent.
- Pressure and pace custom text fields remain hidden unless Custom preference is selected.
- Clean refresh routes are `/baseline-massage/system`, `/baseline-massage/library`, and `/baseline-massage/planner`.
- Old Massage route aliases redirect to their current clean route.

## Cleanup and consolidation

- Obsolete physical Massage route copies and nested routing files were removed.
- Repeated system-level inline CSS was consolidated into canonical system-owned stylesheets while retaining its original cascade order.
- Repeated Food recipe CSS is now shared from the Food system instead of being copied into every recipe page.
- Duplicate Natural Skincare ingredient alias files were removed and replaced with canonical redirects.
- Empty, placeholder, generated report, installed dependency, and repository-history artifacts were excluded from the distributable site.
- The SQLite database was vacuumed and passed both integrity checks.

## Validation

- 107 Node tests passed.
- 32 main clean routes and 87 detail routes returned HTML successfully through both Apache with `mod_rewrite` and the production-style static server.
- 8 legacy redirects resolved to their canonical routes.
- HTML/CSS/JSON structure, internal assets, IDs, labels, control targets, JavaScript syntax, PHP syntax, duplicate runtime files, unresolved merge markers, and SQLite integrity were checked.
