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
  "id": "usda-sr-legacy-174255",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 202.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Lima beans, thin seeded (baby), mature seeds, raw",
  "nutritionPerBasis": {
    "calcium_mg": 81.0,
    "carbs_g": 62.8,
    "energy_kcal": 1400.0,
    "fat_g": 0.93,
    "fibre_g": 20.6,
    "folate_ug": 400.0,
    "iron_mg": 6.19,
    "magnesium_mg": 188.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 370.0,
    "potassium_mg": 1400.0,
    "protein_g": 20.6,
    "salt_g": 0.0325,
    "sat_fat_g": 0.219,
    "sodium_mg": 13.0,
    "sugar_g": 8.32,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 5.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174255",
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
