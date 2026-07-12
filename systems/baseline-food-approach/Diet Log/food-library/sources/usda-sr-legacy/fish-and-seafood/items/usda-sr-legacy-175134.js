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
  "id": "usda-sr-legacy-175134",
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
      "gramsPerUnit": 193.0,
      "key": "0-5-fillet",
      "kind": "unit",
      "label": "0.5 fillet"
    }
  ],
  "name": "Fish, sablefish, raw",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 0.0,
    "energy_kcal": 816.0,
    "fat_g": 15.3,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 1.28,
    "magnesium_mg": 55.0,
    "omega3_g": 1.564,
    "phosphorus_mg": 168.0,
    "potassium_mg": 358.0,
    "protein_g": 13.4,
    "salt_g": 0.14,
    "sat_fat_g": 3.2,
    "sodium_mg": 56.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 93.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175134",
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
