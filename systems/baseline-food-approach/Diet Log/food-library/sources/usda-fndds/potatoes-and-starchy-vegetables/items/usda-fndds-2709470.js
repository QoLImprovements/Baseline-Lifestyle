/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-fry-any-cut",
  "description": "French fries and other fried white potatoes",
  "id": "usda-fndds-2709470",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-fry-any-cut",
      "kind": "unit",
      "label": "1 fry, any cut"
    },
    {
      "gramsPerUnit": 124.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Potato, french fries, with chili and cheese",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 24.9,
    "energy_kcal": 221.0,
    "fat_g": 11.4,
    "fibre_g": 2.7,
    "folate_ug": 32.0,
    "iron_mg": 1.01,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 100.0,
    "potassium_mg": 358.0,
    "protein_g": 4.66,
    "salt_g": 0.9075,
    "sat_fat_g": 2.25,
    "sodium_mg": 363.0,
    "sugar_g": 0.59,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 3.8,
    "vitamin_e_mg": 1.43,
    "vitamin_k_ug": 9.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709470",
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
