/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "oz-49-kernels",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170184",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-49-kernels",
      "kind": "unit",
      "label": "oz (49 kernels)"
    },
    {
      "gramsPerUnit": 123.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 0.7,
      "key": "kernel",
      "kind": "unit",
      "label": "kernel"
    }
  ],
  "name": "Nuts, pistachio nuts, raw",
  "nutritionPerBasis": {
    "calcium_mg": 105.0,
    "carbs_g": 27.2,
    "energy_kcal": 560.0,
    "fat_g": 45.3,
    "fibre_g": 10.6,
    "folate_ug": 51.0,
    "iron_mg": 3.92,
    "magnesium_mg": 121.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 490.0,
    "potassium_mg": 1020.0,
    "protein_g": 20.2,
    "salt_g": 0.0025,
    "sat_fat_g": 5.91,
    "sodium_mg": 1.0,
    "sugar_g": 7.66,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 5.6,
    "vitamin_e_mg": 2.86,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170184",
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
