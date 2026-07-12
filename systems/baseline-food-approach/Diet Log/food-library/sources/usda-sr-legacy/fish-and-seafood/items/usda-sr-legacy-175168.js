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
  "id": "usda-sr-legacy-175168",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 178.0,
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
  "name": "Fish, salmon, Atlantic, farmed, cooked, dry heat",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 0.0,
    "energy_kcal": 206.0,
    "fat_g": 12.4,
    "fibre_g": 0.0,
    "folate_ug": 34.0,
    "iron_mg": 0.34,
    "magnesium_mg": 30.0,
    "omega3_g": 2.32,
    "phosphorus_mg": 252.0,
    "potassium_mg": 384.0,
    "protein_g": 22.1,
    "salt_g": 0.1525,
    "sat_fat_g": 2.4,
    "sodium_mg": 61.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 69.0,
    "vitamin_c_mg": 3.7,
    "vitamin_e_mg": 1.14,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175168",
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
