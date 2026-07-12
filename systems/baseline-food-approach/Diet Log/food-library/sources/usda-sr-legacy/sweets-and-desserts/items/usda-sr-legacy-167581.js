/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-0-25-cup",
  "description": "Sweets",
  "id": "usda-sr-legacy-167581",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 41.0,
      "key": "serving-0-25-cup",
      "kind": "unit",
      "label": "serving 0.25 cup"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "package-1-375-oz",
      "kind": "unit",
      "label": "package 1.375 oz"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "serving-fun-size",
      "kind": "unit",
      "label": "serving fun size"
    }
  ],
  "name": "Candies, NESTLE, GOOBERS Chocolate Covered Peanuts",
  "nutritionPerBasis": {
    "calcium_mg": 89.0,
    "carbs_g": 53.0,
    "energy_kcal": 2140.0,
    "fat_g": 34.0,
    "fibre_g": 9.7,
    "folate_ug": 0.0,
    "iron_mg": 1.1,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 502.0,
    "protein_g": 9.7,
    "salt_g": 0.09,
    "sat_fat_g": 12.1,
    "sodium_mg": 36.0,
    "sugar_g": 43.0,
    "vitamin_a_ug": 68.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167581",
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
