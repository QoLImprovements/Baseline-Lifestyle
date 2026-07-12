/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-breast-quarter-yield-after-cooking-bone-removed",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2705956",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-breast-quarter-yield-after-cooking-bone-removed",
      "kind": "unit",
      "label": "1 breast quarter (yield after cooking, bone removed)"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "1-small-breast",
      "kind": "unit",
      "label": "1 small breast"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-medium-slice",
      "kind": "unit",
      "label": "1 medium slice"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-or-thick-slice",
      "kind": "unit",
      "label": "1 large or thick slice"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-small-or-thin-slice",
      "kind": "unit",
      "label": "1 small or thin slice"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-large-breast",
      "kind": "unit",
      "label": "1 large breast"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-medium-breast",
      "kind": "unit",
      "label": "1 medium breast"
    }
  ],
  "name": "Chicken breast, baked, broiled, or roasted, skin not eaten, from raw",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.0,
    "energy_kcal": 161.0,
    "fat_g": 3.52,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.45,
    "magnesium_mg": 28.0,
    "omega3_g": 0.017,
    "phosphorus_mg": 229.0,
    "potassium_mg": 359.0,
    "protein_g": 30.2,
    "salt_g": 0.9,
    "sat_fat_g": 0.756,
    "sodium_mg": 360.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705956",
  "state": "Baked",
  "subcategory": "Chicken, whole pieces",
  "tags": [
    "baked",
    "chicken-whole-pieces",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
