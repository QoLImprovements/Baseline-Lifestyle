/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "2-tbsp",
  "description": "Sweets",
  "id": "usda-sr-legacy-168762",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "2-tbsp",
      "kind": "unit",
      "label": "2 tbsp"
    },
    {
      "gramsPerUnit": 41.0,
      "key": "serving-4-fun-size-bars",
      "kind": "unit",
      "label": "serving 4 fun size bars"
    },
    {
      "gramsPerUnit": 14.2,
      "key": "bar-0-5-oz",
      "kind": "unit",
      "label": "bar 0.5 oz"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "bar-1-55-oz",
      "kind": "unit",
      "label": "bar 1.55 oz"
    }
  ],
  "name": "Candies, NESTLE, CRUNCH Bar and Dessert Topping",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 67.0,
    "energy_kcal": 2090.0,
    "fat_g": 26.0,
    "fibre_g": 1.9,
    "folate_ug": 0.0,
    "iron_mg": 0.7,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 305.0,
    "protein_g": 5.0,
    "salt_g": 0.375,
    "sat_fat_g": 16.0,
    "sodium_mg": 150.0,
    "sugar_g": 55.0,
    "vitamin_a_ug": 107.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168762",
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
