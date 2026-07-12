/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-crinkle-cut",
  "description": "French fries and other fried white potatoes",
  "id": "usda-fndds-2709462",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-crinkle-cut",
      "kind": "unit",
      "label": "1 crinkle cut"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-value-dollar-menu-order",
      "kind": "unit",
      "label": "1 value/dollar menu order"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "1-medium-fast-food-order",
      "kind": "unit",
      "label": "1 medium fast food order"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-straight-cut",
      "kind": "unit",
      "label": "1 straight cut"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-fry-ns-as-to-shape",
      "kind": "unit",
      "label": "1 fry, NS as to shape"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "1-wedge",
      "kind": "unit",
      "label": "1 wedge"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-waffle",
      "kind": "unit",
      "label": "1 waffle"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-spiral-or-curly",
      "kind": "unit",
      "label": "1 spiral or curly"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-kids-meal-order",
      "kind": "unit",
      "label": "1 kids meal order"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-small-fast-food-order",
      "kind": "unit",
      "label": "1 small fast food order"
    }
  ],
  "name": "Potato, french fries, restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 37.2,
    "energy_kcal": 289.0,
    "fat_g": 14.0,
    "fibre_g": 3.9,
    "folate_ug": 15.0,
    "iron_mg": 0.91,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 124.0,
    "potassium_mg": 545.0,
    "protein_g": 3.49,
    "salt_g": 0.8925,
    "sat_fat_g": 2.49,
    "sodium_mg": 357.0,
    "sugar_g": 0.28,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 1.0,
    "vitamin_k_ug": 35.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709462",
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
