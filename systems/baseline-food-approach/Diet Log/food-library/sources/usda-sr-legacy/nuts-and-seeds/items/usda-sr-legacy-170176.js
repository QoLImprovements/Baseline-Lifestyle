/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "cup-78-kernels",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170176",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "cup-78-kernels",
      "kind": "unit",
      "label": "cup (78 kernels)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-14-kernels",
      "kind": "unit",
      "label": "oz (14 kernels)"
    }
  ],
  "name": "Nuts, ginkgo nuts, canned",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 22.1,
    "energy_kcal": 464.0,
    "fat_g": 1.62,
    "fibre_g": 9.3,
    "folate_ug": 33.0,
    "iron_mg": 0.29,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 54.0,
    "potassium_mg": 180.0,
    "protein_g": 2.29,
    "salt_g": 0.7675,
    "sat_fat_g": 0.309,
    "sodium_mg": 307.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 9.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170176",
  "state": "Canned",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "canned",
    "nut-and-seed-products",
    "nuts-and-seeds"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
