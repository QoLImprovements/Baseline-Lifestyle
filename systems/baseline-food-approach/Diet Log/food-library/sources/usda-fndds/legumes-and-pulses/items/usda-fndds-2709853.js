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
  "id": "usda-fndds-2709853",
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
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Green beans, frozen, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 6.43,
    "energy_kcal": 28.0,
    "fat_g": 0.17,
    "fibre_g": 3.0,
    "folate_ug": 23.0,
    "iron_mg": 0.66,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 159.0,
    "protein_g": 1.49,
    "salt_g": 0.2925,
    "sat_fat_g": 0.044,
    "sodium_mg": 117.0,
    "sugar_g": 1.87,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 4.1,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 38.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709853",
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
