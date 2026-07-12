/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-3-5-oz-shelf-stable",
  "description": "Sweets",
  "id": "usda-sr-legacy-168797",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 99.0,
      "key": "serving-3-5-oz-shelf-stable",
      "kind": "unit",
      "label": "serving 3.5 oz shelf stable"
    }
  ],
  "name": "Puddings, vanilla, ready-to-eat, fat free",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 20.2,
    "energy_kcal": 371.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.36,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 54.0,
    "potassium_mg": 108.0,
    "protein_g": 2.02,
    "salt_g": 0.4775,
    "sat_fat_g": 0.0,
    "sodium_mg": 191.0,
    "sugar_g": 15.1,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168797",
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
