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
  "id": "usda-sr-legacy-171982",
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
  "name": "Mollusks, squid, mixed species, cooked, fried",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 7.79,
    "energy_kcal": 732.0,
    "fat_g": 7.48,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 1.01,
    "magnesium_mg": 38.0,
    "omega3_g": 0.546,
    "phosphorus_mg": 251.0,
    "potassium_mg": 279.0,
    "protein_g": 17.9,
    "salt_g": 0.765,
    "sat_fat_g": 1.88,
    "sodium_mg": 306.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 4.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171982",
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
