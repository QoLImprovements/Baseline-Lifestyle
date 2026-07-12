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
  "id": "usda-sr-legacy-172008",
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
  "name": "Crustaceans, crab, queen, cooked, moist heat",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 0.0,
    "energy_kcal": 481.0,
    "fat_g": 1.51,
    "fibre_g": 0.0,
    "folate_ug": 42.0,
    "iron_mg": 2.88,
    "magnesium_mg": 63.0,
    "omega3_g": 0.487,
    "phosphorus_mg": 128.0,
    "potassium_mg": 200.0,
    "protein_g": 23.7,
    "salt_g": 1.7275,
    "sat_fat_g": 0.183,
    "sodium_mg": 691.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 52.0,
    "vitamin_c_mg": 7.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172008",
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
