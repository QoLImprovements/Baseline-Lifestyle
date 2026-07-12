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
  "id": "usda-fndds-2709851",
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
      "gramsPerUnit": 145.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Green beans, cooked, from restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 7.32,
    "energy_kcal": 78.0,
    "fat_g": 4.6,
    "fibre_g": 3.0,
    "folate_ug": 28.0,
    "iron_mg": 0.65,
    "magnesium_mg": 28.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 41.0,
    "potassium_mg": 287.0,
    "protein_g": 1.96,
    "salt_g": 0.515,
    "sat_fat_g": 1.18,
    "sodium_mg": 206.0,
    "sugar_g": 2.31,
    "vitamin_a_ug": 52.0,
    "vitamin_c_mg": 10.2,
    "vitamin_e_mg": 1.05,
    "vitamin_k_ug": 46.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709851",
  "state": "Cooked",
  "subcategory": "String beans",
  "tags": [
    "cooked",
    "legumes-and-pulses",
    "string-beans"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
