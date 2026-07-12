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
  "id": "usda-sr-legacy-175172",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 84.0,
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
  "name": "Mollusks, oyster, eastern, farmed, raw",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 5.53,
    "energy_kcal": 247.0,
    "fat_g": 1.55,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 5.78,
    "magnesium_mg": 33.0,
    "omega3_g": 0.391,
    "phosphorus_mg": 93.0,
    "potassium_mg": 124.0,
    "protein_g": 5.22,
    "salt_g": 0.445,
    "sat_fat_g": 0.443,
    "sodium_mg": 178.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 4.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175172",
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
