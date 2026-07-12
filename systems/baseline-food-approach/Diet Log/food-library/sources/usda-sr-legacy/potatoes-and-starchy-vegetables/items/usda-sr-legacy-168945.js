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
  "id": "usda-sr-legacy-168945",
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
  "name": "Potatoes, yellow fleshed, hash brown, shredded, salt added in processing, frozen, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 18.0,
    "energy_kcal": 81.0,
    "fat_g": 0.07,
    "fibre_g": 2.0,
    "folate_ug": 0.0,
    "iron_mg": 0.31,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 398.0,
    "protein_g": 2.04,
    "salt_g": 0.825,
    "sat_fat_g": 0.01,
    "sodium_mg": 330.0,
    "sugar_g": 0.23,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 7.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168945",
  "state": "Frozen",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "frozen",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
