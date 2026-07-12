/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "quantity-not-specified",
  "description": "Apples",
  "id": "usda-fndds-2709294",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 320.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 320.0,
      "key": "1-apple-any-size",
      "kind": "unit",
      "label": "1 apple, any size"
    }
  ],
  "name": "Apple, candied",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 29.6,
    "energy_kcal": 134.0,
    "fat_g": 2.15,
    "fibre_g": 1.8,
    "folate_ug": 3.0,
    "iron_mg": 0.12,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 134.0,
    "protein_g": 1.34,
    "salt_g": 0.155,
    "sat_fat_g": 0.64,
    "sodium_mg": 62.0,
    "sugar_g": 24.2,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 3.6,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709294",
  "state": "Unspecified",
  "subcategory": "Apples",
  "tags": [
    "apples",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
