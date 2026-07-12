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
  "id": "usda-fndds-2708072",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-doughnut",
      "kind": "unit",
      "label": "1 doughnut"
    },
    {
      "gramsPerUnit": 60.0,
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
      "gramsPerUnit": 60.0,
      "key": "1-stick-twist",
      "kind": "unit",
      "label": "1 stick/twist"
    }
  ],
  "name": "Doughnut, yeast type",
  "nutritionPerBasis": {
    "calcium_mg": 101.0,
    "carbs_g": 47.9,
    "energy_kcal": 421.0,
    "fat_g": 22.7,
    "fibre_g": 2.1,
    "folate_ug": 108.0,
    "iron_mg": 2.38,
    "magnesium_mg": 17.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 117.0,
    "potassium_mg": 102.0,
    "protein_g": 6.14,
    "salt_g": 0.79,
    "sat_fat_g": 9.45,
    "sodium_mg": 316.0,
    "sugar_g": 22.8,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 1.43,
    "vitamin_k_ug": 11.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708072",
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
