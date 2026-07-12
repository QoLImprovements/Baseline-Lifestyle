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
  "id": "usda-fndds-2705684",
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
    },
    {
      "gramsPerUnit": 19.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    }
  ],
  "name": "Creme brulee",
  "nutritionPerBasis": {
    "calcium_mg": 115.0,
    "carbs_g": 17.8,
    "energy_kcal": 113.0,
    "fat_g": 2.83,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.16,
    "magnesium_mg": 12.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 107.0,
    "potassium_mg": 150.0,
    "protein_g": 4.06,
    "salt_g": 0.185,
    "sat_fat_g": 1.39,
    "sodium_mg": 74.0,
    "sugar_g": 17.9,
    "vitamin_a_ug": 67.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705684",
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
