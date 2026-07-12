/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cubic-inch",
  "description": "Cheese",
  "id": "usda-fndds-2705774",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 17.5,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz",
      "kind": "unit",
      "label": "1 oz"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cheese spread, Swiss cheese base",
  "nutritionPerBasis": {
    "calcium_mg": 562.0,
    "carbs_g": 8.73,
    "energy_kcal": 290.0,
    "fat_g": 21.2,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.33,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 875.0,
    "potassium_mg": 242.0,
    "protein_g": 16.4,
    "salt_g": 4.05,
    "sat_fat_g": 13.3,
    "sodium_mg": 1620.0,
    "sugar_g": 7.32,
    "vitamin_a_ug": 173.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705774",
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
