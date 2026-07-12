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
  "id": "usda-sr-legacy-175205",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.4,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Broadbeans (fava beans), mature seeds, raw",
  "nutritionPerBasis": {
    "calcium_mg": 103.0,
    "carbs_g": 58.3,
    "energy_kcal": 341.0,
    "fat_g": 1.53,
    "fibre_g": 25.0,
    "folate_ug": 423.0,
    "iron_mg": 6.7,
    "magnesium_mg": 192.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 421.0,
    "potassium_mg": 1060.0,
    "protein_g": 26.1,
    "salt_g": 0.0325,
    "sat_fat_g": 0.254,
    "sodium_mg": 13.0,
    "sugar_g": 5.7,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 1.4,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 9.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175205",
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
