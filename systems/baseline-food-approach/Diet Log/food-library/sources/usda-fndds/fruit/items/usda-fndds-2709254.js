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
  "id": "usda-fndds-2709254",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-fruit",
      "kind": "unit",
      "label": "1 fruit"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-slice-chunk",
      "kind": "unit",
      "label": "1 slice/chunk"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Pear, raw",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 15.2,
    "energy_kcal": 59.0,
    "fat_g": 0.15,
    "fibre_g": 3.1,
    "folate_ug": 7.0,
    "iron_mg": 0.18,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 104.0,
    "protein_g": 0.37,
    "salt_g": 0.0075,
    "sat_fat_g": 0.022,
    "sodium_mg": 3.0,
    "sugar_g": 9.73,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 4.3,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709254",
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
