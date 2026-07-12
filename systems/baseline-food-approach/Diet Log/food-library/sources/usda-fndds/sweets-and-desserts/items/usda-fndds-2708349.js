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
  "id": "usda-fndds-2708349",
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
      "gramsPerUnit": 90.0,
      "key": "1-cake-6-dia",
      "kind": "unit",
      "label": "1 cake (6\" dia)"
    }
  ],
  "name": "Funnel cake with sugar",
  "nutritionPerBasis": {
    "calcium_mg": 138.0,
    "carbs_g": 43.5,
    "energy_kcal": 353.0,
    "fat_g": 16.6,
    "fibre_g": 1.0,
    "folate_ug": 45.0,
    "iron_mg": 2.31,
    "magnesium_mg": 19.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 149.0,
    "potassium_mg": 174.0,
    "protein_g": 7.87,
    "salt_g": 0.695,
    "sat_fat_g": 3.12,
    "sodium_mg": 278.0,
    "sugar_g": 15.9,
    "vitamin_a_ug": 65.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.69,
    "vitamin_k_ug": 13.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708349",
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
