/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-foundation-2747664",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Radicchio, raw",
  "nutritionPerBasis": {
    "calcium_mg": 30.9,
    "carbs_g": 4.96,
    "energy_kcal": 26.4,
    "fat_g": 0.143,
    "fibre_g": 2.11,
    "folate_ug": 117.0,
    "iron_mg": 0.401,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 35.5,
    "potassium_mg": 335.0,
    "protein_g": 1.31,
    "salt_g": 0.0202,
    "sat_fat_g": 0.0,
    "sodium_mg": 8.08,
    "sugar_g": 2.25,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 6.18,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2747664",
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
