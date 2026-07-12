/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-doughnut-hole",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2708069",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-doughnut-hole",
      "kind": "unit",
      "label": "1 doughnut hole"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Doughnut holes",
  "nutritionPerBasis": {
    "calcium_mg": 69.0,
    "carbs_g": 49.5,
    "energy_kcal": 426.0,
    "fat_g": 22.9,
    "fibre_g": 1.8,
    "folate_ug": 96.0,
    "iron_mg": 2.36,
    "magnesium_mg": 16.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 178.0,
    "potassium_mg": 113.0,
    "protein_g": 5.52,
    "salt_g": 0.945,
    "sat_fat_g": 9.85,
    "sodium_mg": 378.0,
    "sugar_g": 23.5,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 1.63,
    "vitamin_k_ug": 10.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708069",
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
