/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-cubic-inch",
  "description": "Pudding",
  "id": "usda-fndds-2705683",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Flan",
  "nutritionPerBasis": {
    "calcium_mg": 95.0,
    "carbs_g": 28.2,
    "energy_kcal": 178.0,
    "fat_g": 4.94,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 0.49,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 110.0,
    "potassium_mg": 129.0,
    "protein_g": 5.23,
    "salt_g": 0.4075,
    "sat_fat_g": 2.24,
    "sodium_mg": 163.0,
    "sugar_g": 28.1,
    "vitamin_a_ug": 65.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705683",
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
