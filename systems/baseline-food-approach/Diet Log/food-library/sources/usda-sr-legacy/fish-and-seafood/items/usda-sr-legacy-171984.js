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
  "id": "usda-sr-legacy-171984",
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
  "name": "Mollusks, whelk, unspecified, cooked, moist heat",
  "nutritionPerBasis": {
    "calcium_mg": 113.0,
    "carbs_g": 15.5,
    "energy_kcal": 1150.0,
    "fat_g": 0.8,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 10.1,
    "magnesium_mg": 172.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 282.0,
    "potassium_mg": 694.0,
    "protein_g": 47.7,
    "salt_g": 1.03,
    "sat_fat_g": 0.062,
    "sodium_mg": 412.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 49.0,
    "vitamin_c_mg": 6.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171984",
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
