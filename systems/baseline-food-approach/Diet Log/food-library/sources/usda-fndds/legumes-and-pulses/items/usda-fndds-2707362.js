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
  "id": "usda-fndds-2707362",
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
  "name": "Black beans, from canned, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 23.4,
    "energy_kcal": 178.0,
    "fat_g": 5.92,
    "fibre_g": 9.8,
    "folate_ug": 82.0,
    "iron_mg": 2.7,
    "magnesium_mg": 50.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 153.0,
    "potassium_mg": 436.0,
    "protein_g": 8.54,
    "salt_g": 0.8375,
    "sat_fat_g": 0.842,
    "sodium_mg": 335.0,
    "sugar_g": 0.33,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.6,
    "vitamin_e_mg": 1.92,
    "vitamin_k_ug": 8.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707362",
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
