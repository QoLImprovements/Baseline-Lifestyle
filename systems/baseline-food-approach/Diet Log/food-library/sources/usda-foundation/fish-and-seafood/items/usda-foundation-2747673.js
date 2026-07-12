/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Finfish and Shellfish Products",
  "id": "usda-foundation-2747673",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tuna, ahi or yellowfin, frozen, wild caught",
  "nutritionPerBasis": {
    "calcium_mg": 3.19,
    "carbs_g": -0.104,
    "energy_kcal": 102.0,
    "fat_g": 0.388,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.591,
    "magnesium_mg": 35.5,
    "omega3_g": 0.0,
    "phosphorus_mg": 271.0,
    "potassium_mg": 420.0,
    "protein_g": 24.7,
    "salt_g": 0.236,
    "sat_fat_g": 0.0,
    "sodium_mg": 94.4,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2747673",
  "state": "Frozen",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "finfish-and-shellfish-products",
    "fish-and-seafood",
    "frozen"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
