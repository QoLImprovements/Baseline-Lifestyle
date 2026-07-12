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
  "id": "usda-sr-legacy-168384",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Alfalfa seeds, sprouted, raw",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 2.1,
    "energy_kcal": 96.0,
    "fat_g": 0.69,
    "fibre_g": 1.9,
    "folate_ug": 36.0,
    "iron_mg": 0.96,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 70.0,
    "potassium_mg": 79.0,
    "protein_g": 3.99,
    "salt_g": 0.015,
    "sat_fat_g": 0.069,
    "sodium_mg": 6.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 8.2,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 30.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168384",
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
