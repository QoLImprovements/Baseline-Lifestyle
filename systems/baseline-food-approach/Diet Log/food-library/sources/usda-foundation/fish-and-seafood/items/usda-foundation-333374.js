/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "fillet",
  "description": "Finfish and Shellfish Products",
  "id": "usda-foundation-333374",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 176.0,
      "key": "fillet",
      "kind": "unit",
      "label": "fillet"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Fish, haddock, raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 74.0,
    "fat_g": 0.45,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.17,
    "magnesium_mg": 21.1,
    "omega3_g": 0.138,
    "phosphorus_mg": 227.0,
    "potassium_mg": 286.0,
    "protein_g": 16.3,
    "salt_g": 0.5325,
    "sat_fat_g": 0.093,
    "sodium_mg": 213.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "333374",
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
