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
  "id": "usda-foundation-2346395",
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
  "name": "Nuts, pecans, halves, raw",
  "nutritionPerBasis": {
    "calcium_mg": 54.8,
    "carbs_g": 12.7,
    "energy_kcal": 750.0,
    "fat_g": 73.3,
    "fibre_g": 5.79,
    "folate_ug": 0.0,
    "iron_mg": 2.37,
    "magnesium_mg": 103.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 253.0,
    "potassium_mg": 360.0,
    "protein_g": 9.96,
    "salt_g": 0.0,
    "sat_fat_g": 6.46,
    "sodium_mg": 0.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 4.1
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2346395",
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
