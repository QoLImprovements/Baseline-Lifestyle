/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "bar",
  "description": "Sweets",
  "id": "usda-sr-legacy-169592",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    },
    {
      "gramsPerUnit": 41.0,
      "key": "bar-1-45-oz",
      "kind": "unit",
      "label": "bar 1.45 oz"
    },
    {
      "gramsPerUnit": 73.0,
      "key": "bar-2-6-oz",
      "kind": "unit",
      "label": "bar 2.6 oz"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "3-blocks",
      "kind": "unit",
      "label": "3 blocks"
    }
  ],
  "name": "Candies, SPECIAL DARK Chocolate Bar",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 60.5,
    "energy_kcal": 2320.0,
    "fat_g": 32.4,
    "fibre_g": 6.5,
    "folate_ug": 0.0,
    "iron_mg": 2.13,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 51.0,
    "potassium_mg": 502.0,
    "protein_g": 5.54,
    "salt_g": 0.015,
    "sat_fat_g": 0.0,
    "sodium_mg": 6.0,
    "sugar_g": 47.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169592",
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
