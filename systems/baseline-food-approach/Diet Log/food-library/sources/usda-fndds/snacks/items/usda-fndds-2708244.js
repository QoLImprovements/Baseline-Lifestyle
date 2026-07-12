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
  "id": "usda-fndds-2708244",
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
      "gramsPerUnit": 85.0,
      "key": "1-large-single-serving-bag",
      "kind": "unit",
      "label": "1 large single serving bag"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-small-single-serving-bag",
      "kind": "unit",
      "label": "1 small single serving bag"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "1-chip",
      "kind": "unit",
      "label": "1 chip"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Popcorn chips, sweet flavors",
  "nutritionPerBasis": {
    "calcium_mg": 127.0,
    "carbs_g": 74.6,
    "energy_kcal": 455.0,
    "fat_g": 13.5,
    "fibre_g": 4.2,
    "folate_ug": 13.0,
    "iron_mg": 1.28,
    "magnesium_mg": 77.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 253.0,
    "potassium_mg": 217.0,
    "protein_g": 8.75,
    "salt_g": 0.6075,
    "sat_fat_g": 1.88,
    "sodium_mg": 243.0,
    "sugar_g": 11.6,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 4.83,
    "vitamin_k_ug": 16.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708244",
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
