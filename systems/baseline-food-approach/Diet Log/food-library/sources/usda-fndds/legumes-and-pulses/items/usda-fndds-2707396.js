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
  "id": "usda-fndds-2707396",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Refried beans",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 13.6,
    "energy_kcal": 90.0,
    "fat_g": 2.01,
    "fibre_g": 3.7,
    "folate_ug": 10.0,
    "iron_mg": 1.44,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 92.0,
    "potassium_mg": 319.0,
    "protein_g": 4.98,
    "salt_g": 0.925,
    "sat_fat_g": 0.631,
    "sodium_mg": 370.0,
    "sugar_g": 0.54,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 5.7,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707396",
  "state": "Fried",
  "subcategory": "Beans, peas, legumes",
  "tags": [
    "beans-peas-legumes",
    "fried",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
