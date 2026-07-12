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
  "id": "usda-sr-legacy-174239",
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
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Fish, roe, mixed species, cooked, dry heat",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 1.92,
    "energy_kcal": 854.0,
    "fat_g": 8.23,
    "fibre_g": 0.0,
    "folate_ug": 92.0,
    "iron_mg": 0.77,
    "magnesium_mg": 26.0,
    "omega3_g": 3.115,
    "phosphorus_mg": 515.0,
    "potassium_mg": 283.0,
    "protein_g": 28.6,
    "salt_g": 0.2925,
    "sat_fat_g": 1.87,
    "sodium_mg": 117.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 91.0,
    "vitamin_c_mg": 16.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174239",
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
