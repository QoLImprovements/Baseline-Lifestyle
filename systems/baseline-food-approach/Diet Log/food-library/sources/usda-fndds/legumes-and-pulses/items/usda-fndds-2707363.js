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
  "id": "usda-fndds-2707363",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Black beans, from canned, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 51.0,
    "carbs_g": 24.3,
    "energy_kcal": 134.0,
    "fat_g": 0.43,
    "fibre_g": 10.1,
    "folate_ug": 85.0,
    "iron_mg": 2.79,
    "magnesium_mg": 51.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 159.0,
    "potassium_mg": 453.0,
    "protein_g": 8.87,
    "salt_g": 0.87,
    "sat_fat_g": 0.11,
    "sodium_mg": 348.0,
    "sugar_g": 0.34,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.8,
    "vitamin_e_mg": 0.91,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707363",
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
