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
  "id": "usda-fndds-2705954",
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
      "gramsPerUnit": 30.0,
      "key": "1-small-or-thin-slice",
      "kind": "unit",
      "label": "1 small or thin slice"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-or-thick-slice",
      "kind": "unit",
      "label": "1 large or thick slice"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-medium-slice",
      "kind": "unit",
      "label": "1 medium slice"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-breast",
      "kind": "unit",
      "label": "1 breast"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-breast-quarter-yield-after-cooking-bone-removed",
      "kind": "unit",
      "label": "1 breast quarter (yield after cooking, bone removed)"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken breast, NS as to cooking method, skin not eaten",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.0,
    "energy_kcal": 144.0,
    "fat_g": 3.57,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.46,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 246.0,
    "potassium_mg": 284.0,
    "protein_g": 28.0,
    "salt_g": 0.82,
    "sat_fat_g": 0.863,
    "sodium_mg": 328.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705954",
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
