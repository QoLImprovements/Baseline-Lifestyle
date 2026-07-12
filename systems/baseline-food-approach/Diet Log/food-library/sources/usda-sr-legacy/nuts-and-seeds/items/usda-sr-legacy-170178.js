/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "cup-whole-or-halves",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170178",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 134.0,
      "key": "cup-whole-or-halves",
      "kind": "unit",
      "label": "cup, whole or halves"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-10-12-kernels",
      "kind": "unit",
      "label": "oz (10-12 kernels)"
    }
  ],
  "name": "Nuts, macadamia nuts, raw",
  "nutritionPerBasis": {
    "calcium_mg": 85.0,
    "carbs_g": 13.8,
    "energy_kcal": 3000.0,
    "fat_g": 75.8,
    "fibre_g": 8.6,
    "folate_ug": 11.0,
    "iron_mg": 3.69,
    "magnesium_mg": 130.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 188.0,
    "potassium_mg": 368.0,
    "protein_g": 7.91,
    "salt_g": 0.0125,
    "sat_fat_g": 12.1,
    "sodium_mg": 5.0,
    "sugar_g": 4.57,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170178",
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
