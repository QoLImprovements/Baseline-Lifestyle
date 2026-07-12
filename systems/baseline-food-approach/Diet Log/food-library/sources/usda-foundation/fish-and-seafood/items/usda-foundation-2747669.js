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
  "id": "usda-foundation-2747669",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Snapper, frozen, wild caught",
  "nutritionPerBasis": {
    "calcium_mg": 13.9,
    "carbs_g": 0.441,
    "energy_kcal": 89.5,
    "fat_g": 0.569,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.201,
    "magnesium_mg": 27.5,
    "omega3_g": 0.0,
    "phosphorus_mg": 199.0,
    "potassium_mg": 349.0,
    "protein_g": 20.7,
    "salt_g": 0.23275,
    "sat_fat_g": 0.0,
    "sodium_mg": 93.1,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2747669",
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
