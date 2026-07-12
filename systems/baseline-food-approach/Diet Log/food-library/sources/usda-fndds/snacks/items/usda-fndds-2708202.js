/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "quantity-not-specified",
  "description": "Tortilla, corn, other chips",
  "id": "usda-fndds-2708202",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-100-calorie-package",
      "kind": "unit",
      "label": "1 100 calorie package"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-medium-single-serving-bag",
      "kind": "unit",
      "label": "1 medium single serving bag"
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
      "gramsPerUnit": 3.0,
      "key": "1-chip",
      "kind": "unit",
      "label": "1 chip"
    }
  ],
  "name": "Tortilla chips, plain",
  "nutritionPerBasis": {
    "calcium_mg": 106.0,
    "carbs_g": 67.8,
    "energy_kcal": 472.0,
    "fat_g": 20.7,
    "fibre_g": 5.4,
    "folate_ug": 12.0,
    "iron_mg": 1.52,
    "magnesium_mg": 84.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 225.0,
    "potassium_mg": 182.0,
    "protein_g": 7.1,
    "salt_g": 0.82,
    "sat_fat_g": 2.81,
    "sodium_mg": 328.0,
    "sugar_g": 0.78,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.53,
    "vitamin_k_ug": 20.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708202",
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
