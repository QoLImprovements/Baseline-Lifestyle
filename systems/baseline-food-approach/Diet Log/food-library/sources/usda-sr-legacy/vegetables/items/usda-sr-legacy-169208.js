/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "package-10-oz",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169208",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "package-10-oz",
      "kind": "unit",
      "label": "package (10 oz)"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "4-spears",
      "kind": "unit",
      "label": "4 spears"
    }
  ],
  "name": "Asparagus, frozen, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 4.1,
    "energy_kcal": 100.0,
    "fat_g": 0.23,
    "fibre_g": 1.9,
    "folate_ug": 191.0,
    "iron_mg": 0.73,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 64.0,
    "potassium_mg": 253.0,
    "protein_g": 3.23,
    "salt_g": 0.02,
    "sat_fat_g": 0.052,
    "sodium_mg": 8.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 47.0,
    "vitamin_c_mg": 31.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169208",
  "state": "Frozen",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "frozen",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
