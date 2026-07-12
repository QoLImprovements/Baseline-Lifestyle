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
  "id": "usda-fndds-2709769",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "1-bean",
      "kind": "unit",
      "label": "1 bean"
    }
  ],
  "name": "Green beans, raw",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 7.41,
    "energy_kcal": 40.0,
    "fat_g": 0.28,
    "fibre_g": 3.0,
    "folate_ug": 33.0,
    "iron_mg": 0.65,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 41.0,
    "potassium_mg": 290.0,
    "protein_g": 1.97,
    "salt_g": 0.0,
    "sat_fat_g": 0.05,
    "sodium_mg": 0.0,
    "sugar_g": 2.33,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 12.2,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 43.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709769",
  "state": "Raw",
  "subcategory": "String beans",
  "tags": [
    "legumes-and-pulses",
    "raw",
    "string-beans"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
