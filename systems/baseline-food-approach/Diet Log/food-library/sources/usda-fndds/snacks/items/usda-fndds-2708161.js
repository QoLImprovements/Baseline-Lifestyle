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
  "id": "usda-fndds-2708161",
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
      "gramsPerUnit": 1.0,
      "key": "1-chip",
      "kind": "unit",
      "label": "1 chip"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-single-serving-bag",
      "kind": "unit",
      "label": "1 large single serving bag"
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
      "gramsPerUnit": 57.0,
      "key": "1-medium-single-serving-bag",
      "kind": "unit",
      "label": "1 medium single serving bag"
    }
  ],
  "name": "Chips, rice",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 81.5,
    "energy_kcal": 384.0,
    "fat_g": 2.8,
    "fibre_g": 4.2,
    "folate_ug": 21.0,
    "iron_mg": 1.49,
    "magnesium_mg": 131.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 360.0,
    "potassium_mg": 290.0,
    "protein_g": 8.2,
    "salt_g": 0.815,
    "sat_fat_g": 0.642,
    "sodium_mg": 326.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 6.54,
    "vitamin_k_ug": 6.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708161",
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
