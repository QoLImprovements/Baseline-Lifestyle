/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "fillet",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-173698",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 218.0,
      "key": "fillet",
      "kind": "unit",
      "label": "fillet"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Fish, snapper, mixed species, raw",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 0.0,
    "energy_kcal": 418.0,
    "fat_g": 1.34,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.18,
    "magnesium_mg": 32.0,
    "omega3_g": 0.376,
    "phosphorus_mg": 198.0,
    "potassium_mg": 417.0,
    "protein_g": 20.5,
    "salt_g": 0.16,
    "sat_fat_g": 0.285,
    "sodium_mg": 64.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 1.6,
    "vitamin_e_mg": 0.96,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173698",
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
