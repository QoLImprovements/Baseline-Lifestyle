/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "1-piece",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709842",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-spear",
      "kind": "unit",
      "label": "1 spear"
    },
    {
      "gramsPerUnit": 93.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Asparagus, fresh, cooked with butter or margarine",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 4.05,
    "energy_kcal": 42.0,
    "fat_g": 2.48,
    "fibre_g": 2.2,
    "folate_ug": 46.0,
    "iron_mg": 2.23,
    "magnesium_mg": 15.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 55.0,
    "potassium_mg": 211.0,
    "protein_g": 2.31,
    "salt_g": 0.3525,
    "sat_fat_g": 1.06,
    "sodium_mg": 141.0,
    "sugar_g": 1.97,
    "vitamin_a_ug": 62.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 1.4,
    "vitamin_k_ug": 44.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709842",
  "state": "Cooked",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "cooked",
    "oils-and-fats",
    "other-vegetables-and-combinations"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
