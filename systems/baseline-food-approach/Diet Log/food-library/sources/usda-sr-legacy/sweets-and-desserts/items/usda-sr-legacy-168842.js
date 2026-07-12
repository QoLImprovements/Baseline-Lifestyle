/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-1-80-oz-bag",
  "description": "Sweets",
  "id": "usda-sr-legacy-168842",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 51.0,
      "key": "serving-1-80-oz-bag",
      "kind": "unit",
      "label": "serving 1.80 oz bag"
    }
  ],
  "name": "Candies, MARS SNACKFOOD US, SKITTLES Sours Original",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 91.0,
    "energy_kcal": 1680.0,
    "fat_g": 4.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.01,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 0.18,
    "salt_g": 0.035,
    "sat_fat_g": 3.76,
    "sodium_mg": 14.0,
    "sugar_g": 73.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 61.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168842",
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
