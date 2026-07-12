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
  "id": "usda-foundation-2747655",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fennel, bulb, raw",
  "nutritionPerBasis": {
    "calcium_mg": 41.3,
    "carbs_g": 5.49,
    "energy_kcal": 26.9,
    "fat_g": 0.14,
    "fibre_g": 2.05,
    "folate_ug": 37.0,
    "iron_mg": 0.0,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.4,
    "potassium_mg": 332.0,
    "protein_g": 0.922,
    "salt_g": 0.1225,
    "sat_fat_g": 0.0,
    "sodium_mg": 49.0,
    "sugar_g": 3.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 14.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2747655",
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
