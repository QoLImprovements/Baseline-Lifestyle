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
  "id": "usda-sr-legacy-168129",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Jellyfish, dried, salted",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 0.0,
    "energy_kcal": 151.0,
    "fat_g": 1.4,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 2.27,
    "magnesium_mg": 2.0,
    "omega3_g": 0.278,
    "phosphorus_mg": 20.0,
    "potassium_mg": 3.0,
    "protein_g": 5.5,
    "salt_g": 24.225,
    "sat_fat_g": 0.273,
    "sodium_mg": 9690.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168129",
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
