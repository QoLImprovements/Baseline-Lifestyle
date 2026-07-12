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
  "id": "usda-fndds-2709852",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
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
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Green beans, fresh, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 7.7,
    "energy_kcal": 42.0,
    "fat_g": 0.29,
    "fibre_g": 3.1,
    "folate_ug": 29.0,
    "iron_mg": 0.68,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 43.0,
    "potassium_mg": 301.0,
    "protein_g": 2.05,
    "salt_g": 0.3025,
    "sat_fat_g": 0.052,
    "sodium_mg": 121.0,
    "sugar_g": 2.42,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 10.8,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 45.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709852",
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
