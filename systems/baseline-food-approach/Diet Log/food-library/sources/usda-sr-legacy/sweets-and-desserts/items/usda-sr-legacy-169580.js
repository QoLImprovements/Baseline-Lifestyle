/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "recipe-yield-recipe-makes-49-1-x-1-pieces",
  "description": "Sweets",
  "id": "usda-sr-legacy-169580",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 612.0,
      "key": "recipe-yield-recipe-makes-49-1-x-1-pieces",
      "kind": "unit",
      "label": "recipe yield, recipe makes 49 1 \" x 1\" pieces"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Candies, truffles, prepared-from-recipe",
  "nutritionPerBasis": {
    "calcium_mg": 157.0,
    "carbs_g": 44.9,
    "energy_kcal": 510.0,
    "fat_g": 33.8,
    "fibre_g": 2.5,
    "folate_ug": 9.0,
    "iron_mg": 1.75,
    "magnesium_mg": 48.0,
    "omega3_g": 0.062,
    "phosphorus_mg": 171.0,
    "potassium_mg": 297.0,
    "protein_g": 6.21,
    "salt_g": 0.17,
    "sat_fat_g": 18.5,
    "sodium_mg": 68.0,
    "sugar_g": 38.3,
    "vitamin_a_ug": 144.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 1.82,
    "vitamin_k_ug": 6.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169580",
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
