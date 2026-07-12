/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "cup",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-174209",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Crustaceans, lobster, northern, cooked, moist heat",
  "nutritionPerBasis": {
    "calcium_mg": 96.0,
    "carbs_g": 0.0,
    "energy_kcal": 372.0,
    "fat_g": 0.86,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.29,
    "magnesium_mg": 43.0,
    "omega3_g": 0.251,
    "phosphorus_mg": 185.0,
    "potassium_mg": 230.0,
    "protein_g": 19.0,
    "salt_g": 1.215,
    "sat_fat_g": 0.208,
    "sodium_mg": 486.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174209",
  "state": "Cooked",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "cooked",
    "finfish-and-shellfish-products",
    "fish-and-seafood"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
