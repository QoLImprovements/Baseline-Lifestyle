/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-order",
  "description": "Nachos",
  "id": "usda-fndds-2708576",
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
    },
    {
      "gramsPerUnit": 7.0,
      "key": "1-chip",
      "kind": "unit",
      "label": "1 chip"
    }
  ],
  "name": "Nachos, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 74.0,
    "carbs_g": 23.8,
    "energy_kcal": 265.0,
    "fat_g": 15.8,
    "fibre_g": 1.7,
    "folate_ug": 13.0,
    "iron_mg": 1.11,
    "magnesium_mg": 31.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 125.0,
    "potassium_mg": 112.0,
    "protein_g": 7.6,
    "salt_g": 1.22,
    "sat_fat_g": 3.48,
    "sodium_mg": 488.0,
    "sugar_g": 0.39,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.16,
    "vitamin_k_ug": 12.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708576",
  "state": "Unspecified",
  "subcategory": "Nachos",
  "tags": [
    "nachos",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
