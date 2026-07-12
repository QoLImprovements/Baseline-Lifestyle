/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other dark green vegetables",
  "id": "usda-fndds-2709588",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Dandelion greens, raw",
  "nutritionPerBasis": {
    "calcium_mg": 187.0,
    "carbs_g": 9.2,
    "energy_kcal": 45.0,
    "fat_g": 0.7,
    "fibre_g": 3.5,
    "folate_ug": 27.0,
    "iron_mg": 3.1,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 66.0,
    "potassium_mg": 397.0,
    "protein_g": 2.7,
    "salt_g": 0.19,
    "sat_fat_g": 0.17,
    "sodium_mg": 76.0,
    "sugar_g": 0.71,
    "vitamin_a_ug": 508.0,
    "vitamin_c_mg": 35.0,
    "vitamin_e_mg": 3.44,
    "vitamin_k_ug": 778.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709588",
  "state": "Raw",
  "subcategory": "Other dark green vegetables",
  "tags": [
    "other-dark-green-vegetables",
    "raw",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
