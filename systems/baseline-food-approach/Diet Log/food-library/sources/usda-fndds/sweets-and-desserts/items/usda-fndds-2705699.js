/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pudding",
  "id": "usda-fndds-2705699",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 300.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Dulce de leche",
  "nutritionPerBasis": {
    "calcium_mg": 251.0,
    "carbs_g": 55.4,
    "energy_kcal": 315.0,
    "fat_g": 7.35,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.17,
    "magnesium_mg": 22.0,
    "omega3_g": 0.013,
    "phosphorus_mg": 193.0,
    "potassium_mg": 350.0,
    "protein_g": 6.84,
    "salt_g": 0.3225,
    "sat_fat_g": 4.53,
    "sodium_mg": 129.0,
    "sugar_g": 49.7,
    "vitamin_a_ug": 74.0,
    "vitamin_c_mg": 2.6,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705699",
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
