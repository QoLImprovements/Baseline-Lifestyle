# Baseline Food Approach — System Rules

This folder belongs to the Food Approach system.

The Food Approach system owns the structure and navigation for:

- recipes,
- ingredient library entries,
- Diet Log entries,
- food-system overview text,
- links between those records.

## Core rule

The system may have rules. Fine-detail content should have its own file, not its own rules folder.

## Correct content structure

```text
systems/baseline-food-approach/
  baseline-food-approach.html
  rules/
  recipes/
  ingredients/
  Diet Log/
```

## Recipes

Recipes are content records. Each recipe should be its own HTML file inside `recipes/`.

Recipes should not have their own `rules/` folder.

## Ingredients

Ingredient library entries are content records. Each ingredient should be its own file inside `ingredients/`.

The main Food Approach page should link to those files through clean routes such as:

```text
/baseline-food-approach/ingredient-library/white-mushroom
```

Do not reintroduce hash/filter routes for public ingredient links.

## Diet Log

Diet Log entries are content records. Each entry should be its own file inside `Diet Log/`.

The main Food Approach page should act as the index/control surface, not the storage container for every Diet Log entry.
