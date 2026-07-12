/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other Mexican mixed dishes",
  "id": "usda-fndds-2708594",
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
      "gramsPerUnit": 35.0,
      "key": "1-triangular-piece",
      "kind": "unit",
      "label": "1 triangular piece"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-half-circle",
      "kind": "unit",
      "label": "1 half circle"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-full-circle",
      "kind": "unit",
      "label": "1 full circle"
    }
  ],
  "name": "Quesadilla, with vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 187.0,
    "carbs_g": 29.2,
    "energy_kcal": 253.0,
    "fat_g": 11.3,
    "fibre_g": 2.2,
    "folate_ug": 60.0,
    "iron_mg": 2.06,
    "magnesium_mg": 19.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 187.0,
    "potassium_mg": 128.0,
    "protein_g": 8.14,
    "salt_g": 1.31,
    "sat_fat_g": 4.58,
    "sodium_mg": 524.0,
    "sugar_g": 3.1,
    "vitamin_a_ug": 47.0,
    "vitamin_c_mg": 17.8,
    "vitamin_e_mg": 0.68,
    "vitamin_k_ug": 7.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708594",
  "state": "Unspecified",
  "subcategory": "Other Mexican mixed dishes",
  "tags": [
    "other-mexican-mixed-dishes",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
