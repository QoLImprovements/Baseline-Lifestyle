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
  "id": "usda-fndds-2708196",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-medium-single-serving-bag",
      "kind": "unit",
      "label": "1 medium single serving bag"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-100-calorie-package",
      "kind": "unit",
      "label": "1 100 calorie package"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-small-single-serving-bag",
      "kind": "unit",
      "label": "1 small single serving bag"
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
    }
  ],
  "name": "Corn chips, plain",
  "nutritionPerBasis": {
    "calcium_mg": 137.0,
    "carbs_g": 56.8,
    "energy_kcal": 535.0,
    "fat_g": 33.1,
    "fibre_g": 4.0,
    "folate_ug": 8.0,
    "iron_mg": 1.19,
    "magnesium_mg": 71.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 192.0,
    "potassium_mg": 143.0,
    "protein_g": 6.12,
    "salt_g": 2.0425,
    "sat_fat_g": 4.3,
    "sodium_mg": 817.0,
    "sugar_g": 0.27,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 7.17,
    "vitamin_k_ug": 6.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708196",
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
