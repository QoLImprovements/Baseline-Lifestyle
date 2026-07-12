/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "cup-slices",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170136",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 137.0,
      "key": "cup-slices",
      "kind": "unit",
      "label": "cup slices"
    }
  ],
  "name": "Taro, tahitian, cooked, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 149.0,
    "carbs_g": 6.85,
    "energy_kcal": 44.0,
    "fat_g": 0.68,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.56,
    "magnesium_mg": 51.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 67.0,
    "potassium_mg": 623.0,
    "protein_g": 4.16,
    "salt_g": 0.725,
    "sat_fat_g": 0.139,
    "sodium_mg": 290.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 88.0,
    "vitamin_c_mg": 38.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170136",
  "state": "Cooked",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "cooked",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
