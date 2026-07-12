# Food Approach Rules

This page owns the broad Food Approach system.

The system may have rules. Recipes, ingredients, and Diet Log entries are fine-detail content records and should each have their own file rather than their own rules folder.

## Runtime owner

```text
systems/baseline-food-approach/baseline-food-approach.html
```

## Local rules owner

```text
systems/baseline-food-approach/rules/
```

## Correct structure

```text
systems/baseline-food-approach/
  baseline-food-approach.html
  rules/
  recipes/
  ingredients/
  Diet Log/
```

## Food Approach page responsibilities

- Holds the Food system overview.
- Holds recipe overview/navigation.
- Holds ingredient-library navigation.
- Holds Diet Log entry points.
- Links to individual recipe, ingredient, and Diet Log files.

## Recipe boundary

Recipes are content records. Each standalone recipe owns its own file inside `recipes/`.

Recipe-level `rules/` folders should not be used.

## Ingredient boundary

Ingredients are content records. Each ingredient library item should have its own file inside `ingredients/`.

Public ingredient URLs should be clean and readable, for example:

```text
/baseline-food-approach/ingredient-library/white-mushroom
```

Do not reintroduce public hash/filter ingredient URLs.

## Diet Log boundary

Diet Log entries are content records. Each Diet Log entry should have its own file inside `Diet Log/`.

## Change restraint

- Do not merge recipe, ingredient, or Diet Log records back into one vague food blob.
- Do not give recipes their own local rules folders.
- Do not use hash/filter routes as public-facing ingredient paths.
- Do not edit many fine-detail records inside the main system page when a separate content file can own the record.
