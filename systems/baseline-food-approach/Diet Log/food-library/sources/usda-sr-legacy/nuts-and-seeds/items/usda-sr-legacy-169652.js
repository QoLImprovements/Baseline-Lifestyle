/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "serving-0-78-oz-bar",
  "description": "Sweets",
  "id": "usda-sr-legacy-169652",
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
  "name": "Candies, MARS SNACKFOOD US, COCOAVIA Blueberry and Almond Chocolate Bar",
  "nutritionPerBasis": {
    "calcium_mg": 985.0,
    "carbs_g": 60.4,
    "energy_kcal": 2200.0,
    "fat_g": 28.7,
    "fibre_g": 9.1,
    "folate_ug": 182.0,
    "iron_mg": 3.18,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 6.35,
    "salt_g": 0.02,
    "sat_fat_g": 13.1,
    "sodium_mg": 8.0,
    "sugar_g": 39.0,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 34.2,
    "vitamin_e_mg": 9.2,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169652",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "nuts-and-seeds",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
