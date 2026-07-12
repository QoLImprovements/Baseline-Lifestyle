/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-cup",
  "description": "Vegetable dishes",
  "id": "usda-fndds-2710046",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 214.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 107.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Corn, scalloped or pudding",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 15.0,
    "energy_kcal": 116.0,
    "fat_g": 5.12,
    "fibre_g": 1.5,
    "folate_ug": 27.0,
    "iron_mg": 0.57,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 107.0,
    "potassium_mg": 211.0,
    "protein_g": 4.54,
    "salt_g": 0.775,
    "sat_fat_g": 1.39,
    "sodium_mg": 310.0,
    "sugar_g": 4.63,
    "vitamin_a_ug": 76.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710046",
  "state": "Unspecified",
  "subcategory": "Vegetable dishes",
  "tags": [
    "sweets-and-desserts",
    "unspecified",
    "vegetable-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
