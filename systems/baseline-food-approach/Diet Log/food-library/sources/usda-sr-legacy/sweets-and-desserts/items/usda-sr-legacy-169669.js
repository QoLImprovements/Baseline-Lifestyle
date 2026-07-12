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
  "id": "usda-sr-legacy-169669",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    },
    {
      "gramsPerUnit": 1229.0,
      "key": "recipe-yield-60-pieces",
      "kind": "unit",
      "label": "recipe yield (60 pieces)"
    }
  ],
  "name": "Candies, fudge, chocolate marshmallow, prepared-from-recipe",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 71.3,
    "energy_kcal": 453.0,
    "fat_g": 17.5,
    "fibre_g": 1.7,
    "folate_ug": 5.0,
    "iron_mg": 0.96,
    "magnesium_mg": 36.0,
    "omega3_g": 0.031,
    "phosphorus_mg": 67.0,
    "potassium_mg": 147.0,
    "protein_g": 2.26,
    "salt_g": 0.2125,
    "sat_fat_g": 10.7,
    "sodium_mg": 85.0,
    "sugar_g": 64.1,
    "vitamin_a_ug": 75.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169669",
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
