# Systems Folder Restructure

Source: initially established during Phase 4B and re-audited from `baseline-lifestyle-site(44).zip` on 12 July 2026

## Purpose

Move each major accountable section folder under a single parent folder:

`systems/`

This keeps the root cleaner while preserving public website URLs.

## Public URLs unchanged

Examples remain:

- `/baseline-food-approach/system`
- `/baseline-food-approach/recipes/aubergine-and-carrot-sauce`
- `/baseline-natural-skincare/system`
- `/baseline-games-hub/games-hub`

## Physical structure changed

Moved section folders:

- `baseline-food-approach/` → `systems/baseline-food-approach/`
- `baseline-natural-skincare/` → `systems/baseline-natural-skincare/`
- `baseline-massage/` → `systems/baseline-massage/`
- `baseline-fitness/` → `systems/baseline-fitness/`
- `baseline-badminton-session/` → `systems/baseline-badminton-session/`
- `baseline-games-hub/` → `systems/baseline-games-hub/`

## Empty / obsolete cleanup

- Removed `.gitkeep` placeholder files: 73
- Removed empty folders from the ZIP structure: 58

Live content, docs, recipes, APIs, CSS, JavaScript, and art files remain inside their owning system. Later audits also removed root shadow folders and obsolete Massage route copies while preserving the public URL layer.

## Routing

`.htaccess` rewrite targets now point to `systems/<section>/...`.

The normal navigation URL layer remains clean and does not expose `/systems/`.
