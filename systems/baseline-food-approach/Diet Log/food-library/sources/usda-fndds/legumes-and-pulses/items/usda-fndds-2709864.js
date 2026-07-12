/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-cut-piece",
  "description": "String beans",
  "id": "usda-fndds-2709864",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    },
    {
      "gramsPerUnit": 73.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "1-bean",
      "kind": "unit",
      "label": "1 bean"
    }
  ],
  "name": "Green beans, canned, cooked with butter or margarine",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 4.0,
    "energy_kcal": 43.0,
    "fat_g": 2.57,
    "fibre_g": 1.8,
    "folate_ug": 22.0,
    "iron_mg": 0.76,
    "magnesium_mg": 13.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 23.0,
    "potassium_mg": 95.0,
    "protein_g": 1.03,
    "salt_g": 0.7275,
    "sat_fat_g": 1.04,
    "sodium_mg": 291.0,
    "sugar_g": 1.26,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 2.4,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 39.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709864",
  "state": "Canned",
  "subcategory": "String beans",
  "tags": [
    "canned",
    "legumes-and-pulses",
    "string-beans"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
