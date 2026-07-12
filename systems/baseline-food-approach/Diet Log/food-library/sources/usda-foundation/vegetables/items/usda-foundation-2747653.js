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
  "id": "usda-foundation-2747653",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beet greens, raw",
  "nutritionPerBasis": {
    "calcium_mg": 72.8,
    "carbs_g": 4.66,
    "energy_kcal": 26.4,
    "fat_g": 0.144,
    "fibre_g": 2.58,
    "folate_ug": 152.0,
    "iron_mg": 3.16,
    "magnesium_mg": 74.4,
    "omega3_g": 0.0,
    "phosphorus_mg": 26.8,
    "potassium_mg": 369.0,
    "protein_g": 1.61,
    "salt_g": 0.7,
    "sat_fat_g": 0.0,
    "sodium_mg": 280.0,
    "sugar_g": 0.89,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 8.58,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2747653",
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
