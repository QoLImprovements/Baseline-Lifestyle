/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "quantity-not-specified",
  "description": "Blueberries and other berries",
  "id": "usda-fndds-2709279",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-berry",
      "kind": "unit",
      "label": "1 berry"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Cranberries, raw",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 12.0,
    "energy_kcal": 46.0,
    "fat_g": 0.13,
    "fibre_g": 3.6,
    "folate_ug": 1.0,
    "iron_mg": 0.23,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 80.0,
    "protein_g": 0.46,
    "salt_g": 0.005,
    "sat_fat_g": 0.008,
    "sodium_mg": 2.0,
    "sugar_g": 4.27,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 14.0,
    "vitamin_e_mg": 1.32,
    "vitamin_k_ug": 5.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709279",
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
