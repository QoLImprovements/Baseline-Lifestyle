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
  "id": "usda-foundation-2346402",
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
  "name": "Potatoes, red, without skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 5.13,
    "carbs_g": 16.3,
    "energy_kcal": 75.6,
    "fat_g": 0.248,
    "fibre_g": 0.888,
    "folate_ug": 0.0,
    "iron_mg": 0.391,
    "magnesium_mg": 23.6,
    "omega3_g": 0.0,
    "phosphorus_mg": 55.6,
    "potassium_mg": 472.0,
    "protein_g": 2.06,
    "salt_g": 0.00715,
    "sat_fat_g": 0.0,
    "sodium_mg": 2.86,
    "sugar_g": 0.664,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 21.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2346402",
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
