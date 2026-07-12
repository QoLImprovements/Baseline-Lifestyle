/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-small-taco-salad",
  "description": "Burritos and tacos",
  "id": "usda-fndds-2708508",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 237.0,
      "key": "1-small-taco-salad",
      "kind": "unit",
      "label": "1 small taco salad"
    },
    {
      "gramsPerUnit": 122.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 315.0,
      "key": "1-medium-taco-salad",
      "kind": "unit",
      "label": "1 medium taco salad"
    },
    {
      "gramsPerUnit": 393.0,
      "key": "1-large-taco-salad",
      "kind": "unit",
      "label": "1 large taco salad"
    },
    {
      "gramsPerUnit": 315.0,
      "key": "1-taco-salad-ns-as-to-size",
      "kind": "unit",
      "label": "1 taco salad, NS as to size"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 420.0,
      "key": "1-taco-bell-taco-salad",
      "kind": "unit",
      "label": "1 Taco Bell taco salad"
    }
  ],
  "name": "Taco or tostada salad with meat",
  "nutritionPerBasis": {
    "calcium_mg": 84.0,
    "carbs_g": 16.5,
    "energy_kcal": 179.0,
    "fat_g": 9.32,
    "fibre_g": 2.9,
    "folate_ug": 41.0,
    "iron_mg": 1.82,
    "magnesium_mg": 20.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 120.0,
    "potassium_mg": 222.0,
    "protein_g": 7.45,
    "salt_g": 0.7975,
    "sat_fat_g": 2.89,
    "sodium_mg": 319.0,
    "sugar_g": 1.8,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 3.1,
    "vitamin_e_mg": 1.01,
    "vitamin_k_ug": 11.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708508",
  "state": "Unspecified",
  "subcategory": "Burritos and tacos",
  "tags": [
    "burritos-and-tacos",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
