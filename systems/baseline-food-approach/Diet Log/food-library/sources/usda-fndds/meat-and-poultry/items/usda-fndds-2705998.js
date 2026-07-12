/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-oz-cooked",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2705998",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    },
    {
      "gramsPerUnit": 195.0,
      "key": "1-medium-leg",
      "kind": "unit",
      "label": "1 medium leg"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-large-leg",
      "kind": "unit",
      "label": "1 large leg"
    },
    {
      "gramsPerUnit": 195.0,
      "key": "1-leg-ns-as-to-size",
      "kind": "unit",
      "label": "1 leg, NS as to size"
    },
    {
      "gramsPerUnit": 195.0,
      "key": "1-leg-quarter-yield-after-cooking-bone-removed",
      "kind": "unit",
      "label": "1 leg quarter (yield after cooking, bone removed)"
    },
    {
      "gramsPerUnit": 195.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-small-leg",
      "kind": "unit",
      "label": "1 small leg"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    }
  ],
  "name": "Chicken leg, drumstick and thigh, baked, coated, skin / coating eaten",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 3.98,
    "energy_kcal": 226.0,
    "fat_g": 13.4,
    "fibre_g": 0.2,
    "folate_ug": 12.0,
    "iron_mg": 1.25,
    "magnesium_mg": 21.0,
    "omega3_g": 0.019,
    "phosphorus_mg": 189.0,
    "potassium_mg": 227.0,
    "protein_g": 21.0,
    "salt_g": 1.07,
    "sat_fat_g": 3.41,
    "sodium_mg": 428.0,
    "sugar_g": 0.07,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 4.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705998",
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
