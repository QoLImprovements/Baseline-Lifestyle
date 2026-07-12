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
  "id": "usda-foundation-2727579",
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
  "name": "Squash, spaghetti, peeled, seeded, raw",
  "nutritionPerBasis": {
    "calcium_mg": 16.6,
    "carbs_g": 0.0,
    "energy_kcal": 0.0,
    "fat_g": 0.0,
    "fibre_g": 1.4,
    "folate_ug": 12.7,
    "iron_mg": 0.031,
    "magnesium_mg": 13.3,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 267.0,
    "protein_g": 0.792,
    "salt_g": 0.00078,
    "sat_fat_g": 0.0,
    "sodium_mg": 0.312,
    "sugar_g": 4.01,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 5.55,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2727579",
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
