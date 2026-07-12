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
  "id": "usda-fndds-2708041",
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
  "name": "Strudel, cherry",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 40.7,
    "energy_kcal": 296.0,
    "fat_g": 14.1,
    "fibre_g": 1.0,
    "folate_ug": 28.0,
    "iron_mg": 0.35,
    "magnesium_mg": 9.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 30.0,
    "potassium_mg": 89.0,
    "protein_g": 2.22,
    "salt_g": 0.3275,
    "sat_fat_g": 7.61,
    "sodium_mg": 131.0,
    "sugar_g": 24.8,
    "vitamin_a_ug": 129.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708041",
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
