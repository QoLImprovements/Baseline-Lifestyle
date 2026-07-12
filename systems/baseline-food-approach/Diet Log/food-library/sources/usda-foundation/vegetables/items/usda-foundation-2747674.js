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
  "id": "usda-foundation-2747674",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Turnips, raw",
  "nutritionPerBasis": {
    "calcium_mg": 32.7,
    "carbs_g": 7.27,
    "energy_kcal": 34.0,
    "fat_g": 0.119,
    "fibre_g": 1.92,
    "folate_ug": 60.2,
    "iron_mg": 0.0,
    "magnesium_mg": 10.4,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.3,
    "potassium_mg": 262.0,
    "protein_g": 0.953,
    "salt_g": 0.032,
    "sat_fat_g": 0.0,
    "sodium_mg": 12.8,
    "sugar_g": 5.09,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 26.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2747674",
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
