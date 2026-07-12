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
  "id": "usda-fndds-2705988",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-leg-ns-as-to-size",
      "kind": "unit",
      "label": "1 leg, NS as to size"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-leg-quarter-yield-after-cooking-bone-removed",
      "kind": "unit",
      "label": "1 leg quarter (yield after cooking, bone removed)"
    },
    {
      "gramsPerUnit": 200.0,
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
      "gramsPerUnit": 130.0,
      "key": "1-small-leg",
      "kind": "unit",
      "label": "1 small leg"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-medium-leg",
      "kind": "unit",
      "label": "1 medium leg"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    }
  ],
  "name": "Chicken leg, drumstick and thigh, stewed, skin eaten",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.0,
    "energy_kcal": 211.0,
    "fat_g": 13.4,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.09,
    "magnesium_mg": 22.0,
    "omega3_g": 0.021,
    "phosphorus_mg": 182.0,
    "potassium_mg": 237.0,
    "protein_g": 22.4,
    "salt_g": 0.99,
    "sat_fat_g": 3.7,
    "sodium_mg": 396.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705988",
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
