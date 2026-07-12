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
  "id": "usda-fndds-2709471",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-fry-any-cut",
      "kind": "unit",
      "label": "1 fry, any cut"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Potato, french fries, with chili",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 30.8,
    "energy_kcal": 241.0,
    "fat_g": 10.8,
    "fibre_g": 3.6,
    "folate_ug": 38.0,
    "iron_mg": 1.17,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 116.0,
    "potassium_mg": 473.0,
    "protein_g": 5.2,
    "salt_g": 0.6525,
    "sat_fat_g": 1.96,
    "sodium_mg": 261.0,
    "sugar_g": 0.69,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 5.2,
    "vitamin_e_mg": 1.24,
    "vitamin_k_ug": 8.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709471",
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
