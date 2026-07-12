/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "bar-1-25-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-167975",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "bar-1-25-oz",
      "kind": "unit",
      "label": "bar 1.25 oz"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "bar-1-6-oz",
      "kind": "unit",
      "label": "bar 1.6 oz"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "6-blocks",
      "kind": "unit",
      "label": "6 blocks"
    }
  ],
  "name": "Candies, CARAMELLO Candy Bar",
  "nutritionPerBasis": {
    "calcium_mg": 213.0,
    "carbs_g": 63.8,
    "energy_kcal": 462.0,
    "fat_g": 21.2,
    "fibre_g": 1.2,
    "folate_ug": 0.0,
    "iron_mg": 1.09,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 150.0,
    "potassium_mg": 341.0,
    "protein_g": 6.19,
    "salt_g": 0.305,
    "sat_fat_g": 12.7,
    "sodium_mg": 122.0,
    "sugar_g": 56.9,
    "vitamin_a_ug": 303.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167975",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
