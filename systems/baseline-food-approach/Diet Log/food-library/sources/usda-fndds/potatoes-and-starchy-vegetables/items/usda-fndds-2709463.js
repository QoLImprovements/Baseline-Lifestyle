/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-cup",
  "description": "French fries and other fried white potatoes",
  "id": "usda-fndds-2709463",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-fry-ns-as-to-shape",
      "kind": "unit",
      "label": "1 fry, NS as to shape"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-crinkle-cut",
      "kind": "unit",
      "label": "1 crinkle cut"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-waffle",
      "kind": "unit",
      "label": "1 waffle"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-shoestring",
      "kind": "unit",
      "label": "1 shoestring"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-straight-cut",
      "kind": "unit",
      "label": "1 straight cut"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "1-wedge",
      "kind": "unit",
      "label": "1 wedge"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-spiral-or-curly",
      "kind": "unit",
      "label": "1 spiral or curly"
    }
  ],
  "name": "Potato, french fries, from frozen, fried",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 23.2,
    "energy_kcal": 225.0,
    "fat_g": 14.1,
    "fibre_g": 1.8,
    "folate_ug": 21.0,
    "iron_mg": 0.53,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 79.0,
    "potassium_mg": 435.0,
    "protein_g": 2.5,
    "salt_g": 0.7375,
    "sat_fat_g": 1.99,
    "sodium_mg": 295.0,
    "sugar_g": 0.34,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 7.8,
    "vitamin_e_mg": 2.08,
    "vitamin_k_ug": 15.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709463",
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
