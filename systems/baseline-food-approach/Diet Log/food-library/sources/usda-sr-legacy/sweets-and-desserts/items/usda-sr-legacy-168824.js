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
  "id": "usda-sr-legacy-168824",
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
      "gramsPerUnit": 74.0,
      "key": "0-12-can",
      "kind": "unit",
      "label": "0.12 can"
    }
  ],
  "name": "Pie fillings, canned, cherry",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 28.0,
    "energy_kcal": 115.0,
    "fat_g": 0.07,
    "fibre_g": 0.6,
    "folate_ug": 4.0,
    "iron_mg": 0.24,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 105.0,
    "protein_g": 0.37,
    "salt_g": 0.045,
    "sat_fat_g": 0.018,
    "sodium_mg": 18.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 3.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168824",
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
