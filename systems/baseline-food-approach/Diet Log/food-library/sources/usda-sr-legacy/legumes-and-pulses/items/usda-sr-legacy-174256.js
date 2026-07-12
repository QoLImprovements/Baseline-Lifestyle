/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "tbsp",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-174256",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 207.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Mung beans, mature seeds, raw",
  "nutritionPerBasis": {
    "calcium_mg": 132.0,
    "carbs_g": 62.6,
    "energy_kcal": 347.0,
    "fat_g": 1.15,
    "fibre_g": 16.3,
    "folate_ug": 625.0,
    "iron_mg": 6.74,
    "magnesium_mg": 189.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 367.0,
    "potassium_mg": 1250.0,
    "protein_g": 23.9,
    "salt_g": 0.0375,
    "sat_fat_g": 0.348,
    "sodium_mg": 15.0,
    "sugar_g": 6.6,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 4.8,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 9.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174256",
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
