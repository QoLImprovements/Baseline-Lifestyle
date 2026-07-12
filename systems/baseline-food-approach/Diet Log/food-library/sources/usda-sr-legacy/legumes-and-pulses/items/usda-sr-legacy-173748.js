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
  "id": "usda-sr-legacy-173748",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beans, pink, mature seeds, raw",
  "nutritionPerBasis": {
    "calcium_mg": 130.0,
    "carbs_g": 64.2,
    "energy_kcal": 343.0,
    "fat_g": 1.13,
    "fibre_g": 12.7,
    "folate_ug": 463.0,
    "iron_mg": 6.77,
    "magnesium_mg": 182.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 415.0,
    "potassium_mg": 1460.0,
    "protein_g": 21.0,
    "salt_g": 0.02,
    "sat_fat_g": 0.292,
    "sodium_mg": 8.0,
    "sugar_g": 2.14,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 5.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173748",
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
