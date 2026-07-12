/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2707107",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 191.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 191.0,
      "key": "1-banquet-meal-6-75-oz",
      "kind": "unit",
      "label": "1 Banquet meal (6.75 oz)"
    }
  ],
  "name": "Chicken patty, or nuggets, boneless, breaded, potatoes, vegetable, frozen meal",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 16.0,
    "energy_kcal": 175.0,
    "fat_g": 8.1,
    "fibre_g": 1.4,
    "folate_ug": 26.0,
    "iron_mg": 0.66,
    "magnesium_mg": 25.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 139.0,
    "potassium_mg": 317.0,
    "protein_g": 10.7,
    "salt_g": 0.94,
    "sat_fat_g": 1.96,
    "sodium_mg": 376.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 3.5,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707107",
  "state": "Frozen",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "frozen",
    "potatoes-and-starchy-vegetables",
    "poultry-mixed-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
