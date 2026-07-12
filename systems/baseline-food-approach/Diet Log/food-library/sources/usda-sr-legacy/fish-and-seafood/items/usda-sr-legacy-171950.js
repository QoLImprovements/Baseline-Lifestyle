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
  "id": "usda-sr-legacy-171950",
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
      "gramsPerUnit": 116.0,
      "key": "fillet",
      "kind": "unit",
      "label": "fillet"
    }
  ],
  "name": "Fish, burbot, raw",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 0.0,
    "energy_kcal": 377.0,
    "fat_g": 0.81,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.9,
    "magnesium_mg": 32.0,
    "omega3_g": 0.192,
    "phosphorus_mg": 200.0,
    "potassium_mg": 404.0,
    "protein_g": 19.3,
    "salt_g": 0.2425,
    "sat_fat_g": 0.163,
    "sodium_mg": 97.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171950",
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
