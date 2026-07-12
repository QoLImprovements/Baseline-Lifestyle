/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-cake-9-square",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2708080",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 785.0,
      "key": "1-cake-9-square",
      "kind": "unit",
      "label": "1 cake (9\" square)"
    },
    {
      "gramsPerUnit": 6.5,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 568.0,
      "key": "1-cake-8-square",
      "kind": "unit",
      "label": "1 cake (8\" square)"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    }
  ],
  "name": "Coffee cake, crumb or quick-bread type, with fruit",
  "nutritionPerBasis": {
    "calcium_mg": 87.0,
    "carbs_g": 50.2,
    "energy_kcal": 322.0,
    "fat_g": 11.8,
    "fibre_g": 1.2,
    "folate_ug": 30.0,
    "iron_mg": 1.44,
    "magnesium_mg": 17.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 90.0,
    "potassium_mg": 105.0,
    "protein_g": 4.2,
    "salt_g": 0.5075,
    "sat_fat_g": 4.38,
    "sodium_mg": 203.0,
    "sugar_g": 33.8,
    "vitamin_a_ug": 79.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708080",
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
