/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-snack-size-tub-can",
  "description": "Potato chips",
  "id": "usda-fndds-2708214",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-snack-size-tub-can",
      "kind": "unit",
      "label": "1 snack size tub/can"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-1-inch-stack",
      "kind": "unit",
      "label": "1 1-inch stack"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-regular-can",
      "kind": "unit",
      "label": "1 regular can"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-100-calorie-package",
      "kind": "unit",
      "label": "1 100 calorie package"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-chip",
      "kind": "unit",
      "label": "1 chip"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-small-can",
      "kind": "unit",
      "label": "1 small can"
    }
  ],
  "name": "Potato chips, restructured, multigrain",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 65.3,
    "energy_kcal": 505.0,
    "fat_g": 24.7,
    "fibre_g": 2.7,
    "folate_ug": 16.0,
    "iron_mg": 0.85,
    "magnesium_mg": 40.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 127.0,
    "potassium_mg": 330.0,
    "protein_g": 5.3,
    "salt_g": 1.36,
    "sat_fat_g": 6.31,
    "sodium_mg": 544.0,
    "sugar_g": 4.08,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 9.08,
    "vitamin_k_ug": 7.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708214",
  "state": "Unspecified",
  "subcategory": "Potato chips",
  "tags": [
    "potato-chips",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
