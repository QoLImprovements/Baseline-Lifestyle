/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-large-leg",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2705984",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-large-leg",
      "kind": "unit",
      "label": "1 large leg"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-medium-leg",
      "kind": "unit",
      "label": "1 medium leg"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-small-leg",
      "kind": "unit",
      "label": "1 small leg"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-leg-quarter-yield-after-cooking-bone-removed",
      "kind": "unit",
      "label": "1 leg quarter (yield after cooking, bone removed)"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-leg-ns-as-to-size",
      "kind": "unit",
      "label": "1 leg, NS as to size"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken leg, drumstick and thigh, baked or broiled, skin eaten",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 0.0,
    "energy_kcal": 214.0,
    "fat_g": 12.8,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.08,
    "magnesium_mg": 22.0,
    "omega3_g": 0.021,
    "phosphorus_mg": 206.0,
    "potassium_mg": 249.0,
    "protein_g": 23.2,
    "salt_g": 0.8525,
    "sat_fat_g": 3.54,
    "sodium_mg": 341.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705984",
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
