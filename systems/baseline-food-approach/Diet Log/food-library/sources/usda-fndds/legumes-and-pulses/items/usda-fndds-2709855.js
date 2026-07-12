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
  "id": "usda-fndds-2709855",
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
  "name": "Green beans, NS as to form, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 5.74,
    "energy_kcal": 55.0,
    "fat_g": 2.93,
    "fibre_g": 2.4,
    "folate_ug": 25.0,
    "iron_mg": 0.71,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 194.0,
    "protein_g": 1.51,
    "salt_g": 0.51,
    "sat_fat_g": 0.751,
    "sodium_mg": 204.0,
    "sugar_g": 1.81,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 6.5,
    "vitamin_e_mg": 0.61,
    "vitamin_k_ug": 43.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709855",
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
