/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-bottle-can-11-fl-oz",
  "description": "Coffee",
  "id": "usda-fndds-2710478",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 341.0,
      "key": "1-bottle-can-11-fl-oz",
      "kind": "unit",
      "label": "1 bottle/can (11 fl oz)"
    },
    {
      "gramsPerUnit": 465.0,
      "key": "1-bottle-can-15-fl-oz",
      "kind": "unit",
      "label": "1 bottle/can (15 fl oz)"
    },
    {
      "gramsPerUnit": 341.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 295.0,
      "key": "1-bottle-can-9-5-fl-oz",
      "kind": "unit",
      "label": "1 bottle/can (9.5 fl oz)"
    },
    {
      "gramsPerUnit": 202.0,
      "key": "1-bottle-can-6-5-fl-oz",
      "kind": "unit",
      "label": "1 bottle/can (6.5 fl oz)"
    }
  ],
  "name": "Coffee, bottled/canned",
  "nutritionPerBasis": {
    "calcium_mg": 74.0,
    "carbs_g": 12.6,
    "energy_kcal": 71.0,
    "fat_g": 1.38,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.04,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 59.0,
    "potassium_mg": 175.0,
    "protein_g": 1.98,
    "salt_g": 0.065,
    "sat_fat_g": 0.0,
    "sodium_mg": 26.0,
    "sugar_g": 10.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710478",
  "state": "Canned",
  "subcategory": "Coffee",
  "tags": [
    "beverages",
    "canned",
    "coffee"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
