/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "oz",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170190",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 84.0,
      "key": "10-kernels",
      "kind": "unit",
      "label": "10 kernels"
    },
    {
      "gramsPerUnit": 143.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Nuts, chestnuts, european, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 53.0,
    "energy_kcal": 245.0,
    "fat_g": 2.2,
    "fibre_g": 5.1,
    "folate_ug": 70.0,
    "iron_mg": 0.91,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 107.0,
    "potassium_mg": 592.0,
    "protein_g": 3.17,
    "salt_g": 0.005,
    "sat_fat_g": 0.414,
    "sodium_mg": 2.0,
    "sugar_g": 10.6,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 26.0,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 7.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170190",
  "state": "Roasted",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "nut-and-seed-products",
    "nuts-and-seeds",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
