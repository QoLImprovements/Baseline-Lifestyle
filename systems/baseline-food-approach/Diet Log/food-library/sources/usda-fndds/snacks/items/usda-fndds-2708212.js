/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "1-small-single-serving-bag",
  "description": "Tortilla, corn, other chips",
  "id": "usda-fndds-2708212",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-small-single-serving-bag",
      "kind": "unit",
      "label": "1 small single serving bag"
    },
    {
      "gramsPerUnit": 30.0,
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
      "gramsPerUnit": 2.0,
      "key": "1-chip",
      "kind": "unit",
      "label": "1 chip"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-medium-single-serving-bag",
      "kind": "unit",
      "label": "1 medium single serving bag"
    }
  ],
  "name": "Tortilla chips, reduced sodium",
  "nutritionPerBasis": {
    "calcium_mg": 135.0,
    "carbs_g": 68.1,
    "energy_kcal": 489.0,
    "fat_g": 19.8,
    "fibre_g": 4.5,
    "folate_ug": 14.0,
    "iron_mg": 1.36,
    "magnesium_mg": 82.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 270.0,
    "potassium_mg": 231.0,
    "protein_g": 9.35,
    "salt_g": 0.0325,
    "sat_fat_g": 2.73,
    "sodium_mg": 13.0,
    "sugar_g": 0.72,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 6.39,
    "vitamin_k_ug": 18.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708212",
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
