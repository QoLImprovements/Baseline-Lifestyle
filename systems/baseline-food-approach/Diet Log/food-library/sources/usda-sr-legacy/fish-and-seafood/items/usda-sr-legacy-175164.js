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
  "id": "usda-sr-legacy-175164",
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
      "gramsPerUnit": 172.0,
      "key": "leg",
      "kind": "unit",
      "label": "leg"
    }
  ],
  "name": "Crustaceans, crab, alaska king, raw",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 0.0,
    "energy_kcal": 351.0,
    "fat_g": 0.6,
    "fibre_g": 0.0,
    "folate_ug": 44.0,
    "iron_mg": 0.59,
    "magnesium_mg": 49.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 219.0,
    "potassium_mg": 204.0,
    "protein_g": 18.3,
    "salt_g": 2.09,
    "sat_fat_g": 0.09,
    "sodium_mg": 836.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175164",
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
