/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "piece-miniature-5-pieces-serving",
  "description": "Sweets",
  "id": "usda-sr-legacy-168756",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.2,
      "key": "piece-miniature-5-pieces-serving",
      "kind": "unit",
      "label": "piece miniature 5 pieces = serving"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "serving-2-05-oz-bar",
      "kind": "unit",
      "label": "serving 2.05 oz bar"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "bar-fun-size",
      "kind": "unit",
      "label": "bar fun size"
    },
    {
      "gramsPerUnit": 103.0,
      "key": "bar-king-size",
      "kind": "unit",
      "label": "bar king size"
    }
  ],
  "name": "Candies, MARS SNACKFOOD US, MILKY WAY Bar",
  "nutritionPerBasis": {
    "calcium_mg": 115.0,
    "carbs_g": 71.2,
    "energy_kcal": 456.0,
    "fat_g": 17.2,
    "fibre_g": 1.0,
    "folate_ug": 4.0,
    "iron_mg": 0.49,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 67.0,
    "potassium_mg": 124.0,
    "protein_g": 4.01,
    "salt_g": 0.4175,
    "sat_fat_g": 12.0,
    "sodium_mg": 167.0,
    "sugar_g": 59.7,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.89,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168756",
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
