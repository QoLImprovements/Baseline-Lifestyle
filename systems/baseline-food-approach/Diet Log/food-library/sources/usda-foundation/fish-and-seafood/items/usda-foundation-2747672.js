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
  "id": "usda-foundation-2747672",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Swordfish, frozen, wild caught",
  "nutritionPerBasis": {
    "calcium_mg": 3.62,
    "carbs_g": 0.45,
    "energy_kcal": 152.0,
    "fat_g": 8.12,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.096,
    "magnesium_mg": 26.7,
    "omega3_g": 0.0,
    "phosphorus_mg": 235.0,
    "potassium_mg": 414.0,
    "protein_g": 19.2,
    "salt_g": 0.14225,
    "sat_fat_g": 0.0,
    "sodium_mg": 56.9,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2747672",
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
