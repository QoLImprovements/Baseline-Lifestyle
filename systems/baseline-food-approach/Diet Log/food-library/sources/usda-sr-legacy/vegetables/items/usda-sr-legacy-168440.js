/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-chopped",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168440",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    }
  ],
  "name": "New Zealand spinach, raw",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 2.5,
    "energy_kcal": 59.0,
    "fat_g": 0.2,
    "fibre_g": 1.5,
    "folate_ug": 15.0,
    "iron_mg": 0.8,
    "magnesium_mg": 39.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 130.0,
    "protein_g": 1.5,
    "salt_g": 0.325,
    "sat_fat_g": 0.032,
    "sodium_mg": 130.0,
    "sugar_g": 0.29,
    "vitamin_a_ug": 4400.0,
    "vitamin_c_mg": 30.0,
    "vitamin_e_mg": 1.42,
    "vitamin_k_ug": 337.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168440",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "raw",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
