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
  "id": "usda-fndds-2709514",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Potato tots, from fresh, fried or baked",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 24.4,
    "energy_kcal": 237.0,
    "fat_g": 15.5,
    "fibre_g": 2.3,
    "folate_ug": 16.0,
    "iron_mg": 0.47,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 63.0,
    "potassium_mg": 243.0,
    "protein_g": 1.9,
    "salt_g": 1.0525,
    "sat_fat_g": 2.32,
    "sodium_mg": 421.0,
    "sugar_g": 0.28,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 6.4,
    "vitamin_e_mg": 1.42,
    "vitamin_k_ug": 9.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709514",
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
