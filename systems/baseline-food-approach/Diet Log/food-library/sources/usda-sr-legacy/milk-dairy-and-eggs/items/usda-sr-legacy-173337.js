/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "7-5-oz-1-serving",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-173337",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 213.0,
      "key": "7-5-oz-1-serving",
      "kind": "unit",
      "label": "7.5 oz 1 serving"
    }
  ],
  "name": "Macaroni and Cheese, canned, microwavable",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 14.0,
    "energy_kcal": 559.0,
    "fat_g": 5.99,
    "fibre_g": 0.4,
    "folate_ug": 0.0,
    "iron_mg": 0.91,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 97.0,
    "potassium_mg": 72.0,
    "protein_g": 5.98,
    "salt_g": 0.8375,
    "sat_fat_g": 3.66,
    "sodium_mg": 335.0,
    "sugar_g": 1.41,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173337",
  "state": "Canned",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "canned",
    "meals-entrees-and-side-dishes",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
