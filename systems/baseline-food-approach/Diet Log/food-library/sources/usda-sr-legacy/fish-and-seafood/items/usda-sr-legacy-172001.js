/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "0-5-fillet",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-172001",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 124.0,
      "key": "0-5-fillet",
      "kind": "unit",
      "label": "0.5 fillet"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Fish, salmon, pink, cooked, dry heat",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 0.0,
    "energy_kcal": 638.0,
    "fat_g": 5.28,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.45,
    "magnesium_mg": 32.0,
    "omega3_g": 0.674,
    "phosphorus_mg": 313.0,
    "potassium_mg": 439.0,
    "protein_g": 24.6,
    "salt_g": 0.225,
    "sat_fat_g": 0.971,
    "sodium_mg": 90.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172001",
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
