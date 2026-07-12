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
  "id": "usda-fndds-2707357",
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
  "name": "White beans, from canned, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 78.0,
    "carbs_g": 30.9,
    "energy_kcal": 168.0,
    "fat_g": 0.57,
    "fibre_g": 7.2,
    "folate_ug": 113.0,
    "iron_mg": 2.31,
    "magnesium_mg": 75.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 200.0,
    "potassium_mg": 516.0,
    "protein_g": 10.8,
    "salt_g": 0.8625,
    "sat_fat_g": 0.176,
    "sodium_mg": 345.0,
    "sugar_g": 2.07,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 1.16,
    "vitamin_k_ug": 4.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707357",
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
