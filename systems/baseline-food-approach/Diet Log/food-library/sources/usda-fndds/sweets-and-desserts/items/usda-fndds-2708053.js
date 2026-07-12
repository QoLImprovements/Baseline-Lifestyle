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
  "id": "usda-fndds-2708053",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 11.0,
      "key": "1-pastry",
      "kind": "unit",
      "label": "1 pastry"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 47.0,
      "key": "1-patty-shell",
      "kind": "unit",
      "label": "1 patty shell"
    }
  ],
  "name": "Pastry, puff",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 45.7,
    "energy_kcal": 558.0,
    "fat_g": 38.5,
    "fibre_g": 1.5,
    "folate_ug": 55.0,
    "iron_mg": 2.6,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 60.0,
    "potassium_mg": 62.0,
    "protein_g": 7.4,
    "salt_g": 0.6325,
    "sat_fat_g": 5.5,
    "sodium_mg": 253.0,
    "sugar_g": 0.75,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 16.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708053",
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
