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
  "id": "usda-fndds-2709854",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
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
      "gramsPerUnit": 140.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-cut-piece",
      "kind": "unit",
      "label": "1 cut piece"
    }
  ],
  "name": "Green beans, canned, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 4.11,
    "energy_kcal": 24.0,
    "fat_g": 0.39,
    "fibre_g": 1.9,
    "folate_ug": 23.0,
    "iron_mg": 0.78,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 97.0,
    "protein_g": 1.04,
    "salt_g": 0.705,
    "sat_fat_g": 0.093,
    "sodium_mg": 282.0,
    "sugar_g": 1.29,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 2.5,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 38.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709854",
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
