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
  "id": "usda-sr-legacy-171979",
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
      "gramsPerUnit": 88.0,
      "key": "6-medium",
      "kind": "unit",
      "label": "6 medium"
    }
  ],
  "name": "Mollusks, oyster, eastern, cooked, breaded and fried",
  "nutritionPerBasis": {
    "calcium_mg": 62.0,
    "carbs_g": 11.6,
    "energy_kcal": 199.0,
    "fat_g": 12.6,
    "fibre_g": 0.0,
    "folate_ug": 31.0,
    "iron_mg": 6.95,
    "magnesium_mg": 58.0,
    "omega3_g": 0.468,
    "phosphorus_mg": 159.0,
    "potassium_mg": 244.0,
    "protein_g": 8.77,
    "salt_g": 1.0425,
    "sat_fat_g": 3.2,
    "sodium_mg": 417.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 90.0,
    "vitamin_c_mg": 3.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171979",
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
