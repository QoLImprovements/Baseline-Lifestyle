/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "can-21-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-168822",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 595.0,
      "key": "can-21-oz",
      "kind": "unit",
      "label": "can (21 oz)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 74.0,
      "key": "0-12-can",
      "kind": "unit",
      "label": "0.12 can"
    }
  ],
  "name": "Pie fillings, apple, canned",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 26.1,
    "energy_kcal": 100.0,
    "fat_g": 0.1,
    "fibre_g": 1.0,
    "folate_ug": 0.0,
    "iron_mg": 0.29,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.0,
    "potassium_mg": 45.0,
    "protein_g": 0.1,
    "salt_g": 0.1175,
    "sat_fat_g": 0.0,
    "sodium_mg": 47.0,
    "sugar_g": 13.8,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168822",
  "state": "Canned",
  "subcategory": "Sweets",
  "tags": [
    "canned",
    "sweets",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
