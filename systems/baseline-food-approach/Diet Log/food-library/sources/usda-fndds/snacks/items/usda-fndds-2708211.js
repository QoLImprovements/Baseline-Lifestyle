/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "1-chip",
  "description": "Tortilla, corn, other chips",
  "id": "usda-fndds-2708211",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-chip",
      "kind": "unit",
      "label": "1 chip"
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
      "gramsPerUnit": 30.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
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
    }
  ],
  "name": "Tortilla chips, low fat, unsalted",
  "nutritionPerBasis": {
    "calcium_mg": 159.0,
    "carbs_g": 80.1,
    "energy_kcal": 416.0,
    "fat_g": 5.7,
    "fibre_g": 5.3,
    "folate_ug": 16.0,
    "iron_mg": 1.6,
    "magnesium_mg": 97.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 318.0,
    "potassium_mg": 272.0,
    "protein_g": 11.0,
    "salt_g": 0.0375,
    "sat_fat_g": 0.85,
    "sodium_mg": 15.0,
    "sugar_g": 0.85,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 3.53,
    "vitamin_k_ug": 20.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708211",
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
