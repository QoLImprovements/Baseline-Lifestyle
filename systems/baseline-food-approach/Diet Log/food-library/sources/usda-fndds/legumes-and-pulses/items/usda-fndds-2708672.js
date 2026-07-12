/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-extra-large-pizza-16-18-diameter",
  "description": "Pizza",
  "id": "usda-fndds-2708672",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1346.0,
      "key": "1-extra-large-pizza-16-18-diameter",
      "kind": "unit",
      "label": "1 extra-large pizza (16-18\" diameter)"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "1-piece-small-pizza",
      "kind": "unit",
      "label": "1 piece, small pizza"
    },
    {
      "gramsPerUnit": 129.0,
      "key": "1-piece-large-pizza",
      "kind": "unit",
      "label": "1 piece, large pizza"
    },
    {
      "gramsPerUnit": 526.0,
      "key": "1-small-pizza-8-10-diameter",
      "kind": "unit",
      "label": "1 small pizza (8-10\" diameter)"
    },
    {
      "gramsPerUnit": 1032.0,
      "key": "1-large-pizza-13-15-diameter",
      "kind": "unit",
      "label": "1 large pizza (13-15\" diameter)"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-piece-medium-pizza",
      "kind": "unit",
      "label": "1 piece, medium pizza"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-piece-extra-large-pizza",
      "kind": "unit",
      "label": "1 piece, extra-large pizza"
    },
    {
      "gramsPerUnit": 189.0,
      "key": "1-personal-size-pizza-5-7-diameter",
      "kind": "unit",
      "label": "1 personal size pizza (5-7\" diameter)"
    },
    {
      "gramsPerUnit": 796.0,
      "key": "1-medium-pizza-11-12-diameter",
      "kind": "unit",
      "label": "1 medium pizza (11-12\" diameter)"
    },
    {
      "gramsPerUnit": 129.0,
      "key": "1-piece-nfs",
      "kind": "unit",
      "label": "1 piece, NFS"
    },
    {
      "gramsPerUnit": 258.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pizza with beans and vegetables, thin crust",
  "nutritionPerBasis": {
    "calcium_mg": 134.0,
    "carbs_g": 26.9,
    "energy_kcal": 203.0,
    "fat_g": 6.63,
    "fibre_g": 3.2,
    "folate_ug": 88.0,
    "iron_mg": 2.08,
    "magnesium_mg": 31.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 174.0,
    "potassium_mg": 221.0,
    "protein_g": 9.29,
    "salt_g": 1.0025,
    "sat_fat_g": 3.03,
    "sodium_mg": 401.0,
    "sugar_g": 2.97,
    "vitamin_a_ug": 48.0,
    "vitamin_c_mg": 3.9,
    "vitamin_e_mg": 0.72,
    "vitamin_k_ug": 5.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708672",
  "state": "Unspecified",
  "subcategory": "Pizza",
  "tags": [
    "legumes-and-pulses",
    "pizza",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
