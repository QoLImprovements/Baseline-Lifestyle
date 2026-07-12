/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "quantity-not-specified",
  "description": "Beans, peas, legumes",
  "id": "usda-fndds-2707397",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Refried beans, from fast food / restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 16.3,
    "energy_kcal": 177.0,
    "fat_g": 9.48,
    "fibre_g": 7.8,
    "folate_ug": 27.0,
    "iron_mg": 1.58,
    "magnesium_mg": 43.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 124.0,
    "potassium_mg": 390.0,
    "protein_g": 6.7,
    "salt_g": 1.005,
    "sat_fat_g": 2.17,
    "sodium_mg": 402.0,
    "sugar_g": 0.76,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.99,
    "vitamin_k_ug": 15.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707397",
  "state": "Fried",
  "subcategory": "Beans, peas, legumes",
  "tags": [
    "beans-peas-legumes",
    "fried",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
