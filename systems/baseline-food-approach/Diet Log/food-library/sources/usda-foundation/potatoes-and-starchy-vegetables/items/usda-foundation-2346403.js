/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "racc",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-foundation-2346403",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Potatoes, gold, without skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 5.94,
    "carbs_g": 16.0,
    "energy_kcal": 73.5,
    "fat_g": 0.264,
    "fibre_g": 0.586,
    "folate_ug": 0.0,
    "iron_mg": 0.373,
    "magnesium_mg": 22.3,
    "omega3_g": 0.0,
    "phosphorus_mg": 57.0,
    "potassium_mg": 446.0,
    "protein_g": 1.81,
    "salt_g": 0.0056,
    "sat_fat_g": 0.0,
    "sodium_mg": 2.24,
    "sugar_g": 0.645,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 23.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2346403",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "raw",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
