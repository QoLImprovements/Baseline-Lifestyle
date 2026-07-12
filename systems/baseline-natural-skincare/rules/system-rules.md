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

Skincare recipes are content records. Each skincare recipe should be its own HTML file inside `recipes/`.

The main Natural Skincare page should act as the system/index, not the container for every recipe body.

Recipes should not have their own `rules/` folder.

## Ingredients

Ingredient library entries are content records. Each ingredient should be its own file inside `ingredients/`.

The main Natural Skincare page should link to those files through clean routes such as:

```text
/baseline-natural-skincare/ingredient-library/jojoba-oil
```

Do not reintroduce hash/filter routes for public ingredient links.
