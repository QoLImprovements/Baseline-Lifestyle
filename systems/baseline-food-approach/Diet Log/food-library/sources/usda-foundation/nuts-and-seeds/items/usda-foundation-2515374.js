/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "racc",
  "description": "Nut and Seed Products",
  "id": "usda-foundation-2515374",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Nuts, cashew nuts, raw",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 36.3,
    "energy_kcal": 565.0,
    "fat_g": 38.9,
    "fibre_g": 4.1,
    "folate_ug": 0.0,
    "iron_mg": 5.99,
    "magnesium_mg": 251.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 532.0,
    "potassium_mg": 638.0,
    "protein_g": 17.4,
    "salt_g": 0.0119,
    "sat_fat_g": 0.0,
    "sodium_mg": 4.76,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2515374",
  "state": "Raw",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "nut-and-seed-products",
    "nuts-and-seeds",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
