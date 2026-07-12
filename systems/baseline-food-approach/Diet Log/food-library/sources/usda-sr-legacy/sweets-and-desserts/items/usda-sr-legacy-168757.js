/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "bar-1-4-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-168757",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "bar-1-4-oz",
      "kind": "unit",
      "label": "bar 1.4 oz"
    }
  ],
  "name": "Candies, HERSHEY'S SKOR Toffee Bar",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 63.7,
    "energy_kcal": 2260.0,
    "fat_g": 30.4,
    "fibre_g": 1.3,
    "folate_ug": 2.0,
    "iron_mg": 0.57,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 61.0,
    "potassium_mg": 153.0,
    "protein_g": 3.13,
    "salt_g": 0.7925,
    "sat_fat_g": 18.8,
    "sodium_mg": 317.0,
    "sugar_g": 59.9,
    "vitamin_a_ug": 61.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 8.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168757",
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
