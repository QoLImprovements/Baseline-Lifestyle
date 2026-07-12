/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2708055",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "1-puff-or-cheese-straw-5-long",
      "kind": "unit",
      "label": "1 puff or cheese straw (5\" long)"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    }
  ],
  "name": "Cheese pastry puffs",
  "nutritionPerBasis": {
    "calcium_mg": 121.0,
    "carbs_g": 13.4,
    "energy_kcal": 265.0,
    "fat_g": 19.5,
    "fibre_g": 0.4,
    "folate_ug": 35.0,
    "iron_mg": 1.38,
    "magnesium_mg": 13.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 134.0,
    "potassium_mg": 84.0,
    "protein_g": 9.3,
    "salt_g": 1.385,
    "sat_fat_g": 5.87,
    "sodium_mg": 554.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 212.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.7,
    "vitamin_k_ug": 14.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708055",
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
