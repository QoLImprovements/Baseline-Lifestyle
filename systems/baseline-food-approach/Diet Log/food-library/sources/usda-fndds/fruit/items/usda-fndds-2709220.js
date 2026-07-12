/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-cup",
  "description": "Apples",
  "id": "usda-fndds-2709220",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "1-apple-any-size",
      "kind": "unit",
      "label": "1 apple, any size"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Apple, baked",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 22.7,
    "energy_kcal": 113.0,
    "fat_g": 3.08,
    "fibre_g": 2.5,
    "folate_ug": 2.0,
    "iron_mg": 0.19,
    "magnesium_mg": 6.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 13.0,
    "potassium_mg": 114.0,
    "protein_g": 0.32,
    "salt_g": 0.01,
    "sat_fat_g": 1.64,
    "sodium_mg": 4.0,
    "sugar_g": 19.0,
    "vitamin_a_ug": 29.0,
    "vitamin_c_mg": 3.9,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709220",
  "state": "Baked",
  "subcategory": "Apples",
  "tags": [
    "apples",
    "baked",
    "fruit"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
