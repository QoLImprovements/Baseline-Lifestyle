/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-cubic-inch",
  "description": "Cakes and pies",
  "id": "usda-fndds-2708043",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.5,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Strudel, peach",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 36.7,
    "energy_kcal": 281.0,
    "fat_g": 14.1,
    "fibre_g": 0.9,
    "folate_ug": 28.0,
    "iron_mg": 0.37,
    "magnesium_mg": 8.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 29.0,
    "potassium_mg": 98.0,
    "protein_g": 2.09,
    "salt_g": 0.3325,
    "sat_fat_g": 7.61,
    "sodium_mg": 133.0,
    "sugar_g": 20.9,
    "vitamin_a_ug": 137.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708043",
  "state": "Unspecified",
  "subcategory": "Cakes and pies",
  "tags": [
    "cakes-and-pies",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
