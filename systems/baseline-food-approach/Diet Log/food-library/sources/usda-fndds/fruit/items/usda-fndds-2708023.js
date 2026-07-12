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
  "id": "usda-fndds-2708023",
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
  "name": "Crisp, apple",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 30.2,
    "energy_kcal": 215.0,
    "fat_g": 9.59,
    "fibre_g": 2.7,
    "folate_ug": 9.0,
    "iron_mg": 1.0,
    "magnesium_mg": 30.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 87.0,
    "potassium_mg": 119.0,
    "protein_g": 2.81,
    "salt_g": 0.2975,
    "sat_fat_g": 4.77,
    "sodium_mg": 119.0,
    "sugar_g": 15.8,
    "vitamin_a_ug": 76.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708023",
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
