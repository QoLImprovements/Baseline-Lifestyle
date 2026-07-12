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
  "id": "usda-sr-legacy-174215",
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
  "name": "Mollusks, cuttlefish, mixed species, raw",
  "nutritionPerBasis": {
    "calcium_mg": 90.0,
    "carbs_g": 0.82,
    "energy_kcal": 331.0,
    "fat_g": 0.7,
    "fibre_g": 0.0,
    "folate_ug": 16.0,
    "iron_mg": 6.02,
    "magnesium_mg": 30.0,
    "omega3_g": 0.111,
    "phosphorus_mg": 387.0,
    "potassium_mg": 354.0,
    "protein_g": 16.2,
    "salt_g": 0.93,
    "sat_fat_g": 0.118,
    "sodium_mg": 372.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 113.0,
    "vitamin_c_mg": 5.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174215",
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
