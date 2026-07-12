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
  "id": "usda-fndds-2705701",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 73.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Trifle",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 23.2,
    "energy_kcal": 169.0,
    "fat_g": 7.15,
    "fibre_g": 0.4,
    "folate_ug": 16.0,
    "iron_mg": 0.83,
    "magnesium_mg": 10.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 90.0,
    "potassium_mg": 125.0,
    "protein_g": 3.52,
    "salt_g": 0.45,
    "sat_fat_g": 4.07,
    "sodium_mg": 180.0,
    "sugar_g": 15.8,
    "vitamin_a_ug": 82.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705701",
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
