/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-cup-cooked",
  "description": "Pasta, noodles, cooked grains",
  "id": "usda-fndds-2708355",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Long rice noodles, made from mung beans, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 20.7,
    "energy_kcal": 84.0,
    "fat_g": 0.01,
    "fibre_g": 0.1,
    "folate_ug": 0.0,
    "iron_mg": 0.44,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.0,
    "potassium_mg": 2.0,
    "protein_g": 0.04,
    "salt_g": 0.0125,
    "sat_fat_g": 0.004,
    "sodium_mg": 5.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708355",
  "state": "Cooked",
  "subcategory": "Pasta, noodles, cooked grains",
  "tags": [
    "cooked",
    "legumes-and-pulses",
    "pasta-noodles-cooked-grains"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
