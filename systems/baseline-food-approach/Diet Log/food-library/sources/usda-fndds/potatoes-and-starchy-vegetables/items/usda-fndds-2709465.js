/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-value-dollar-menu-order",
  "description": "French fries and other fried white potatoes",
  "id": "usda-fndds-2709465",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-value-dollar-menu-order",
      "kind": "unit",
      "label": "1 value/dollar menu order"
    },
    {
      "gramsPerUnit": 276.0,
      "key": "1-large-fast-food-order",
      "kind": "unit",
      "label": "1 large fast food order"
    },
    {
      "gramsPerUnit": 169.0,
      "key": "1-small-fast-food-order",
      "kind": "unit",
      "label": "1 small fast food order"
    },
    {
      "gramsPerUnit": 222.0,
      "key": "1-medium-fast-food-order",
      "kind": "unit",
      "label": "1 medium fast food order"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 107.0,
      "key": "1-kids-meal-order",
      "kind": "unit",
      "label": "1 kids meal order"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-fry-any-cut",
      "kind": "unit",
      "label": "1 fry, any cut"
    }
  ],
  "name": "Potato, french fries, with cheese, fast food / restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 29.8,
    "energy_kcal": 260.0,
    "fat_g": 14.2,
    "fibre_g": 2.6,
    "folate_ug": 25.0,
    "iron_mg": 0.72,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 101.0,
    "potassium_mg": 387.0,
    "protein_g": 3.33,
    "salt_g": 0.9125,
    "sat_fat_g": 2.6,
    "sodium_mg": 365.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 3.1,
    "vitamin_e_mg": 1.78,
    "vitamin_k_ug": 11.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709465",
  "state": "Unspecified",
  "subcategory": "French fries and other fried white potatoes",
  "tags": [
    "french-fries-and-other-fried-white-potatoes",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
