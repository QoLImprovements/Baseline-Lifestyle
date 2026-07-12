/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-1-42-oz-bar",
  "description": "Sweets",
  "id": "usda-sr-legacy-169639",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "serving-1-42-oz-bar",
      "kind": "unit",
      "label": "serving 1.42 oz bar"
    }
  ],
  "name": "Candies, MARS SNACKFOOD US, SNICKERS MUNCH bar",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 43.6,
    "energy_kcal": 536.0,
    "fat_g": 36.2,
    "fibre_g": 4.7,
    "folate_ug": 0.0,
    "iron_mg": 1.02,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 15.2,
    "salt_g": 0.895,
    "sat_fat_g": 8.82,
    "sodium_mg": 358.0,
    "sugar_g": 30.9,
    "vitamin_a_ug": 314.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169639",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
