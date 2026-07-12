/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cucumber-8-1-4",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168409",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 301.0,
      "key": "cucumber-8-1-4",
      "kind": "unit",
      "label": "cucumber (8-1/4\")"
    },
    {
      "gramsPerUnit": 52.0,
      "key": "0-5-cup-slices",
      "kind": "unit",
      "label": "0.5 cup slices"
    }
  ],
  "name": "Cucumber, with peel, raw",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 3.63,
    "energy_kcal": 15.0,
    "fat_g": 0.11,
    "fibre_g": 0.5,
    "folate_ug": 7.0,
    "iron_mg": 0.28,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 147.0,
    "protein_g": 0.65,
    "salt_g": 0.005,
    "sat_fat_g": 0.037,
    "sodium_mg": 2.0,
    "sugar_g": 1.67,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 16.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168409",
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
