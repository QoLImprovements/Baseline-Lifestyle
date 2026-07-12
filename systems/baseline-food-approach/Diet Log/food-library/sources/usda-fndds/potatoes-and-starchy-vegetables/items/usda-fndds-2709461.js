/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "French fries and other fried white potatoes",
  "id": "usda-fndds-2709461",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-large-fast-food-order",
      "kind": "unit",
      "label": "1 large fast food order"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-kids-meal-order",
      "kind": "unit",
      "label": "1 kids meal order"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "1-wedge",
      "kind": "unit",
      "label": "1 wedge"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-crinkle-cut",
      "kind": "unit",
      "label": "1 crinkle cut"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-shoestring",
      "kind": "unit",
      "label": "1 shoestring"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-small-fast-food-order",
      "kind": "unit",
      "label": "1 small fast food order"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-straight-cut",
      "kind": "unit",
      "label": "1 straight cut"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-value-dollar-menu-order",
      "kind": "unit",
      "label": "1 value/dollar menu order"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-spiral-or-curly",
      "kind": "unit",
      "label": "1 spiral or curly"
    }
  ],
  "name": "Potato, french fries, fast food",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 41.4,
    "energy_kcal": 312.0,
    "fat_g": 14.7,
    "fibre_g": 3.8,
    "folate_ug": 30.0,
    "iron_mg": 0.81,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 125.0,
    "potassium_mg": 579.0,
    "protein_g": 3.43,
    "salt_g": 0.525,
    "sat_fat_g": 2.34,
    "sodium_mg": 210.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.7,
    "vitamin_e_mg": 1.67,
    "vitamin_k_ug": 11.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709461",
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
