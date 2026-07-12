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
  "id": "usda-sr-legacy-170498",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 194.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 1162.0,
      "key": "recipe-yield",
      "kind": "unit",
      "label": "recipe yield"
    }
  ],
  "name": "Potatoes, o'brien, home-prepared",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 15.5,
    "energy_kcal": 339.0,
    "fat_g": 1.28,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.47,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 266.0,
    "protein_g": 2.35,
    "salt_g": 0.5425,
    "sat_fat_g": 0.797,
    "sodium_mg": 217.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 481.0,
    "vitamin_c_mg": 16.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170498",
  "state": "Unspecified",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "unspecified",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
