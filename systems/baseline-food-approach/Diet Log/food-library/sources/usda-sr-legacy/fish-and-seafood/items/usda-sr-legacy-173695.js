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
  "id": "usda-sr-legacy-173695",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 238.0,
      "key": "fillet",
      "kind": "unit",
      "label": "fillet"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Fish, seatrout, mixed species, raw",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 0.0,
    "energy_kcal": 435.0,
    "fat_g": 3.61,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.27,
    "magnesium_mg": 31.0,
    "omega3_g": 0.448,
    "phosphorus_mg": 250.0,
    "potassium_mg": 341.0,
    "protein_g": 16.7,
    "salt_g": 0.145,
    "sat_fat_g": 1.01,
    "sodium_mg": 58.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173695",
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
