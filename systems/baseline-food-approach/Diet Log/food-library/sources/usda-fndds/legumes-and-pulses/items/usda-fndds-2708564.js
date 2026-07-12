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
  "id": "usda-fndds-2708564",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 225.0,
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
  "name": "Burrito bowl, with beans",
  "nutritionPerBasis": {
    "calcium_mg": 77.0,
    "carbs_g": 17.3,
    "energy_kcal": 129.0,
    "fat_g": 3.42,
    "fibre_g": 5.7,
    "folate_ug": 82.0,
    "iron_mg": 1.63,
    "magnesium_mg": 50.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 140.0,
    "potassium_mg": 317.0,
    "protein_g": 8.04,
    "salt_g": 0.74,
    "sat_fat_g": 1.66,
    "sodium_mg": 296.0,
    "sugar_g": 0.46,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708564",
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
