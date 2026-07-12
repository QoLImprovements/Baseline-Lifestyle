/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-173328",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 242.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Ravioli, cheese-filled, canned",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 13.6,
    "energy_kcal": 324.0,
    "fat_g": 1.45,
    "fibre_g": 1.3,
    "folate_ug": 20.0,
    "iron_mg": 0.74,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 232.0,
    "protein_g": 2.48,
    "salt_g": 0.765,
    "sat_fat_g": 0.723,
    "sodium_mg": 306.0,
    "sugar_g": 3.72,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.85,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173328",
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
