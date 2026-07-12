/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "1-piece-small-pizza",
  "description": "Pizza",
  "id": "usda-fndds-2708639",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 62.0,
      "key": "1-piece-small-pizza",
      "kind": "unit",
      "label": "1 piece, small pizza"
    },
    {
      "gramsPerUnit": 369.0,
      "key": "1-small-pizza-8-10-diameter",
      "kind": "unit",
      "label": "1 small pizza (8-10\" diameter)"
    },
    {
      "gramsPerUnit": 133.0,
      "key": "1-personal-size-pizza-5-7-diameter",
      "kind": "unit",
      "label": "1 personal size pizza (5-7\" diameter)"
    },
    {
      "gramsPerUnit": 66.0,
      "key": "1-piece-medium-pizza",
      "kind": "unit",
      "label": "1 piece, medium pizza"
    },
    {
      "gramsPerUnit": 1046.0,
      "key": "1-extra-large-pizza-16-18-diameter",
      "kind": "unit",
      "label": "1 extra-large pizza (16-18\" diameter)"
    },
    {
      "gramsPerUnit": 728.0,
      "key": "1-large-pizza-13-15-diameter",
      "kind": "unit",
      "label": "1 large pizza (13-15\" diameter)"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 91.0,
      "key": "1-piece-large-pizza",
      "kind": "unit",
      "label": "1 piece, large pizza"
    },
    {
      "gramsPerUnit": 4.9,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "1-piece-extra-large-pizza",
      "kind": "unit",
      "label": "1 piece, extra-large pizza"
    },
    {
      "gramsPerUnit": 91.0,
      "key": "1-piece-nfs",
      "kind": "unit",
      "label": "1 piece, NFS"
    }
  ],
  "name": "Pizza with pepperoni, from restaurant or fast food, thin crust",
  "nutritionPerBasis": {
    "calcium_mg": 153.0,
    "carbs_g": 32.0,
    "energy_kcal": 282.0,
    "fat_g": 11.9,
    "fibre_g": 2.3,
    "folate_ug": 92.0,
    "iron_mg": 2.52,
    "magnesium_mg": 24.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 198.0,
    "potassium_mg": 195.0,
    "protein_g": 11.7,
    "salt_g": 1.55,
    "sat_fat_g": 5.09,
    "sodium_mg": 620.0,
    "sugar_g": 3.26,
    "vitamin_a_ug": 70.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.87,
    "vitamin_k_ug": 6.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708639",
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
