/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "leg",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-168148",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "leg",
      "kind": "unit",
      "label": "leg"
    }
  ],
  "name": "Frog legs, raw",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 0.0,
    "energy_kcal": 305.0,
    "fat_g": 0.3,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 1.5,
    "magnesium_mg": 20.0,
    "omega3_g": 0.041,
    "phosphorus_mg": 147.0,
    "potassium_mg": 285.0,
    "protein_g": 16.4,
    "salt_g": 0.145,
    "sat_fat_g": 0.076,
    "sodium_mg": 58.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.0,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168148",
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
