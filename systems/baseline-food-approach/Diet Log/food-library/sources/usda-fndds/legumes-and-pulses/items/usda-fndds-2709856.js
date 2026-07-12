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
  "id": "usda-fndds-2709856",
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
      "gramsPerUnit": 145.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
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
    }
  ],
  "name": "Green beans, fresh, cooked, fat added, NS as to fat type",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 7.48,
    "energy_kcal": 64.0,
    "fat_g": 2.93,
    "fibre_g": 3.0,
    "folate_ug": 28.0,
    "iron_mg": 0.66,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 42.0,
    "potassium_mg": 293.0,
    "protein_g": 2.0,
    "salt_g": 0.315,
    "sat_fat_g": 0.744,
    "sodium_mg": 126.0,
    "sugar_g": 2.36,
    "vitamin_a_ug": 45.0,
    "vitamin_c_mg": 10.5,
    "vitamin_e_mg": 0.81,
    "vitamin_k_ug": 46.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709856",
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
