/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "2-bars",
  "description": "Sweets",
  "id": "usda-sr-legacy-169624",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 34.0,
      "key": "2-bars",
      "kind": "unit",
      "label": "2 bars"
    },
    {
      "gramsPerUnit": 54.0,
      "key": "bar-1-92-oz",
      "kind": "unit",
      "label": "bar 1.92 oz"
    }
  ],
  "name": "Candies, REESE'S NUTRAGEOUS Candy Bar",
  "nutritionPerBasis": {
    "calcium_mg": 68.0,
    "carbs_g": 52.8,
    "energy_kcal": 2160.0,
    "fat_g": 32.1,
    "fibre_g": 3.9,
    "folate_ug": 56.0,
    "iron_mg": 1.23,
    "magnesium_mg": 68.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 175.0,
    "potassium_mg": 364.0,
    "protein_g": 11.3,
    "salt_g": 0.3525,
    "sat_fat_g": 8.86,
    "sodium_mg": 141.0,
    "sugar_g": 40.2,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169624",
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
