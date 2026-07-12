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
  "id": "usda-fndds-2708442",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "1-oz-dry-yields",
      "kind": "unit",
      "label": "1 oz, dry, yields"
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
      "gramsPerUnit": 705.0,
      "key": "1-cup-dry-yields",
      "kind": "unit",
      "label": "1 cup, dry, yields"
    }
  ],
  "name": "Whole wheat cereal, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 10.4,
    "energy_kcal": 47.0,
    "fat_g": 0.28,
    "fibre_g": 1.3,
    "folate_ug": 8.0,
    "iron_mg": 0.44,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 51.0,
    "protein_g": 1.55,
    "salt_g": 0.1775,
    "sat_fat_g": 0.041,
    "sodium_mg": 71.0,
    "sugar_g": 0.06,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708442",
  "state": "Cooked",
  "subcategory": "Grits and other cooked cereals",
  "tags": [
    "cooked",
    "grains-bread-and-pasta",
    "grits-and-other-cooked-cereals"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
