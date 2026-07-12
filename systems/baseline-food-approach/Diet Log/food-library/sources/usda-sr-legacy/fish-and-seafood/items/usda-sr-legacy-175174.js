/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "can-total-can-contents",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-175174",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 417.0,
      "key": "can-total-can-contents",
      "kind": "unit",
      "label": "can total can contents"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Salmon, sockeye, canned, total can contents",
  "nutritionPerBasis": {
    "calcium_mg": 198.0,
    "carbs_g": 0.0,
    "energy_kcal": 639.0,
    "fat_g": 7.17,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.57,
    "magnesium_mg": 30.0,
    "omega3_g": 1.417,
    "phosphorus_mg": 321.0,
    "potassium_mg": 329.0,
    "protein_g": 20.6,
    "salt_g": 1.0825,
    "sat_fat_g": 1.46,
    "sodium_mg": 433.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 39.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.88,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175174",
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
