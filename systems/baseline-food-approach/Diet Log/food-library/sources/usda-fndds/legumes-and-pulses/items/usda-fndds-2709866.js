/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-cup",
  "description": "String beans",
  "id": "usda-fndds-2709866",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "1-bean",
      "kind": "unit",
      "label": "1 bean"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-cut-piece",
      "kind": "unit",
      "label": "1 cut piece"
    },
    {
      "gramsPerUnit": 73.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Green beans, canned, reduced sodium, cooked, fat added, NS as to fat type",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 4.2,
    "energy_kcal": 44.0,
    "fat_g": 3.0,
    "fibre_g": 1.8,
    "folate_ug": 26.0,
    "iron_mg": 1.03,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 94.0,
    "protein_g": 1.1,
    "salt_g": 0.0275,
    "sat_fat_g": 0.768,
    "sodium_mg": 11.0,
    "sugar_g": 0.76,
    "vitamin_a_ug": 29.0,
    "vitamin_c_mg": 2.4,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 39.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709866",
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
