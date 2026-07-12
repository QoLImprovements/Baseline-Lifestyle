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
  "id": "usda-fndds-2709481",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "1-patty",
      "kind": "unit",
      "label": "1 patty"
    }
  ],
  "name": "Potato, hash brown, from restaurant, with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 134.0,
    "carbs_g": 24.5,
    "energy_kcal": 295.0,
    "fat_g": 19.9,
    "fibre_g": 2.2,
    "folate_ug": 13.0,
    "iron_mg": 0.53,
    "magnesium_mg": 22.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 158.0,
    "potassium_mg": 309.0,
    "protein_g": 6.03,
    "salt_g": 1.4525,
    "sat_fat_g": 5.32,
    "sodium_mg": 581.0,
    "sugar_g": 0.52,
    "vitamin_a_ug": 53.0,
    "vitamin_c_mg": 4.5,
    "vitamin_e_mg": 2.31,
    "vitamin_k_ug": 8.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709481",
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
