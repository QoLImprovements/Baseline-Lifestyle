/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "1-medium-pizza-11-12-diameter",
  "description": "Pizza",
  "id": "usda-fndds-2708642",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 883.0,
      "key": "1-medium-pizza-11-12-diameter",
      "kind": "unit",
      "label": "1 medium pizza (11-12\" diameter)"
    },
    {
      "gramsPerUnit": 1312.0,
      "key": "1-large-pizza-13-15-diameter",
      "kind": "unit",
      "label": "1 large pizza (13-15\" diameter)"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-piece-medium-pizza",
      "kind": "unit",
      "label": "1 piece, medium pizza"
    },
    {
      "gramsPerUnit": 164.0,
      "key": "1-piece-nfs",
      "kind": "unit",
      "label": "1 piece, NFS"
    },
    {
      "gramsPerUnit": 328.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 8.5,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 164.0,
      "key": "1-piece-large-pizza",
      "kind": "unit",
      "label": "1 piece, large pizza"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-personal-size-pizza-5-7-diameter",
      "kind": "unit",
      "label": "1 personal size pizza (5-7\" diameter)"
    }
  ],
  "name": "Pizza with pepperoni, stuffed crust",
  "nutritionPerBasis": {
    "calcium_mg": 217.0,
    "carbs_g": 27.2,
    "energy_kcal": 296.0,
    "fat_g": 15.0,
    "fibre_g": 1.5,
    "folate_ug": 82.0,
    "iron_mg": 1.97,
    "magnesium_mg": 22.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 240.0,
    "potassium_mg": 233.0,
    "protein_g": 12.9,
    "salt_g": 1.7725,
    "sat_fat_g": 6.98,
    "sodium_mg": 709.0,
    "sugar_g": 2.62,
    "vitamin_a_ug": 106.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 8.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708642",
  "state": "Unspecified",
  "subcategory": "Pizza",
  "tags": [
    "pizza",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
