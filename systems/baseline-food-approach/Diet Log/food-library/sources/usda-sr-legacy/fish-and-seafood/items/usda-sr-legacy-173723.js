/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "can-drained-solids-bone-and-skin-removed",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-173723",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 247.0,
      "key": "can-drained-solids-bone-and-skin-removed",
      "kind": "unit",
      "label": "can drained solids, bone and skin removed"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Salmon, sockeye, canned, drained solids, without skin and bones",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 0.0,
    "energy_kcal": 662.0,
    "fat_g": 5.87,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.48,
    "magnesium_mg": 24.0,
    "omega3_g": 1.292,
    "phosphorus_mg": 236.0,
    "potassium_mg": 312.0,
    "protein_g": 26.3,
    "salt_g": 0.965,
    "sat_fat_g": 1.21,
    "sodium_mg": 386.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.09,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173723",
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
