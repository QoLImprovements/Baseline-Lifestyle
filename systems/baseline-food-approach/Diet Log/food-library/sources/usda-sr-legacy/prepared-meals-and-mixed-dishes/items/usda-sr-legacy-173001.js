/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "0-75-cup",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-173001",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 27.0,
      "key": "0-75-cup",
      "kind": "unit",
      "label": "0.75 cup"
    }
  ],
  "name": "Cereals ready-to-eat, MALT-O-MEAL, Fruity DYNO-BITES",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 90.1,
    "energy_kcal": 1690.0,
    "fat_g": 3.15,
    "fibre_g": 1.0,
    "folate_ug": 496.0,
    "iron_mg": 7.62,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 67.0,
    "potassium_mg": 76.0,
    "protein_g": 3.9,
    "salt_g": 1.575,
    "sat_fat_g": 0.64,
    "sodium_mg": 630.0,
    "sugar_g": 42.6,
    "vitamin_a_ug": 1090.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 1.27,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173001",
  "state": "Ready-to-eat",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "prepared-meals-and-mixed-dishes",
    "ready-to-eat"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
