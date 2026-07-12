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
  "id": "usda-sr-legacy-174207",
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
  "name": "Crustaceans, crayfish, mixed species, wild, cooked, moist heat",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 0.0,
    "energy_kcal": 343.0,
    "fat_g": 1.2,
    "fibre_g": 0.0,
    "folate_ug": 44.0,
    "iron_mg": 0.83,
    "magnesium_mg": 33.0,
    "omega3_g": 0.166,
    "phosphorus_mg": 270.0,
    "potassium_mg": 296.0,
    "protein_g": 16.8,
    "salt_g": 0.235,
    "sat_fat_g": 0.181,
    "sodium_mg": 94.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 1.5,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174207",
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
