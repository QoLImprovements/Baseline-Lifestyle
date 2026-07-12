/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Nachos",
  "id": "usda-fndds-2708580",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-order",
      "kind": "unit",
      "label": "1 order"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
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
    }
  ],
  "name": "Nachos, chicken",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 19.9,
    "energy_kcal": 242.0,
    "fat_g": 13.3,
    "fibre_g": 1.4,
    "folate_ug": 11.0,
    "iron_mg": 0.86,
    "magnesium_mg": 31.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 146.0,
    "potassium_mg": 143.0,
    "protein_g": 11.2,
    "salt_g": 1.075,
    "sat_fat_g": 2.74,
    "sodium_mg": 430.0,
    "sugar_g": 0.32,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.85,
    "vitamin_k_ug": 11.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708580",
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
