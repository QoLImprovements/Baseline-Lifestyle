/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-pastry",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2708051",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 46.0,
      "key": "1-pastry",
      "kind": "unit",
      "label": "1 pastry"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pastry, cookie type, fried",
  "nutritionPerBasis": {
    "calcium_mg": 74.0,
    "carbs_g": 35.5,
    "energy_kcal": 397.0,
    "fat_g": 25.7,
    "fibre_g": 1.0,
    "folate_ug": 49.0,
    "iron_mg": 1.82,
    "magnesium_mg": 14.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 110.0,
    "potassium_mg": 127.0,
    "protein_g": 5.97,
    "salt_g": 0.1675,
    "sat_fat_g": 7.13,
    "sodium_mg": 67.0,
    "sugar_g": 12.9,
    "vitamin_a_ug": 117.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 3.37,
    "vitamin_k_ug": 16.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708051",
  "state": "Fried",
  "subcategory": "Doughnuts, sweet rolls, pastries",
  "tags": [
    "doughnuts-sweet-rolls-pastries",
    "fried",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
