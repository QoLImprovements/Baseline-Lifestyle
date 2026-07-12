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
  "id": "usda-sr-legacy-174212",
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
    }
  ],
  "name": "Mollusks, abalone, mixed species, raw",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 6.01,
    "energy_kcal": 439.0,
    "fat_g": 0.76,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 3.19,
    "magnesium_mg": 48.0,
    "omega3_g": 0.09,
    "phosphorus_mg": 190.0,
    "potassium_mg": 250.0,
    "protein_g": 17.1,
    "salt_g": 0.7525,
    "sat_fat_g": 0.149,
    "sodium_mg": 301.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 4.0,
    "vitamin_k_ug": 23.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174212",
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
