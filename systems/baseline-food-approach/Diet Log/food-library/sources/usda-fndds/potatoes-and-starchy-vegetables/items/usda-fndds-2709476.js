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
  "id": "usda-fndds-2709476",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-potato-any-size",
      "kind": "unit",
      "label": "1 potato, any size"
    }
  ],
  "name": "Potato, home fries, with vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 15.6,
    "energy_kcal": 173.0,
    "fat_g": 11.8,
    "fibre_g": 1.5,
    "folate_ug": 16.0,
    "iron_mg": 0.58,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 345.0,
    "protein_g": 1.72,
    "salt_g": 0.955,
    "sat_fat_g": 1.59,
    "sodium_mg": 382.0,
    "sugar_g": 1.84,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 22.1,
    "vitamin_e_mg": 2.31,
    "vitamin_k_ug": 13.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709476",
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
