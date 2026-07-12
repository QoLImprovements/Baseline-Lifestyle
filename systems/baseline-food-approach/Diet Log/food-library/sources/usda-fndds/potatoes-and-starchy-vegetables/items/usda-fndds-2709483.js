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
  "id": "usda-fndds-2709483",
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
    }
  ],
  "name": "Potato, hash brown, from fresh",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 18.6,
    "energy_kcal": 190.0,
    "fat_g": 12.3,
    "fibre_g": 1.6,
    "folate_ug": 16.0,
    "iron_mg": 0.64,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 52.0,
    "potassium_mg": 403.0,
    "protein_g": 1.94,
    "salt_g": 0.8575,
    "sat_fat_g": 1.65,
    "sodium_mg": 343.0,
    "sugar_g": 1.25,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 9.7,
    "vitamin_e_mg": 2.35,
    "vitamin_k_ug": 13.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709483",
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
