/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-waffle",
  "description": "French fries and other fried white potatoes",
  "id": "usda-fndds-2709458",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-waffle",
      "kind": "unit",
      "label": "1 waffle"
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
      "gramsPerUnit": 2.0,
      "key": "1-shoestring",
      "kind": "unit",
      "label": "1 shoestring"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-spiral-or-curly",
      "kind": "unit",
      "label": "1 spiral or curly"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-crinkle-cut",
      "kind": "unit",
      "label": "1 crinkle cut"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "1-wedge",
      "kind": "unit",
      "label": "1 wedge"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-medium-raw-yields",
      "kind": "unit",
      "label": "1 medium, raw, yields"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-straight-cut",
      "kind": "unit",
      "label": "1 straight cut"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Potato, french fries, from fresh, fried",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 18.5,
    "energy_kcal": 198.0,
    "fat_g": 13.1,
    "fibre_g": 1.6,
    "folate_ug": 16.0,
    "iron_mg": 0.64,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 52.0,
    "potassium_mg": 401.0,
    "protein_g": 1.93,
    "salt_g": 0.3525,
    "sat_fat_g": 1.76,
    "sodium_mg": 141.0,
    "sugar_g": 1.25,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 9.7,
    "vitamin_e_mg": 2.5,
    "vitamin_k_ug": 14.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709458",
  "state": "Fried",
  "subcategory": "French fries and other fried white potatoes",
  "tags": [
    "french-fries-and-other-fried-white-potatoes",
    "fried",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
