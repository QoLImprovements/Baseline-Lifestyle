/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "1-pop-tart",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2708077",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 54.0,
      "key": "1-pop-tart",
      "kind": "unit",
      "label": "1 Pop Tart"
    },
    {
      "gramsPerUnit": 108.0,
      "key": "1-package-2-pop-tarts",
      "kind": "unit",
      "label": "1 package (2 Pop Tarts)"
    },
    {
      "gramsPerUnit": 54.0,
      "key": "1-tart",
      "kind": "unit",
      "label": "1 tart"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "1-crisp",
      "kind": "unit",
      "label": "1 crisp"
    }
  ],
  "name": "Breakfast tart",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 71.8,
    "energy_kcal": 385.0,
    "fat_g": 9.02,
    "fibre_g": 1.8,
    "folate_ug": 90.0,
    "iron_mg": 4.35,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 71.0,
    "potassium_mg": 86.0,
    "protein_g": 4.01,
    "salt_g": 0.7775,
    "sat_fat_g": 3.09,
    "sodium_mg": 311.0,
    "sugar_g": 31.0,
    "vitamin_a_ug": 202.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 19.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708077",
  "state": "Unspecified",
  "subcategory": "Doughnuts, sweet rolls, pastries",
  "tags": [
    "doughnuts-sweet-rolls-pastries",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
