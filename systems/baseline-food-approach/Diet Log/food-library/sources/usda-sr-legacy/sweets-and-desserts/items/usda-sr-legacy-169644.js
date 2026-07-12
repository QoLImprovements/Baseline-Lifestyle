/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-13-pieces",
  "description": "Sweets",
  "id": "usda-sr-legacy-169644",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "serving-13-pieces",
      "kind": "unit",
      "label": "serving 13 pieces"
    }
  ],
  "name": "Candies, MARS SNACKFOOD US, POP'ABLES MILKY WAY Brand Bite Size Candies",
  "nutritionPerBasis": {
    "calcium_mg": 91.0,
    "carbs_g": 71.8,
    "energy_kcal": 463.0,
    "fat_g": 18.0,
    "fibre_g": 1.0,
    "folate_ug": 0.0,
    "iron_mg": 0.5,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 3.3,
    "salt_g": 0.365,
    "sat_fat_g": 8.89,
    "sodium_mg": 146.0,
    "sugar_g": 61.1,
    "vitamin_a_ug": 137.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169644",
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
