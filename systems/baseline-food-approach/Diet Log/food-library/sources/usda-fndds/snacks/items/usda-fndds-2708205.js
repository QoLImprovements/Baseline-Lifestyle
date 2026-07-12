/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "1-medium-single-serving-bag",
  "description": "Tortilla, corn, other chips",
  "id": "usda-fndds-2708205",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-medium-single-serving-bag",
      "kind": "unit",
      "label": "1 medium single serving bag"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-single-serving-bag",
      "kind": "unit",
      "label": "1 large single serving bag"
    },
    {
      "gramsPerUnit": 1.0,
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
      "gramsPerUnit": 45.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-small-single-serving-bag",
      "kind": "unit",
      "label": "1 small single serving bag"
    }
  ],
  "name": "Corn chips, reduced sodium",
  "nutritionPerBasis": {
    "calcium_mg": 126.0,
    "carbs_g": 56.8,
    "energy_kcal": 549.0,
    "fat_g": 33.6,
    "fibre_g": 3.9,
    "folate_ug": 9.0,
    "iron_mg": 1.16,
    "magnesium_mg": 70.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 206.0,
    "potassium_mg": 164.0,
    "protein_g": 6.84,
    "salt_g": 0.7375,
    "sat_fat_g": 4.45,
    "sodium_mg": 295.0,
    "sugar_g": 0.41,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 8.11,
    "vitamin_k_ug": 10.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708205",
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
