/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "3-oz",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168015",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Sweet Potatoes, french fried, crosscut, frozen, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 25.5,
    "energy_kcal": 209.0,
    "fat_g": 11.1,
    "fibre_g": 3.4,
    "folate_ug": 0.0,
    "iron_mg": 0.44,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 244.0,
    "protein_g": 1.7,
    "salt_g": 0.535,
    "sat_fat_g": 0.93,
    "sodium_mg": 214.0,
    "sugar_g": 6.46,
    "vitamin_a_ug": 3320.0,
    "vitamin_c_mg": 4.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168015",
  "state": "Fried",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "fried",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
