/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "4-large",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-171970",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "4-large",
      "kind": "unit",
      "label": "4 large"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Crustaceans, shrimp, mixed species, cooked, breaded and fried",
  "nutritionPerBasis": {
    "calcium_mg": 67.0,
    "carbs_g": 11.5,
    "energy_kcal": 242.0,
    "fat_g": 12.3,
    "fibre_g": 0.4,
    "folate_ug": 33.0,
    "iron_mg": 1.26,
    "magnesium_mg": 40.0,
    "omega3_g": 0.268,
    "phosphorus_mg": 218.0,
    "potassium_mg": 225.0,
    "protein_g": 21.4,
    "salt_g": 0.86,
    "sat_fat_g": 2.09,
    "sodium_mg": 344.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 1.3,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171970",
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
