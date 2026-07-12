/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "3-oz",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-175125",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 64.0,
      "key": "fillet",
      "kind": "unit",
      "label": "fillet"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-boneless",
      "kind": "unit",
      "label": "oz, boneless"
    }
  ],
  "name": "Fish, ocean perch, Atlantic, raw",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 0.0,
    "energy_kcal": 79.0,
    "fat_g": 1.54,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.22,
    "magnesium_mg": 23.0,
    "omega3_g": 0.24,
    "phosphorus_mg": 248.0,
    "potassium_mg": 187.0,
    "protein_g": 15.3,
    "salt_g": 0.7175,
    "sat_fat_g": 0.273,
    "sodium_mg": 287.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.76,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175125",
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
