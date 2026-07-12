/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "bar-king-size",
  "description": "Sweets",
  "id": "usda-sr-legacy-167565",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 108.0,
      "key": "bar-king-size",
      "kind": "unit",
      "label": "bar king size"
    },
    {
      "gramsPerUnit": 174.0,
      "key": "cup-bb-s",
      "kind": "unit",
      "label": "cup BB's"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "bar-bite-size",
      "kind": "unit",
      "label": "bar bite size"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "serving-1-fun-size-bar-0-65-oz",
      "kind": "unit",
      "label": "serving 1 fun size bar 0.65 oz"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "10-butterfinger-bb-s",
      "kind": "unit",
      "label": "10 Butterfinger BB's"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "serving-2-1-oz-bar",
      "kind": "unit",
      "label": "serving 2.1 oz bar"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "2-tbsp",
      "kind": "unit",
      "label": "2 tbsp"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "serving-0-75-oz-bar",
      "kind": "unit",
      "label": "serving 0.75 oz bar"
    }
  ],
  "name": "Candies, NESTLE, BUTTERFINGER Bar",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 72.9,
    "energy_kcal": 1920.0,
    "fat_g": 18.9,
    "fibre_g": 2.0,
    "folate_ug": 28.0,
    "iron_mg": 0.79,
    "magnesium_mg": 48.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 97.0,
    "potassium_mg": 220.0,
    "protein_g": 5.4,
    "salt_g": 0.575,
    "sat_fat_g": 9.5,
    "sodium_mg": 230.0,
    "sugar_g": 45.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.72,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167565",
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
