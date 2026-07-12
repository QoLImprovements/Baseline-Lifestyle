/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "0-5-cup",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-173343",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Potato salad with egg",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 16.2,
    "energy_kcal": 157.0,
    "fat_g": 9.4,
    "fibre_g": 1.3,
    "folate_ug": 13.0,
    "iron_mg": 0.5,
    "magnesium_mg": 15.0,
    "omega3_g": 0.633,
    "phosphorus_mg": 53.0,
    "potassium_mg": 242.0,
    "protein_g": 1.96,
    "salt_g": 0.8225,
    "sat_fat_g": 1.44,
    "sodium_mg": 329.0,
    "sugar_g": 4.95,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.68,
    "vitamin_k_ug": 14.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173343",
  "state": "Unspecified",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "meals-entrees-and-side-dishes",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
