/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-doughnut",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2708074",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-doughnut",
      "kind": "unit",
      "label": "1 doughnut"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-stick-twist",
      "kind": "unit",
      "label": "1 stick/twist"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Doughnut, jelly",
  "nutritionPerBasis": {
    "calcium_mg": 82.0,
    "carbs_g": 52.3,
    "energy_kcal": 390.0,
    "fat_g": 18.2,
    "fibre_g": 1.9,
    "folate_ug": 87.0,
    "iron_mg": 1.94,
    "magnesium_mg": 15.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 95.0,
    "potassium_mg": 92.0,
    "protein_g": 4.94,
    "salt_g": 0.6475,
    "sat_fat_g": 7.56,
    "sodium_mg": 259.0,
    "sugar_g": 28.4,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 1.14,
    "vitamin_k_ug": 9.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708074",
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
