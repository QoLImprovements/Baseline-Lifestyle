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
  "id": "usda-sr-legacy-173703",
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
      "gramsPerUnit": 136.0,
      "key": "piece-4-1-2-x-2-1-8-x-7-8",
      "kind": "unit",
      "label": "piece (4-1/2\" x 2-1/8\" x 7/8\")"
    }
  ],
  "name": "Fish, swordfish, raw",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 0.0,
    "energy_kcal": 602.0,
    "fat_g": 6.65,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.38,
    "magnesium_mg": 29.0,
    "omega3_g": 0.924,
    "phosphorus_mg": 255.0,
    "potassium_mg": 418.0,
    "protein_g": 19.7,
    "salt_g": 0.2025,
    "sat_fat_g": 1.61,
    "sodium_mg": 81.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.02,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173703",
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
