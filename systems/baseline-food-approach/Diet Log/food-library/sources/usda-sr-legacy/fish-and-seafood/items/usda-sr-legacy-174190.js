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
  "id": "usda-sr-legacy-174190",
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
      "gramsPerUnit": 80.0,
      "key": "piece-5-1-2-x-1-1-2-x-1-2",
      "kind": "unit",
      "label": "piece (5-1/2\" x 1-1/2\" x 1/2\")"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Fish, cod, Atlantic, dried and salted",
  "nutritionPerBasis": {
    "calcium_mg": 160.0,
    "carbs_g": 0.0,
    "energy_kcal": 1210.0,
    "fat_g": 2.37,
    "fibre_g": 0.0,
    "folate_ug": 25.0,
    "iron_mg": 2.5,
    "magnesium_mg": 133.0,
    "omega3_g": 0.469,
    "phosphorus_mg": 950.0,
    "potassium_mg": 1460.0,
    "protein_g": 62.8,
    "salt_g": 17.575,
    "sat_fat_g": 0.462,
    "sodium_mg": 7030.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 3.5,
    "vitamin_e_mg": 2.84,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174190",
  "state": "Dried",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "dried",
    "finfish-and-shellfish-products",
    "fish-and-seafood"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
