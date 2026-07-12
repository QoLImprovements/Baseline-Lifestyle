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
  "id": "usda-fndds-2707372",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Pinto beans, from dried, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 24.4,
    "energy_kcal": 191.0,
    "fat_g": 7.11,
    "fibre_g": 8.4,
    "folate_ug": 152.0,
    "iron_mg": 1.95,
    "magnesium_mg": 46.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 137.0,
    "potassium_mg": 405.0,
    "protein_g": 8.37,
    "salt_g": 0.5425,
    "sat_fat_g": 0.996,
    "sodium_mg": 217.0,
    "sugar_g": 0.32,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 2.11,
    "vitamin_k_ug": 9.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707372",
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
