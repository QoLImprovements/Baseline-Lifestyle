/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-quiche-8-dia",
  "description": "Turnovers and other grain-based items",
  "id": "usda-fndds-2708733",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1212.0,
      "key": "1-quiche-8-dia",
      "kind": "unit",
      "label": "1 quiche (8\" dia)"
    },
    {
      "gramsPerUnit": 192.0,
      "key": "1-piece-1-8-of-9-dia",
      "kind": "unit",
      "label": "1 piece (1/8 of 9\" dia)"
    },
    {
      "gramsPerUnit": 11.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 1536.0,
      "key": "1-quiche-9-dia",
      "kind": "unit",
      "label": "1 quiche (9\" dia)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 1896.0,
      "key": "1-quiche-10-dia",
      "kind": "unit",
      "label": "1 quiche (10\" dia)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "1-individual-quiche",
      "kind": "unit",
      "label": "1 individual quiche"
    }
  ],
  "name": "Cheese quiche, meatless",
  "nutritionPerBasis": {
    "calcium_mg": 267.0,
    "carbs_g": 13.7,
    "energy_kcal": 365.0,
    "fat_g": 29.2,
    "fibre_g": 0.8,
    "folate_ug": 30.0,
    "iron_mg": 1.0,
    "magnesium_mg": 17.0,
    "omega3_g": 0.018,
    "phosphorus_mg": 229.0,
    "potassium_mg": 117.0,
    "protein_g": 11.9,
    "salt_g": 0.9025,
    "sat_fat_g": 14.9,
    "sodium_mg": 361.0,
    "sugar_g": 2.21,
    "vitamin_a_ug": 239.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.85,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708733",
  "state": "Unspecified",
  "subcategory": "Turnovers and other grain-based items",
  "tags": [
    "milk-dairy-and-eggs",
    "turnovers-and-other-grain-based-items",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
