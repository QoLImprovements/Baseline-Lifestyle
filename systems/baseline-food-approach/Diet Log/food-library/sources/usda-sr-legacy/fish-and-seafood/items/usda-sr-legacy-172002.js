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
  "id": "usda-sr-legacy-172002",
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
      "gramsPerUnit": 124.0,
      "key": "fillet",
      "kind": "unit",
      "label": "fillet"
    }
  ],
  "name": "Fish, sucker, white, cooked, dry heat",
  "nutritionPerBasis": {
    "calcium_mg": 90.0,
    "carbs_g": 0.0,
    "energy_kcal": 498.0,
    "fat_g": 2.97,
    "fibre_g": 0.0,
    "folate_ug": 17.0,
    "iron_mg": 1.67,
    "magnesium_mg": 38.0,
    "omega3_g": 0.709,
    "phosphorus_mg": 269.0,
    "potassium_mg": 487.0,
    "protein_g": 21.5,
    "salt_g": 0.1275,
    "sat_fat_g": 0.579,
    "sodium_mg": 51.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 59.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172002",
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
