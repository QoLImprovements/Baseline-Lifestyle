/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2708081",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 6.5,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 568.0,
      "key": "1-cake-8-square",
      "kind": "unit",
      "label": "1 cake (8\" square)"
    }
  ],
  "name": "Coffee cake, crumb or quick-bread type, cheese-filled",
  "nutritionPerBasis": {
    "calcium_mg": 150.0,
    "carbs_g": 45.1,
    "energy_kcal": 365.0,
    "fat_g": 17.6,
    "fibre_g": 1.2,
    "folate_ug": 42.0,
    "iron_mg": 1.93,
    "magnesium_mg": 25.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 144.0,
    "potassium_mg": 150.0,
    "protein_g": 6.8,
    "salt_g": 0.7275,
    "sat_fat_g": 7.01,
    "sodium_mg": 291.0,
    "sugar_g": 22.9,
    "vitamin_a_ug": 126.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708081",
  "state": "Unspecified",
  "subcategory": "Doughnuts, sweet rolls, pastries",
  "tags": [
    "doughnuts-sweet-rolls-pastries",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
