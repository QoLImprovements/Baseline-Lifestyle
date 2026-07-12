/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "0-5-cup",
  "description": "Sweets",
  "id": "usda-sr-legacy-168777",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 202.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 808.0,
      "key": "recipe-yield",
      "kind": "unit",
      "label": "recipe yield"
    }
  ],
  "name": "Desserts, mousse, chocolate, prepared-from-recipe",
  "nutritionPerBasis": {
    "calcium_mg": 96.0,
    "carbs_g": 16.1,
    "energy_kcal": 941.0,
    "fat_g": 16.0,
    "fibre_g": 0.6,
    "folate_ug": 15.0,
    "iron_mg": 0.55,
    "magnesium_mg": 20.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 117.0,
    "potassium_mg": 143.0,
    "protein_g": 4.14,
    "salt_g": 0.095,
    "sat_fat_g": 9.15,
    "sodium_mg": 38.0,
    "sugar_g": 14.8,
    "vitamin_a_ug": 140.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168777",
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
