/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "8-crayfish",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-174206",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 27.0,
      "key": "8-crayfish",
      "kind": "unit",
      "label": "8 crayfish"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Crustaceans, crayfish, mixed species, wild, raw",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 0.0,
    "energy_kcal": 322.0,
    "fat_g": 0.95,
    "fibre_g": 0.0,
    "folate_ug": 37.0,
    "iron_mg": 0.84,
    "magnesium_mg": 27.0,
    "omega3_g": 0.152,
    "phosphorus_mg": 256.0,
    "potassium_mg": 302.0,
    "protein_g": 16.0,
    "salt_g": 0.145,
    "sat_fat_g": 0.159,
    "sodium_mg": 58.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 2.85,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174206",
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
