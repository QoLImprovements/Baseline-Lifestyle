/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "skin-from-1-small",
  "description": "French fries and other fried white potatoes",
  "id": "usda-fndds-2709490",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "skin-from-1-small",
      "kind": "unit",
      "label": "Skin from 1 small"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "skin-from-1-medium",
      "kind": "unit",
      "label": "Skin from 1 medium"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "skin-from-1-large",
      "kind": "unit",
      "label": "Skin from 1 large"
    }
  ],
  "name": "Potato skins, with cheese and bacon",
  "nutritionPerBasis": {
    "calcium_mg": 134.0,
    "carbs_g": 15.5,
    "energy_kcal": 215.0,
    "fat_g": 13.7,
    "fibre_g": 1.4,
    "folate_ug": 18.0,
    "iron_mg": 0.67,
    "magnesium_mg": 25.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 147.0,
    "potassium_mg": 383.0,
    "protein_g": 7.64,
    "salt_g": 1.22,
    "sat_fat_g": 4.83,
    "sodium_mg": 488.0,
    "sugar_g": 1.02,
    "vitamin_a_ug": 57.0,
    "vitamin_c_mg": 7.5,
    "vitamin_e_mg": 1.25,
    "vitamin_k_ug": 7.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709490",
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
