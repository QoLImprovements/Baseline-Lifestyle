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
  "id": "usda-sr-legacy-174225",
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
      "gramsPerUnit": 454.0,
      "key": "can",
      "kind": "unit",
      "label": "can"
    }
  ],
  "name": "Fish, salmon, pink, canned, without salt, solids with bone and liquid",
  "nutritionPerBasis": {
    "calcium_mg": 213.0,
    "carbs_g": 0.0,
    "energy_kcal": 582.0,
    "fat_g": 6.05,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 0.84,
    "magnesium_mg": 34.0,
    "omega3_g": 1.699,
    "phosphorus_mg": 329.0,
    "potassium_mg": 326.0,
    "protein_g": 19.8,
    "salt_g": 0.1875,
    "sat_fat_g": 1.54,
    "sodium_mg": 75.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174225",
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
