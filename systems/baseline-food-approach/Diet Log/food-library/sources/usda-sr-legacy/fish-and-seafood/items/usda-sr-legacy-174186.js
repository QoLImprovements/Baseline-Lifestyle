/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "3-oz",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-174186",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 159.0,
      "key": "fillet",
      "kind": "unit",
      "label": "fillet"
    }
  ],
  "name": "Fish, catfish, channel, wild, raw",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 0.0,
    "energy_kcal": 397.0,
    "fat_g": 2.82,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.3,
    "magnesium_mg": 23.0,
    "omega3_g": 0.464,
    "phosphorus_mg": 209.0,
    "potassium_mg": 358.0,
    "protein_g": 16.4,
    "salt_g": 0.1075,
    "sat_fat_g": 0.722,
    "sodium_mg": 43.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174186",
  "state": "Raw",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "finfish-and-shellfish-products",
    "fish-and-seafood",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
