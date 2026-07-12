/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "oz",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-173722",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Salmon nuggets, cooked as purchased, unheated",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 11.8,
    "energy_kcal": 791.0,
    "fat_g": 10.4,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 1.46,
    "magnesium_mg": 20.0,
    "omega3_g": 0.463,
    "phosphorus_mg": 173.0,
    "potassium_mg": 161.0,
    "protein_g": 12.0,
    "salt_g": 0.4175,
    "sat_fat_g": 1.5,
    "sodium_mg": 167.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173722",
  "state": "Cooked",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "cooked",
    "finfish-and-shellfish-products",
    "fish-and-seafood"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
