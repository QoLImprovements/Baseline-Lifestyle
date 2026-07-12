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
  "id": "usda-sr-legacy-174185",
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
      "gramsPerUnit": 170.0,
      "key": "fillet",
      "kind": "unit",
      "label": "fillet"
    }
  ],
  "name": "Fish, carp, cooked, dry heat",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 0.0,
    "energy_kcal": 678.0,
    "fat_g": 7.17,
    "fibre_g": 0.0,
    "folate_ug": 17.0,
    "iron_mg": 1.59,
    "magnesium_mg": 38.0,
    "omega3_g": 0.556,
    "phosphorus_mg": 531.0,
    "potassium_mg": 427.0,
    "protein_g": 22.9,
    "salt_g": 0.1575,
    "sat_fat_g": 1.39,
    "sodium_mg": 63.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 1.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174185",
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
