/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-cup-cooked",
  "description": "Pasta, noodles, cooked grains",
  "id": "usda-fndds-2708353",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-oz-dry-yields",
      "kind": "unit",
      "label": "1 oz, dry, yields"
    }
  ],
  "name": "Noodles, whole grain, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 29.9,
    "energy_kcal": 148.0,
    "fat_g": 1.7,
    "fibre_g": 3.9,
    "folate_ug": 20.0,
    "iron_mg": 1.71,
    "magnesium_mg": 54.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 126.0,
    "potassium_mg": 95.0,
    "protein_g": 5.96,
    "salt_g": 0.525,
    "sat_fat_g": 0.242,
    "sodium_mg": 210.0,
    "sugar_g": 0.75,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708353",
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
