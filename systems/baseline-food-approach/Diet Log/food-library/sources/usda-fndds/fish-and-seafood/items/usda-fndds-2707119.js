/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-meal-10-oz",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2707119",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "1-meal-10-oz",
      "kind": "unit",
      "label": "1 meal (10 oz)"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fish in lemon-butter sauce with starch item, vegetable, frozen meal",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 11.0,
    "energy_kcal": 101.0,
    "fat_g": 3.78,
    "fibre_g": 1.1,
    "folate_ug": 28.0,
    "iron_mg": 0.67,
    "magnesium_mg": 13.0,
    "omega3_g": 0.034,
    "phosphorus_mg": 96.0,
    "potassium_mg": 94.0,
    "protein_g": 5.46,
    "salt_g": 1.13,
    "sat_fat_g": 1.36,
    "sodium_mg": 452.0,
    "sugar_g": 1.07,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 0.93,
    "vitamin_k_ug": 5.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707119",
  "state": "Frozen",
  "subcategory": "Seafood mixed dishes",
  "tags": [
    "fish-and-seafood",
    "frozen",
    "seafood-mixed-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
