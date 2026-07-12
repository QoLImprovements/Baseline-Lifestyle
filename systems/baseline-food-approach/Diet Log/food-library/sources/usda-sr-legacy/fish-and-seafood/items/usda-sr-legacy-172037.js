/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "3-pieces-shrimp",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172037",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "3-pieces-shrimp",
      "kind": "unit",
      "label": "3 pieces shrimp"
    }
  ],
  "name": "Fast foods, shrimp, breaded and fried",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 28.0,
    "energy_kcal": 1290.0,
    "fat_g": 18.9,
    "fibre_g": 0.7,
    "folate_ug": 43.0,
    "iron_mg": 0.86,
    "magnesium_mg": 16.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 185.0,
    "potassium_mg": 82.0,
    "protein_g": 7.84,
    "salt_g": 2.2425,
    "sat_fat_g": 3.84,
    "sodium_mg": 897.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.52,
    "vitamin_k_ug": 4.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172037",
  "state": "Fried",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "fish-and-seafood",
    "fried"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
