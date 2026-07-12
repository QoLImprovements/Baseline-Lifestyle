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
  "id": "usda-fndds-2710316",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 213.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 107.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Haupia",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 23.5,
    "energy_kcal": 274.0,
    "fat_g": 20.4,
    "fibre_g": 2.0,
    "folate_ug": 14.0,
    "iron_mg": 1.44,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 87.0,
    "potassium_mg": 226.0,
    "protein_g": 1.98,
    "salt_g": 0.2075,
    "sat_fat_g": 18.1,
    "sodium_mg": 83.0,
    "sugar_g": 14.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.4,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710316",
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
