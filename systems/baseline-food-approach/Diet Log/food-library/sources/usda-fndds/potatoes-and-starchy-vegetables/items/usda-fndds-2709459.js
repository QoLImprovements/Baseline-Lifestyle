/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-spiral-or-curly",
  "description": "French fries and other fried white potatoes",
  "id": "usda-fndds-2709459",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-spiral-or-curly",
      "kind": "unit",
      "label": "1 spiral or curly"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-waffle",
      "kind": "unit",
      "label": "1 waffle"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "1-wedge",
      "kind": "unit",
      "label": "1 wedge"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-oz-raw-yields",
      "kind": "unit",
      "label": "1 oz, raw, yields"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-fry-ns-as-to-shape",
      "kind": "unit",
      "label": "1 fry, NS as to shape"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-small-raw-yields",
      "kind": "unit",
      "label": "1 small, raw, yields"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-crinkle-cut",
      "kind": "unit",
      "label": "1 crinkle cut"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-large-raw-yields",
      "kind": "unit",
      "label": "1 large, raw, yields"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-medium-raw-yields",
      "kind": "unit",
      "label": "1 medium, raw, yields"
    }
  ],
  "name": "Potato, french fries, from fresh, baked",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 19.3,
    "energy_kcal": 166.0,
    "fat_g": 9.16,
    "fibre_g": 1.7,
    "folate_ug": 17.0,
    "iron_mg": 0.66,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 54.0,
    "potassium_mg": 419.0,
    "protein_g": 2.02,
    "salt_g": 0.3675,
    "sat_fat_g": 1.24,
    "sodium_mg": 147.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 10.1,
    "vitamin_e_mg": 1.76,
    "vitamin_k_ug": 10.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709459",
  "state": "Baked",
  "subcategory": "French fries and other fried white potatoes",
  "tags": [
    "baked",
    "french-fries-and-other-fried-white-potatoes",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
