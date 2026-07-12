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
  "id": "usda-sr-legacy-167977",
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
      "label": "bar (1.45 oz)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Candies, sweet chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 60.4,
    "energy_kcal": 2120.0,
    "fat_g": 34.2,
    "fibre_g": 5.5,
    "folate_ug": 3.0,
    "iron_mg": 2.76,
    "magnesium_mg": 113.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 147.0,
    "potassium_mg": 290.0,
    "protein_g": 3.9,
    "salt_g": 0.04,
    "sat_fat_g": 20.1,
    "sodium_mg": 16.0,
    "sugar_g": 51.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 6.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167977",
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
