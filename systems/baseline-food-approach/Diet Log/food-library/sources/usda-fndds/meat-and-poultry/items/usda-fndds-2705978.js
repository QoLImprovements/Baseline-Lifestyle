/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-medium-slice",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2705978",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-medium-slice",
      "kind": "unit",
      "label": "1 medium slice"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-or-thick-slice",
      "kind": "unit",
      "label": "1 large or thick slice"
    },
    {
      "gramsPerUnit": 175.0,
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
      "gramsPerUnit": 30.0,
      "key": "1-small-or-thin-slice",
      "kind": "unit",
      "label": "1 small or thin slice"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    }
  ],
  "name": "Chicken breast, fried, coated, skin / coating eaten, from fast food / restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 10.7,
    "energy_kcal": 273.0,
    "fat_g": 17.0,
    "fibre_g": 0.3,
    "folate_ug": 29.0,
    "iron_mg": 1.02,
    "magnesium_mg": 23.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 191.0,
    "potassium_mg": 232.0,
    "protein_g": 19.3,
    "salt_g": 1.3725,
    "sat_fat_g": 3.57,
    "sodium_mg": 549.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.72,
    "vitamin_k_ug": 7.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705978",
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
