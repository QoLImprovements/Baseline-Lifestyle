/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-cup",
  "description": "Beans, peas, legumes",
  "id": "usda-fndds-2707374",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pinto beans, from canned, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 75.0,
    "carbs_g": 24.3,
    "energy_kcal": 188.0,
    "fat_g": 7.13,
    "fibre_g": 7.4,
    "folate_ug": 37.0,
    "iron_mg": 2.37,
    "magnesium_mg": 53.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 147.0,
    "potassium_mg": 442.0,
    "protein_g": 7.37,
    "salt_g": 0.7575,
    "sat_fat_g": 1.02,
    "sodium_mg": 303.0,
    "sugar_g": 1.64,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 2.06,
    "vitamin_k_ug": 9.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707374",
  "state": "Canned",
  "subcategory": "Beans, peas, legumes",
  "tags": [
    "beans-peas-legumes",
    "canned",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
