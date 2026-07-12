/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "package-1-6-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-168764",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 46.0,
      "key": "package-1-6-oz",
      "kind": "unit",
      "label": "package (1.6 oz)"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "10-pieces",
      "kind": "unit",
      "label": "10 pieces"
    },
    {
      "gramsPerUnit": 47.0,
      "key": "0-25-cup",
      "kind": "unit",
      "label": "0.25 cup"
    },
    {
      "gramsPerUnit": 46.0,
      "key": "package-1-63-oz",
      "kind": "unit",
      "label": "package 1.63 oz"
    }
  ],
  "name": "Candies, REESE'S PIECES Candy",
  "nutritionPerBasis": {
    "calcium_mg": 69.0,
    "carbs_g": 59.9,
    "energy_kcal": 497.0,
    "fat_g": 24.8,
    "fibre_g": 3.0,
    "folate_ug": 55.0,
    "iron_mg": 0.49,
    "magnesium_mg": 88.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 207.0,
    "potassium_mg": 359.0,
    "protein_g": 12.5,
    "salt_g": 0.485,
    "sat_fat_g": 16.4,
    "sodium_mg": 194.0,
    "sugar_g": 53.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.99,
    "vitamin_k_ug": 5.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168764",
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
