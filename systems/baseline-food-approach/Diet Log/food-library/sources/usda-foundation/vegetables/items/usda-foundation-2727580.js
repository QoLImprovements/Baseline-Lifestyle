/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "racc",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-foundation-2727580",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Rutabaga, peeled, raw",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 0.0,
    "energy_kcal": 0.0,
    "fat_g": 0.0,
    "fibre_g": 2.9,
    "folate_ug": 0.0,
    "iron_mg": 0.137,
    "magnesium_mg": 15.4,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.9,
    "potassium_mg": 267.0,
    "protein_g": 0.888,
    "salt_g": 0.011475,
    "sat_fat_g": 0.0,
    "sodium_mg": 4.59,
    "sugar_g": 6.01,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2727580",
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
