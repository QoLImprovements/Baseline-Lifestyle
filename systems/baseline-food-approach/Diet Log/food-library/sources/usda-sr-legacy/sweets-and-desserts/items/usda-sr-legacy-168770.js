/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "bar-1-7-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-168770",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "bar-1-7-oz",
      "kind": "unit",
      "label": "bar 1.7 oz"
    }
  ],
  "name": "Candies, WHATCHAMACALLIT Candy Bar",
  "nutritionPerBasis": {
    "calcium_mg": 118.0,
    "carbs_g": 63.2,
    "energy_kcal": 2070.0,
    "fat_g": 23.7,
    "fibre_g": 1.9,
    "folate_ug": 18.0,
    "iron_mg": 1.13,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 138.0,
    "potassium_mg": 303.0,
    "protein_g": 8.04,
    "salt_g": 0.7475,
    "sat_fat_g": 17.0,
    "sodium_mg": 299.0,
    "sugar_g": 48.9,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 1.27,
    "vitamin_k_ug": 4.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168770",
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
