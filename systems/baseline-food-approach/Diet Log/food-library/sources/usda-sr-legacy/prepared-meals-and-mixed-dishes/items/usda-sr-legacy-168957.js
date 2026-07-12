/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "serving-6-rolls",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-168957",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "serving-6-rolls",
      "kind": "unit",
      "label": "serving 6 rolls"
    }
  ],
  "name": "Pizza rolls, frozen, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 125.0,
    "carbs_g": 50.7,
    "energy_kcal": 328.0,
    "fat_g": 9.98,
    "fibre_g": 1.2,
    "folate_ug": 46.0,
    "iron_mg": 1.8,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 137.0,
    "potassium_mg": 301.0,
    "protein_g": 8.73,
    "salt_g": 1.4975,
    "sat_fat_g": 2.49,
    "sodium_mg": 599.0,
    "sugar_g": 3.74,
    "vitamin_a_ug": 67.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.59,
    "vitamin_k_ug": 4.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168957",
  "state": "Frozen",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "frozen",
    "meals-entrees-and-side-dishes",
    "prepared-meals-and-mixed-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
