/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "oz",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-171972",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "can-4-5-oz-drained",
      "kind": "unit",
      "label": "can (4.5 oz), drained"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "10-shrimp",
      "kind": "unit",
      "label": "10 shrimp"
    }
  ],
  "name": "Crustaceans, shrimp, mixed species, canned",
  "nutritionPerBasis": {
    "calcium_mg": 145.0,
    "carbs_g": 0.0,
    "energy_kcal": 416.0,
    "fat_g": 1.36,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 2.13,
    "magnesium_mg": 33.0,
    "omega3_g": 0.601,
    "phosphorus_mg": 195.0,
    "potassium_mg": 80.0,
    "protein_g": 20.4,
    "salt_g": 2.175,
    "sat_fat_g": 0.188,
    "sodium_mg": 870.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.1,
    "vitamin_e_mg": 1.1,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171972",
  "state": "Canned",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "canned",
    "finfish-and-shellfish-products",
    "fish-and-seafood"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
