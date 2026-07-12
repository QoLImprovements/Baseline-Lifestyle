/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-oz-dry-yield-after-cooking",
  "description": "Beans, peas, legumes",
  "id": "usda-fndds-2707389",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 72.0,
      "key": "1-oz-dry-yield-after-cooking",
      "kind": "unit",
      "label": "1 oz dry, yield after cooking"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Mung beans, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 17.8,
    "energy_kcal": 156.0,
    "fat_g": 6.86,
    "fibre_g": 7.1,
    "folate_ug": 140.0,
    "iron_mg": 1.31,
    "magnesium_mg": 45.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 92.0,
    "potassium_mg": 247.0,
    "protein_g": 6.52,
    "salt_g": 0.545,
    "sat_fat_g": 0.977,
    "sodium_mg": 218.0,
    "sugar_g": 1.86,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 1.38,
    "vitamin_k_ug": 9.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707389",
  "state": "Cooked",
  "subcategory": "Beans, peas, legumes",
  "tags": [
    "beans-peas-legumes",
    "cooked",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
