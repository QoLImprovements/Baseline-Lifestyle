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
  "id": "usda-fndds-2709512",
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
      "gramsPerUnit": 130.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-fast-food-order",
      "kind": "unit",
      "label": "1 fast food order"
    }
  ],
  "name": "Potato tots, fast food / restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 24.3,
    "energy_kcal": 236.0,
    "fat_g": 15.4,
    "fibre_g": 2.3,
    "folate_ug": 16.0,
    "iron_mg": 0.46,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 63.0,
    "potassium_mg": 242.0,
    "protein_g": 1.89,
    "salt_g": 1.4275,
    "sat_fat_g": 3.63,
    "sodium_mg": 571.0,
    "sugar_g": 0.27,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 6.4,
    "vitamin_e_mg": 0.83,
    "vitamin_k_ug": 13.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709512",
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
