/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-item-any-size",
  "description": "Nachos",
  "id": "usda-fndds-2708581",
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
  "name": "Nachos, chicken, with beans",
  "nutritionPerBasis": {
    "calcium_mg": 53.0,
    "carbs_g": 18.3,
    "energy_kcal": 203.0,
    "fat_g": 10.5,
    "fibre_g": 2.0,
    "folate_ug": 15.0,
    "iron_mg": 1.0,
    "magnesium_mg": 32.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 132.0,
    "potassium_mg": 186.0,
    "protein_g": 9.62,
    "salt_g": 1.0625,
    "sat_fat_g": 2.21,
    "sodium_mg": 425.0,
    "sugar_g": 0.38,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 1.41,
    "vitamin_k_ug": 8.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708581",
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
