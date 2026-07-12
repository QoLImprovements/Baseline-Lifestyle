/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "quantity-not-specified",
  "description": "String beans",
  "id": "usda-fndds-2709867",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 6.0,
      "key": "1-bean",
      "kind": "unit",
      "label": "1 bean"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Green beans, canned, reduced sodium, cooked with oil",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 4.19,
    "energy_kcal": 48.0,
    "fat_g": 3.36,
    "fibre_g": 1.8,
    "folate_ug": 26.0,
    "iron_mg": 1.03,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 93.0,
    "protein_g": 1.09,
    "salt_g": 0.005,
    "sat_fat_g": 0.489,
    "sodium_mg": 2.0,
    "sugar_g": 0.76,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 2.4,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 40.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709867",
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
