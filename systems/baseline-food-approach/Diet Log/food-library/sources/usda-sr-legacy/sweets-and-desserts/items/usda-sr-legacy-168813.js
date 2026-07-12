/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-1-75-fl-oz-pop",
  "description": "Sweets",
  "id": "usda-sr-legacy-168813",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 52.0,
      "key": "serving-1-75-fl-oz-pop",
      "kind": "unit",
      "label": "serving 1.75 fl oz pop"
    }
  ],
  "name": "Frozen novelties, ice type, pop",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 19.2,
    "energy_kcal": 79.0,
    "fat_g": 0.24,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.54,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 15.0,
    "protein_g": 0.0,
    "salt_g": 0.0175,
    "sat_fat_g": 0.013,
    "sodium_mg": 7.0,
    "sugar_g": 13.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168813",
  "state": "Frozen",
  "subcategory": "Sweets",
  "tags": [
    "frozen",
    "sweets",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
