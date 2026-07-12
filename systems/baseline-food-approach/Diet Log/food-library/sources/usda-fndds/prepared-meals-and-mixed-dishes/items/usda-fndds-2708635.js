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
  "id": "usda-fndds-2708635",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 320.0,
      "key": "1-frozen-small-pizza-8-10-diameter",
      "kind": "unit",
      "label": "1 frozen small pizza (8-10\" diameter)"
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
      "gramsPerUnit": 901.0,
      "key": "1-frozen-large-pizza-14-16-diameter",
      "kind": "unit",
      "label": "1 frozen large pizza (14-16\" diameter)"
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
      "gramsPerUnit": 97.0,
      "key": "1-piece-nfs",
      "kind": "unit",
      "label": "1 piece, NFS"
    }
  ],
  "name": "Pizza with pepperoni, from frozen, thin crust",
  "nutritionPerBasis": {
    "calcium_mg": 218.0,
    "carbs_g": 27.5,
    "energy_kcal": 274.0,
    "fat_g": 12.7,
    "fibre_g": 2.9,
    "folate_ug": 83.0,
    "iron_mg": 2.1,
    "magnesium_mg": 24.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 212.0,
    "potassium_mg": 204.0,
    "protein_g": 12.2,
    "salt_g": 1.3075,
    "sat_fat_g": 6.26,
    "sodium_mg": 523.0,
    "sugar_g": 3.54,
    "vitamin_a_ug": 69.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 4.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708635",
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
