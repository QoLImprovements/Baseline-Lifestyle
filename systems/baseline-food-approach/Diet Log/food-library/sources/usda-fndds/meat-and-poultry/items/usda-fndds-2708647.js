/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-frozen-personal-size-pizza-5-7-diameter",
  "description": "Pizza",
  "id": "usda-fndds-2708647",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 238.0,
      "key": "1-frozen-personal-size-pizza-5-7-diameter",
      "kind": "unit",
      "label": "1 frozen personal size pizza (5-7\" diameter)"
    },
    {
      "gramsPerUnit": 607.0,
      "key": "1-frozen-medium-pizza-11-13-diameter",
      "kind": "unit",
      "label": "1 frozen medium pizza (11-13\" diameter)"
    },
    {
      "gramsPerUnit": 961.0,
      "key": "1-frozen-large-pizza-14-16-diameter",
      "kind": "unit",
      "label": "1 frozen large pizza (14-16\" diameter)"
    },
    {
      "gramsPerUnit": 102.0,
      "key": "1-piece-nfs",
      "kind": "unit",
      "label": "1 piece, NFS"
    },
    {
      "gramsPerUnit": 204.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 5.4,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 340.0,
      "key": "1-frozen-small-pizza-8-10-diameter",
      "kind": "unit",
      "label": "1 frozen small pizza (8-10\" diameter)"
    }
  ],
  "name": "Pizza with meat other than pepperoni, from frozen, medium crust",
  "nutritionPerBasis": {
    "calcium_mg": 192.0,
    "carbs_g": 27.3,
    "energy_kcal": 269.0,
    "fat_g": 12.5,
    "fibre_g": 2.4,
    "folate_ug": 59.0,
    "iron_mg": 2.15,
    "magnesium_mg": 23.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 194.0,
    "potassium_mg": 184.0,
    "protein_g": 11.6,
    "salt_g": 1.1925,
    "sat_fat_g": 5.22,
    "sodium_mg": 477.0,
    "sugar_g": 3.51,
    "vitamin_a_ug": 66.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.87,
    "vitamin_k_ug": 5.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708647",
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
