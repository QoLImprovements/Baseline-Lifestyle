/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-regular-ear",
  "description": "Corn",
  "id": "usda-fndds-2709783",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "1-regular-ear",
      "kind": "unit",
      "label": "1 regular ear"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Corn, raw",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 18.7,
    "energy_kcal": 86.0,
    "fat_g": 1.35,
    "fibre_g": 2.0,
    "folate_ug": 42.0,
    "iron_mg": 0.52,
    "magnesium_mg": 37.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 89.0,
    "potassium_mg": 270.0,
    "protein_g": 3.27,
    "salt_g": 0.0375,
    "sat_fat_g": 0.325,
    "sodium_mg": 15.0,
    "sugar_g": 6.26,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 6.8,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709783",
  "state": "Raw",
  "subcategory": "Corn",
  "tags": [
    "corn",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
