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
  "id": "usda-fndds-2708662",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 171.0,
      "key": "1-french-bread",
      "kind": "unit",
      "label": "1 French bread"
    },
    {
      "gramsPerUnit": 7.7,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 927.0,
      "key": "1-frozen-medium-pizza-11-13-diameter",
      "kind": "unit",
      "label": "1 frozen medium pizza (11-13\" diameter)"
    },
    {
      "gramsPerUnit": 104.0,
      "key": "1-2-bagel",
      "kind": "unit",
      "label": "1/2 bagel"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-piece-nfs",
      "kind": "unit",
      "label": "1 piece, NFS"
    },
    {
      "gramsPerUnit": 1361.0,
      "key": "1-frozen-large-pizza-14-16-diameter",
      "kind": "unit",
      "label": "1 frozen large pizza (14-16\" diameter)"
    },
    {
      "gramsPerUnit": 405.0,
      "key": "1-frozen-small-pizza-8-10-diameter",
      "kind": "unit",
      "label": "1 frozen small pizza (8-10\" diameter)"
    },
    {
      "gramsPerUnit": 63.0,
      "key": "1-2-english-muffin",
      "kind": "unit",
      "label": "1/2 English muffin"
    },
    {
      "gramsPerUnit": 283.0,
      "key": "1-frozen-personal-size-pizza-5-7-diameter",
      "kind": "unit",
      "label": "1 frozen personal size pizza (5-7\" diameter)"
    },
    {
      "gramsPerUnit": 310.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pizza with meat and vegetables, from frozen, thick crust",
  "nutritionPerBasis": {
    "calcium_mg": 152.0,
    "carbs_g": 25.1,
    "energy_kcal": 276.0,
    "fat_g": 14.4,
    "fibre_g": 2.2,
    "folate_ug": 34.0,
    "iron_mg": 1.36,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 181.0,
    "potassium_mg": 209.0,
    "protein_g": 11.3,
    "salt_g": 1.3875,
    "sat_fat_g": 5.08,
    "sodium_mg": 555.0,
    "sugar_g": 4.85,
    "vitamin_a_ug": 65.0,
    "vitamin_c_mg": 3.4,
    "vitamin_e_mg": 1.13,
    "vitamin_k_ug": 8.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708662",
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
