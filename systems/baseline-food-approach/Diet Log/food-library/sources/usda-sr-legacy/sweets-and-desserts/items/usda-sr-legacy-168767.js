/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-2-fun-size-bars",
  "description": "Sweets",
  "id": "usda-sr-legacy-168767",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "serving-2-fun-size-bars",
      "kind": "unit",
      "label": "serving 2 fun size bars"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "serving-2-13-oz-bar",
      "kind": "unit",
      "label": "serving 2.13 oz bar"
    }
  ],
  "name": "Candies, MARS SNACKFOOD US, 3 MUSKETEERS Bar",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 77.8,
    "energy_kcal": 436.0,
    "fat_g": 12.8,
    "fibre_g": 1.5,
    "folate_ug": 4.0,
    "iron_mg": 0.67,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 69.0,
    "potassium_mg": 133.0,
    "protein_g": 2.6,
    "salt_g": 0.485,
    "sat_fat_g": 8.65,
    "sodium_mg": 194.0,
    "sugar_g": 66.9,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.98,
    "vitamin_k_ug": 2.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168767",
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
