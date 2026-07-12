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
  "id": "usda-fndds-2708026",
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
  "name": "Crisp, berry",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 32.8,
    "energy_kcal": 228.0,
    "fat_g": 9.78,
    "fibre_g": 5.0,
    "folate_ug": 27.0,
    "iron_mg": 1.34,
    "magnesium_mg": 41.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 102.0,
    "potassium_mg": 158.0,
    "protein_g": 3.41,
    "salt_g": 0.2975,
    "sat_fat_g": 4.78,
    "sodium_mg": 119.0,
    "sugar_g": 16.6,
    "vitamin_a_ug": 79.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 0.78,
    "vitamin_k_ug": 12.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708026",
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
