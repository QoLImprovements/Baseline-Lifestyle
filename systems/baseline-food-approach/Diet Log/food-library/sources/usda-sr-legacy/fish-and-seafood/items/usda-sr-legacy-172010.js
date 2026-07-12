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
  "id": "usda-sr-legacy-172010",
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
  "name": "Mollusks, cuttlefish, mixed species, cooked, moist heat",
  "nutritionPerBasis": {
    "calcium_mg": 180.0,
    "carbs_g": 1.64,
    "energy_kcal": 661.0,
    "fat_g": 1.4,
    "fibre_g": 0.0,
    "folate_ug": 24.0,
    "iron_mg": 10.8,
    "magnesium_mg": 60.0,
    "omega3_g": 0.222,
    "phosphorus_mg": 580.0,
    "potassium_mg": 637.0,
    "protein_g": 32.5,
    "salt_g": 1.86,
    "sat_fat_g": 0.236,
    "sodium_mg": 744.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 203.0,
    "vitamin_c_mg": 8.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172010",
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
