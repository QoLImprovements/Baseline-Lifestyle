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
  "id": "usda-fndds-2708351",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-oz-dry-yields",
      "kind": "unit",
      "label": "1 oz, dry, yields"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pasta, vegetable, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 26.6,
    "energy_kcal": 128.0,
    "fat_g": 0.11,
    "fibre_g": 4.3,
    "folate_ug": 65.0,
    "iron_mg": 0.49,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 31.0,
    "protein_g": 4.52,
    "salt_g": 0.2475,
    "sat_fat_g": 0.016,
    "sodium_mg": 99.0,
    "sugar_g": 1.15,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708351",
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
