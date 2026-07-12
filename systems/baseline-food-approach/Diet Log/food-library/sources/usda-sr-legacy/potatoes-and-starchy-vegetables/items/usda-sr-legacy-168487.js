/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "leaf-11-x-6-1-2",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168487",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "leaf-11-x-6-1-2",
      "kind": "unit",
      "label": "leaf (11\" x 6-1/2\")"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Taro leaves, raw",
  "nutritionPerBasis": {
    "calcium_mg": 107.0,
    "carbs_g": 6.7,
    "energy_kcal": 177.0,
    "fat_g": 0.74,
    "fibre_g": 3.7,
    "folate_ug": 126.0,
    "iron_mg": 2.25,
    "magnesium_mg": 45.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 60.0,
    "potassium_mg": 648.0,
    "protein_g": 4.98,
    "salt_g": 0.0075,
    "sat_fat_g": 0.151,
    "sodium_mg": 3.0,
    "sugar_g": 3.01,
    "vitamin_a_ug": 241.0,
    "vitamin_c_mg": 52.0,
    "vitamin_e_mg": 2.02,
    "vitamin_k_ug": 109.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168487",
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
