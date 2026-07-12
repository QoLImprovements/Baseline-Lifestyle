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
  "id": "usda-sr-legacy-169426",
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
  "name": "Nuts, pistachio nuts, dry roasted, with salt added",
  "nutritionPerBasis": {
    "calcium_mg": 107.0,
    "carbs_g": 27.6,
    "energy_kcal": 569.0,
    "fat_g": 45.8,
    "fibre_g": 10.3,
    "folate_ug": 51.0,
    "iron_mg": 4.03,
    "magnesium_mg": 109.0,
    "omega3_g": 0.212,
    "phosphorus_mg": 469.0,
    "potassium_mg": 1010.0,
    "protein_g": 21.0,
    "salt_g": 1.07,
    "sat_fat_g": 5.64,
    "sodium_mg": 428.0,
    "sugar_g": 7.74,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 2.17,
    "vitamin_k_ug": 13.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169426",
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
