/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-small",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2708060",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 53.0,
      "key": "1-toaster-strudel",
      "kind": "unit",
      "label": "1 Toaster Strudel"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 6.5,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    }
  ],
  "name": "Danish pastry, with fruit",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 47.8,
    "energy_kcal": 371.0,
    "fat_g": 18.5,
    "fibre_g": 1.9,
    "folate_ug": 47.0,
    "iron_mg": 1.77,
    "magnesium_mg": 15.0,
    "omega3_g": 0.031,
    "phosphorus_mg": 89.0,
    "potassium_mg": 83.0,
    "protein_g": 5.4,
    "salt_g": 1.1125,
    "sat_fat_g": 4.86,
    "sodium_mg": 445.0,
    "sugar_g": 27.5,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 3.9,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 5.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708060",
  "state": "Unspecified",
  "subcategory": "Doughnuts, sweet rolls, pastries",
  "tags": [
    "doughnuts-sweet-rolls-pastries",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
