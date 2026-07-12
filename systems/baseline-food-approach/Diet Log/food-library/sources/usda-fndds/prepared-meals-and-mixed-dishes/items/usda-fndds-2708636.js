/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "1-frozen-small-pizza-8-10-diameter",
  "description": "Pizza",
  "id": "usda-fndds-2708636",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 340.0,
      "key": "1-frozen-small-pizza-8-10-diameter",
      "kind": "unit",
      "label": "1 frozen small pizza (8-10\" diameter)"
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
      "gramsPerUnit": 238.0,
      "key": "1-frozen-personal-size-pizza-5-7-diameter",
      "kind": "unit",
      "label": "1 frozen personal size pizza (5-7\" diameter)"
    },
    {
      "gramsPerUnit": 5.4,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 961.0,
      "key": "1-frozen-large-pizza-14-16-diameter",
      "kind": "unit",
      "label": "1 frozen large pizza (14-16\" diameter)"
    },
    {
      "gramsPerUnit": 607.0,
      "key": "1-frozen-medium-pizza-11-13-diameter",
      "kind": "unit",
      "label": "1 frozen medium pizza (11-13\" diameter)"
    }
  ],
  "name": "Pizza with pepperoni, from frozen, medium crust",
  "nutritionPerBasis": {
    "calcium_mg": 196.0,
    "carbs_g": 27.8,
    "energy_kcal": 275.0,
    "fat_g": 13.1,
    "fibre_g": 2.5,
    "folate_ug": 60.0,
    "iron_mg": 2.17,
    "magnesium_mg": 23.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 195.0,
    "potassium_mg": 180.0,
    "protein_g": 11.5,
    "salt_g": 1.26,
    "sat_fat_g": 5.49,
    "sodium_mg": 504.0,
    "sugar_g": 3.49,
    "vitamin_a_ug": 66.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 5.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708636",
  "state": "Frozen",
  "subcategory": "Pizza",
  "tags": [
    "frozen",
    "pizza",
    "prepared-meals-and-mixed-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
