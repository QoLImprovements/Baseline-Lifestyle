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
  "id": "usda-fndds-2709487",
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
  "name": "Potato, hash brown, ready-to-heat, with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 131.0,
    "carbs_g": 24.0,
    "energy_kcal": 249.0,
    "fat_g": 15.2,
    "fibre_g": 2.6,
    "folate_ug": 17.0,
    "iron_mg": 0.47,
    "magnesium_mg": 28.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 141.0,
    "potassium_mg": 423.0,
    "protein_g": 6.04,
    "salt_g": 1.1,
    "sat_fat_g": 3.94,
    "sodium_mg": 440.0,
    "sugar_g": 0.28,
    "vitamin_a_ug": 52.0,
    "vitamin_c_mg": 5.5,
    "vitamin_e_mg": 1.93,
    "vitamin_k_ug": 15.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709487",
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
