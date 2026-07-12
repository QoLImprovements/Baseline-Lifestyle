/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "2-cookie-2011-label",
  "description": "Sweets",
  "id": "usda-sr-legacy-168102",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 51.0,
      "key": "2-cookie-2011-label",
      "kind": "unit",
      "label": "2 cookie 2011 label"
    }
  ],
  "name": "Candies, MARS SNACKFOOD US, TWIX chocolate fudge cookie bars",
  "nutritionPerBasis": {
    "calcium_mg": 130.0,
    "carbs_g": 56.0,
    "energy_kcal": 553.0,
    "fat_g": 33.3,
    "fibre_g": 3.0,
    "folate_ug": 9.0,
    "iron_mg": 1.31,
    "magnesium_mg": 46.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 147.0,
    "potassium_mg": 309.0,
    "protein_g": 7.3,
    "salt_g": 0.665,
    "sat_fat_g": 4.96,
    "sodium_mg": 266.0,
    "sugar_g": 53.0,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 2.71,
    "vitamin_k_ug": 18.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168102",
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
