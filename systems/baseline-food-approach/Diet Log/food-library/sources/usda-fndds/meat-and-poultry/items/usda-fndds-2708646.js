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
  "id": "usda-fndds-2708646",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 581.0,
      "key": "1-frozen-medium-pizza-11-13-diameter",
      "kind": "unit",
      "label": "1 frozen medium pizza (11-13\" diameter)"
    },
    {
      "gramsPerUnit": 209.0,
      "key": "1-frozen-personal-size-pizza-5-7-diameter",
      "kind": "unit",
      "label": "1 frozen personal size pizza (5-7\" diameter)"
    },
    {
      "gramsPerUnit": 194.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 5.1,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 97.0,
      "key": "1-piece-nfs",
      "kind": "unit",
      "label": "1 piece, NFS"
    },
    {
      "gramsPerUnit": 901.0,
      "key": "1-frozen-large-pizza-14-16-diameter",
      "kind": "unit",
      "label": "1 frozen large pizza (14-16\" diameter)"
    },
    {
      "gramsPerUnit": 320.0,
      "key": "1-frozen-small-pizza-8-10-diameter",
      "kind": "unit",
      "label": "1 frozen small pizza (8-10\" diameter)"
    }
  ],
  "name": "Pizza with meat other than pepperoni, from frozen, thin crust",
  "nutritionPerBasis": {
    "calcium_mg": 213.0,
    "carbs_g": 27.0,
    "energy_kcal": 267.0,
    "fat_g": 12.1,
    "fibre_g": 2.8,
    "folate_ug": 81.0,
    "iron_mg": 2.08,
    "magnesium_mg": 24.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 210.0,
    "potassium_mg": 208.0,
    "protein_g": 12.3,
    "salt_g": 1.2275,
    "sat_fat_g": 5.93,
    "sodium_mg": 491.0,
    "sugar_g": 3.56,
    "vitamin_a_ug": 69.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708646",
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
