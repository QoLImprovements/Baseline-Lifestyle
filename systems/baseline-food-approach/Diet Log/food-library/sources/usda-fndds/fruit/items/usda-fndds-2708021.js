/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cakes and pies",
  "id": "usda-fndds-2708021",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Cobbler, cherry",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 38.1,
    "energy_kcal": 237.0,
    "fat_g": 8.69,
    "fibre_g": 1.8,
    "folate_ug": 23.0,
    "iron_mg": 1.04,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 107.0,
    "protein_g": 2.37,
    "salt_g": 0.4475,
    "sat_fat_g": 2.8,
    "sodium_mg": 179.0,
    "sugar_g": 21.7,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 3.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708021",
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
