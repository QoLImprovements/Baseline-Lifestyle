/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "cup",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-171978",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 84.0,
      "key": "6-medium",
      "kind": "unit",
      "label": "6 medium"
    }
  ],
  "name": "Mollusks, oyster, eastern, wild, raw",
  "nutritionPerBasis": {
    "calcium_mg": 59.0,
    "carbs_g": 2.72,
    "energy_kcal": 213.0,
    "fat_g": 1.71,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 4.61,
    "magnesium_mg": 18.0,
    "omega3_g": 0.323,
    "phosphorus_mg": 97.0,
    "potassium_mg": 156.0,
    "protein_g": 5.71,
    "salt_g": 0.2125,
    "sat_fat_g": 0.474,
    "sodium_mg": 85.0,
    "sugar_g": 0.62,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.85,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171978",
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
