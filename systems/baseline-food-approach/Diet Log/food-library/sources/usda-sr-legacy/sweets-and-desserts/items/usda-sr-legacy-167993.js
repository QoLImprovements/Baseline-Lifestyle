/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "bar-1-45-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-167993",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 41.0,
      "key": "bar-1-45-oz",
      "kind": "unit",
      "label": "bar 1.45 oz"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "bar-2-oz",
      "kind": "unit",
      "label": "bar 2 oz"
    },
    {
      "gramsPerUnit": 37.0,
      "key": "3-blocks",
      "kind": "unit",
      "label": "3 blocks"
    }
  ],
  "name": "Candies, KRACKEL Chocolate Bar",
  "nutritionPerBasis": {
    "calcium_mg": 158.0,
    "carbs_g": 64.3,
    "energy_kcal": 523.0,
    "fat_g": 26.6,
    "fibre_g": 2.2,
    "folate_ug": 6.0,
    "iron_mg": 1.06,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 123.0,
    "potassium_mg": 325.0,
    "protein_g": 6.62,
    "salt_g": 0.49,
    "sat_fat_g": 15.9,
    "sodium_mg": 196.0,
    "sugar_g": 52.5,
    "vitamin_a_ug": 102.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167993",
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
