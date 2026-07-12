/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "6-medium",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-175171",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 59.0,
      "key": "6-medium",
      "kind": "unit",
      "label": "6 medium"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Mollusks, oyster, eastern, wild, cooked, dry heat",
  "nutritionPerBasis": {
    "calcium_mg": 92.0,
    "carbs_g": 4.23,
    "energy_kcal": 79.0,
    "fat_g": 2.65,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 7.16,
    "magnesium_mg": 28.0,
    "omega3_g": 0.5,
    "phosphorus_mg": 150.0,
    "potassium_mg": 242.0,
    "protein_g": 8.87,
    "salt_g": 0.33,
    "sat_fat_g": 0.736,
    "sodium_mg": 132.0,
    "sugar_g": 0.96,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.32,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175171",
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
