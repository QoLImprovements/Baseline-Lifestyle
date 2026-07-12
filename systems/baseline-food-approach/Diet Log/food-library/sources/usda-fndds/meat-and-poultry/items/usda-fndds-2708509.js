/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Burritos and tacos",
  "id": "usda-fndds-2708509",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-small-taco-salad",
      "kind": "unit",
      "label": "1 small taco salad"
    },
    {
      "gramsPerUnit": 320.0,
      "key": "1-taco-salad-ns-as-to-size",
      "kind": "unit",
      "label": "1 taco salad, NS as to size"
    },
    {
      "gramsPerUnit": 400.0,
      "key": "1-large-taco-salad",
      "kind": "unit",
      "label": "1 large taco salad"
    },
    {
      "gramsPerUnit": 320.0,
      "key": "1-medium-taco-salad",
      "kind": "unit",
      "label": "1 medium taco salad"
    },
    {
      "gramsPerUnit": 122.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Taco or tostada salad with chicken",
  "nutritionPerBasis": {
    "calcium_mg": 82.0,
    "carbs_g": 16.3,
    "energy_kcal": 167.0,
    "fat_g": 8.02,
    "fibre_g": 2.8,
    "folate_ug": 40.0,
    "iron_mg": 1.59,
    "magnesium_mg": 20.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 127.0,
    "potassium_mg": 220.0,
    "protein_g": 7.83,
    "salt_g": 0.7875,
    "sat_fat_g": 2.28,
    "sodium_mg": 315.0,
    "sugar_g": 1.78,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 3.1,
    "vitamin_e_mg": 1.04,
    "vitamin_k_ug": 11.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708509",
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
