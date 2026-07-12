/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "2-oz-bar",
  "description": "Sweets",
  "id": "usda-sr-legacy-169630",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "2-oz-bar",
      "kind": "unit",
      "label": "2 oz bar"
    }
  ],
  "name": "Candies, REESE'S, FAST BREAK, milk chocolate peanut butter and soft nougats",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 61.6,
    "energy_kcal": 1980.0,
    "fat_g": 23.4,
    "fibre_g": 2.9,
    "folate_ug": 39.0,
    "iron_mg": 0.96,
    "magnesium_mg": 48.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 130.0,
    "potassium_mg": 284.0,
    "protein_g": 8.66,
    "salt_g": 0.825,
    "sat_fat_g": 8.23,
    "sodium_mg": 330.0,
    "sugar_g": 53.1,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169630",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "milk-dairy-and-eggs",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
