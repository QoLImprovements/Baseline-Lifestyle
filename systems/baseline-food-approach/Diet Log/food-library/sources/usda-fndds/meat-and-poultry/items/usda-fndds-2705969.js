/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2705969",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-small-breast",
      "kind": "unit",
      "label": "1 small breast"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-breast-ns-as-to-size",
      "kind": "unit",
      "label": "1 breast, NS as to size"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "1-breast-quarter-yield-after-cooking-bone-removed",
      "kind": "unit",
      "label": "1 breast quarter (yield after cooking, bone removed)"
    },
    {
      "gramsPerUnit": 195.0,
      "key": "1-large-breast",
      "kind": "unit",
      "label": "1 large breast"
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
      "gramsPerUnit": 30.0,
      "key": "1-small-or-thin-slice",
      "kind": "unit",
      "label": "1 small or thin slice"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-medium-breast",
      "kind": "unit",
      "label": "1 medium breast"
    }
  ],
  "name": "Chicken breast, grilled with sauce, skin eaten",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 7.34,
    "energy_kcal": 202.0,
    "fat_g": 9.15,
    "fibre_g": 0.2,
    "folate_ug": 5.0,
    "iron_mg": 0.55,
    "magnesium_mg": 22.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 160.0,
    "potassium_mg": 280.0,
    "protein_g": 21.2,
    "salt_g": 1.135,
    "sat_fat_g": 2.1,
    "sodium_mg": 454.0,
    "sugar_g": 5.98,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 1.0,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705969",
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
