/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-fun-size-bag",
  "description": "Sweets",
  "id": "usda-sr-legacy-168840",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "serving-fun-size-bag",
      "kind": "unit",
      "label": "serving fun size bag"
    },
    {
      "gramsPerUnit": 62.0,
      "key": "serving-2-1-oz-bag",
      "kind": "unit",
      "label": "serving 2.1 oz bag"
    }
  ],
  "name": "Candies, MARS SNACKFOOD US, SKITTLES Wild Berry Bite Size Candies",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 90.8,
    "energy_kcal": 402.0,
    "fat_g": 4.25,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 0.19,
    "salt_g": 0.0375,
    "sat_fat_g": 4.12,
    "sodium_mg": 15.0,
    "sugar_g": 75.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 67.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168840",
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
