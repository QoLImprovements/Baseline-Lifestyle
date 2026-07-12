/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "oz-167-kernels",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170591",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-167-kernels",
      "kind": "unit",
      "label": "oz (167 kernels)"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 1.7,
      "key": "10-nuts",
      "kind": "unit",
      "label": "10 nuts"
    }
  ],
  "name": "Nuts, pine nuts, dried",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 13.1,
    "energy_kcal": 2820.0,
    "fat_g": 68.4,
    "fibre_g": 3.7,
    "folate_ug": 34.0,
    "iron_mg": 5.53,
    "magnesium_mg": 251.0,
    "omega3_g": 0.112,
    "phosphorus_mg": 575.0,
    "potassium_mg": 597.0,
    "protein_g": 13.7,
    "salt_g": 0.005,
    "sat_fat_g": 4.9,
    "sodium_mg": 2.0,
    "sugar_g": 3.59,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 9.33,
    "vitamin_k_ug": 53.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170591",
  "state": "Dried",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "dried",
    "nut-and-seed-products",
    "nuts-and-seeds"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
