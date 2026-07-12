/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-miniature-bite-size-pancake",
  "description": "Pancakes, waffles, French toast",
  "id": "usda-fndds-2708305",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-miniature-bite-size-pancake",
      "kind": "unit",
      "label": "1 miniature/bite size pancake"
    },
    {
      "gramsPerUnit": 1.9,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-extra-large-pancake",
      "kind": "unit",
      "label": "1 extra large pancake"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-large-pancake",
      "kind": "unit",
      "label": "1 large pancake"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-silver-dollar-pancake",
      "kind": "unit",
      "label": "1 silver dollar pancake"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-medium-pancake",
      "kind": "unit",
      "label": "1 medium pancake"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-small-pancake",
      "kind": "unit",
      "label": "1 small pancake"
    }
  ],
  "name": "Pancakes, plain, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 211.0,
    "carbs_g": 36.1,
    "energy_kcal": 264.0,
    "fat_g": 9.74,
    "fibre_g": 2.2,
    "folate_ug": 47.0,
    "iron_mg": 1.48,
    "magnesium_mg": 20.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 333.0,
    "potassium_mg": 178.0,
    "protein_g": 7.57,
    "salt_g": 1.2975,
    "sat_fat_g": 2.73,
    "sodium_mg": 519.0,
    "sugar_g": 7.2,
    "vitamin_a_ug": 78.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.36,
    "vitamin_k_ug": 6.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708305",
  "state": "Unspecified",
  "subcategory": "Pancakes, waffles, French toast",
  "tags": [
    "other-foods",
    "pancakes-waffles-french-toast",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
