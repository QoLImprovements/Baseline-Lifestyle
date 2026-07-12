/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "quantity-not-specified",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2708981",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Congee, with meat, poultry, and/or seafood",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 7.0,
    "energy_kcal": 58.0,
    "fat_g": 1.28,
    "fibre_g": 0.1,
    "folate_ug": 16.0,
    "iron_mg": 0.47,
    "magnesium_mg": 7.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 48.0,
    "potassium_mg": 55.0,
    "protein_g": 4.34,
    "salt_g": 0.615,
    "sat_fat_g": 0.449,
    "sodium_mg": 246.0,
    "sugar_g": 0.01,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708981",
  "state": "Unspecified",
  "subcategory": "Rice mixed dishes",
  "tags": [
    "fish-and-seafood",
    "rice-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
