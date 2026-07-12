/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-item-any-size",
  "description": "Nachos",
  "id": "usda-fndds-2708577",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-item-any-size",
      "kind": "unit",
      "label": "1 item, any size"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "1-chip",
      "kind": "unit",
      "label": "1 chip"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-order",
      "kind": "unit",
      "label": "1 order"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Nachos, cheese only",
  "nutritionPerBasis": {
    "calcium_mg": 83.0,
    "carbs_g": 27.8,
    "energy_kcal": 266.0,
    "fat_g": 15.7,
    "fibre_g": 2.0,
    "folate_ug": 14.0,
    "iron_mg": 0.88,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 112.0,
    "potassium_mg": 79.0,
    "protein_g": 4.46,
    "salt_g": 1.3675,
    "sat_fat_g": 2.99,
    "sodium_mg": 547.0,
    "sugar_g": 0.45,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.49,
    "vitamin_k_ug": 14.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708577",
  "state": "Unspecified",
  "subcategory": "Nachos",
  "tags": [
    "milk-dairy-and-eggs",
    "nachos",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
