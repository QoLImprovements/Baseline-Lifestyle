/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-medium-pizza-11-12-diameter",
  "description": "Pizza",
  "id": "usda-fndds-2708693",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 691.0,
      "key": "1-medium-pizza-11-12-diameter",
      "kind": "unit",
      "label": "1 medium pizza (11-12\" diameter)"
    },
    {
      "gramsPerUnit": 119.0,
      "key": "1-piece-large-pizza",
      "kind": "unit",
      "label": "1 piece, large pizza"
    },
    {
      "gramsPerUnit": 238.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-personal-size-pizza-5-7-diameter",
      "kind": "unit",
      "label": "1 personal size pizza (5-7\" diameter)"
    },
    {
      "gramsPerUnit": 954.0,
      "key": "1-large-pizza-13-15-diameter",
      "kind": "unit",
      "label": "1 large pizza (13-15\" diameter)"
    },
    {
      "gramsPerUnit": 480.0,
      "key": "1-small-pizza-8-10-diameter",
      "kind": "unit",
      "label": "1 small pizza (8-10\" diameter)"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-piece-small-pizza",
      "kind": "unit",
      "label": "1 piece, small pizza"
    },
    {
      "gramsPerUnit": 119.0,
      "key": "1-piece-nfs",
      "kind": "unit",
      "label": "1 piece, NFS"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "1-piece-medium-pizza",
      "kind": "unit",
      "label": "1 piece, medium pizza"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "1-piece-extra-large-pizza",
      "kind": "unit",
      "label": "1 piece, extra-large pizza"
    },
    {
      "gramsPerUnit": 6.2,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    }
  ],
  "name": "Pizza, cheese, gluten-free thin crust",
  "nutritionPerBasis": {
    "calcium_mg": 259.0,
    "carbs_g": 26.5,
    "energy_kcal": 264.0,
    "fat_g": 13.6,
    "fibre_g": 2.5,
    "folate_ug": 24.0,
    "iron_mg": 1.59,
    "magnesium_mg": 16.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 172.0,
    "potassium_mg": 120.0,
    "protein_g": 8.73,
    "salt_g": 1.2125,
    "sat_fat_g": 4.44,
    "sodium_mg": 485.0,
    "sugar_g": 3.2,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 1.93,
    "vitamin_k_ug": 4.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708693",
  "state": "Unspecified",
  "subcategory": "Pizza",
  "tags": [
    "milk-dairy-and-eggs",
    "pizza",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
