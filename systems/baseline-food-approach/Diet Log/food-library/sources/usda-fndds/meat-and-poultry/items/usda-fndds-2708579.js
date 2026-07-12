/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-order",
  "description": "Nachos",
  "id": "usda-fndds-2708579",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-order",
      "kind": "unit",
      "label": "1 order"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "1-chip",
      "kind": "unit",
      "label": "1 chip"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-item-any-size",
      "kind": "unit",
      "label": "1 item, any size"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Nachos, beef or pork, with beans",
  "nutritionPerBasis": {
    "calcium_mg": 56.0,
    "carbs_g": 18.3,
    "energy_kcal": 220.0,
    "fat_g": 12.4,
    "fibre_g": 2.0,
    "folate_ug": 16.0,
    "iron_mg": 1.36,
    "magnesium_mg": 30.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 127.0,
    "potassium_mg": 188.0,
    "protein_g": 9.28,
    "salt_g": 1.06,
    "sat_fat_g": 3.12,
    "sodium_mg": 424.0,
    "sugar_g": 0.38,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 1.39,
    "vitamin_k_ug": 8.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708579",
  "state": "Unspecified",
  "subcategory": "Nachos",
  "tags": [
    "meat-and-poultry",
    "nachos",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
