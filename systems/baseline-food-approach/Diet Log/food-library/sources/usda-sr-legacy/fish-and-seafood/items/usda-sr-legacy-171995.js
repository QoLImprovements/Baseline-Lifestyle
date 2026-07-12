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
  "id": "usda-sr-legacy-171995",
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
    }
  ],
  "name": "Fish, milkfish, cooked, dry heat",
  "nutritionPerBasis": {
    "calcium_mg": 65.0,
    "carbs_g": 0.0,
    "energy_kcal": 795.0,
    "fat_g": 8.63,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 0.41,
    "magnesium_mg": 38.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 208.0,
    "potassium_mg": 374.0,
    "protein_g": 26.3,
    "salt_g": 0.23,
    "sat_fat_g": 0.0,
    "sodium_mg": 92.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171995",
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
