/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "serving-4-5-oz",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-169775",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 127.0,
      "key": "serving-4-5-oz",
      "kind": "unit",
      "label": "serving 4.5 oz"
    }
  ],
  "name": "Turnover, cheese-filled, tomato-based sauce, frozen, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 276.0,
    "carbs_g": 27.3,
    "energy_kcal": 235.0,
    "fat_g": 9.45,
    "fibre_g": 1.6,
    "folate_ug": 63.0,
    "iron_mg": 1.85,
    "magnesium_mg": 23.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 47.0,
    "potassium_mg": 179.0,
    "protein_g": 10.2,
    "salt_g": 1.495,
    "sat_fat_g": 4.72,
    "sodium_mg": 598.0,
    "sugar_g": 7.87,
    "vitamin_a_ug": 52.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.79,
    "vitamin_k_ug": 15.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169775",
  "state": "Frozen",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "frozen",
    "meals-entrees-and-side-dishes",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
