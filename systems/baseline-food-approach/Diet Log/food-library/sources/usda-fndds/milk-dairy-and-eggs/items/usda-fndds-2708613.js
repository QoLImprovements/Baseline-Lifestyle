/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-surface-inch",
  "description": "Pizza",
  "id": "usda-fndds-2708613",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.1,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 93.0,
      "key": "1-2-bagel",
      "kind": "unit",
      "label": "1/2 bagel"
    },
    {
      "gramsPerUnit": 147.0,
      "key": "1-french-bread",
      "kind": "unit",
      "label": "1 French bread"
    },
    {
      "gramsPerUnit": 54.0,
      "key": "1-2-english-muffin",
      "kind": "unit",
      "label": "1/2 English muffin"
    },
    {
      "gramsPerUnit": 799.0,
      "key": "1-frozen-medium-pizza-11-13-diameter",
      "kind": "unit",
      "label": "1 frozen medium pizza (11-13\" diameter)"
    },
    {
      "gramsPerUnit": 133.0,
      "key": "1-piece-nfs",
      "kind": "unit",
      "label": "1 piece, NFS"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "1-bagel-bite",
      "kind": "unit",
      "label": "1 Bagel Bite"
    },
    {
      "gramsPerUnit": 1255.0,
      "key": "1-frozen-large-pizza-14-16-diameter",
      "kind": "unit",
      "label": "1 frozen large pizza (14-16\" diameter)"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-frozen-personal-size-pizza-5-7-diameter",
      "kind": "unit",
      "label": "1 frozen personal size pizza (5-7\" diameter)"
    },
    {
      "gramsPerUnit": 452.0,
      "key": "1-frozen-small-pizza-8-10-diameter",
      "kind": "unit",
      "label": "1 frozen small pizza (8-10\" diameter)"
    },
    {
      "gramsPerUnit": 266.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pizza, cheese, from frozen, thick crust",
  "nutritionPerBasis": {
    "calcium_mg": 179.0,
    "carbs_g": 29.0,
    "energy_kcal": 268.0,
    "fat_g": 12.3,
    "fibre_g": 2.2,
    "folate_ug": 38.0,
    "iron_mg": 2.27,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 179.0,
    "potassium_mg": 152.0,
    "protein_g": 10.4,
    "salt_g": 1.1175,
    "sat_fat_g": 4.27,
    "sodium_mg": 447.0,
    "sugar_g": 3.57,
    "vitamin_a_ug": 66.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 1.01,
    "vitamin_k_ug": 6.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708613",
  "state": "Frozen",
  "subcategory": "Pizza",
  "tags": [
    "frozen",
    "milk-dairy-and-eggs",
    "pizza"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
