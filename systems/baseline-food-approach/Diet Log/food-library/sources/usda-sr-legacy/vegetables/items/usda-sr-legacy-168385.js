/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "leaf",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168385",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "leaf",
      "kind": "unit",
      "label": "leaf"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Amaranth leaves, raw",
  "nutritionPerBasis": {
    "calcium_mg": 215.0,
    "carbs_g": 4.02,
    "energy_kcal": 23.0,
    "fat_g": 0.33,
    "fibre_g": 0.0,
    "folate_ug": 85.0,
    "iron_mg": 2.32,
    "magnesium_mg": 55.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 611.0,
    "protein_g": 2.46,
    "salt_g": 0.05,
    "sat_fat_g": 0.091,
    "sodium_mg": 20.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 146.0,
    "vitamin_c_mg": 43.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 1140.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168385",
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
