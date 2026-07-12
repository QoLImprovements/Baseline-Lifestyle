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
  "id": "usda-fndds-2709306",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Lime souffle",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 39.8,
    "energy_kcal": 328.0,
    "fat_g": 15.0,
    "fibre_g": 0.8,
    "folate_ug": 36.0,
    "iron_mg": 1.34,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 145.0,
    "potassium_mg": 143.0,
    "protein_g": 8.82,
    "salt_g": 0.1975,
    "sat_fat_g": 2.73,
    "sodium_mg": 79.0,
    "sugar_g": 37.3,
    "vitamin_a_ug": 110.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.84,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709306",
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
