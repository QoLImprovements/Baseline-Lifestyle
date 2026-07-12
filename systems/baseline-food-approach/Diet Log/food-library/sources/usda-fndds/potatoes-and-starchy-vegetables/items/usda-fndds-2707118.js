/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-banquet-meal-9-25-oz",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2707118",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 262.0,
      "key": "1-banquet-meal-9-25-oz",
      "kind": "unit",
      "label": "1 Banquet meal (9.25 oz)"
    },
    {
      "gramsPerUnit": 333.0,
      "key": "1-swanson-meal-11-75-oz",
      "kind": "unit",
      "label": "1 Swanson meal (11.75 oz)"
    },
    {
      "gramsPerUnit": 262.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Turkey with gravy, dressing, potatoes, vegetable, frozen meal",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 16.3,
    "energy_kcal": 128.0,
    "fat_g": 3.89,
    "fibre_g": 1.3,
    "folate_ug": 24.0,
    "iron_mg": 0.79,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 106.0,
    "potassium_mg": 230.0,
    "protein_g": 6.97,
    "salt_g": 0.815,
    "sat_fat_g": 0.877,
    "sodium_mg": 326.0,
    "sugar_g": 4.82,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 11.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707118",
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
