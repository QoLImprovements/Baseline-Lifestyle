/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "racc",
  "description": "Finfish and Shellfish Products",
  "id": "usda-foundation-2684440",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Fish, salmon, sockeye, wild caught, raw",
  "nutritionPerBasis": {
    "calcium_mg": 14.8,
    "carbs_g": 0.0,
    "energy_kcal": 130.0,
    "fat_g": 4.94,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.402,
    "magnesium_mg": 26.2,
    "omega3_g": 0.626,
    "phosphorus_mg": 226.0,
    "potassium_mg": 330.0,
    "protein_g": 22.3,
    "salt_g": 0.13325,
    "sat_fat_g": 0.722,
    "sodium_mg": 53.3,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2684440",
  "state": "Raw",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "finfish-and-shellfish-products",
    "fish-and-seafood",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
