/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-french-bread",
  "description": "Pizza",
  "id": "usda-fndds-2708671",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-french-bread",
      "kind": "unit",
      "label": "1 French bread"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "1-personal-size-pizza-5-7-diameter",
      "kind": "unit",
      "label": "1 personal size pizza (5-7\" diameter)"
    },
    {
      "gramsPerUnit": 157.0,
      "key": "1-piece-large-pizza",
      "kind": "unit",
      "label": "1 piece, large pizza"
    },
    {
      "gramsPerUnit": 127.0,
      "key": "1-piece-medium-pizza",
      "kind": "unit",
      "label": "1 piece, medium pizza"
    },
    {
      "gramsPerUnit": 181.0,
      "key": "1-piece-extra-large-pizza",
      "kind": "unit",
      "label": "1 piece, extra-large pizza"
    },
    {
      "gramsPerUnit": 64.0,
      "key": "1-2-english-muffin",
      "kind": "unit",
      "label": "1/2 English muffin"
    },
    {
      "gramsPerUnit": 314.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 706.0,
      "key": "1-small-pizza-8-10-diameter",
      "kind": "unit",
      "label": "1 small pizza (8-10\" diameter)"
    },
    {
      "gramsPerUnit": 1264.0,
      "key": "1-large-pizza-13-15-diameter",
      "kind": "unit",
      "label": "1 large pizza (13-15\" diameter)"
    },
    {
      "gramsPerUnit": 118.0,
      "key": "1-piece-small-pizza",
      "kind": "unit",
      "label": "1 piece, small pizza"
    },
    {
      "gramsPerUnit": 1013.0,
      "key": "1-medium-pizza-11-12-diameter",
      "kind": "unit",
      "label": "1 medium pizza (11-12\" diameter)"
    }
  ],
  "name": "Pizza with meat and fruit, thick crust",
  "nutritionPerBasis": {
    "calcium_mg": 152.0,
    "carbs_g": 29.1,
    "energy_kcal": 245.0,
    "fat_g": 9.53,
    "fibre_g": 1.9,
    "folate_ug": 90.0,
    "iron_mg": 2.16,
    "magnesium_mg": 22.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 195.0,
    "potassium_mg": 176.0,
    "protein_g": 10.6,
    "salt_g": 1.39,
    "sat_fat_g": 3.76,
    "sodium_mg": 556.0,
    "sugar_g": 3.72,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 4.8,
    "vitamin_e_mg": 0.71,
    "vitamin_k_ug": 8.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708671",
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
