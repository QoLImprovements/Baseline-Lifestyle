/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup-cooked-diced",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2705986",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-leg",
      "kind": "unit",
      "label": "1 leg"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-leg-quarter-yield-after-cooking-bone-removed",
      "kind": "unit",
      "label": "1 leg quarter (yield after cooking, bone removed)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken leg, drumstick and thigh, rotisserie, skin eaten",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 0.12,
    "energy_kcal": 218.0,
    "fat_g": 13.6,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.98,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 229.0,
    "potassium_mg": 265.0,
    "protein_g": 23.8,
    "salt_g": 0.895,
    "sat_fat_g": 3.5,
    "sodium_mg": 358.0,
    "sugar_g": 0.12,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705986",
  "state": "Unspecified",
  "subcategory": "Chicken, whole pieces",
  "tags": [
    "chicken-whole-pieces",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
