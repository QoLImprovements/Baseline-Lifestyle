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
  "id": "usda-sr-legacy-173724",
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
      "gramsPerUnit": 242.0,
      "key": "can-drained-solids-bone-and-skin-removed",
      "kind": "unit",
      "label": "can drained solids, bone and skin removed"
    }
  ],
  "name": "Fish, Salmon, pink, canned, drained solids, without skin and bones",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 0.0,
    "energy_kcal": 136.0,
    "fat_g": 4.21,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.57,
    "magnesium_mg": 24.0,
    "omega3_g": 1.068,
    "phosphorus_mg": 253.0,
    "potassium_mg": 326.0,
    "protein_g": 24.6,
    "salt_g": 0.945,
    "sat_fat_g": 0.749,
    "sodium_mg": 378.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.28,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173724",
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
