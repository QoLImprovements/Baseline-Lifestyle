/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-meal-11-oz",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2707106",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 312.0,
      "key": "1-meal-11-oz",
      "kind": "unit",
      "label": "1 meal (11 oz)"
    },
    {
      "gramsPerUnit": 312.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken, fried, with potatoes, vegetable, frozen meal",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 10.6,
    "energy_kcal": 157.0,
    "fat_g": 8.13,
    "fibre_g": 1.7,
    "folate_ug": 15.0,
    "iron_mg": 0.62,
    "magnesium_mg": 20.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 122.0,
    "potassium_mg": 247.0,
    "protein_g": 10.3,
    "salt_g": 1.6725,
    "sat_fat_g": 2.66,
    "sodium_mg": 669.0,
    "sugar_g": 1.29,
    "vitamin_a_ug": 68.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 5.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707106",
  "state": "Fried",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "fried",
    "potatoes-and-starchy-vegetables",
    "poultry-mixed-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
