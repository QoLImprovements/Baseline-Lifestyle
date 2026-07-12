/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-pea",
  "description": "Beans, peas, legumes",
  "id": "usda-fndds-2707418",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-pea",
      "kind": "unit",
      "label": "1 pea"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chickpeas, from canned, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 22.4,
    "energy_kcal": 146.0,
    "fat_g": 3.24,
    "fibre_g": 7.3,
    "folate_ug": 40.0,
    "iron_mg": 2.05,
    "magnesium_mg": 45.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 133.0,
    "potassium_mg": 240.0,
    "protein_g": 8.19,
    "salt_g": 0.8175,
    "sat_fat_g": 0.339,
    "sodium_mg": 327.0,
    "sugar_g": 4.31,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 3.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707418",
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
