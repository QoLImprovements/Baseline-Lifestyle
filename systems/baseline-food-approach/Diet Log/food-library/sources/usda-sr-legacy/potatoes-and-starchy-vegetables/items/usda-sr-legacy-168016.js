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
  "id": "usda-sr-legacy-168016",
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
  "name": "Sweet Potato puffs, frozen, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 30.7,
    "energy_kcal": 672.0,
    "fat_g": 3.58,
    "fibre_g": 1.9,
    "folate_ug": 0.0,
    "iron_mg": 0.4,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 248.0,
    "protein_g": 1.36,
    "salt_g": 0.625,
    "sat_fat_g": 0.31,
    "sodium_mg": 250.0,
    "sugar_g": 7.65,
    "vitamin_a_ug": 3000.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168016",
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
