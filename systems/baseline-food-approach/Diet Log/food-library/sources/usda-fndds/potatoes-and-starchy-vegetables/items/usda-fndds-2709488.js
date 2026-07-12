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
  "id": "usda-fndds-2709488",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "skin-from-1-small",
      "kind": "unit",
      "label": "Skin from 1 small"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "skin-from-1-medium",
      "kind": "unit",
      "label": "Skin from 1 medium"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "skin-from-1-large",
      "kind": "unit",
      "label": "Skin from 1 large"
    }
  ],
  "name": "Potato skins without topping",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 19.5,
    "energy_kcal": 151.0,
    "fat_g": 7.45,
    "fibre_g": 1.8,
    "folate_ug": 20.0,
    "iron_mg": 0.77,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 58.0,
    "potassium_mg": 445.0,
    "protein_g": 2.12,
    "salt_g": 0.9075,
    "sat_fat_g": 1.01,
    "sodium_mg": 363.0,
    "sugar_g": 1.25,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 9.8,
    "vitamin_e_mg": 1.43,
    "vitamin_k_ug": 8.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709488",
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
