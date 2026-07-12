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
  "id": "usda-sr-legacy-172428",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 196.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Peas, green, split, mature seeds, raw",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 61.6,
    "energy_kcal": 1520.0,
    "fat_g": 3.89,
    "fibre_g": 22.2,
    "folate_ug": 15.0,
    "iron_mg": 4.73,
    "magnesium_mg": 63.0,
    "omega3_g": 0.163,
    "phosphorus_mg": 334.0,
    "potassium_mg": 852.0,
    "protein_g": 23.1,
    "salt_g": 0.0125,
    "sat_fat_g": 0.408,
    "sodium_mg": 5.0,
    "sugar_g": 3.14,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 15.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172428",
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
