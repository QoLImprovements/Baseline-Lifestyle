/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "bar-2-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-169589",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "bar-2-oz",
      "kind": "unit",
      "label": "bar (2 oz)"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "bar-fun-size",
      "kind": "unit",
      "label": "bar, fun size"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "bar-king-size-4-oz",
      "kind": "unit",
      "label": "bar, king size (4 oz)"
    }
  ],
  "name": "Candies, MARS SNACKFOOD US, SNICKERS Bar",
  "nutritionPerBasis": {
    "calcium_mg": 93.0,
    "carbs_g": 61.5,
    "energy_kcal": 2050.0,
    "fat_g": 23.8,
    "fibre_g": 2.3,
    "folate_ug": 27.0,
    "iron_mg": 0.72,
    "magnesium_mg": 72.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 190.0,
    "potassium_mg": 323.0,
    "protein_g": 7.53,
    "salt_g": 0.5975,
    "sat_fat_g": 9.07,
    "sodium_mg": 239.0,
    "sugar_g": 50.5,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 1.5,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169589",
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
