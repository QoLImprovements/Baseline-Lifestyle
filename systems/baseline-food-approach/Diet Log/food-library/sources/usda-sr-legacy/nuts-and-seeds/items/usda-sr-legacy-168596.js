/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "oz-22-whole-kernels",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-168596",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-22-whole-kernels",
      "kind": "unit",
      "label": "oz (22 whole kernels)"
    },
    {
      "gramsPerUnit": 138.0,
      "key": "cup-whole-kernels",
      "kind": "unit",
      "label": "cup whole kernels"
    }
  ],
  "name": "Nuts, almonds, dry roasted, with salt added",
  "nutritionPerBasis": {
    "calcium_mg": 268.0,
    "carbs_g": 21.0,
    "energy_kcal": 598.0,
    "fat_g": 52.5,
    "fibre_g": 10.9,
    "folate_ug": 55.0,
    "iron_mg": 3.73,
    "magnesium_mg": 279.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 471.0,
    "potassium_mg": 713.0,
    "protein_g": 21.0,
    "salt_g": 0.585,
    "sat_fat_g": 4.09,
    "sodium_mg": 234.0,
    "sugar_g": 4.86,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 23.9,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168596",
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
