/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-frozen-medium-pizza-11-13-diameter",
  "description": "Pizza",
  "id": "usda-fndds-2708648",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 864.0,
      "key": "1-frozen-medium-pizza-11-13-diameter",
      "kind": "unit",
      "label": "1 frozen medium pizza (11-13\" diameter)"
    },
    {
      "gramsPerUnit": 377.0,
      "key": "1-frozen-small-pizza-8-10-diameter",
      "kind": "unit",
      "label": "1 frozen small pizza (8-10\" diameter)"
    },
    {
      "gramsPerUnit": 174.0,
      "key": "1-french-bread",
      "kind": "unit",
      "label": "1 French bread"
    },
    {
      "gramsPerUnit": 288.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 101.0,
      "key": "1-2-bagel",
      "kind": "unit",
      "label": "1/2 bagel"
    },
    {
      "gramsPerUnit": 1361.0,
      "key": "1-frozen-large-pizza-14-16-diameter",
      "kind": "unit",
      "label": "1 frozen large pizza (14-16\" diameter)"
    },
    {
      "gramsPerUnit": 59.0,
      "key": "1-2-english-muffin",
      "kind": "unit",
      "label": "1/2 English muffin"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "1-bagel-bite",
      "kind": "unit",
      "label": "1 Bagel Bite"
    },
    {
      "gramsPerUnit": 7.7,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 144.0,
      "key": "1-piece-nfs",
      "kind": "unit",
      "label": "1 piece, NFS"
    },
    {
      "gramsPerUnit": 263.0,
      "key": "1-frozen-personal-size-pizza-5-7-diameter",
      "kind": "unit",
      "label": "1 frozen personal size pizza (5-7\" diameter)"
    }
  ],
  "name": "Pizza with meat other than pepperoni, from frozen, thick crust",
  "nutritionPerBasis": {
    "calcium_mg": 171.0,
    "carbs_g": 27.7,
    "energy_kcal": 270.0,
    "fat_g": 13.0,
    "fibre_g": 2.1,
    "folate_ug": 36.0,
    "iron_mg": 2.22,
    "magnesium_mg": 23.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 177.0,
    "potassium_mg": 160.0,
    "protein_g": 10.8,
    "salt_g": 1.1575,
    "sat_fat_g": 4.52,
    "sodium_mg": 463.0,
    "sugar_g": 3.46,
    "vitamin_a_ug": 64.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 1.0,
    "vitamin_k_ug": 6.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708648",
  "state": "Frozen",
  "subcategory": "Pizza",
  "tags": [
    "frozen",
    "meat-and-poultry",
    "pizza"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
