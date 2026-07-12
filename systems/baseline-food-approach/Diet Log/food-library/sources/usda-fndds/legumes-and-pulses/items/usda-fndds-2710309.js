/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "quantity-not-specified",
  "description": "Jams, syrups, toppings",
  "id": "usda-fndds-2710309",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Bean paste, sweetened",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 50.0,
    "energy_kcal": 226.0,
    "fat_g": 0.47,
    "fibre_g": 5.3,
    "folate_ug": 93.0,
    "iron_mg": 2.13,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 102.0,
    "potassium_mg": 290.0,
    "protein_g": 6.22,
    "salt_g": 0.31,
    "sat_fat_g": 0.052,
    "sodium_mg": 124.0,
    "sugar_g": 33.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 6.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710309",
  "state": "Unspecified",
  "subcategory": "Jams, syrups, toppings",
  "tags": [
    "jams-syrups-toppings",
    "legumes-and-pulses",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
