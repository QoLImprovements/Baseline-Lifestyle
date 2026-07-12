/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-cup-dry-yields",
  "description": "Grits and other cooked cereals",
  "id": "usda-fndds-2708374",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 955.0,
      "key": "1-cup-dry-yields",
      "kind": "unit",
      "label": "1 cup, dry, yields"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-strip-or-slice",
      "kind": "unit",
      "label": "1 strip or slice"
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
    },
    {
      "gramsPerUnit": 190.0,
      "key": "1-oz-dry-yields",
      "kind": "unit",
      "label": "1 oz, dry, yields"
    }
  ],
  "name": "Cornmeal mush, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 12.5,
    "energy_kcal": 58.0,
    "fat_g": 0.28,
    "fibre_g": 0.6,
    "folate_ug": 23.0,
    "iron_mg": 0.65,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 21.0,
    "protein_g": 1.12,
    "salt_g": 0.1775,
    "sat_fat_g": 0.035,
    "sodium_mg": 71.0,
    "sugar_g": 0.25,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708374",
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
