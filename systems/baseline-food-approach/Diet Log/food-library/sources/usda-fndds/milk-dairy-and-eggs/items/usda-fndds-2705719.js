/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cheese",
  "id": "usda-fndds-2705719",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 134.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "1-package-8-oz",
      "kind": "unit",
      "label": "1 package (8 oz)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "1-box",
      "kind": "unit",
      "label": "1 box"
    }
  ],
  "name": "Cheese, Limburger",
  "nutritionPerBasis": {
    "calcium_mg": 497.0,
    "carbs_g": 0.49,
    "energy_kcal": 327.0,
    "fat_g": 27.2,
    "fibre_g": 0.0,
    "folate_ug": 58.0,
    "iron_mg": 0.13,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 393.0,
    "potassium_mg": 128.0,
    "protein_g": 20.0,
    "salt_g": 2.0,
    "sat_fat_g": 16.7,
    "sodium_mg": 800.0,
    "sugar_g": 0.49,
    "vitamin_a_ug": 340.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705719",
  "state": "Unspecified",
  "subcategory": "Cheese",
  "tags": [
    "cheese",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
