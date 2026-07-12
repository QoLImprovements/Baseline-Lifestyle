/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "medium",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-174219",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Mollusks, oyster, Pacific, raw",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 4.95,
    "energy_kcal": 339.0,
    "fat_g": 2.3,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 5.11,
    "magnesium_mg": 22.0,
    "omega3_g": 0.708,
    "phosphorus_mg": 162.0,
    "potassium_mg": 168.0,
    "protein_g": 9.45,
    "salt_g": 0.265,
    "sat_fat_g": 0.51,
    "sodium_mg": 106.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 81.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174219",
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
