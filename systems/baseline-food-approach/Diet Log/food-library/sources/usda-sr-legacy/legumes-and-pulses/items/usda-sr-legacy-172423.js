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
  "id": "usda-sr-legacy-172423",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Lupins, mature seeds, raw",
  "nutritionPerBasis": {
    "calcium_mg": 176.0,
    "carbs_g": 40.4,
    "energy_kcal": 1550.0,
    "fat_g": 9.74,
    "fibre_g": 18.9,
    "folate_ug": 355.0,
    "iron_mg": 4.36,
    "magnesium_mg": 198.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 440.0,
    "potassium_mg": 1010.0,
    "protein_g": 36.2,
    "salt_g": 0.0375,
    "sat_fat_g": 1.16,
    "sodium_mg": 15.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172423",
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
