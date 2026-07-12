/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "oz",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-173708",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 321.0,
      "key": "can-12-5-oz-drained",
      "kind": "unit",
      "label": "can (12.5 oz), drained"
    },
    {
      "gramsPerUnit": 171.0,
      "key": "can",
      "kind": "unit",
      "label": "can"
    },
    {
      "gramsPerUnit": 146.0,
      "key": "cup-solid-or-chunks",
      "kind": "unit",
      "label": "cup, solid or chunks"
    }
  ],
  "name": "Fish, tuna, light, canned in oil, drained solids",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.0,
    "energy_kcal": 198.0,
    "fat_g": 8.21,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.39,
    "magnesium_mg": 31.0,
    "omega3_g": 0.128,
    "phosphorus_mg": 311.0,
    "potassium_mg": 207.0,
    "protein_g": 29.1,
    "salt_g": 1.04,
    "sat_fat_g": 1.53,
    "sodium_mg": 416.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.87,
    "vitamin_k_ug": 44.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173708",
  "state": "Canned",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "canned",
    "finfish-and-shellfish-products",
    "fish-and-seafood"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
