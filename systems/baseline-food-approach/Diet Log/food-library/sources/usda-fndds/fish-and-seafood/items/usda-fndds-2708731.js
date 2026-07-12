/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "quantity-not-specified",
  "description": "Turnovers and other grain-based items",
  "id": "usda-fndds-2708731",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 192.0,
      "key": "1-piece-1-8-of-9-dia",
      "kind": "unit",
      "label": "1 piece (1/8 of 9\" dia)"
    },
    {
      "gramsPerUnit": 1896.0,
      "key": "1-quiche-10-dia",
      "kind": "unit",
      "label": "1 quiche (10\" dia)"
    },
    {
      "gramsPerUnit": 1212.0,
      "key": "1-quiche-8-dia",
      "kind": "unit",
      "label": "1 quiche (8\" dia)"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 11.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "1-individual-quiche",
      "kind": "unit",
      "label": "1 individual quiche"
    },
    {
      "gramsPerUnit": 1536.0,
      "key": "1-quiche-9-dia",
      "kind": "unit",
      "label": "1 quiche (9\" dia)"
    }
  ],
  "name": "Quiche with meat, poultry or fish",
  "nutritionPerBasis": {
    "calcium_mg": 232.0,
    "carbs_g": 12.1,
    "energy_kcal": 387.0,
    "fat_g": 30.6,
    "fibre_g": 0.7,
    "folate_ug": 26.0,
    "iron_mg": 1.01,
    "magnesium_mg": 20.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 257.0,
    "potassium_mg": 178.0,
    "protein_g": 15.5,
    "salt_g": 1.425,
    "sat_fat_g": 14.7,
    "sodium_mg": 570.0,
    "sugar_g": 1.91,
    "vitamin_a_ug": 208.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 2.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708731",
  "state": "Unspecified",
  "subcategory": "Turnovers and other grain-based items",
  "tags": [
    "fish-and-seafood",
    "turnovers-and-other-grain-based-items",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
