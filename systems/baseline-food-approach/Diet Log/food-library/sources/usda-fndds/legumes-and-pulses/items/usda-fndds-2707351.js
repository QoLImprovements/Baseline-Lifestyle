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
  "id": "usda-fndds-2707351",
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
  "name": "Beans, from canned, NS as to type, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 25.0,
    "energy_kcal": 136.0,
    "fat_g": 0.81,
    "fibre_g": 8.3,
    "folate_ug": 50.0,
    "iron_mg": 2.53,
    "magnesium_mg": 54.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 155.0,
    "potassium_mg": 458.0,
    "protein_g": 7.96,
    "salt_g": 0.8075,
    "sat_fat_g": 0.172,
    "sodium_mg": 323.0,
    "sugar_g": 1.36,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 0.92,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707351",
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
