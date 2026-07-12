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
  "id": "usda-fndds-2707416",
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
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-oz-dry-yield-after-cooking",
      "kind": "unit",
      "label": "1 oz dry, yield after cooking"
    }
  ],
  "name": "Chickpeas, from dried, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 27.3,
    "energy_kcal": 163.0,
    "fat_g": 2.58,
    "fibre_g": 7.6,
    "folate_ug": 162.0,
    "iron_mg": 2.87,
    "magnesium_mg": 48.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 167.0,
    "potassium_mg": 289.0,
    "protein_g": 8.81,
    "salt_g": 0.595,
    "sat_fat_g": 0.267,
    "sodium_mg": 238.0,
    "sugar_g": 4.77,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 4.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707416",
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
