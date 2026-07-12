/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-fruit",
  "description": "Pears",
  "id": "usda-fndds-2709255",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 275.0,
      "key": "1-fruit",
      "kind": "unit",
      "label": "1 fruit"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 275.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pear, Asian, raw",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 10.6,
    "energy_kcal": 42.0,
    "fat_g": 0.23,
    "fibre_g": 3.6,
    "folate_ug": 8.0,
    "iron_mg": 0.0,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 121.0,
    "protein_g": 0.5,
    "salt_g": 0.0,
    "sat_fat_g": 0.012,
    "sodium_mg": 0.0,
    "sugar_g": 7.05,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.8,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 4.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709255",
  "state": "Raw",
  "subcategory": "Pears",
  "tags": [
    "fruit",
    "pears",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
