/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "1-33-cup",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-174642",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "1-33-cup",
      "kind": "unit",
      "label": "1.33 cup"
    }
  ],
  "name": "Cereals ready-to-eat, MALT-O-MEAL, Honey BUZZERS",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 89.7,
    "energy_kcal": 1590.0,
    "fat_g": 1.72,
    "fibre_g": 3.4,
    "folate_ug": 690.0,
    "iron_mg": 31.0,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 69.0,
    "potassium_mg": 121.0,
    "protein_g": 3.45,
    "salt_g": 1.8975,
    "sat_fat_g": 0.585,
    "sodium_mg": 759.0,
    "sugar_g": 37.9,
    "vitamin_a_ug": 1720.0,
    "vitamin_c_mg": 20.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174642",
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
