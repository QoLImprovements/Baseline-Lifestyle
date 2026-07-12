/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-1-2-cup",
  "description": "Sweets",
  "id": "usda-sr-legacy-170664",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "serving-1-2-cup",
      "kind": "unit",
      "label": "serving 1/2 cup"
    }
  ],
  "name": "Ice creams, BREYERS, No Sugar Added, Vanilla Chocolate Strawberry",
  "nutritionPerBasis": {
    "calcium_mg": 132.0,
    "carbs_g": 21.7,
    "energy_kcal": 143.0,
    "fat_g": 6.26,
    "fibre_g": 0.7,
    "folate_ug": 0.0,
    "iron_mg": 0.27,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 3.71,
    "salt_g": 0.17,
    "sat_fat_g": 3.94,
    "sodium_mg": 68.0,
    "sugar_g": 6.15,
    "vitamin_a_ug": 292.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170664",
  "state": "Raw",
  "subcategory": "Sweets",
  "tags": [
    "raw",
    "sweets",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
