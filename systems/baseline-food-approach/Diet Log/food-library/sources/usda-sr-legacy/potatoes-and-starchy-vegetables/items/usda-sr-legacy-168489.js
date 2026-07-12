/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "shoot",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168489",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 83.0,
      "key": "shoot",
      "kind": "unit",
      "label": "shoot"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "0-5-cup-slices",
      "kind": "unit",
      "label": "0.5 cup slices"
    }
  ],
  "name": "Taro shoots, raw",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 2.32,
    "energy_kcal": 46.0,
    "fat_g": 0.09,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.6,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 332.0,
    "protein_g": 0.92,
    "salt_g": 0.0025,
    "sat_fat_g": 0.018,
    "sodium_mg": 1.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 21.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168489",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "raw",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
