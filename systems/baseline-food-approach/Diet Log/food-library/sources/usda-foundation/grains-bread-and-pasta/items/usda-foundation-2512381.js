/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "racc",
  "description": "Cereal Grains and Pasta",
  "id": "usda-foundation-2512381",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Rice, white, long grain, unenriched, raw",
  "nutritionPerBasis": {
    "calcium_mg": 4.46,
    "carbs_g": 80.3,
    "energy_kcal": 359.0,
    "fat_g": 1.03,
    "fibre_g": 0.149,
    "folate_ug": 0.0,
    "iron_mg": 0.14,
    "magnesium_mg": 26.5,
    "omega3_g": 0.0,
    "phosphorus_mg": 108.0,
    "potassium_mg": 82.3,
    "protein_g": 7.04,
    "salt_g": 0.001155,
    "sat_fat_g": 0.0,
    "sodium_mg": 0.462,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2512381",
  "state": "Raw",
  "subcategory": "Cereal Grains and Pasta",
  "tags": [
    "cereal-grains-and-pasta",
    "grains-bread-and-pasta",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
