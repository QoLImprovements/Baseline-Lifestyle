/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "oz-10-12-kernels",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170179",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-10-12-kernels",
      "kind": "unit",
      "label": "oz (10-12 kernels)"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "cup-whole-or-halves",
      "kind": "unit",
      "label": "cup, whole or halves"
    }
  ],
  "name": "Nuts, macadamia nuts, dry roasted, without salt added",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 13.4,
    "energy_kcal": 718.0,
    "fat_g": 76.1,
    "fibre_g": 8.0,
    "folate_ug": 10.0,
    "iron_mg": 2.65,
    "magnesium_mg": 118.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 198.0,
    "potassium_mg": 363.0,
    "protein_g": 7.79,
    "salt_g": 0.01,
    "sat_fat_g": 11.9,
    "sodium_mg": 4.0,
    "sugar_g": 4.14,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170179",
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
