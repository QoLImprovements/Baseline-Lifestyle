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
  "id": "usda-foundation-2346401",
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
  "name": "Potatoes, russet, without skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 7.8,
    "carbs_g": 17.8,
    "energy_kcal": 83.4,
    "fat_g": 0.36,
    "fibre_g": 1.09,
    "folate_ug": 0.0,
    "iron_mg": 0.384,
    "magnesium_mg": 25.6,
    "omega3_g": 0.0,
    "phosphorus_mg": 55.2,
    "potassium_mg": 450.0,
    "protein_g": 2.27,
    "salt_g": 0.00685,
    "sat_fat_g": 0.0,
    "sodium_mg": 2.74,
    "sugar_g": 0.526,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 10.9,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2346401",
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
