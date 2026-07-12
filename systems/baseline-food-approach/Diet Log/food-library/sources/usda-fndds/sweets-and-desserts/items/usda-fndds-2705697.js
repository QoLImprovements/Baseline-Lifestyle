/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-cup",
  "description": "Pudding",
  "id": "usda-fndds-2705697",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Banana pudding",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 28.0,
    "energy_kcal": 160.0,
    "fat_g": 4.26,
    "fibre_g": 0.7,
    "folate_ug": 15.0,
    "iron_mg": 0.42,
    "magnesium_mg": 13.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 57.0,
    "potassium_mg": 149.0,
    "protein_g": 2.57,
    "salt_g": 0.32,
    "sat_fat_g": 1.22,
    "sodium_mg": 128.0,
    "sugar_g": 19.7,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 3.2,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705697",
  "state": "Unspecified",
  "subcategory": "Pudding",
  "tags": [
    "pudding",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
