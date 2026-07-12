/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-bottle-can-6-5-fl-oz",
  "description": "Coffee",
  "id": "usda-fndds-2710479",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 195.0,
      "key": "1-bottle-can-6-5-fl-oz",
      "kind": "unit",
      "label": "1 bottle/can (6.5 fl oz)"
    },
    {
      "gramsPerUnit": 330.0,
      "key": "1-bottle-can-11-fl-oz",
      "kind": "unit",
      "label": "1 bottle/can (11 fl oz)"
    },
    {
      "gramsPerUnit": 285.0,
      "key": "1-bottle-can-9-5-fl-oz",
      "kind": "unit",
      "label": "1 bottle/can (9.5 fl oz)"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 450.0,
      "key": "1-bottle-can-15-fl-oz",
      "kind": "unit",
      "label": "1 bottle/can (15 fl oz)"
    },
    {
      "gramsPerUnit": 330.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Coffee, bottled/canned, light",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 5.91,
    "energy_kcal": 35.0,
    "fat_g": 0.7,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.01,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 39.0,
    "potassium_mg": 86.0,
    "protein_g": 1.27,
    "salt_g": 0.0375,
    "sat_fat_g": 0.397,
    "sodium_mg": 15.0,
    "sugar_g": 5.91,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710479",
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
