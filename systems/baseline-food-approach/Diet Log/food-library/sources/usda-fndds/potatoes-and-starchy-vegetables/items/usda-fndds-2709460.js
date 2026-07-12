/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-straight-cut",
  "description": "French fries and other fried white potatoes",
  "id": "usda-fndds-2709460",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-straight-cut",
      "kind": "unit",
      "label": "1 straight cut"
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
      "gramsPerUnit": 5.0,
      "key": "1-crinkle-cut",
      "kind": "unit",
      "label": "1 crinkle cut"
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
      "gramsPerUnit": 2.0,
      "key": "1-shoestring",
      "kind": "unit",
      "label": "1 shoestring"
    }
  ],
  "name": "Potato, french fries, from frozen, baked",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 25.6,
    "energy_kcal": 158.0,
    "fat_g": 5.48,
    "fibre_g": 2.0,
    "folate_ug": 23.0,
    "iron_mg": 0.57,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 87.0,
    "potassium_mg": 478.0,
    "protein_g": 2.75,
    "salt_g": 0.81,
    "sat_fat_g": 0.848,
    "sodium_mg": 324.0,
    "sugar_g": 0.37,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 8.6,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 7.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709460",
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
