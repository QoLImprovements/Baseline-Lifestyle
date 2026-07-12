/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "cup",
  "description": "Sweets",
  "id": "usda-sr-legacy-168838",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 315.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 83.0,
      "key": "serving-1-4-cup",
      "kind": "unit",
      "label": "serving 1/4 cup"
    }
  ],
  "name": "Syrups, table blends, pancake, with 2% maple",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 69.6,
    "energy_kcal": 1110.0,
    "fat_g": 0.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.07,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 6.0,
    "protein_g": 0.0,
    "salt_g": 0.1525,
    "sat_fat_g": 0.018,
    "sodium_mg": 61.0,
    "sugar_g": 42.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168838",
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
