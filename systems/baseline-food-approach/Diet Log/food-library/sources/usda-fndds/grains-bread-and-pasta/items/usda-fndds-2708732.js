/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-cup",
  "description": "Turnovers and other grain-based items",
  "id": "usda-fndds-2708732",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 901.0,
      "key": "1-quiche-8-dia",
      "kind": "unit",
      "label": "1 quiche (8\" dia)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 143.0,
      "key": "1-piece-1-8-of-9-dia",
      "kind": "unit",
      "label": "1 piece (1/8 of 9\" dia)"
    },
    {
      "gramsPerUnit": 1410.0,
      "key": "1-quiche-10-dia",
      "kind": "unit",
      "label": "1 quiche (10\" dia)"
    },
    {
      "gramsPerUnit": 1142.0,
      "key": "1-quiche-9-dia",
      "kind": "unit",
      "label": "1 quiche (9\" dia)"
    }
  ],
  "name": "Spinach quiche, meatless",
  "nutritionPerBasis": {
    "calcium_mg": 231.0,
    "carbs_g": 11.7,
    "energy_kcal": 299.0,
    "fat_g": 23.5,
    "fibre_g": 1.0,
    "folate_ug": 41.0,
    "iron_mg": 1.08,
    "magnesium_mg": 39.0,
    "omega3_g": 0.015,
    "phosphorus_mg": 194.0,
    "potassium_mg": 216.0,
    "protein_g": 10.3,
    "salt_g": 0.7925,
    "sat_fat_g": 11.9,
    "sodium_mg": 317.0,
    "sugar_g": 1.88,
    "vitamin_a_ug": 264.0,
    "vitamin_c_mg": 4.3,
    "vitamin_e_mg": 1.22,
    "vitamin_k_ug": 131.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708732",
  "state": "Unspecified",
  "subcategory": "Turnovers and other grain-based items",
  "tags": [
    "grains-bread-and-pasta",
    "turnovers-and-other-grain-based-items",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
