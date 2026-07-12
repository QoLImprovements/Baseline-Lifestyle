/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "cup",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-175189",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 195.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beans, cranberry (roman), mature seeds, raw",
  "nutritionPerBasis": {
    "calcium_mg": 127.0,
    "carbs_g": 60.0,
    "energy_kcal": 1400.0,
    "fat_g": 1.23,
    "fibre_g": 24.7,
    "folate_ug": 604.0,
    "iron_mg": 5.0,
    "magnesium_mg": 156.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 372.0,
    "potassium_mg": 1330.0,
    "protein_g": 23.0,
    "salt_g": 0.015,
    "sat_fat_g": 0.316,
    "sodium_mg": 6.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175189",
  "state": "Raw",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "legumes-and-legume-products",
    "legumes-and-pulses",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
