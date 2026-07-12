/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "4-pieces-1-6oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-167583",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "4-pieces-1-6oz",
      "kind": "unit",
      "label": "4 pieces 1.6oz"
    }
  ],
  "name": "Candies, TWIZZLERS Strawberry Twists Candy",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 79.2,
    "energy_kcal": 348.0,
    "fat_g": 2.32,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.51,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 2.56,
    "salt_g": 0.7175,
    "sat_fat_g": 0.0,
    "sodium_mg": 287.0,
    "sugar_g": 39.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167583",
  "state": "Raw",
  "subcategory": "Sweets",
  "tags": [
    "raw",
    "sweets",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
