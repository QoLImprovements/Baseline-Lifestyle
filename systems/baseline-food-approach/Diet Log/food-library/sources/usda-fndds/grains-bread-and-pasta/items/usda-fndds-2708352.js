/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-oz-dry-yields",
  "description": "Pasta, noodles, cooked grains",
  "id": "usda-fndds-2708352",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-oz-dry-yields",
      "kind": "unit",
      "label": "1 oz, dry, yields"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Noodles, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 25.0,
    "energy_kcal": 137.0,
    "fat_g": 2.06,
    "fibre_g": 1.2,
    "folate_ug": 83.0,
    "iron_mg": 1.46,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 76.0,
    "potassium_mg": 38.0,
    "protein_g": 4.51,
    "salt_g": 0.59,
    "sat_fat_g": 0.417,
    "sodium_mg": 236.0,
    "sugar_g": 0.4,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708352",
  "state": "Cooked",
  "subcategory": "Pasta, noodles, cooked grains",
  "tags": [
    "cooked",
    "grains-bread-and-pasta",
    "pasta-noodles-cooked-grains"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
