/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-stick-twist",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2708066",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-stick-twist",
      "kind": "unit",
      "label": "1 stick/twist"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-doughnut",
      "kind": "unit",
      "label": "1 doughnut"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Doughnut, cake type, with icing",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 51.2,
    "energy_kcal": 431.0,
    "fat_g": 23.2,
    "fibre_g": 1.4,
    "folate_ug": 75.0,
    "iron_mg": 2.06,
    "magnesium_mg": 14.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 212.0,
    "potassium_mg": 114.0,
    "protein_g": 4.25,
    "salt_g": 1.045,
    "sat_fat_g": 9.48,
    "sodium_mg": 418.0,
    "sugar_g": 27.1,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.9,
    "vitamin_k_ug": 10.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708066",
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
