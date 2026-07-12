/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-0-78-oz-bar",
  "description": "Sweets",
  "id": "usda-sr-legacy-169651",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "serving-0-78-oz-bar",
      "kind": "unit",
      "label": "serving 0.78 oz bar"
    }
  ],
  "name": "Candies, MARS SNACKFOOD US, COCOAVIA Chocolate Bar",
  "nutritionPerBasis": {
    "calcium_mg": 1160.0,
    "carbs_g": 63.0,
    "energy_kcal": 539.0,
    "fat_g": 29.3,
    "fibre_g": 8.7,
    "folate_ug": 273.0,
    "iron_mg": 3.47,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 5.81,
    "salt_g": 0.0175,
    "sat_fat_g": 15.7,
    "sodium_mg": 7.0,
    "sugar_g": 39.2,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 42.6,
    "vitamin_e_mg": 12.3,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169651",
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
