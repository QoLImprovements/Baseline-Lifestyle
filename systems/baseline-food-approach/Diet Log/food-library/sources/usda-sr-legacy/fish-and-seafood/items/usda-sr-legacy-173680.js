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
  "id": "usda-sr-legacy-173680",
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
  "name": "Fish, pike, northern, raw",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 0.0,
    "energy_kcal": 368.0,
    "fat_g": 0.69,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 0.55,
    "magnesium_mg": 31.0,
    "omega3_g": 0.121,
    "phosphorus_mg": 220.0,
    "potassium_mg": 259.0,
    "protein_g": 19.3,
    "salt_g": 0.0975,
    "sat_fat_g": 0.118,
    "sodium_mg": 39.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 3.8,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173680",
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
