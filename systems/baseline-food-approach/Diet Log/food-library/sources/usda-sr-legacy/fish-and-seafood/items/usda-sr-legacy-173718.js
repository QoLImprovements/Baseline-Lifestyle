/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "fillet",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-173718",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "fillet",
      "kind": "unit",
      "label": "fillet"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Fish, trout, rainbow, farmed, cooked, dry heat",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 0.0,
    "energy_kcal": 704.0,
    "fat_g": 7.38,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.36,
    "magnesium_mg": 30.0,
    "omega3_g": 0.984,
    "phosphorus_mg": 270.0,
    "potassium_mg": 450.0,
    "protein_g": 23.8,
    "salt_g": 0.1525,
    "sat_fat_g": 1.65,
    "sodium_mg": 61.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 100.0,
    "vitamin_c_mg": 2.9,
    "vitamin_e_mg": 2.79,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173718",
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
