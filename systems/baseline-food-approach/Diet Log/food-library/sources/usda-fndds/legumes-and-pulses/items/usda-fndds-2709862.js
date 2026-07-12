/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-bean",
  "description": "String beans",
  "id": "usda-fndds-2709862",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "1-bean",
      "kind": "unit",
      "label": "1 bean"
    },
    {
      "gramsPerUnit": 73.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-cut-piece",
      "kind": "unit",
      "label": "1 cut piece"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Green beans, frozen, cooked with butter or margarine",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 6.26,
    "energy_kcal": 47.0,
    "fat_g": 2.35,
    "fibre_g": 2.9,
    "folate_ug": 22.0,
    "iron_mg": 0.64,
    "magnesium_mg": 18.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 29.0,
    "potassium_mg": 155.0,
    "protein_g": 1.46,
    "salt_g": 0.3275,
    "sat_fat_g": 0.987,
    "sodium_mg": 131.0,
    "sugar_g": 1.83,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 38.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709862",
  "state": "Frozen",
  "subcategory": "String beans",
  "tags": [
    "frozen",
    "legumes-and-pulses",
    "string-beans"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
