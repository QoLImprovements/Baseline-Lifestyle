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
  "id": "usda-sr-legacy-175117",
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
      "gramsPerUnit": 143.0,
      "key": "fillet",
      "kind": "unit",
      "label": "fillet"
    }
  ],
  "name": "Fish, herring, Atlantic, cooked, dry heat",
  "nutritionPerBasis": {
    "calcium_mg": 74.0,
    "carbs_g": 0.0,
    "energy_kcal": 849.0,
    "fat_g": 11.6,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 1.41,
    "magnesium_mg": 41.0,
    "omega3_g": 2.08,
    "phosphorus_mg": 303.0,
    "potassium_mg": 419.0,
    "protein_g": 23.0,
    "salt_g": 0.2875,
    "sat_fat_g": 2.62,
    "sodium_mg": 115.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 1.37,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175117",
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
