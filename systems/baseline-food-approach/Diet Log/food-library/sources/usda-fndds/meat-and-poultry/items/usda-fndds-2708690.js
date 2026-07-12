/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-piece-medium-pizza",
  "description": "Pizza",
  "id": "usda-fndds-2708690",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 112.0,
      "key": "1-piece-medium-pizza",
      "kind": "unit",
      "label": "1 piece, medium pizza"
    },
    {
      "gramsPerUnit": 1117.0,
      "key": "1-large-pizza-13-15-diameter",
      "kind": "unit",
      "label": "1 large pizza (13-15\" diameter)"
    },
    {
      "gramsPerUnit": 96.0,
      "key": "1-piece-small-pizza",
      "kind": "unit",
      "label": "1 piece, small pizza"
    },
    {
      "gramsPerUnit": 573.0,
      "key": "1-small-pizza-8-10-diameter",
      "kind": "unit",
      "label": "1 small pizza (8-10\" diameter)"
    },
    {
      "gramsPerUnit": 139.0,
      "key": "1-piece-large-pizza",
      "kind": "unit",
      "label": "1 piece, large pizza"
    },
    {
      "gramsPerUnit": 174.0,
      "key": "1-french-bread",
      "kind": "unit",
      "label": "1 French bread"
    },
    {
      "gramsPerUnit": 101.0,
      "key": "1-2-bagel",
      "kind": "unit",
      "label": "1/2 bagel"
    },
    {
      "gramsPerUnit": 7.3,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 893.0,
      "key": "1-medium-pizza-11-12-diameter",
      "kind": "unit",
      "label": "1 medium pizza (11-12\" diameter)"
    },
    {
      "gramsPerUnit": 278.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 1468.0,
      "key": "1-extra-large-pizza-16-18-diameter",
      "kind": "unit",
      "label": "1 extra-large pizza (16-18\" diameter)"
    }
  ],
  "name": "Pizza, with meat, whole wheat thick crust",
  "nutritionPerBasis": {
    "calcium_mg": 181.0,
    "carbs_g": 28.1,
    "energy_kcal": 284.0,
    "fat_g": 14.0,
    "fibre_g": 3.3,
    "folate_ug": 52.0,
    "iron_mg": 2.51,
    "magnesium_mg": 52.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 216.0,
    "potassium_mg": 218.0,
    "protein_g": 12.5,
    "salt_g": 1.57,
    "sat_fat_g": 4.82,
    "sodium_mg": 628.0,
    "sugar_g": 3.31,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 1.43,
    "vitamin_k_ug": 4.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708690",
  "state": "Unspecified",
  "subcategory": "Pizza",
  "tags": [
    "meat-and-poultry",
    "pizza",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
