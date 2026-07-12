/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "can",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-174226",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 369.0,
      "key": "can",
      "kind": "unit",
      "label": "can"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Fish, salmon, sockeye, canned, without salt, drained solids with bone",
  "nutritionPerBasis": {
    "calcium_mg": 239.0,
    "carbs_g": 0.0,
    "energy_kcal": 640.0,
    "fat_g": 7.31,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.06,
    "magnesium_mg": 29.0,
    "omega3_g": 1.233,
    "phosphorus_mg": 326.0,
    "potassium_mg": 377.0,
    "protein_g": 20.5,
    "salt_g": 0.1875,
    "sat_fat_g": 1.64,
    "sodium_mg": 75.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 53.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174226",
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
