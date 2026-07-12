/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "1-miniature",
  "description": "Olives, pickles, pickled vegetables",
  "id": "usda-fndds-2710078",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "1-stacker",
      "kind": "unit",
      "label": "1 stacker"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-half",
      "kind": "unit",
      "label": "1 half"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-spear",
      "kind": "unit",
      "label": "1 spear"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pickles, dill",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 1.99,
    "energy_kcal": 14.0,
    "fat_g": 0.43,
    "fibre_g": 1.0,
    "folate_ug": 8.0,
    "iron_mg": 0.23,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 16.0,
    "potassium_mg": 112.0,
    "protein_g": 0.48,
    "salt_g": 2.02,
    "sat_fat_g": 0.079,
    "sodium_mg": 808.0,
    "sugar_g": 1.28,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 2.1,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 16.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710078",
  "state": "Unspecified",
  "subcategory": "Olives, pickles, pickled vegetables",
  "tags": [
    "herbs-spices-and-seasonings",
    "olives-pickles-pickled-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
