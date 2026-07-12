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
  "id": "usda-fndds-2705973",
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
      "gramsPerUnit": 30.0,
      "key": "1-small-or-thin-slice",
      "kind": "unit",
      "label": "1 small or thin slice"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-small-breast",
      "kind": "unit",
      "label": "1 small breast"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-medium-breast",
      "kind": "unit",
      "label": "1 medium breast"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
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
      "gramsPerUnit": 175.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 195.0,
      "key": "1-large-breast",
      "kind": "unit",
      "label": "1 large breast"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-breast-quarter-yield-after-cooking-bone-removed",
      "kind": "unit",
      "label": "1 breast quarter (yield after cooking, bone removed)"
    }
  ],
  "name": "Chicken breast, fried, coated, skin / coating eaten, from raw",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 6.01,
    "energy_kcal": 243.0,
    "fat_g": 14.1,
    "fibre_g": 0.2,
    "folate_ug": 17.0,
    "iron_mg": 0.88,
    "magnesium_mg": 21.0,
    "omega3_g": 0.019,
    "phosphorus_mg": 164.0,
    "potassium_mg": 245.0,
    "protein_g": 21.5,
    "salt_g": 0.7475,
    "sat_fat_g": 2.77,
    "sodium_mg": 299.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.8,
    "vitamin_k_ug": 7.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705973",
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
