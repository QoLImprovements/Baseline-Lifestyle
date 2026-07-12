/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-oz-yields",
  "description": "Shellfish",
  "id": "usda-fndds-2706330",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-oz-yields",
      "kind": "unit",
      "label": "1 oz yields"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-leg",
      "kind": "unit",
      "label": "1 leg"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Frog legs",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 11.7,
    "energy_kcal": 220.0,
    "fat_g": 12.4,
    "fibre_g": 0.5,
    "folate_ug": 33.0,
    "iron_mg": 2.03,
    "magnesium_mg": 20.0,
    "omega3_g": 0.031,
    "phosphorus_mg": 135.0,
    "potassium_mg": 241.0,
    "protein_g": 14.4,
    "salt_g": 0.9675,
    "sat_fat_g": 1.72,
    "sodium_mg": 387.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.01,
    "vitamin_k_ug": 12.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706330",
  "state": "Unspecified",
  "subcategory": "Shellfish",
  "tags": [
    "fish-and-seafood",
    "shellfish",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
