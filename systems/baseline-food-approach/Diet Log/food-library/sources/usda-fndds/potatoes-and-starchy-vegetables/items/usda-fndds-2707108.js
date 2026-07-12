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
  "id": "usda-fndds-2707108",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 468.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 468.0,
      "key": "1-swanson-meal-16-5-oz",
      "kind": "unit",
      "label": "1 Swanson meal (16.5 oz)"
    },
    {
      "gramsPerUnit": 468.0,
      "key": "1-banquet-meal-16-5-oz",
      "kind": "unit",
      "label": "1 Banquet meal (16.5 oz)"
    }
  ],
  "name": "Chicken, fried, with potatoes, vegetable, dessert, frozen meal, large meat portion",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 18.0,
    "energy_kcal": 201.0,
    "fat_g": 9.93,
    "fibre_g": 1.3,
    "folate_ug": 21.0,
    "iron_mg": 0.7,
    "magnesium_mg": 22.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 134.0,
    "potassium_mg": 265.0,
    "protein_g": 10.9,
    "salt_g": 1.3775,
    "sat_fat_g": 2.48,
    "sodium_mg": 551.0,
    "sugar_g": 6.03,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 2.5,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707108",
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
