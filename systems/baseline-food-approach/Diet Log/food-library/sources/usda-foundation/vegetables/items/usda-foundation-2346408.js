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
  "id": "usda-foundation-2346408",
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
  "name": "Cabbage, red, raw",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 6.79,
    "energy_kcal": 34.1,
    "fat_g": 0.214,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 13.3,
    "omega3_g": 0.0,
    "phosphorus_mg": 35.8,
    "potassium_mg": 269.0,
    "protein_g": 1.24,
    "salt_g": 0.02925,
    "sat_fat_g": 0.0,
    "sodium_mg": 11.7,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 53.9,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 32.3
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2346408",
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
