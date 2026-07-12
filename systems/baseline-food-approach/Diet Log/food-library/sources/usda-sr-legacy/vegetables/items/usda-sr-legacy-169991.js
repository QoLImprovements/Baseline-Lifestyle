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
  "id": "usda-sr-legacy-169991",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "leaf",
      "kind": "unit",
      "label": "leaf"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Chard, swiss, raw",
  "nutritionPerBasis": {
    "calcium_mg": 51.0,
    "carbs_g": 3.74,
    "energy_kcal": 79.0,
    "fat_g": 0.2,
    "fibre_g": 1.6,
    "folate_ug": 14.0,
    "iron_mg": 1.8,
    "magnesium_mg": 81.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 379.0,
    "protein_g": 1.8,
    "salt_g": 0.5325,
    "sat_fat_g": 0.03,
    "sodium_mg": 213.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 306.0,
    "vitamin_c_mg": 30.0,
    "vitamin_e_mg": 1.89,
    "vitamin_k_ug": 830.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169991",
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
