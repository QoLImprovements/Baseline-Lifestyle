/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-1-4-oz-bar",
  "description": "Sweets",
  "id": "usda-sr-legacy-167586",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "serving-1-4-oz-bar",
      "kind": "unit",
      "label": "serving 1.4 oz bar"
    }
  ],
  "name": "Candies, NESTLE, CHUNKY Bar",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 60.4,
    "energy_kcal": 2170.0,
    "fat_g": 27.5,
    "fibre_g": 2.5,
    "folate_ug": 0.0,
    "iron_mg": 0.9,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 7.5,
    "salt_g": 0.095,
    "sat_fat_g": 12.5,
    "sodium_mg": 38.0,
    "sugar_g": 52.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167586",
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
