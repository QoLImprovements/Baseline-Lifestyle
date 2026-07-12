/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-1oz-pack",
  "description": "Sweets",
  "id": "usda-sr-legacy-170670",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "serving-1oz-pack",
      "kind": "unit",
      "label": "serving 1oz pack"
    }
  ],
  "name": "Candies, MARS SNACKFOOD US, COCOAVIA Chocolate Covered Almonds",
  "nutritionPerBasis": {
    "calcium_mg": 840.0,
    "carbs_g": 50.2,
    "energy_kcal": 2400.0,
    "fat_g": 37.1,
    "fibre_g": 10.4,
    "folate_ug": 143.0,
    "iron_mg": 3.56,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 9.51,
    "salt_g": 0.0225,
    "sat_fat_g": 11.7,
    "sodium_mg": 9.0,
    "sugar_g": 26.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 27.3,
    "vitamin_e_mg": 4.82,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170670",
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
