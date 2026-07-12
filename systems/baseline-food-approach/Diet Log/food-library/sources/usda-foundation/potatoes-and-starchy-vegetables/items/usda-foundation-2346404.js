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
  "id": "usda-foundation-2346404",
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
  "name": "Sweet potatoes, orange flesh, without skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 22.3,
    "carbs_g": 17.3,
    "energy_kcal": 79.0,
    "fat_g": 0.375,
    "fibre_g": 0.157,
    "folate_ug": 0.0,
    "iron_mg": 0.398,
    "magnesium_mg": 19.1,
    "omega3_g": 0.0,
    "phosphorus_mg": 36.7,
    "potassium_mg": 486.0,
    "protein_g": 1.58,
    "salt_g": 0.0,
    "sat_fat_g": 0.0,
    "sodium_mg": 0.0,
    "sugar_g": 6.06,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 14.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2346404",
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
