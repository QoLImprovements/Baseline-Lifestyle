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
  "id": "usda-fndds-2705689",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 260.0,
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
  "name": "Pudding, chocolate, made from dry mix",
  "nutritionPerBasis": {
    "calcium_mg": 104.0,
    "carbs_g": 20.3,
    "energy_kcal": 113.0,
    "fat_g": 2.1,
    "fibre_g": 0.7,
    "folate_ug": 2.0,
    "iron_mg": 0.24,
    "magnesium_mg": 18.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 97.0,
    "potassium_mg": 171.0,
    "protein_g": 3.14,
    "salt_g": 0.905,
    "sat_fat_g": 1.17,
    "sodium_mg": 362.0,
    "sugar_g": 16.6,
    "vitamin_a_ug": 47.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705689",
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
