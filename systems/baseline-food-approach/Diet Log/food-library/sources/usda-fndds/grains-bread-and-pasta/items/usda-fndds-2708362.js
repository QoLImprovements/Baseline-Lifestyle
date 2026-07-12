/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pasta, noodles, cooked grains",
  "id": "usda-fndds-2708362",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-oz-dry-yields",
      "kind": "unit",
      "label": "1 oz, dry, yields"
    },
    {
      "gramsPerUnit": 500.0,
      "key": "1-cup-dry-yields",
      "kind": "unit",
      "label": "1 cup, dry, yields"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    }
  ],
  "name": "Buckwheat groats",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 19.0,
    "energy_kcal": 118.0,
    "fat_g": 3.97,
    "fibre_g": 2.6,
    "folate_ug": 13.0,
    "iron_mg": 0.76,
    "magnesium_mg": 49.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 67.0,
    "potassium_mg": 85.0,
    "protein_g": 3.24,
    "salt_g": 0.425,
    "sat_fat_g": 1.58,
    "sodium_mg": 170.0,
    "sugar_g": 0.87,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 3.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708362",
  "state": "Unspecified",
  "subcategory": "Pasta, noodles, cooked grains",
  "tags": [
    "grains-bread-and-pasta",
    "pasta-noodles-cooked-grains",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
