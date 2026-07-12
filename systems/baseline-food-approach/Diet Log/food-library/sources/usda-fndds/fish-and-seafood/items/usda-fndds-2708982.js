/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-cup",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2708982",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Congee, with meat, poultry, and/or seafood, and vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 7.44,
    "energy_kcal": 48.0,
    "fat_g": 0.7,
    "fibre_g": 0.3,
    "folate_ug": 18.0,
    "iron_mg": 0.44,
    "magnesium_mg": 6.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 36.0,
    "potassium_mg": 62.0,
    "protein_g": 2.73,
    "salt_g": 0.6025,
    "sat_fat_g": 0.238,
    "sodium_mg": 241.0,
    "sugar_g": 0.19,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 5.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708982",
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
