/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "cup",
  "description": "Sweets",
  "id": "usda-sr-legacy-168782",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 172.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "serving-4-oz-pudding-cup",
      "kind": "unit",
      "label": "serving 4 oz pudding cup"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "can-5-oz",
      "kind": "unit",
      "label": "can (5 oz)"
    }
  ],
  "name": "Puddings, rice, ready-to-eat",
  "nutritionPerBasis": {
    "calcium_mg": 95.0,
    "carbs_g": 18.4,
    "energy_kcal": 451.0,
    "fat_g": 2.15,
    "fibre_g": 0.3,
    "folate_ug": 4.0,
    "iron_mg": 0.11,
    "magnesium_mg": 8.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 82.0,
    "potassium_mg": 125.0,
    "protein_g": 3.23,
    "salt_g": 0.2425,
    "sat_fat_g": 1.21,
    "sodium_mg": 97.0,
    "sugar_g": 11.6,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168782",
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
