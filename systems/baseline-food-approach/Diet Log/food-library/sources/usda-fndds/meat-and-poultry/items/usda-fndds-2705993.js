/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-leg-ns-as-to-size",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2705993",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-leg-ns-as-to-size",
      "kind": "unit",
      "label": "1 leg, NS as to size"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-small-leg",
      "kind": "unit",
      "label": "1 small leg"
    },
    {
      "gramsPerUnit": 185.0,
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
      "gramsPerUnit": 185.0,
      "key": "1-medium-leg",
      "kind": "unit",
      "label": "1 medium leg"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-leg-quarter-yield-after-cooking-bone-removed",
      "kind": "unit",
      "label": "1 leg quarter (yield after cooking, bone removed)"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-large-leg",
      "kind": "unit",
      "label": "1 large leg"
    }
  ],
  "name": "Chicken leg, drumstick and thigh, grilled with sauce, skin not eaten",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 7.28,
    "energy_kcal": 183.0,
    "fat_g": 7.79,
    "fibre_g": 0.2,
    "folate_ug": 4.0,
    "iron_mg": 1.02,
    "magnesium_mg": 21.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 177.0,
    "potassium_mg": 251.0,
    "protein_g": 19.6,
    "salt_g": 1.455,
    "sat_fat_g": 1.85,
    "sodium_mg": 582.0,
    "sugar_g": 5.94,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.66,
    "vitamin_k_ug": 5.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705993",
  "state": "Grilled",
  "subcategory": "Chicken, whole pieces",
  "tags": [
    "chicken-whole-pieces",
    "grilled",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
