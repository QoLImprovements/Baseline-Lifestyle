/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "1-cup",
  "description": "Tortilla, corn, other chips",
  "id": "usda-fndds-2708207",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-small-single-serving-bag",
      "kind": "unit",
      "label": "1 small single serving bag"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-single-serving-bag",
      "kind": "unit",
      "label": "1 large single serving bag"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-medium-single-serving-bag",
      "kind": "unit",
      "label": "1 medium single serving bag"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "1-chip",
      "kind": "unit",
      "label": "1 chip"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-100-calorie-package",
      "kind": "unit",
      "label": "1 100 calorie package"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Tortilla chips, cool ranch flavor (Doritos)",
  "nutritionPerBasis": {
    "calcium_mg": 106.0,
    "carbs_g": 67.4,
    "energy_kcal": 470.0,
    "fat_g": 20.6,
    "fibre_g": 5.4,
    "folate_ug": 12.0,
    "iron_mg": 1.51,
    "magnesium_mg": 84.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 224.0,
    "potassium_mg": 181.0,
    "protein_g": 7.06,
    "salt_g": 1.2975,
    "sat_fat_g": 2.8,
    "sodium_mg": 519.0,
    "sugar_g": 0.78,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.51,
    "vitamin_k_ug": 20.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708207",
  "state": "Unspecified",
  "subcategory": "Tortilla, corn, other chips",
  "tags": [
    "snacks",
    "tortilla-corn-other-chips",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
