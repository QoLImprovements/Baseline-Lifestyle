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
  "id": "usda-sr-legacy-171974",
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
      "gramsPerUnit": 188.0,
      "key": "20-small",
      "kind": "unit",
      "label": "20 small"
    }
  ],
  "name": "Mollusks, clam, mixed species, cooked, breaded and fried",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 10.3,
    "energy_kcal": 845.0,
    "fat_g": 11.2,
    "fibre_g": 0.0,
    "folate_ug": 36.0,
    "iron_mg": 13.9,
    "magnesium_mg": 14.0,
    "omega3_g": 0.186,
    "phosphorus_mg": 188.0,
    "potassium_mg": 326.0,
    "protein_g": 14.2,
    "salt_g": 0.91,
    "sat_fat_g": 2.68,
    "sodium_mg": 364.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 91.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171974",
  "state": "Fried",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "finfish-and-shellfish-products",
    "fish-and-seafood",
    "fried"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
