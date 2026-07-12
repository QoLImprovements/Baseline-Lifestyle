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
  "id": "usda-fndds-2707369",
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
    },
    {
      "gramsPerUnit": 72.0,
      "key": "1-oz-dry-yield-after-cooking",
      "kind": "unit",
      "label": "1 oz dry, yield after cooking"
    }
  ],
  "name": "Lima beans, from dried",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 19.4,
    "energy_kcal": 165.0,
    "fat_g": 6.86,
    "fibre_g": 6.5,
    "folate_ug": 73.0,
    "iron_mg": 2.23,
    "magnesium_mg": 40.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 103.0,
    "potassium_mg": 472.0,
    "protein_g": 7.25,
    "salt_g": 0.545,
    "sat_fat_g": 0.952,
    "sodium_mg": 218.0,
    "sugar_g": 2.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.4,
    "vitamin_k_ug": 8.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707369",
  "state": "Dried",
  "subcategory": "Beans, peas, legumes",
  "tags": [
    "beans-peas-legumes",
    "dried",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
