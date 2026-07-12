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
  "id": "usda-foundation-2685576",
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
  "name": "Beets, raw",
  "nutritionPerBasis": {
    "calcium_mg": 13.8,
    "carbs_g": 8.79,
    "energy_kcal": 44.6,
    "fat_g": 0.302,
    "fibre_g": 3.12,
    "folate_ug": 103.0,
    "iron_mg": 0.428,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.6,
    "potassium_mg": 342.0,
    "protein_g": 1.69,
    "salt_g": 0.28,
    "sat_fat_g": 0.0,
    "sodium_mg": 112.0,
    "sugar_g": 5.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2685576",
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
