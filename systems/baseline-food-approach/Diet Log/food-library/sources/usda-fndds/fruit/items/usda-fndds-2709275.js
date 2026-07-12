/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-cup",
  "description": "Blueberries and other berries",
  "id": "usda-fndds-2709275",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-berry",
      "kind": "unit",
      "label": "1 berry"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Blueberries, raw",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 14.6,
    "energy_kcal": 64.0,
    "fat_g": 0.31,
    "fibre_g": 2.4,
    "folate_ug": 6.0,
    "iron_mg": 0.34,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 13.0,
    "potassium_mg": 86.0,
    "protein_g": 0.7,
    "salt_g": 0.0,
    "sat_fat_g": 0.028,
    "sodium_mg": 0.0,
    "sugar_g": 9.36,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 8.1,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 19.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709275",
  "state": "Raw",
  "subcategory": "Blueberries and other berries",
  "tags": [
    "blueberries-and-other-berries",
    "fruit",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
