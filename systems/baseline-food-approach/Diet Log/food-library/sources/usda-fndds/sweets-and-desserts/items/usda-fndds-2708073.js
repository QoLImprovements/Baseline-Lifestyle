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
  "id": "usda-fndds-2708073",
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
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-stick-twist",
      "kind": "unit",
      "label": "1 stick/twist"
    }
  ],
  "name": "Doughnut, yeast type, with chocolate icing",
  "nutritionPerBasis": {
    "calcium_mg": 82.0,
    "carbs_g": 51.0,
    "energy_kcal": 416.0,
    "fat_g": 21.7,
    "fibre_g": 1.9,
    "folate_ug": 87.0,
    "iron_mg": 2.19,
    "magnesium_mg": 18.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 109.0,
    "potassium_mg": 121.0,
    "protein_g": 5.13,
    "salt_g": 0.7225,
    "sat_fat_g": 8.67,
    "sodium_mg": 289.0,
    "sugar_g": 29.7,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 1.46,
    "vitamin_k_ug": 9.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708073",
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
