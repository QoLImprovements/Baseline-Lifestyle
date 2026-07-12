/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-whole",
  "description": "Mustard and other condiments",
  "id": "usda-fndds-2709798",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-whole",
      "kind": "unit",
      "label": "1 whole"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    }
  ],
  "name": "Peppers, hot, raw",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 7.66,
    "energy_kcal": 34.0,
    "fat_g": 0.4,
    "fibre_g": 2.2,
    "folate_ug": 25.0,
    "iron_mg": 0.64,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 34.0,
    "potassium_mg": 285.0,
    "protein_g": 1.39,
    "salt_g": 0.015,
    "sat_fat_g": 0.067,
    "sodium_mg": 6.0,
    "sugar_g": 4.71,
    "vitamin_a_ug": 51.0,
    "vitamin_c_mg": 131.0,
    "vitamin_e_mg": 2.13,
    "vitamin_k_ug": 16.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709798",
  "state": "Raw",
  "subcategory": "Mustard and other condiments",
  "tags": [
    "condiments-and-sauces",
    "mustard-and-other-condiments",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
