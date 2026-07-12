/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168447",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Pumpkin leaves, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 3.39,
    "energy_kcal": 21.0,
    "fat_g": 0.22,
    "fibre_g": 2.7,
    "folate_ug": 25.0,
    "iron_mg": 3.2,
    "magnesium_mg": 38.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 79.0,
    "potassium_mg": 438.0,
    "protein_g": 2.72,
    "salt_g": 0.02,
    "sat_fat_g": 0.114,
    "sodium_mg": 8.0,
    "sugar_g": 0.69,
    "vitamin_a_ug": 80.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.96,
    "vitamin_k_ug": 108.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168447",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
