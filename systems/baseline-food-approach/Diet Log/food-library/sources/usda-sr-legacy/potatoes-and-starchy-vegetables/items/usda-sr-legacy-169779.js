/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "3-pieces-pierogies",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-169779",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 114.0,
      "key": "3-pieces-pierogies",
      "kind": "unit",
      "label": "3 pieces pierogies"
    }
  ],
  "name": "Dumpling, potato- or cheese-filled, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 29.6,
    "energy_kcal": 195.0,
    "fat_g": 6.14,
    "fibre_g": 0.9,
    "folate_ug": 64.0,
    "iron_mg": 1.26,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 79.0,
    "potassium_mg": 107.0,
    "protein_g": 5.26,
    "salt_g": 1.185,
    "sat_fat_g": 1.32,
    "sodium_mg": 474.0,
    "sugar_g": 1.75,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 5.3,
    "vitamin_e_mg": 0.98,
    "vitamin_k_ug": 7.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169779",
  "state": "Frozen",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "frozen",
    "meals-entrees-and-side-dishes",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
