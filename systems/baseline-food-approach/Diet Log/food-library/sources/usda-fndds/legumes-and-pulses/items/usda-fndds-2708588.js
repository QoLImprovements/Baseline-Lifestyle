/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-item-any-size",
  "description": "Other Mexican mixed dishes",
  "id": "usda-fndds-2708588",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "1-item-any-size",
      "kind": "unit",
      "label": "1 item, any size"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Chimichanga, with beans",
  "nutritionPerBasis": {
    "calcium_mg": 94.0,
    "carbs_g": 26.8,
    "energy_kcal": 260.0,
    "fat_g": 13.8,
    "fibre_g": 4.4,
    "folate_ug": 78.0,
    "iron_mg": 2.19,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 150.0,
    "potassium_mg": 222.0,
    "protein_g": 7.36,
    "salt_g": 1.0225,
    "sat_fat_g": 3.16,
    "sodium_mg": 409.0,
    "sugar_g": 1.54,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 1.99,
    "vitamin_k_ug": 13.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708588",
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
