/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-cup",
  "description": "Other Mexican mixed dishes",
  "id": "usda-fndds-2708609",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-item-any-size",
      "kind": "unit",
      "label": "1 item, any size"
    }
  ],
  "name": "Pupusa, with beans",
  "nutritionPerBasis": {
    "calcium_mg": 51.0,
    "carbs_g": 31.5,
    "energy_kcal": 229.0,
    "fat_g": 9.01,
    "fibre_g": 5.8,
    "folate_ug": 4.0,
    "iron_mg": 1.46,
    "magnesium_mg": 54.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 144.0,
    "potassium_mg": 305.0,
    "protein_g": 5.59,
    "salt_g": 0.7625,
    "sat_fat_g": 2.19,
    "sodium_mg": 305.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 7.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708609",
  "state": "Unspecified",
  "subcategory": "Other Mexican mixed dishes",
  "tags": [
    "legumes-and-pulses",
    "other-mexican-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
