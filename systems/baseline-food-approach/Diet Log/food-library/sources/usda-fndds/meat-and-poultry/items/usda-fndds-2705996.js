/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-leg-quarter-yield-after-cooking-bone-removed",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2705996",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 195.0,
      "key": "1-leg-quarter-yield-after-cooking-bone-removed",
      "kind": "unit",
      "label": "1 leg quarter (yield after cooking, bone removed)"
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
      "gramsPerUnit": 165.0,
      "key": "1-small-leg",
      "kind": "unit",
      "label": "1 small leg"
    },
    {
      "gramsPerUnit": 195.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    }
  ],
  "name": "Chicken leg, drumstick and thigh, fried, coated, skin / coating eaten",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 5.98,
    "energy_kcal": 260.0,
    "fat_g": 17.2,
    "fibre_g": 0.2,
    "folate_ug": 15.0,
    "iron_mg": 1.3,
    "magnesium_mg": 20.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 173.0,
    "potassium_mg": 207.0,
    "protein_g": 19.0,
    "salt_g": 0.8825,
    "sat_fat_g": 3.75,
    "sodium_mg": 353.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.48,
    "vitamin_k_ug": 9.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705996",
  "state": "Fried",
  "subcategory": "Chicken, whole pieces",
  "tags": [
    "chicken-whole-pieces",
    "fried",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
