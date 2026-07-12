/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other Mexican mixed dishes",
  "id": "usda-fndds-2708584",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-item-any-size",
      "kind": "unit",
      "label": "1 item, any size"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Gordita, with beans",
  "nutritionPerBasis": {
    "calcium_mg": 92.0,
    "carbs_g": 20.2,
    "energy_kcal": 207.0,
    "fat_g": 11.8,
    "fibre_g": 2.9,
    "folate_ug": 42.0,
    "iron_mg": 2.05,
    "magnesium_mg": 34.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 120.0,
    "potassium_mg": 214.0,
    "protein_g": 5.83,
    "salt_g": 0.9125,
    "sat_fat_g": 3.14,
    "sodium_mg": 365.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 1.3,
    "vitamin_k_ug": 8.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708584",
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
