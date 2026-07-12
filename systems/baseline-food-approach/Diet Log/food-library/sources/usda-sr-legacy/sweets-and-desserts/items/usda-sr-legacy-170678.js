/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "0-25-cup",
  "description": "Sweets",
  "id": "usda-sr-legacy-170678",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "0-25-cup",
      "kind": "unit",
      "label": "0.25 cup"
    }
  ],
  "name": "Candies, M&M MARS Pretzel Chocolate Candies",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 72.9,
    "energy_kcal": 447.0,
    "fat_g": 15.0,
    "fibre_g": 2.5,
    "folate_ug": 15.0,
    "iron_mg": 0.9,
    "magnesium_mg": 39.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 135.0,
    "potassium_mg": 253.0,
    "protein_g": 5.0,
    "salt_g": 1.1875,
    "sat_fat_g": 8.99,
    "sodium_mg": 475.0,
    "sugar_g": 50.0,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 4.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170678",
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
