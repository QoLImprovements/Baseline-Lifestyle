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
  "id": "usda-fndds-2709484",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Potato, hash brown, from fresh, with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 113.0,
    "carbs_g": 16.2,
    "energy_kcal": 223.0,
    "fat_g": 15.5,
    "fibre_g": 1.4,
    "folate_ug": 17.0,
    "iron_mg": 0.57,
    "magnesium_mg": 24.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 112.0,
    "potassium_mg": 354.0,
    "protein_g": 5.1,
    "salt_g": 0.9725,
    "sat_fat_g": 4.25,
    "sodium_mg": 389.0,
    "sugar_g": 1.12,
    "vitamin_a_ug": 47.0,
    "vitamin_c_mg": 8.3,
    "vitamin_e_mg": 2.11,
    "vitamin_k_ug": 11.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709484",
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
