/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "serving-1-76-oz-bar",
  "description": "Sweets",
  "id": "usda-sr-legacy-168818",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "serving-1-76-oz-bar",
      "kind": "unit",
      "label": "serving 1.76 oz bar"
    }
  ],
  "name": "Candies, MARS SNACKFOOD US, SNICKERS Almond bar",
  "nutritionPerBasis": {
    "calcium_mg": 132.0,
    "carbs_g": 64.7,
    "energy_kcal": 472.0,
    "fat_g": 22.4,
    "fibre_g": 2.6,
    "folate_ug": 0.0,
    "iron_mg": 0.85,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 5.4,
    "salt_g": 0.39,
    "sat_fat_g": 8.53,
    "sodium_mg": 156.0,
    "sugar_g": 53.9,
    "vitamin_a_ug": 166.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168818",
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
