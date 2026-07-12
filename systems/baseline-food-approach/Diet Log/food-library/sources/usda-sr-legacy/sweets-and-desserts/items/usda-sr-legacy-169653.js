/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-0-7-oz-bar",
  "description": "Sweets",
  "id": "usda-sr-legacy-169653",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "serving-0-7-oz-bar",
      "kind": "unit",
      "label": "serving 0.7 oz bar"
    }
  ],
  "name": "Candies, MARS SNACKFOOD US, COCOAVIA Crispy Chocolate Bar",
  "nutritionPerBasis": {
    "calcium_mg": 1070.0,
    "carbs_g": 62.1,
    "energy_kcal": 517.0,
    "fat_g": 26.2,
    "fibre_g": 7.8,
    "folate_ug": 200.0,
    "iron_mg": 3.45,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 8.21,
    "salt_g": 0.1,
    "sat_fat_g": 14.0,
    "sodium_mg": 40.0,
    "sugar_g": 35.0,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 37.9,
    "vitamin_e_mg": 10.1,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169653",
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
