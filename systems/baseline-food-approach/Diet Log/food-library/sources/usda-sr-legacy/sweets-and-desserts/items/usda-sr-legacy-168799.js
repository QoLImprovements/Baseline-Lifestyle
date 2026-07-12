/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-4-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-168799",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "serving-4-oz",
      "kind": "unit",
      "label": "serving 4 oz"
    }
  ],
  "name": "Puddings, chocolate, ready-to-eat, fat free",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 20.9,
    "energy_kcal": 93.0,
    "fat_g": 0.3,
    "fibre_g": 0.3,
    "folate_ug": 3.0,
    "iron_mg": 1.69,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 54.0,
    "potassium_mg": 208.0,
    "protein_g": 1.93,
    "salt_g": 0.385,
    "sat_fat_g": 0.0,
    "sodium_mg": 154.0,
    "sugar_g": 15.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168799",
  "state": "Ready-to-eat",
  "subcategory": "Sweets",
  "tags": [
    "ready-to-eat",
    "sweets",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
