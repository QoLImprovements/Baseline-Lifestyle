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
  "id": "usda-fndds-2707410",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Baked beans, reduced sodium",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 20.4,
    "energy_kcal": 104.0,
    "fat_g": 0.4,
    "fibre_g": 5.5,
    "folate_ug": 23.0,
    "iron_mg": 0.29,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 103.0,
    "potassium_mg": 294.0,
    "protein_g": 4.77,
    "salt_g": 0.675,
    "sat_fat_g": 0.102,
    "sodium_mg": 270.0,
    "sugar_g": 7.73,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 2.9,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707410",
  "state": "Baked",
  "subcategory": "Beans, peas, legumes",
  "tags": [
    "baked",
    "beans-peas-legumes",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
