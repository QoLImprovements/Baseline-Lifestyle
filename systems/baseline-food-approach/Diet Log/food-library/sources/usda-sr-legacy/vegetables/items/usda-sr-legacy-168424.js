/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "slice",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168424",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Kohlrabi, raw",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 6.2,
    "energy_kcal": 113.0,
    "fat_g": 0.1,
    "fibre_g": 3.6,
    "folate_ug": 16.0,
    "iron_mg": 0.4,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 350.0,
    "protein_g": 1.7,
    "salt_g": 0.05,
    "sat_fat_g": 0.013,
    "sodium_mg": 20.0,
    "sugar_g": 2.6,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 62.0,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168424",
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
