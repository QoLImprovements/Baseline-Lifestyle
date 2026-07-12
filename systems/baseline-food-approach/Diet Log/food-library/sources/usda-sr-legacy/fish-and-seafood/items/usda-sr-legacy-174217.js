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
  "id": "usda-sr-legacy-174217",
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
  "name": "Mollusks, mussel, blue, cooked, moist heat",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 7.39,
    "energy_kcal": 720.0,
    "fat_g": 4.48,
    "fibre_g": 0.0,
    "folate_ug": 76.0,
    "iron_mg": 6.72,
    "magnesium_mg": 37.0,
    "omega3_g": 0.826,
    "phosphorus_mg": 285.0,
    "potassium_mg": 268.0,
    "protein_g": 23.8,
    "salt_g": 0.9225,
    "sat_fat_g": 0.85,
    "sodium_mg": 369.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 91.0,
    "vitamin_c_mg": 13.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174217",
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
