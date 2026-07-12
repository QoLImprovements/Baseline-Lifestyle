/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-small",
  "description": "Apples",
  "id": "usda-fndds-2709215",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 34.0,
      "key": "1-single-serving-package",
      "kind": "unit",
      "label": "1 single serving package"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 295.0,
      "key": "1-extra-large",
      "kind": "unit",
      "label": "1 extra large"
    },
    {
      "gramsPerUnit": 242.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Apple, raw",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 14.8,
    "energy_kcal": 61.0,
    "fat_g": 0.15,
    "fibre_g": 2.1,
    "folate_ug": 0.0,
    "iron_mg": 0.03,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 9.0,
    "potassium_mg": 104.0,
    "protein_g": 0.17,
    "salt_g": 0.0,
    "sat_fat_g": 0.028,
    "sodium_mg": 0.0,
    "sugar_g": 12.1,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 4.6,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709215",
  "state": "Raw",
  "subcategory": "Apples",
  "tags": [
    "apples",
    "fruit",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
