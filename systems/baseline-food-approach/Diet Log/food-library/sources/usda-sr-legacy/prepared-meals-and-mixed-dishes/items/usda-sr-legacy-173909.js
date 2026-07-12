/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "cup",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-173909",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cereals ready-to-eat, MALT-O-MEAL, MARSHMALLOW MATEYS",
  "nutritionPerBasis": {
    "calcium_mg": 333.0,
    "carbs_g": 82.8,
    "energy_kcal": 1620.0,
    "fat_g": 3.53,
    "fibre_g": 4.9,
    "folate_ug": 667.0,
    "iron_mg": 30.0,
    "magnesium_mg": 71.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 232.0,
    "potassium_mg": 186.0,
    "protein_g": 6.94,
    "salt_g": 1.6675,
    "sat_fat_g": 0.719,
    "sodium_mg": 667.0,
    "sugar_g": 40.9,
    "vitamin_a_ug": 500.0,
    "vitamin_c_mg": 20.0,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173909",
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
