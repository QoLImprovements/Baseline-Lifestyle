/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-1-66-oz-bar",
  "description": "Sweets",
  "id": "usda-sr-legacy-169663",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 47.0,
      "key": "serving-1-66-oz-bar",
      "kind": "unit",
      "label": "serving 1.66 oz bar"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "serving-1-56-oz-bar",
      "kind": "unit",
      "label": "serving 1.56 oz bar"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "bar-fun-size",
      "kind": "unit",
      "label": "bar fun size"
    }
  ],
  "name": "Candies, MARS SNACKFOOD US, SNICKERS CRUNCHER",
  "nutritionPerBasis": {
    "calcium_mg": 90.0,
    "carbs_g": 62.8,
    "energy_kcal": 2040.0,
    "fat_g": 24.4,
    "fibre_g": 1.9,
    "folate_ug": 0.0,
    "iron_mg": 0.68,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 6.86,
    "salt_g": 0.4725,
    "sat_fat_g": 12.7,
    "sodium_mg": 189.0,
    "sugar_g": 46.5,
    "vitamin_a_ug": 120.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169663",
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
