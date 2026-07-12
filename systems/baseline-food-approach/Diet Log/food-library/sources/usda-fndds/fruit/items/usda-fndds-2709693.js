/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other red and orange vegetables",
  "id": "usda-fndds-2709693",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Winter squash, raw",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 6.5,
    "energy_kcal": 26.0,
    "fat_g": 0.1,
    "fibre_g": 0.5,
    "folate_ug": 16.0,
    "iron_mg": 0.8,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 44.0,
    "potassium_mg": 340.0,
    "protein_g": 1.0,
    "salt_g": 0.0025,
    "sat_fat_g": 0.052,
    "sodium_mg": 1.0,
    "sugar_g": 2.76,
    "vitamin_a_ug": 426.0,
    "vitamin_c_mg": 9.0,
    "vitamin_e_mg": 1.06,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709693",
  "state": "Raw",
  "subcategory": "Other red and orange vegetables",
  "tags": [
    "fruit",
    "other-red-and-orange-vegetables",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
