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
  "id": "usda-fndds-2705992",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 195.0,
      "key": "1-leg-ns-as-to-size",
      "kind": "unit",
      "label": "1 leg, NS as to size"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-small-leg",
      "kind": "unit",
      "label": "1 small leg"
    },
    {
      "gramsPerUnit": 195.0,
      "key": "1-medium-leg",
      "kind": "unit",
      "label": "1 medium leg"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    },
    {
      "gramsPerUnit": 195.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-large-leg",
      "kind": "unit",
      "label": "1 large leg"
    },
    {
      "gramsPerUnit": 195.0,
      "key": "1-leg-quarter-yield-after-cooking-bone-removed",
      "kind": "unit",
      "label": "1 leg quarter (yield after cooking, bone removed)"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    }
  ],
  "name": "Chicken leg, drumstick and thigh, grilled with sauce, skin eaten",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 7.28,
    "energy_kcal": 220.0,
    "fat_g": 12.3,
    "fibre_g": 0.2,
    "folate_ug": 4.0,
    "iron_mg": 0.98,
    "magnesium_mg": 20.0,
    "omega3_g": 0.017,
    "phosphorus_mg": 168.0,
    "potassium_mg": 240.0,
    "protein_g": 18.6,
    "salt_g": 1.445,
    "sat_fat_g": 3.1,
    "sodium_mg": 578.0,
    "sugar_g": 5.94,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.67,
    "vitamin_k_ug": 4.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705992",
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
