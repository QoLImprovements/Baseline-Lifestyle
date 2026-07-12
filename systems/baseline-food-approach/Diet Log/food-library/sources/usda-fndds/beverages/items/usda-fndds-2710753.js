/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-cup",
  "description": "Sport and energy drinks",
  "id": "usda-fndds-2710753",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 496.0,
      "key": "1-can-or-bottle-16-fl-oz",
      "kind": "unit",
      "label": "1 can or bottle (16 fl oz)"
    },
    {
      "gramsPerUnit": 744.0,
      "key": "1-can-24-fl-oz",
      "kind": "unit",
      "label": "1 can (24 fl oz)"
    },
    {
      "gramsPerUnit": 992.0,
      "key": "1-can-32-fl-oz",
      "kind": "unit",
      "label": "1 can (32 fl oz)"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-can-8-fl-oz",
      "kind": "unit",
      "label": "1 can (8 fl oz)"
    },
    {
      "gramsPerUnit": 496.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Energy drink (Rockstar)",
  "nutritionPerBasis": {
    "calcium_mg": 1.0,
    "carbs_g": 12.7,
    "energy_kcal": 58.0,
    "fat_g": 0.22,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.05,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 6.0,
    "protein_g": 0.34,
    "salt_g": 0.04,
    "sat_fat_g": 0.0,
    "sodium_mg": 16.0,
    "sugar_g": 12.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710753",
  "state": "Unspecified",
  "subcategory": "Sport and energy drinks",
  "tags": [
    "beverages",
    "sport-and-energy-drinks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
