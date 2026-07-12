/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-piece",
  "description": "French fries and other fried white potatoes",
  "id": "usda-fndds-2709515",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Potato tots, frozen, baked",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 26.1,
    "energy_kcal": 187.0,
    "fat_g": 9.17,
    "fibre_g": 2.4,
    "folate_ug": 17.0,
    "iron_mg": 0.5,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 67.0,
    "potassium_mg": 260.0,
    "protein_g": 2.03,
    "salt_g": 1.1275,
    "sat_fat_g": 1.49,
    "sodium_mg": 451.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 6.9,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709515",
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
