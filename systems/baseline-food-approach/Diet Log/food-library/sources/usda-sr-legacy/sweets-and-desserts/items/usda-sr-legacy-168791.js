/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "piece",
  "description": "Sweets",
  "id": "usda-sr-legacy-168791",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    },
    {
      "gramsPerUnit": 907.0,
      "key": "recipe-yield",
      "kind": "unit",
      "label": "recipe yield"
    }
  ],
  "name": "Candies, praline, prepared-from-recipe",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 59.6,
    "energy_kcal": 485.0,
    "fat_g": 25.9,
    "fibre_g": 3.5,
    "folate_ug": 6.0,
    "iron_mg": 1.29,
    "magnesium_mg": 49.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 104.0,
    "potassium_mg": 217.0,
    "protein_g": 3.3,
    "salt_g": 0.12,
    "sat_fat_g": 2.22,
    "sodium_mg": 48.0,
    "sugar_g": 55.8,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168791",
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
