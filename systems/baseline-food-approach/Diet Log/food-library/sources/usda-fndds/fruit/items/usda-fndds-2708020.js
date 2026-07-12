/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-cup",
  "description": "Cakes and pies",
  "id": "usda-fndds-2708020",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cobbler, berry",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 36.2,
    "energy_kcal": 231.0,
    "fat_g": 8.86,
    "fibre_g": 4.0,
    "folate_ug": 41.0,
    "iron_mg": 1.32,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 43.0,
    "potassium_mg": 118.0,
    "protein_g": 2.66,
    "salt_g": 0.4475,
    "sat_fat_g": 2.79,
    "sodium_mg": 179.0,
    "sugar_g": 17.6,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 0.86,
    "vitamin_k_ug": 14.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708020",
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
