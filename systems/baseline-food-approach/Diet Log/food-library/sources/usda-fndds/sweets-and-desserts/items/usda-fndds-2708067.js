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
  "id": "usda-fndds-2708067",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-stick-twist",
      "kind": "unit",
      "label": "1 stick/twist"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-doughnut",
      "kind": "unit",
      "label": "1 doughnut"
    }
  ],
  "name": "Doughnut, cake type, chocolate icing",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 50.3,
    "energy_kcal": 427.0,
    "fat_g": 23.5,
    "fibre_g": 1.5,
    "folate_ug": 74.0,
    "iron_mg": 2.31,
    "magnesium_mg": 18.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 224.0,
    "potassium_mg": 146.0,
    "protein_g": 4.47,
    "salt_g": 1.045,
    "sat_fat_g": 9.99,
    "sodium_mg": 418.0,
    "sugar_g": 26.1,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.9,
    "vitamin_k_ug": 7.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708067",
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
