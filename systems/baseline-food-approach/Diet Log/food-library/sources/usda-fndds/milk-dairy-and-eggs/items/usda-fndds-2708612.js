/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-frozen-personal-size-pizza-5-7-diameter",
  "description": "Pizza",
  "id": "usda-fndds-2708612",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 209.0,
      "key": "1-frozen-personal-size-pizza-5-7-diameter",
      "kind": "unit",
      "label": "1 frozen personal size pizza (5-7\" diameter)"
    },
    {
      "gramsPerUnit": 320.0,
      "key": "1-frozen-small-pizza-8-10-diameter",
      "kind": "unit",
      "label": "1 frozen small pizza (8-10\" diameter)"
    },
    {
      "gramsPerUnit": 581.0,
      "key": "1-frozen-medium-pizza-11-13-diameter",
      "kind": "unit",
      "label": "1 frozen medium pizza (11-13\" diameter)"
    },
    {
      "gramsPerUnit": 194.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-weight-watchers-pizza",
      "kind": "unit",
      "label": "1 Weight Watchers pizza"
    },
    {
      "gramsPerUnit": 97.0,
      "key": "1-piece-nfs",
      "kind": "unit",
      "label": "1 piece, NFS"
    },
    {
      "gramsPerUnit": 5.1,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 901.0,
      "key": "1-frozen-large-pizza-14-16-diameter",
      "kind": "unit",
      "label": "1 frozen large pizza (14-16\" diameter)"
    }
  ],
  "name": "Pizza, cheese, from frozen, thin crust",
  "nutritionPerBasis": {
    "calcium_mg": 228.0,
    "carbs_g": 28.8,
    "energy_kcal": 263.0,
    "fat_g": 11.1,
    "fibre_g": 3.0,
    "folate_ug": 87.0,
    "iron_mg": 2.14,
    "magnesium_mg": 24.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 215.0,
    "potassium_mg": 201.0,
    "protein_g": 11.9,
    "salt_g": 1.1775,
    "sat_fat_g": 5.7,
    "sodium_mg": 471.0,
    "sugar_g": 3.71,
    "vitamin_a_ug": 72.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708612",
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
