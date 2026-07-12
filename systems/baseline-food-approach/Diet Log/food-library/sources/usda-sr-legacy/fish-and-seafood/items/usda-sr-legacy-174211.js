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
  "id": "usda-sr-legacy-174211",
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
      "gramsPerUnit": 209.0,
      "key": "lobster",
      "kind": "unit",
      "label": "lobster"
    }
  ],
  "name": "Crustaceans, spiny lobster, mixed species, raw",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 2.43,
    "energy_kcal": 469.0,
    "fat_g": 1.51,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 1.22,
    "magnesium_mg": 40.0,
    "omega3_g": 0.407,
    "phosphorus_mg": 238.0,
    "potassium_mg": 180.0,
    "protein_g": 20.6,
    "salt_g": 0.4425,
    "sat_fat_g": 0.237,
    "sodium_mg": 177.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174211",
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
