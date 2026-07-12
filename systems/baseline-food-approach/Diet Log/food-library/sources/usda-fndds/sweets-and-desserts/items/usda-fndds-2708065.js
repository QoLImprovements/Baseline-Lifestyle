/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "quantity-not-specified",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2708065",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-doughnut",
      "kind": "unit",
      "label": "1 doughnut"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-stick-twist",
      "kind": "unit",
      "label": "1 stick/twist"
    }
  ],
  "name": "Doughnut, cake type, powdered sugar",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 51.1,
    "energy_kcal": 431.0,
    "fat_g": 23.0,
    "fibre_g": 1.6,
    "folate_ug": 85.0,
    "iron_mg": 2.34,
    "magnesium_mg": 16.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 240.0,
    "potassium_mg": 124.0,
    "protein_g": 4.9,
    "salt_g": 1.1,
    "sat_fat_g": 10.3,
    "sodium_mg": 440.0,
    "sugar_g": 24.3,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.84,
    "vitamin_k_ug": 9.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708065",
  "state": "Unspecified",
  "subcategory": "Doughnuts, sweet rolls, pastries",
  "tags": [
    "doughnuts-sweet-rolls-pastries",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
