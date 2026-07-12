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
  "id": "usda-fndds-2708350",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cake-6-dia",
      "kind": "unit",
      "label": "1 cake (6\" dia)"
    }
  ],
  "name": "Funnel cake with sugar and fruit",
  "nutritionPerBasis": {
    "calcium_mg": 103.0,
    "carbs_g": 55.2,
    "energy_kcal": 380.0,
    "fat_g": 15.7,
    "fibre_g": 0.9,
    "folate_ug": 35.0,
    "iron_mg": 1.8,
    "magnesium_mg": 16.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 111.0,
    "potassium_mg": 146.0,
    "protein_g": 5.84,
    "salt_g": 0.5275,
    "sat_fat_g": 2.76,
    "sodium_mg": 211.0,
    "sugar_g": 21.3,
    "vitamin_a_ug": 48.0,
    "vitamin_c_mg": 4.8,
    "vitamin_e_mg": 2.68,
    "vitamin_k_ug": 13.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708350",
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
