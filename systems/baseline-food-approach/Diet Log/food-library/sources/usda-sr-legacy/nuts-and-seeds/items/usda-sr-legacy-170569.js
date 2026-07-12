/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "kernel",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170569",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "kernel",
      "kind": "unit",
      "label": "kernel"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-6-kernels",
      "kind": "unit",
      "label": "oz (6 kernels)"
    },
    {
      "gramsPerUnit": 133.0,
      "key": "cup-whole",
      "kind": "unit",
      "label": "cup, whole"
    }
  ],
  "name": "Nuts, brazilnuts, dried, unblanched",
  "nutritionPerBasis": {
    "calcium_mg": 160.0,
    "carbs_g": 11.7,
    "energy_kcal": 659.0,
    "fat_g": 67.1,
    "fibre_g": 7.5,
    "folate_ug": 22.0,
    "iron_mg": 2.43,
    "magnesium_mg": 376.0,
    "omega3_g": 0.018,
    "phosphorus_mg": 725.0,
    "potassium_mg": 659.0,
    "protein_g": 14.3,
    "salt_g": 0.0075,
    "sat_fat_g": 16.1,
    "sodium_mg": 3.0,
    "sugar_g": 2.33,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 5.65,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170569",
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
