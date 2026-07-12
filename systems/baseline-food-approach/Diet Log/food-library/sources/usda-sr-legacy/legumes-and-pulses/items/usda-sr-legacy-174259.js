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
  "id": "usda-sr-legacy-174259",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 207.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Mungo beans, mature seeds, raw",
  "nutritionPerBasis": {
    "calcium_mg": 138.0,
    "carbs_g": 59.0,
    "energy_kcal": 1430.0,
    "fat_g": 1.64,
    "fibre_g": 18.3,
    "folate_ug": 216.0,
    "iron_mg": 7.57,
    "magnesium_mg": 267.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 379.0,
    "potassium_mg": 983.0,
    "protein_g": 25.2,
    "salt_g": 0.095,
    "sat_fat_g": 0.114,
    "sodium_mg": 38.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174259",
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
