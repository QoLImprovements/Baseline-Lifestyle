# Baseline Natural Skincare — System Rules

This folder belongs to the Natural Skincare system.

The Natural Skincare system owns the structure and navigation for:

- skincare recipes,
- ingredient library entries,
- skincare-system overview text,
- links between those records.

## Core rule

The system may have rules. Fine-detail content should have its own file, not its own rules folder.

## Correct content structure

```text
systems/baseline-natural-skincare/
  baseline-natural-skincare.html
  rules/
  recipes/
  ingredients/
```

## Skincare recipes

Skincare recipe routes are served through the canonical Natural Skincare document. Each live recipe body must be authored exactly once in `baseline-natural-skincare.html` and identified by its stable recipe ID and `data-recipe-slug`.

Clean URLs such as `/baseline-natural-skincare/recipes/<slug>` resolve to that canonical document and the shared recipe router exposes only the requested recipe.

Do not maintain a second recipe body in `recipes/*.html`. If a legacy standalone file must remain for an old direct implementation-file URL, it may contain only a redirect/fallback link to the canonical clean route.

Recipes should not have their own `rules/` folder.

## Ingredients

Ingredient library entries are content records. Each ingredient should be its own file inside `ingredients/`.

The main Natural Skincare page should link to those files through clean routes such as:

```text
/baseline-natural-skincare/ingredient-library/jojoba-oil
```

Do not reintroduce hash/filter routes for public ingredient links.
