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
  "id": "usda-fndds-2705680",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    }
  ],
  "name": "Pudding, bread",
  "nutritionPerBasis": {
    "calcium_mg": 134.0,
    "carbs_g": 23.5,
    "energy_kcal": 156.0,
    "fat_g": 4.86,
    "fibre_g": 1.0,
    "folate_ug": 20.0,
    "iron_mg": 0.97,
    "magnesium_mg": 18.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 119.0,
    "potassium_mg": 211.0,
    "protein_g": 5.6,
    "salt_g": 0.515,
    "sat_fat_g": 1.7,
    "sodium_mg": 206.0,
    "sugar_g": 15.1,
    "vitamin_a_ug": 77.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705680",
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
