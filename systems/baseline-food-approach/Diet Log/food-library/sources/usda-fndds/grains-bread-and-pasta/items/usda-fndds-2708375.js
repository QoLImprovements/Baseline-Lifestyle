/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-oz-dry-yields",
  "description": "Grits and other cooked cereals",
  "id": "usda-fndds-2708375",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "1-oz-dry-yields",
      "kind": "unit",
      "label": "1 oz, dry, yields"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-strip-or-slice",
      "kind": "unit",
      "label": "1 strip or slice"
    },
    {
      "gramsPerUnit": 955.0,
      "key": "1-cup-dry-yields",
      "kind": "unit",
      "label": "1 cup, dry, yields"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cornmeal mush, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 12.2,
    "energy_kcal": 71.0,
    "fat_g": 1.84,
    "fibre_g": 0.6,
    "folate_ug": 23.0,
    "iron_mg": 0.64,
    "magnesium_mg": 6.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 15.0,
    "potassium_mg": 21.0,
    "protein_g": 1.11,
    "salt_g": 0.205,
    "sat_fat_g": 0.711,
    "sodium_mg": 82.0,
    "sugar_g": 0.26,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708375",
  "state": "Unspecified",
  "subcategory": "Grits and other cooked cereals",
  "tags": [
    "grains-bread-and-pasta",
    "grits-and-other-cooked-cereals",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
