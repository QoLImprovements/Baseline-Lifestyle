/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-taco-bell-order",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2708056",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-taco-bell-order",
      "kind": "unit",
      "label": "1 Taco Bell order"
    },
    {
      "gramsPerUnit": 1.5,
      "key": "1-twist",
      "kind": "unit",
      "label": "1 twist"
    },
    {
      "gramsPerUnit": 2.1,
      "key": "1-chip",
      "kind": "unit",
      "label": "1 chip"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-cup-chips",
      "kind": "unit",
      "label": "1 cup, chips"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-ear",
      "kind": "unit",
      "label": "1 ear"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pastry, mainly flour and water, fried",
  "nutritionPerBasis": {
    "calcium_mg": 145.0,
    "carbs_g": 59.2,
    "energy_kcal": 434.0,
    "fat_g": 18.1,
    "fibre_g": 3.7,
    "folate_ug": 80.0,
    "iron_mg": 3.5,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 194.0,
    "potassium_mg": 121.0,
    "protein_g": 7.75,
    "salt_g": 1.6475,
    "sat_fat_g": 4.16,
    "sodium_mg": 659.0,
    "sugar_g": 15.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.02,
    "vitamin_k_ug": 17.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708056",
  "state": "Fried",
  "subcategory": "Doughnuts, sweet rolls, pastries",
  "tags": [
    "doughnuts-sweet-rolls-pastries",
    "fried",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
