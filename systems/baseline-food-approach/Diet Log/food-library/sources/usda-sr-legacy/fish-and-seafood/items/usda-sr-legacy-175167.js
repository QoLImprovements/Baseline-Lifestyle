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
  "id": "usda-sr-legacy-175167",
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
      "gramsPerUnit": 198.0,
      "key": "0-5-fillet",
      "kind": "unit",
      "label": "0.5 fillet"
    }
  ],
  "name": "Fish, salmon, Atlantic, farmed, raw",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 0.0,
    "energy_kcal": 208.0,
    "fat_g": 13.4,
    "fibre_g": 0.0,
    "folate_ug": 26.0,
    "iron_mg": 0.34,
    "magnesium_mg": 27.0,
    "omega3_g": 2.503,
    "phosphorus_mg": 240.0,
    "potassium_mg": 363.0,
    "protein_g": 20.4,
    "salt_g": 0.1475,
    "sat_fat_g": 3.05,
    "sodium_mg": 59.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 3.9,
    "vitamin_e_mg": 3.55,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175167",
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
