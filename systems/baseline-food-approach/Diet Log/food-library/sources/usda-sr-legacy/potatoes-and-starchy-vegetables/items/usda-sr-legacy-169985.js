/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169985",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 206.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 408.0,
      "key": "root",
      "kind": "unit",
      "label": "root"
    }
  ],
  "name": "Cassava, raw",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 38.1,
    "energy_kcal": 667.0,
    "fat_g": 0.28,
    "fibre_g": 1.8,
    "folate_ug": 27.0,
    "iron_mg": 0.27,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 271.0,
    "protein_g": 1.36,
    "salt_g": 0.035,
    "sat_fat_g": 0.074,
    "sodium_mg": 14.0,
    "sugar_g": 1.7,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 20.6,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169985",
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
