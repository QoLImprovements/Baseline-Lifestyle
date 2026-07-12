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
  "id": "usda-sr-legacy-171983",
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
    }
  ],
  "name": "Mollusks, whelk, unspecified, raw",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 7.76,
    "energy_kcal": 573.0,
    "fat_g": 0.4,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 5.03,
    "magnesium_mg": 86.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 141.0,
    "potassium_mg": 347.0,
    "protein_g": 23.8,
    "salt_g": 0.515,
    "sat_fat_g": 0.031,
    "sodium_mg": 206.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171983",
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
