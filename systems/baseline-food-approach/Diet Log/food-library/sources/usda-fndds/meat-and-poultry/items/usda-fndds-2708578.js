/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-chip",
  "description": "Nachos",
  "id": "usda-fndds-2708578",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 250.0,
      "key": "1-order",
      "kind": "unit",
      "label": "1 order"
    }
  ],
  "name": "Nachos, beef or pork",
  "nutritionPerBasis": {
    "calcium_mg": 65.0,
    "carbs_g": 19.9,
    "energy_kcal": 265.0,
    "fat_g": 16.0,
    "fibre_g": 1.4,
    "folate_ug": 13.0,
    "iron_mg": 1.34,
    "magnesium_mg": 29.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 139.0,
    "potassium_mg": 145.0,
    "protein_g": 10.7,
    "salt_g": 1.0725,
    "sat_fat_g": 3.96,
    "sodium_mg": 429.0,
    "sugar_g": 0.32,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.83,
    "vitamin_k_ug": 10.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708578",
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
