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
  "id": "usda-sr-legacy-172007",
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
      "gramsPerUnit": 127.0,
      "key": "crab",
      "kind": "unit",
      "label": "crab"
    }
  ],
  "name": "Crustaceans, crab, dungeness, cooked, moist heat",
  "nutritionPerBasis": {
    "calcium_mg": 59.0,
    "carbs_g": 0.95,
    "energy_kcal": 460.0,
    "fat_g": 1.24,
    "fibre_g": 0.0,
    "folate_ug": 42.0,
    "iron_mg": 0.43,
    "magnesium_mg": 58.0,
    "omega3_g": 0.407,
    "phosphorus_mg": 175.0,
    "potassium_mg": 408.0,
    "protein_g": 22.3,
    "salt_g": 0.945,
    "sat_fat_g": 0.168,
    "sodium_mg": 378.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 3.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172007",
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
