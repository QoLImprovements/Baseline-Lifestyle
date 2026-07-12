/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-1-76-oz-bar",
  "description": "Sweets",
  "id": "usda-sr-legacy-167701",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "serving-1-76-oz-bar",
      "kind": "unit",
      "label": "serving 1.76 oz bar"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "bar-fun-size",
      "kind": "unit",
      "label": "bar fun size"
    },
    {
      "gramsPerUnit": 41.0,
      "key": "serving-5-miniatures",
      "kind": "unit",
      "label": "serving 5 miniatures"
    }
  ],
  "name": "Candies, MARS SNACKFOOD US, MILKY WAY Midnight Bar",
  "nutritionPerBasis": {
    "calcium_mg": 53.0,
    "carbs_g": 71.2,
    "energy_kcal": 1860.0,
    "fat_g": 17.5,
    "fibre_g": 2.9,
    "folate_ug": 7.0,
    "iron_mg": 1.2,
    "magnesium_mg": 58.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 75.0,
    "potassium_mg": 196.0,
    "protein_g": 3.2,
    "salt_g": 0.42,
    "sat_fat_g": 11.5,
    "sodium_mg": 168.0,
    "sugar_g": 57.8,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167701",
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
