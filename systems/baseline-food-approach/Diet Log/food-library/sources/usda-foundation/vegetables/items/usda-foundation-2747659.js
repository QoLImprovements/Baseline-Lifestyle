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
  "id": "usda-foundation-2747659",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Parsnips, raw",
  "nutritionPerBasis": {
    "calcium_mg": 44.2,
    "carbs_g": 19.3,
    "energy_kcal": 87.1,
    "fat_g": 0.538,
    "fibre_g": 5.35,
    "folate_ug": 83.4,
    "iron_mg": 0.505,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 62.5,
    "potassium_mg": 493.0,
    "protein_g": 1.27,
    "salt_g": 0.001228,
    "sat_fat_g": 0.0,
    "sodium_mg": 0.491,
    "sugar_g": 10.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 11.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2747659",
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
